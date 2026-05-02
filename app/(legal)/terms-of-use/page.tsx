import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Terms of Use | Forj',
    description: 'Terms of Use for Forj Dating App.',
}

const sections = [
    {
        number: 1,
        title: 'ACCEPTANCE OF TERMS AND CONTRACT FORMATION',
        subsections: [
            {
                id: '1.1',
                title: 'Binding Agreement',
                content: 'These Terms constitute a legally binding agreement between you and Forj Technology Ltd ("Forj," "we," "us," or "our"). By accessing, downloading, registering for, browsing, subscribing to, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and by any additional guidelines, policies, or disclosures that are incorporated by reference, including our Privacy Policy, Community Guidelines, and any purchase terms shown at checkout.',
            },
            {
                id: '1.2',
                title: 'Who Is Bound',
                content: 'These Terms apply to all users, including visitors, registered users, subscribers, purchasers, and any person who accesses the Service through an account, device, or integration controlled by you.',
            },
            {
                id: '1.3',
                title: 'Do Not Use If You Do Not Agree',
                content: 'If you do not agree to these Terms, you must not access or use the Service. Continued use of the Service after any update to these Terms constitutes acceptance of the revised Terms to the extent permitted by law.',
            },
            {
                id: '1.4',
                title: 'Electronic Consent',
                content: 'You consent to enter into this agreement electronically and to receive all notices, disclosures, records, and communications from us in electronic form.',
            },
        ],
    },
    {
        number: 2,
        title: 'ELIGIBILITY',
        subsections: [
            {
                id: '2.1',
                title: 'Minimum Age',
                content: 'You must be at least eighteen (18) years old to create an account or use the Service. Use by minors is strictly prohibited.',
            },
            {
                id: '2.2',
                title: 'Legal Capacity',
                content: 'You represent and warrant that you have the legal right, capacity, and authority to enter into these Terms and to comply with all obligations stated herein.',
            },
            {
                id: '2.3',
                title: 'Restricted Persons',
                content: 'You may not use the Service if you are barred from doing so under applicable law, are subject to sanctions or export restrictions that prohibit use, have previously been suspended or removed from the Service, or are required to register as a sex offender where such use is prohibited by law.',
            },
            {
                id: '2.4',
                title: 'Accuracy of Representations',
                content: 'You agree that all eligibility statements you make to us are truthful and complete and that we may suspend or terminate access if we reasonably believe any representation is inaccurate, misleading, outdated, or incomplete and shall hold Us harmless for any loss arising from such inaccurate, false, and outdated information.',
            },
        ],
    },
    {
        number: 3,
        title: 'ACCOUNT REGISTRATION, SECURITY, AND VERIFICATION',
        subsections: [
            {
                id: '3.1',
                title: 'Registration Data',
                content: 'To use core features of the Service, you may be required to create an account and provide certain information, such as your name, date of birth, email address, payment details, photographs, profile content, profession-related details, and other requested information. You agree to provide accurate, current, and complete information and to update it as needed.',
            },
            {
                id: '3.2',
                title: 'Credentials and Access',
                content: 'You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs through your account, whether or not authorized by you. You must promptly notify us if you suspect unauthorized access, loss of credentials, or any security breach affecting your account.',
            },
            {
                id: '3.3',
                title: 'One Account Rule',
                content: 'Unless we expressly permit otherwise, you may maintain only one active personal account at a time. Creating multiple accounts to evade enforcement, manipulate matching, test visibility, or circumvent subscription limits is strictly prohibited.',
            },
            {
                id: '3.4',
                title: 'Verification',
                content: 'We may, but are not obligated to, offer identity verification, photo verification, profile review, or other trust-and-safety processes. Any verification indicator means only that a specific verification step was completed, not that we endorse a user, guarantee a user\'s identity, or certify a user\'s intentions, character, criminal history, professional standing, or offline conduct.',
            },
            {
                id: '3.5',
                title: 'No Duty to Screen',
                content: 'You understand that Forj does not guarantee background screening, criminal record checks, employment verification, education verification, licensure verification, or continuous monitoring of any user.',
            },
        ],
    },
    {
        number: 4,
        title: 'NATURE OF THE SERVICE',
        subsections: [
            {
                id: '4.1',
                title: 'Platform Role',
                content: 'Forj is an online platform that enables users to create profiles, discover other users, exchange communications, and access relationship-oriented or networking-oriented features. We do not broker marriages, arrange dates, guarantee introductions, or act as the agent, representative, or fiduciary of any user.',
            },
            {
                id: '4.2',
                title: 'No Guaranteed Outcome',
                content: 'We do not guarantee matches, compatibility, chemistry, response rates, message delivery success, date attendance, relationship outcomes, marriage, friendship, safety, authenticity, or any other result from use of the Service.',
            },
            {
                id: '4.3',
                title: 'Evolving Features',
                content: 'We may add, remove, modify, suspend, or discontinue any feature, pricing tier, functionality, availability region, messaging rule, discovery tool, or account control at any time, with or without notice, subject to applicable law.',
            },
        ],
    },
    {
        number: 5,
        title: 'SUBSCRIPTION SERVICES, BILLING, AUTO-RENEWAL, AND NO-REFUND POLICY',
        subsections: [
            {
                id: '5.1',
                title: 'Paid Membership Model',
                content: 'The Service may operate in whole or in part as a paid subscription offering. Certain features may be available only to paying subscribers or purchasers of specific plans, boosts, visibility features, premium filters, read receipts, or other digital services that are currently available or may be added in future.',
            },
            {
                id: '5.2',
                title: 'Billing Authorization',
                content: 'By purchasing a subscription or paid feature, you authorize Forj or the applicable app store, payment processor, or third-party billing partner to charge your selected payment method for all fees, taxes, and recurring renewal charges that become due.',
            },
            {
                id: '5.3',
                title: 'Auto-Renewal',
                content: 'Unless otherwise disclosed, subscriptions automatically renew for the same billing period as the initial term at the then-current rate, unless canceled before the renewal time in the manner described in your account settings, app store settings, or checkout flow.',
            },
            {
                id: '5.4',
                title: 'Strict No-Refund Policy',
                content: 'All purchases are final. To the fullest extent permitted by applicable law, Forj maintains a strict no-refund, no-credit, and no-proration policy. This means that, except where a refund right cannot legally be waived, you will not receive a refund, credit, partial refund, or prorated adjustment for unused time, partial billing periods, dissatisfaction, reduced usage, accidental purchase, deletion of the application, failure to cancel before renewal, suspension, restriction, moderation action, or termination of your account.',
            },
            {
                id: '5.5',
                title: 'Taxes and Currency',
                content: 'You are responsible for applicable taxes, duties, levies, exchange fees, bank fees, and similar charges associated with your purchase. Pricing may be displayed in local or converted currency for convenience; final settlement may vary based on your provider.',
            },
            {
                id: '5.6',
                title: 'Chargebacks and Payment Disputes',
                content: 'If you initiate a chargeback, payment reversal, or disputed-payment claim, we may suspend or terminate your account, revoke access to paid benefits, and pursue recovery to the extent permitted by law. We may also provide relevant transactional and account-use evidence to payment processors or dispute-resolution bodies.',
            },
            {
                id: '5.7',
                title: 'Promotions',
                content: 'Promotional pricing, coupons, trials, or introductory offers are discretionary when offered, may be time-limited, may be restricted by geography or eligibility, and may be modified or withdrawn at any time. Unless explicitly stated, promotional offers do not create a continuing right to future discounted pricing.',
            },
        ],
    },
    {
        number: 6,
        title: 'USER CONTENT AND LICENSE',
        subsections: [
            {
                id: '6.1',
                title: 'User Content Defined',
                content: '"User Content" means any information, text, photographs, videos, audio, profile data, prompts, messages, comments, reactions, testimonials, endorsements, biographical statements, and other material that you upload, submit, display, publish, transmit, or otherwise make available through the Service.',
            },
            {
                id: '6.2',
                title: 'Ownership',
                content: 'As between you and Forj, you retain ownership of your User Content, subject to the rights you grant to us in these Terms. Provided that testimonials and reviews provided by you on Google Play Store, App Store and social media are ours and may be used by us for promotional purposes.',
            },
            {
                id: '6.3',
                title: 'License to Forj',
                content: 'You grant Forj a worldwide, non-exclusive, sublicensable, transferable, royalty-free license to host, store, reproduce, display, perform, publish, modify for formatting purposes, adapt, distribute, and otherwise use your User Content as necessary to operate, maintain, improve, secure, market, promote, and provide the Service, including fraud prevention, moderation, customer support, analytics, and legal compliance.',
            },
            {
                id: '6.4',
                title: 'Duration of License',
                content: 'The license to User Content continues for as long as reasonably necessary for the purposes described above and may survive account deletion for backup, legal, evidentiary, fraud-prevention, trust-and-safety, enforcement, dispute-resolution, and archival purposes, subject to applicable law and our retention practices.',
            },
            {
                id: '6.5',
                title: 'User Content Representations',
                content: 'You represent and warrant that you own or control all rights needed to submit your User Content, that your content is accurate as presented, and that your content and our authorized use of it will not violate law or infringe, misappropriate, or otherwise violate the rights of any third party.',
            },
            {
                id: '6.6',
                title: 'Monitoring and Removal',
                content: 'We may, but are not obligated to, monitor, review, screen, remove, edit, limit, age-gate, blur, demote, or refuse any User Content at our sole discretion.',
            },
        ],
    },
    {
        number: 7,
        title: 'ACCEPTABLE USE AND PROHIBITED CONDUCT',
        subsections: [
            {
                id: '7.1',
                title: 'Respectful Use',
                content: 'You agree to use the Service lawfully, respectfully, and only for its intended purposes.',
            },
            {
                id: '7.2',
                title: 'Prohibited Conduct',
                content: 'You must not: harass, threaten, assault, extort, blackmail, stalk, intimidate, or defame another person; post false, misleading, or impersonating profile information; solicit money, loans, investments, sex, cryptocurrency, gifts, or financial assistance; engage in romance scams or catfishing; collect personal information of other users without authorization; upload pornography, exploitative content, or unlawful sexual content; promote hate speech, violence, terrorism, trafficking, or self-harm; use bots, scripts, scrapers, automation, or unauthorized third-party tools; reverse engineer or interfere with the Service; transmit malware or harmful code; engage in commercial advertising or lead generation without authorization; or use the Service in a manner that violates law or the rights of others.',
            },
            {
                id: '7.3',
                title: 'Off-Platform Misconduct',
                content: 'We may investigate and act on reports of conduct occurring outside the Service where that conduct affects user safety, trust, reputation, or the integrity of the platform. However, our investigation and subsequent actions are not substitute or equivalent to that of appropriate law enforcement in the jurisdiction you reside.',
            },
            {
                id: '7.4',
                title: 'Enforcement',
                content: 'Violations may result in content removal, warning, restriction, shadow limitation, suspension, permanent termination, referral to law enforcement, civil action, preservation of evidence, or any combination of these actions, without refund.',
            },
        ],
    },
    {
        number: 8,
        title: 'SAFETY, MEETINGS, AND USER INTERACTIONS',
        subsections: [
            {
                id: '8.1',
                title: 'User Risk',
                content: 'You are solely responsible for your interactions with other users. Any online or offline contact, communication, meeting, exchange of property, transportation arrangement, sexual activity, financial interaction, or other engagement with another user is undertaken entirely at your own risk and we shall not be liable for any loss or damage arising therefrom.',
            },
            {
                id: '8.2',
                title: 'No Guarantee of Safety',
                content: 'Forj is not a law enforcement agency and does not guarantee that any user is safe, truthful, honest, respectful, disease-free, professionally qualified, emotionally stable, or free from criminal history. Even where a user appears verified, that does not eliminate risk. You have the sole responsibility to verify.',
            },
            {
                id: '8.3',
                title: 'Personal Safety Guidance',
                content: 'You should exercise caution, avoid sending money, avoid sharing sensitive information too quickly, meet in public places, arrange your own transportation, inform a trusted person of your plans, and promptly report suspicious or abusive behavior. While on the application, the block and report user functions are to be used where necessary.',
            },
            {
                id: '8.4',
                title: 'Release',
                content: 'To the fullest extent permitted by law, you release Forj and its affiliates from claims, demands, losses, damages, rights, and actions of any kind arising out of or related to interactions with other users, including personal injury, death, emotional distress, fraud, theft, assault, harassment, property damage, or any other harm.',
            },
        ],
    },
    {
        number: 9,
        title: 'PRIVACY, DATA USE, AND INTERNATIONAL DATA RIGHTS',
        subsections: [
            {
                id: '9.1',
                title: 'Privacy Policy',
                content: 'Our Privacy Policy explains how we collect, use, share, retain, and protect personal information. By using the Service, you acknowledge that your information will be handled in accordance with that policy and applicable law.',
                link: { label: 'Read full text here', href: '/privacy-policy' },
            },
            {
                id: '9.2',
                title: 'Types of Data',
                content: 'We may collect account information, profile information, payment-related information, communications metadata, device identifiers, usage data, IP addresses, location-related data, customer-support records, moderation records, and other information reasonably necessary to operate the Service.',
            },
            {
                id: '9.3',
                title: 'GDPR-Related Rights',
                content: 'Where the General Data Protection Regulation or similar laws apply, eligible users may have rights to request access, correction, deletion, restriction, portability, objection, or withdrawal of consent, subject to legal limitations and verification requirements.',
            },
            {
                id: '9.4',
                title: 'CCPA/CPRA-Related Rights',
                content: 'Where California privacy law applies, eligible users may have rights to know, access, delete, correct, and receive information about certain categories of personal information collected, used, disclosed, sold, or shared, subject to applicable exceptions.',
            },
            {
                id: '9.5',
                title: 'Retention',
                content: 'We retain data for as long as reasonably necessary for business, contractual, safety, security, legal, regulatory, tax, audit, fraud-prevention, dispute-resolution, and evidentiary purposes. Deleted content and account information may persist in backups or archived systems for a period of time.',
            },
            {
                id: '9.6',
                title: 'Cross-Border Transfers',
                content: 'Your information may be processed and stored in countries other than your country of residence, including jurisdictions that may have different data-protection standards. Where required, we will use recognized transfer mechanisms.',
            },
        ],
    },
    {
        number: 10,
        title: 'INTELLECTUAL PROPERTY RIGHTS',
        subsections: [
            {
                id: '10.1',
                title: 'Forj IP',
                content: 'The Service, including all software, source and object code, interfaces, design elements, trade dress, trademarks, logos, names, compilations, databases, features, functionality, text, graphics, and audiovisual materials, excluding User Content, is owned by or licensed to Forj and protected by intellectual property and other laws.',
            },
            {
                id: '10.2',
                title: 'Limited License to You',
                content: 'Subject to your compliance with these Terms, Forj grants you a limited, personal, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for its intended personal, non-commercial purpose.',
            },
            {
                id: '10.3',
                title: 'Restrictions',
                content: 'You may not copy, reproduce, distribute, publicly display, publish, repurpose, frame, mirror, sell, license, decompile, disassemble, reverse engineer, create derivative works from, or otherwise exploit the Service except as expressly permitted by law or by Forj in writing.',
            },
            {
                id: '10.4',
                title: 'Feedback',
                content: 'If you submit feedback, suggestions, ideas, or proposals regarding the Service, you grant us the right to use them without restriction or compensation.',
            },
        ],
    },
    {
        number: 11,
        title: 'APP STORE AND THIRD-PARTY PLATFORM TERMS',
        subsections: [
            {
                id: '11.1',
                title: 'Third-Party Distribution',
                content: 'If you download the application through Apple App Store, Google Play, or another third-party marketplace, you acknowledge that such marketplace is not responsible for the Service and that your use may also be subject to that marketplace\'s terms and policies.',
            },
            {
                id: '11.2',
                title: 'Priority of Platform Rules',
                content: 'To the extent required by a distribution platform, you agree that such platform and its subsidiaries may be third-party beneficiaries of these Terms as they relate to the licensed application.',
            },
            {
                id: '11.3',
                title: 'Third-Party Services',
                content: 'The Service may contain links to third-party websites, payment processors, social sign-in providers, identity-verification vendors, support providers, or analytics tools. Forj is not responsible for third-party products, services, content, security, or privacy practices.',
            },
        ],
    },
    {
        number: 12,
        title: 'SUSPENSION, RESTRICTION, AND TERMINATION',
        subsections: [
            {
                id: '12.1',
                title: 'Termination by You',
                content: 'You may stop using the Service and delete your account at any time, subject to any billing commitments already incurred and any cancellation timing required to prevent renewal.',
            },
            {
                id: '12.2',
                title: 'Termination by Forj',
                content: 'We may suspend, restrict, shadow-limit, or terminate your account or access immediately, with or without notice, for any reason or no reason to the extent permitted by law, including suspected fraud, safety concerns, policy violations, legal risk, payment failure, inactivity, impersonation, or conduct that may harm users, Forj, or third parties.',
            },
            {
                id: '12.3',
                title: 'Effect of Termination',
                content: 'Upon termination, your right to use the Service ceases immediately. Certain provisions of these Terms survive termination by their nature, including provisions on payments, no refunds, intellectual property, disclaimers, limitation of liability, indemnity, dispute resolution, privacy, data retention, and any licenses or permissions previously granted.',
            },
            {
                id: '12.4',
                title: 'No Refund Upon Restriction or Termination',
                content: 'No suspension, content removal, moderation action, or termination entitles you to a refund, credit, or compensation, except where non-waivable law requires otherwise.',
            },
        ],
    },
    {
        number: 13,
        title: 'DISCLAIMERS',
        subsections: [
            {
                id: '13.1',
                title: 'As-Is and As-Available',
                content: 'The Service is provided on an "as is," "as available," and "with all faults" basis. To the fullest extent permitted by law, Forj disclaims all warranties, express, implied, statutory, and otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, quiet enjoyment, availability, accuracy, or results.',
            },
            {
                id: '13.2',
                title: 'Service Performance',
                content: 'We do not warrant that the Service will be uninterrupted, secure, timely, accurate, complete, compatible with your device, free of viruses, or error-free, or that defects will be corrected.',
            },
            {
                id: '13.3',
                title: 'User Content and Conduct',
                content: 'We are not responsible for the conduct, content, statements, promises, omissions, or actions of any user or third party.',
            },
        ],
    },
    {
        number: 14,
        title: 'LIMITATION OF LIABILITY',
        subsections: [
            {
                id: '14.1',
                title: 'Exclusion from Damages',
                content: 'To the fullest extent permitted by law, Forj and its affiliates, officers, directors, employees, agents, contractors, licensors, and service providers will not be liable for indirect, incidental, consequential, special, exemplary, punitive, or enhanced damages, or for loss of profits, revenue, data, goodwill, reputation, opportunities, or business interruption, arising out of or relating to the Service or these Terms.',
            },
            {
                id: '14.2',
                title: 'Liability Cap',
                content: 'To the fullest extent permitted by law, the aggregate liability of Forj for all claims arising out of or relating to the Service or these Terms will not exceed the greater of: (a) the amount you paid to Forj for the Service during the twelve (12) months immediately preceding the event giving rise to the claim; or (b) one hundred U.S. dollars (US$100), if you have paid nothing to us during that period.',
            },
            {
                id: '14.3',
                title: 'Basis of the Bargain',
                content: 'You acknowledge that the disclaimers and limitations in these Terms are material elements of the bargain between you and Forj and that Forj would not provide the Service on the same terms without them.',
            },
        ],
    },
    {
        number: 15,
        title: 'INDEMNIFICATION',
        subsections: [
            {
                id: '15.1',
                title: 'Your Indemnity Obligation',
                content: 'You agree to defend, indemnify, and hold harmless Forj and its affiliates, officers, directors, employees, contractors, agents, licensors, successors, and assigns from and against any claims, actions, liabilities, damages, judgments, awards, losses, costs, and expenses, including reasonable attorneys\' fees, arising out of or relating to: your use of the Service; your User Content; your violation of these Terms; your violation of law; or your infringement or violation of any rights of another person or entity.',
            },
            {
                id: '15.2',
                title: 'Cooperation',
                content: 'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, at your expense, and you agree to cooperate with our defense of such claims.',
            },
        ],
    },
    {
        number: 16,
        title: 'DISPUTE RESOLUTION, ARBITRATION, AND CLASS ACTION WAIVER',
        subsections: [
            {
                id: '16.1',
                title: 'Governing Law',
                content: 'These Terms and all disputes arising out of or relating to them or the Service shall be governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-laws rules, except to the extent superseded by applicable federal law or non-waivable consumer protection law.',
            },
            {
                id: '16.2',
                title: 'Informal Resolution First',
                content: 'Before filing a claim, the parties agree to try in good faith to resolve the dispute informally by written notice describing the issue, the requested relief, and supporting information.',
            },
            {
                id: '16.3',
                title: 'Arbitration',
                content: 'Except where prohibited by law or where a claim qualifies for small-claims court, disputes that are not resolved informally shall be resolved by final and binding arbitration on an individual basis before a neutral arbitrator under applicable arbitration rules. The arbitration may be conducted in person, by documents, by video conference, or as otherwise permitted by the applicable rules.',
            },
            {
                id: '16.4',
                title: 'No Class Actions',
                content: 'To the fullest extent permitted by law, you and Forj waive any right to participate in a class action, collective action, coordinated proceeding, or representative action, whether in court or in arbitration.',
            },
            {
                id: '16.5',
                title: 'Injunctive Relief',
                content: 'Nothing in this section prevents either party from seeking temporary, preliminary, or injunctive relief in a court of competent jurisdiction to protect intellectual property, confidential information, account security, or platform integrity.',
            },
            {
                id: '16.6',
                title: 'Venue for Non-Arbitrable Claims',
                content: 'If a claim is found non-arbitrable, exclusive venue shall lie in the state or federal courts located in the Federal Republic of Nigeria, and the parties consent to personal jurisdiction there, subject to applicable law.',
            },
        ],
    },
    {
        number: 17,
        title: 'NOTICES AND ELECTRONIC COMMUNICATIONS',
        subsections: [
            {
                id: '17.1',
                title: 'Electronic Notices',
                content: 'You consent to receive notices, agreements, disclosures, billing information, support responses, policy updates, and other communications electronically, including by email, in-app message, push notification, website posting, or other digital means.',
            },
            {
                id: '17.2',
                title: 'Contact Information',
                content: 'You are responsible for maintaining current and accurate contact information. Notice to you is effective when sent to the latest email address or contact channel associated with your account or when posted within the Service.',
            },
        ],
    },
    {
        number: 18,
        title: 'COPYRIGHT AND INTELLECTUAL PROPERTY COMPLAINTS',
        subsections: [
            {
                id: '18.1',
                title: 'Complaint Procedure',
                content: 'If you believe content on the Service infringes your copyright or other intellectual property rights, you may submit a notice containing sufficient information to identify the work, the allegedly infringing material, your contact information, and a statement of authority and good-faith belief.',
            },
            {
                id: '18.2',
                title: 'Repeat Infringers',
                content: 'We may remove allegedly infringing content and may suspend or terminate repeat infringers where appropriate.',
            },
        ],
    },
    {
        number: 19,
        title: 'EXPORT CONTROLS AND SANCTIONS',
        subsections: [
            {
                id: '19.1',
                title: 'Compliance',
                content: 'You represent and warrant that you are not located in a country subject to embargo or comprehensive sanctions that prohibit access to the Service and that you are not listed on any government-prohibited or restricted-party list applicable to the Service.',
            },
            {
                id: '19.2',
                title: 'Restricted Use',
                content: 'You may not use, export, re-export, or transfer the Service except as authorized by applicable export-control and sanctions laws.',
            },
        ],
    },
    {
        number: 20,
        title: 'MISCELLANEOUS',
        subsections: [
            {
                id: '20.1',
                title: 'Entire Agreement',
                content: 'These Terms, together with any incorporated policies and any specific terms presented for a purchase or feature, constitute the entire agreement between you and Forj regarding the Service and supersede prior understandings relating to the same subject matter.',
            },
            {
                id: '20.2',
                title: 'Severability',
                content: 'If any provision of these Terms is held unenforceable, that provision will be enforced to the maximum extent permitted, and the remaining provisions will remain in full force and effect.',
            },
            {
                id: '20.3',
                title: 'No Waiver',
                content: 'Failure by Forj to enforce any provision of these Terms is not a waiver of our right to do so later.',
            },
            {
                id: '20.4',
                title: 'Assignment',
                content: 'You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms, in whole or in part, without restriction, including in connection with a merger, acquisition, reorganization, or sale of assets.',
            },
            {
                id: '20.5',
                title: 'Force Majeure',
                content: 'Forj is not liable for delay or failure to perform resulting from causes beyond its reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, utility outages, internet failures, epidemics, governmental action, or cyber incidents.',
            },
            {
                id: '20.6',
                title: 'Relationship of Parties',
                content: 'Nothing in these Terms creates any agency, partnership, joint venture, employment, fiduciary, or franchise relationship between you and Forj.',
            },
            {
                id: '20.7',
                title: 'Language',
                content: 'The English-language version of these Terms shall control to the extent permitted by law in the event of any inconsistency with a translated version.',
            },
        ],
    },
    {
        number: 21,
        title: 'CONTACT INFORMATION',
        subsections: [
            {
                id: '21.1',
                title: 'Company Contact',
                content: 'Forj Technology Ltd\nWebsite: www.forj.online\nEmail: info@forj.online',
            },
            {
                id: '21.2',
                title: 'Legal Notices',
                content: 'For legal notices, copyright notices, and dispute notices, use the contact information above and include sufficient identifying details for us to route your request appropriately.',
            },
        ],
    },
    {
        number: 22,
        title: 'ACKNOWLEDGMENT',
        subsections: [
            {
                id: '22.1',
                title: 'User Acknowledgment',
                content: 'By creating an account, purchasing a subscription, or using the Service, you acknowledge that you have read, understood, and agree to these Terms of Use, including the arbitration clause, class action waiver, strict no-refund policy, and limitation of liability.',
            },
        ],
    },
]

