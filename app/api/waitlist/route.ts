import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdgem8a7F2Drjh58jRZk5ZSmJsYvX_L_oEwM9F1Y3-FyvWdiA/formResponse';
const GOOGLE_FORM_EMAIL_ENTRY = 'entry.1576778805';

async function getGoogleSheetsClient() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: GOOGLE_PRIVATE_KEY,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
}

async function checkEmailExists(email: string): Promise<boolean> {
    try {
        const sheets = await getGoogleSheetsClient();

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: GOOGLE_SHEET_ID,
            range: 'B:B',
        });

        const rows = response.data.values || [];

        const emailLower = email.toLowerCase().trim();

        for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i][0];
            if (cellValue && typeof cellValue === 'string' && cellValue.toLowerCase().trim() === emailLower) {
                return true;
            }
        }

        return false;
    } catch (error) {
        console.error('Error checking email in sheet:', error);
        throw new Error('Failed to check email in database');
    }
}

async function submitToGoogleForm(email: string): Promise<boolean> {
    try {
        const formData = new URLSearchParams();
        formData.append(GOOGLE_FORM_EMAIL_ENTRY, email);

        const response = await fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.ok || response.status === 200;
    } catch (error) {
        console.error('Error submitting to Google Form:', error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        const emailExists = await checkEmailExists(email);

        if (emailExists) {
            return NextResponse.json(
                {
                    message: "You're already on the waitlist!",
                    alreadyExists: true
                },
                { status: 200 }
            );
        }

        const submitted = await submitToGoogleForm(email);

        if (!submitted) {
            return NextResponse.json(
                { error: 'Failed to join waitlist. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: "You're on the waitlist! We'll be in touch soon.",
                alreadyExists: false
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Waitlist API error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}