const TermsOfUsePage = () => {
    return (
        <div className='relative w-full font-manrope'>
            <Image
                src="/assets/images/app-images/nav-gradient.svg"
                alt=""
                width={1440}
                height={400}
                className='absolute top-0 left-0 w-full h-auto pointer-events-none select-none'
                aria-hidden="true"
                priority
            />

            <div className='relative mx-auto px-4 py-10 sm:py-14 flex justify-center'>
                <div className='flex flex-col justify-between w-full max-w-[1440px] mx-auto'>
                    <h1 className='text-4xl sm:text-5xl font-extrabold uppercase text-[#FF5E44] mb-6'>
                        Terms of Use
                    </h1>

                    <div className='mb-6 text-sm text-black leading-6'>
                        <p>Forj Dating App (Forj Technology Ltd)</p>
                        <p>Effective Date: April 8, 2026</p>
                        <p>Last Updated: April 8, 2026</p>
                    </div>

                    <div className='mb-10 flex flex-col gap-4 text-black leading-relaxed'>
                        <p>
                            These Terms of Use (&ldquo;Terms&rdquo;) govern access to and use of the Forj website, mobile applications, messaging features, paid subscription services, and any related products, content, functionality, and services made available by Forj Technology Ltd (collectively, the &ldquo;Service&rdquo;). These Terms are intended to provide a comprehensive, platform-level legal framework comparable to major subscription-based dating applications.
                        </p>
                        <p>
                            <span className='font-semibold'>Important Notice: </span>
                            These Terms contain provisions on automatic renewal, mandatory arbitration where permitted, waiver of class proceedings, limitation of liability, user safety disclaimers, and a strict no-refund policy except where non-waivable law requires otherwise.
                        </p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {sections.map((section) => (
                            <div key={section.number}>
                                <p className='font-bold text-black mb-4'>
                                    {section.number}. {section.title}
                                </p>
                                <div className='flex flex-col gap-4'>
                                    {section.subsections.map((sub) => (
                                        <div key={sub.id}>
                                            <p className='font-semibold text-black mb-1'>{sub.id} {sub.title}</p>
                                            <p className='text-black leading-relaxed whitespace-pre-line'>
                                                {sub.content}
                                                {'link' in sub && sub.link && (
                                                    <>
                                                        {' '}
                                                        <Link href={sub.link.href} className='text-[#FF5E44] hover:underline'>
                                                            {sub.link.label}
                                                        </Link>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUsePage
