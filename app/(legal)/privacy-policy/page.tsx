import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Privacy Policy | Forj',
    description: 'Privacy Policy for Forj Dating App.',
}

type TextBlock = { type: 'text'; content: string }
type BulletBlock = { type: 'bullets'; items: string[] }
type ContentBlock = TextBlock | BulletBlock

type Subsection = {
    id: string
    title: string
    content: ContentBlock[]
}

type Section = {
    number: number
    title: string
    content: ContentBlock[]
    subsections?: Subsection[]
}

const sections: Section[] = [
    {
        number: 1,
        title: 'Overview and Scope',
        content: [
            { type: 'text', content: 'This Privacy Policy explains how Forj (we, us, or our) collects, uses, stores, discloses, and safeguards personal information when individuals access or use our dating application, website, and any related features, communications, or services (collectively, the Service). This Policy applies to all users of the Service, regardless of profession, background, or location, and governs the processing of personal data in connection with account registration, profile creation, user interactions, and overall platform operations.' },
            { type: 'text', content: 'We recognize that dating platforms involve the sharing of personal and, in some cases, sensitive information, and that users may have varying expectations regarding privacy, discretion, and confidentiality. Accordingly, we apply appropriate technical, organizational, and administrative safeguards to protect personal data and to ensure that such data is processed in a lawful, fair, and transparent manner. Where personal information qualifies as sensitive under applicable data protection laws, additional protections are applied.' },
            { type: 'text', content: 'This Privacy Policy describes the categories of personal information we collect, the purposes and legal bases for processing such information, how and when information may be disclosed to third parties, the measures we take to safeguard personal data, and the rights available to users in relation to their information under applicable law. This Policy should be read together with our Terms of Service and any supplemental privacy notices made available through the Service.' },
            { type: 'text', content: 'By creating an account, accessing, or otherwise using the Service, you acknowledge that you have read and understood this Privacy Policy. Where required by law, we will obtain your explicit consent before processing certain categories of personal data, and you may withdraw such consent at any time through your account settings or by contacting us.' },
        ],
    },
    {
        number: 2,
        title: 'Categories of Personal Data Collected',
        content: [
            { type: 'text', content: 'In order to provide, operate, and improve the Service, Forj collects and processes certain categories of personal information. The nature and extent of the data collected depend on how users interact with the Service, the features they choose to use, and applicable legal requirements. We are committed to collecting only data that is relevant, adequate, and necessary for the purposes described in this Privacy Policy.' },
        ],
        subsections: [
            {
                id: '2.1',
                title: 'Information Provided Directly by Users',
                content: [
                    { type: 'text', content: 'We collect personal information that users voluntarily provide when creating an account, completing a profile, communicating with other users, or contacting us for support. This may include:' },
                    { type: 'bullets', items: [
                        'Identifying information such as name, username, email address, date of birth, and login credentials',
                        'Profile information, including photographs, biographical details, interests, gender identity, and dating preferences',
                        'Content generated or shared by users, such as messages, images, or other materials exchanged through the Service',
                        'Information submitted for verification purposes, including age or identity confirmation where required',
                        'Communications with customer support, feedback, or responses to surveys or promotions',
                    ]},
                    { type: 'text', content: 'Users are not required to provide all information listed above; however, certain information may be necessary to access specific features of the Service.' },
                ],
            },
            {
                id: '2.2',
                title: 'Information Collected Automatically Through Use of the Service',
                content: [
                    { type: 'text', content: 'When users access or use the Service, certain information is collected automatically through technical means. This may include:' },
                    { type: 'bullets', items: [
                        'Device and connection information, such as IP address, device type, operating system, browser type, and language settings',
                        'Usage and interaction data, including login activity, session duration, feature usage, matches, and in-app interactions',
                        'Log and diagnostic data used to monitor system performance, troubleshoot issues, and enhance security',
                        'Approximate location information derived from IP address or device settings (for example, city or region-level location)',
                    ]},
                    { type: 'text', content: 'We do not collect precise real-time location data unless users expressly enable such functionality within the Service.' },
                ],
            },
            {
                id: '2.3',
                title: 'Cookies and Similar Tracking Technologies',
                content: [
                    { type: 'text', content: 'Where applicable, we use cookies, software development kits (SDKs), and similar technologies to support core functionality, enhance user experience, and analyse platform performance. These technologies may be used to:' },
                    { type: 'bullets', items: [
                        'Remember user preferences and settings',
                        'Authenticate users and maintain secure sessions',
                        'Understand usage patterns and improve features',
                    ]},
                    { type: 'text', content: 'Users may manage cookie preferences through their device or browser settings, subject to applicable law.' },
                ],
            },
            {
                id: '2.4',
                title: 'Sensitive Personal Data',
                content: [
                    { type: 'text', content: 'Certain categories of information processed by the Service may be considered sensitive or special category data under applicable data protection laws. This may include:' },
                    { type: 'bullets', items: [
                        'Sexual orientation or dating preferences',
                        'Profile photographs and videos',
                        'Biometric data, where identity or authenticity verification features are enabled',
                    ]},
                    { type: 'text', content: 'Such information is processed only where necessary for the operation of the Service and, where required by law, only with the user\'s explicit consent. Users may withdraw consent for the processing of sensitive personal data at any time through by contacting us, subject to legal limitations.' },
                ],
            },
            {
                id: '2.5',
                title: 'Information from Third Parties',
                content: [
                    { type: 'text', content: 'In limited circumstances, we may receive information about users from third-party sources, including:' },
                    { type: 'bullets', items: [
                        'Authentication or verification providers',
                        'Payment processors, in connection with subscriptions or premium features',
                        'Service providers assisting with safety, moderation, or fraud prevention',
                    ]},
                    { type: 'text', content: 'Any such information is processed in accordance with this Privacy Policy and applicable data protection laws.' },
                ],
            },
            {
                id: '2.6',
                title: 'Data Minimization and Accuracy',
                content: [
                    { type: 'text', content: 'We take reasonable steps to ensure that personal data collected is accurate, up to date, and limited to what is necessary for the purposes for which it is processed. Users may review, update, or correct their personal information at any time through their account settings or by contacting us.' },
                ],
            },
        ],
    },
    {
        number: 3,
        title: 'Purposes of Processing Personal Data',
        content: [
            { type: 'text', content: 'Forj processes personal data solely for specific, explicit, and legitimate purposes in accordance with applicable data protection laws. We collect and use personal information only to the extent necessary to operate the Service, provide users with a secure and functional dating experience, and meet our legal and regulatory obligations.' },
        ],
        subsections: [
            {
                id: '3.1',
                title: 'Account Creation and Administration',
                content: [{ type: 'text', content: 'We process personal data to enable users to register for, access, and manage accounts on the Service. This includes verifying eligibility, authenticating users, maintaining account security, and providing access to features and functionalities associated with user accounts.' }],
            },
            {
                id: '3.2',
                title: 'Matching, Communication, and User Interaction',
                content: [{ type: 'text', content: 'Personal data is processed to facilitate core dating functionalities, including profile discovery, matching, messaging, and other forms of interaction between users. Information such as preferences, interests, and activity data is used to support compatibility assessments and to enable meaningful connections within the platform.' }],
            },
            {
                id: '3.3',
                title: 'Personalization and User Experience Enhancement',
                content: [{ type: 'text', content: 'We process personal data to personalize content, recommendations, and features based on user preferences and usage patterns. This allows us to tailor the Service to individual users, improve relevance, and enhance overall usability, while ensuring that such processing remains proportionate and consistent with user expectations.' }],
            },
            {
                id: '3.4',
                title: 'Safety, Security, and Abuse Prevention',
                content: [{ type: 'text', content: 'We process personal data to maintain the safety and integrity of the Service. This includes detecting, investigating, and preventing fraudulent activity, harassment, misuse, or violations of our Terms of Service. Automated and manual moderation tools may be used to support these objectives, with appropriate safeguards and human oversight.' }],
            },
            {
                id: '3.5',
                title: 'Service Improvement and Development',
                content: [{ type: 'text', content: 'Personal data may be used to analyze usage trends, evaluate performance, and develop new features or improvements to existing functionalities. This processing enables us to troubleshoot issues, conduct research and analytics, and enhance the reliability and efficiency of the Service.' }],
            },
            {
                id: '3.6',
                title: 'Communications and Service-Related Notifications',
                content: [{ type: 'text', content: 'We process personal data to communicate with users regarding account-related matters, service updates, security notifications, policy changes, and customer support responses. Such communications are limited to what is necessary for the operation and administration of the Service.' }],
            },
            {
                id: '3.7',
                title: 'Legal, Regulatory, and Compliance Obligations',
                content: [{ type: 'text', content: 'We process personal data as necessary to comply with applicable laws, regulations, lawful requests from authorities, and to establish, exercise, or defend legal claims. This includes maintaining records required for tax, accounting, or regulatory compliance purposes.' }],
            },
        ],
    },
    {
        number: 4,
        title: 'Legal Basis for Processing (GDPR – EU & UK Users)',
        content: [
            { type: 'text', content: 'For users located in the European Union and the United Kingdom, Forj processes personal data in accordance with the lawful bases set out in the General Data Protection Regulation (GDPR) and the UK GDPR. We ensure that all processing activities are supported by at least one valid legal basis and that such processing is necessary, proportionate, and consistent with the purposes described in this Privacy Policy.' },
        ],
        subsections: [
            {
                id: '4.1',
                title: 'Consent',
                content: [
                    { type: 'text', content: 'We rely on user consent where required by law, particularly in relation to:' },
                    { type: 'bullets', items: [
                        'The processing of sensitive or special category personal data, such as dating preferences, sexual orientation, profile photographs, or biometric data',
                        'Optional features that are not essential to the operation of the Service',
                        'Direct marketing communications, where applicable',
                    ]},
                    { type: 'text', content: 'Where consent is relied upon, it is obtained in a clear, specific, and informed manner. Users may withdraw consent at any time through their account by contacting us. Withdrawal of consent does not affect the lawfulness of processing carried out prior to such withdrawal.' },
                ],
            },
            {
                id: '4.2',
                title: 'Performance of a Contract',
                content: [
                    { type: 'text', content: 'We process personal data where such processing is necessary for the performance of a contract between the user and Forj or in order to take steps at the user\'s request prior to entering into such a contract. This includes processing required to:' },
                    { type: 'bullets', items: [
                        'Create and manage user accounts',
                        'Enable matching, communication, and interactions between users',
                        'Provide access to features and functionalities of the Service',
                        'Process subscriptions or premium services, where applicable',
                    ]},
                    { type: 'text', content: 'Without this processing, we would be unable to deliver the core functionality of the Service.' },
                ],
            },
            {
                id: '4.3',
                title: 'Legitimate Interests',
                content: [
                    { type: 'text', content: 'We process certain personal data on the basis of our legitimate interests, provided that such interests are not overridden by the rights and freedoms of users. Legitimate interests may include:' },
                    { type: 'bullets', items: [
                        'Ensuring the safety, security, and integrity of the Service',
                        'Preventing fraud, abuse, and violations of our Terms of Service',
                        'Improving and optimizing platform functionality and performance',
                        'Conducting analytics and internal research to enhance user experience',
                    ]},
                    { type: 'text', content: 'Where we rely on legitimate interests, we conduct a balancing assessment to ensure that processing is fair, reasonable, and aligned with user expectations.' },
                ],
            },
            {
                id: '4.4',
                title: 'Legal Obligations',
                content: [
                    { type: 'text', content: 'We process personal data where necessary to comply with legal obligations to which we are subject, including:' },
                    { type: 'bullets', items: [
                        'Compliance with applicable data protection, consumer protection, and online safety laws',
                        'Responding to lawful requests from public authorities',
                        'Maintaining records required for regulatory, tax, or accounting purposes',
                        'Establishing, exercising, or defending legal claims',
                    ]},
                ],
            },
            {
                id: '4.5',
                title: 'Withdrawal of Consent',
                content: [
                    { type: 'text', content: 'Where processing is based on consent, users may withdraw such consent at any time through account by contacting us. Withdrawal of consent may affect access to certain features that rely on the processing of such data but will not result in unlawful processing of personal data.' },
                ],
            },
        ],
    },
    {
        number: 5,
        title: 'Disclosure of Personal Information',
        content: [
            { type: 'text', content: 'Forj is committed to maintaining user trust and transparency in how personal information is shared. We do not sell personal data and do not disclose personal information to third parties except as described in this Privacy Policy and where such disclosure is necessary, lawful, and as required under any statute or judgment of a court of law.' },
        ],
        subsections: [
            {
                id: '5.1',
                title: 'Disclosure to Service Providers',
                content: [
                    { type: 'text', content: 'We may disclose personal information to trusted third-party service providers who perform services on our behalf and support the operation of the Service. These may include providers of:' },
                    { type: 'bullets', items: [
                        'Cloud hosting and data storage',
                        'Analytics and performance monitoring',
                        'Content moderation and trust-and-safety services',
                        'Customer support and communication tools',
                        'Payment processing (where applicable)',
                    ]},
                    { type: 'text', content: 'Such service providers are permitted to process personal data only for the purposes of performing services on our behalf and in accordance with our instructions.' },
                ],
            },
            {
                id: '5.2',
                title: 'Safety, Security, and Fraud Prevention',
                content: [
                    { type: 'text', content: 'We may disclose personal information to safety, security, and fraud-prevention partners where necessary to:' },
                    { type: 'bullets', items: [
                        'Detect, investigate, and prevent fraudulent or unlawful activity',
                        'Enforce our Terms of Service and community standards',
                        'Protect the rights, safety, and integrity of users and the platform',
                    ]},
                    { type: 'text', content: 'Disclosures for these purposes are limited to what is strictly necessary and are subject to appropriate safeguards.' },
                ],
            },
            {
                id: '5.3',
                title: 'Legal and Regulatory Disclosures',
                content: [
                    { type: 'text', content: 'We may disclose personal information where required to comply with applicable laws, regulations, legal processes, or lawful requests from public authorities, including courts or regulatory agencies. This may include disclosures necessary to:' },
                    { type: 'bullets', items: [
                        'Respond to subpoenas, court orders, or legal claims',
                        'Meet statutory or regulatory reporting obligations',
                        'Protect our legal rights or the rights of others',
                    ]},
                    { type: 'text', content: 'Where permitted by law, we will take reasonable steps to notify users of such disclosures.' },
                ],
            },
            {
                id: '5.4',
                title: 'Disclosure with User Consent',
                content: [
                    { type: 'text', content: 'We may disclose personal information to third parties where users have provided their explicit and informed consent. Such disclosures may occur, for example, where users choose to integrate third-party services or participate in optional features requiring data sharing. Users may withdraw consent for such disclosures at any time, subject to legal limitations.' },
                ],
            },
            {
                id: '5.5',
                title: 'Data Protection Obligations of Third Parties',
                content: [
                    { type: 'text', content: 'All third parties that receive personal information are required to:' },
                    { type: 'bullets', items: [
                        'Process personal data in accordance with applicable data protection laws',
                        'Implement appropriate technical and organizational security measures',
                        'Maintain confidentiality and restrict access to authorized personnel only',
                    ]},
                    { type: 'text', content: 'Where required, we enter into data processing agreements to ensure adequate protection of personal information.' },
                ],
            },
        ],
    },
    {
        number: 6,
        title: 'User Privacy Controls',
        content: [
            { type: 'text', content: 'Forj provides users with meaningful and accessible controls to manage how their personal information is displayed, used, and shared within the Service. These controls are designed to empower users to tailor their privacy settings according to their individual preferences while ensuring a safe and respectful environment for all users.' },
        ],
        subsections: [
            {
                id: '6.1',
                title: 'Profile Visibility and Discoverability',
                content: [
                    { type: 'text', content: 'Users may control the visibility of their profiles and the extent to which they are discoverable by other users. This includes options to:' },
                    { type: 'bullets', items: [
                        'Limit who can view profile information',
                        'Manage discoverability based on preferences or matching criteria',
                        'Temporarily hide or deactivate profile visibility without deleting the account',
                    ]},
                ],
            },
            {
                id: '6.2',
                title: 'Interaction and Messaging Controls',
                content: [
                    { type: 'text', content: 'Users may determine who is permitted to communicate or interact with them on the Service. These controls may include:' },
                    { type: 'bullets', items: [
                        'Restricting messaging to matched users',
                        'Managing who can initiate contact or send media',
                        'Adjusting read receipts or interaction indicators, where available',
                    ]},
                ],
            },
            {
                id: '6.3',
                title: 'Location Visibility',
                content: [
                    { type: 'text', content: 'Users may manage how location information is used and displayed within the Service. Location settings are designed to:' },
                    { type: 'bullets', items: [
                        'Display only approximate location information',
                        'Allow users to adjust or disable location-based features',
                        'Provide transparency regarding when location data is used',
                    ]},
                    { type: 'text', content: 'Precise location data is not shared without the user\'s explicit consent.' },
                ],
            },
            {
                id: '6.4',
                title: 'Blocking, Reporting, and Safety Tools',
                content: [
                    { type: 'text', content: 'Users may block or report other users at any time. These tools enable users to:' },
                    { type: 'bullets', items: [
                        'Prevent further interaction with specific users',
                        'Report behavior that violates community standards or applicable laws',
                        'Support moderation, safety reviews, and enforcement actions',
                    ]},
                    { type: 'text', content: 'Reports are reviewed in accordance with our safety and moderation procedures.' },
                ],
            },
            {
                id: '6.5',
                title: 'Marketing and Notification Preferences',
                content: [
                    { type: 'text', content: 'Users may control how and whether they receive communications from us, including:' },
                    { type: 'bullets', items: [
                        'Email, push, or in-app notifications',
                        'Marketing or promotional communications',
                        'Personalized content or recommendations, where applicable',
                    ]},
                    { type: 'text', content: 'Users may update their preferences at any time through account settings.' },
                ],
            },
        ],
    },
    {
        number: 7,
        title: 'Data Retention',
        content: [
            { type: 'text', content: 'Personal data is retained only for as long as necessary to fulfill the purposes outlined in this Policy.' },
            { type: 'text', content: 'Upon account deletion, user profiles and associated data are deleted or anonymized, subject to limited retention required for legal or safety reasons.' },
        ],
    },
    {
        number: 8,
        title: 'Data Security Measures',
        content: [
            { type: 'text', content: 'We implement commercially appropriate technical and organizational safeguards, including:' },
            { type: 'bullets', items: [
                'Data encryption',
                'Restricted access controls',
                'Secure storage environments',
                'Ongoing monitoring and risk assessments',
            ]},
            { type: 'text', content: 'Despite these measures, no system can be guaranteed to be completely secure.' },
        ],
    },
    {
        number: 9,
        title: 'Your Rights (GDPR – EU & UK Users)',
        content: [
            { type: 'text', content: 'If you are located in the European Union or the United Kingdom, you are entitled to certain rights in relation to your personal data under the General Data Protection Regulation (GDPR) and the UK GDPR. Forj is committed to facilitating the exercise of these rights in a transparent, timely, and lawful manner.' },
        ],
        subsections: [
            {
                id: '9.1',
                title: 'Right of Access',
                content: [{ type: 'text', content: 'You have the right to request confirmation as to whether we process your personal data and, where such processing occurs, to obtain access to that data together with information about how and why it is processed.' }],
            },
            {
                id: '9.2',
                title: 'Right to Rectification',
                content: [{ type: 'text', content: 'You have the right to request that inaccurate or incomplete personal data be corrected or updated without undue delay. Users may update certain information directly through account settings.' }],
            },
            {
                id: '9.3',
                title: 'Right to Erasure ("Right to Be Forgotten")',
                content: [
                    { type: 'text', content: 'You have the right to request the deletion of your personal data where:' },
                    { type: 'bullets', items: [
                        'The data is no longer necessary for the purposes for which it was collected',
                        'You withdraw consent and no other legal basis applies',
                        'You object to processing and there are no overriding legitimate grounds',
                        'The data has been unlawfully processed',
                    ]},
                    { type: 'text', content: 'This right is subject to legal limitations, including where retention is required by law.' },
                ],
            },
            {
                id: '9.4',
                title: 'Right to Restrict Processing',
                content: [{ type: 'text', content: 'You may request that we restrict the processing of your personal data in certain circumstances, such as where the accuracy of the data is contested or where processing is unlawful but erasure is not requested.' }],
            },
            {
                id: '9.5',
                title: 'Right to Object',
                content: [{ type: 'text', content: 'You have the right to object to the processing of your personal data where processing is based on legitimate interests or for direct marketing purposes. Where an objection is upheld, we will cease processing unless compelling legitimate grounds exist.' }],
            },
            {
                id: '9.6',
                title: 'Right to Data Portability',
                content: [{ type: 'text', content: 'You have the right to receive personal data you have provided to us in a structured, commonly used, and machine-readable format and, where technically feasible, to transmit that data to another service provider.' }],
            },
            {
                id: '9.7',
                title: 'Right to Lodge a Complaint',
                content: [{ type: 'text', content: 'You have the right to lodge a complaint with a supervisory authority in your country of residence, place of work, or where an alleged infringement of data protection law has occurred.' }],
            },
            {
                id: '9.8',
                title: 'Exercising Your Rights',
                content: [{ type: 'text', content: 'Requests to exercise any of the above rights may be submitted by contacting us at info@forj.online. We may take reasonable steps to verify your identity before responding to a request. Responses will be provided within the timeframes required by applicable law.' }],
            },
        ],
    },
    {
        number: 10,
        title: 'California Privacy Rights (CCPA / CPRA)',
        content: [
            { type: 'text', content: 'This section applies only to residents of the State of California and is provided in accordance with the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).' },
        ],
        subsections: [
            {
                id: '10.1',
                title: 'Categories of Personal Information Collected',
                content: [{ type: 'text', content: 'California residents have the right to request information regarding the categories of personal information we collect, the sources of such information, the purposes for which it is used, and the categories of third parties with whom it is disclosed.' }],
            },
            {
                id: '10.2',
                title: 'Right to Know and Access',
                content: [{ type: 'text', content: 'You have the right to request access to the specific pieces of personal information we have collected about you during the applicable statutory period, subject to verification of your identity and applicable legal exceptions.' }],
            },
            {
                id: '10.3',
                title: 'Right to Delete',
                content: [{ type: 'text', content: 'You have the right to request the deletion of personal information we have collected from you, subject to certain exceptions permitted by law, such as where retention is necessary to complete a transaction, detect security incidents, comply with legal obligations, or exercise legal rights.' }],
            },
            {
                id: '10.4',
                title: 'Right to Correct',
                content: [{ type: 'text', content: 'You have the right to request correction of inaccurate personal information maintained about you, taking into account the nature of the information and the purposes for which it is processed.' }],
            },
            {
                id: '10.5',
                title: 'Right to Opt Out of Sharing for Targeted Advertising',
                content: [{ type: 'text', content: 'You have the right to opt out of the sharing of your personal information for cross-context behavioral advertising or other targeted advertising purposes. Where applicable, opt-out mechanisms will be made available through the Service or by submitting a request.' }],
            },
            {
                id: '10.6',
                title: 'Right to Limit the Use of Sensitive Personal Information',
                content: [{ type: 'text', content: 'Where we process sensitive personal information as defined under the CPRA, you have the right to request that such information be used only for purposes permitted by law, including those necessary to provide the Service.' }],
            },
            {
                id: '10.7',
                title: 'Right to Non-Discrimination',
                content: [{ type: 'text', content: 'You have the right not to receive discriminatory treatment for exercising any of your rights under the CCPA or CPRA. We will not deny services, charge different prices, or provide a different level of service solely because you exercised your privacy rights.' }],
            },
            {
                id: '10.8',
                title: 'Exercising California Privacy Rights',
                content: [{ type: 'text', content: 'California residents may submit verifiable consumer requests by contacting us by email at info@forj.online. We may require verification of your identity before responding to a request and will respond within the timeframes required by applicable law.' }],
            },
        ],
    },
    {
        number: 11,
        title: 'International Data Transfers',
        content: [
            { type: 'text', content: 'Personal data collected through the Service may be transferred to, stored in, and processed in countries outside your country of residence, including jurisdictions that may not provide the same level of data protection as your local laws. Such transfers occur for purposes including service delivery, data hosting, customer support, security operations, and technical maintenance.' },
            { type: 'text', content: 'Where personal data is transferred outside the European Economic Area (EEA) or the United Kingdom, Forj ensures that appropriate safeguards are implemented in accordance with applicable data protection laws. These safeguards may include:' },
            { type: 'bullets', items: [
                'Reliance on adequacy decisions issued by relevant authorities',
                'The use of Standard Contractual Clauses approved by the European Commission or the UK Information Commissioner\'s Office',
                'The implementation of supplementary technical and organizational measures designed to protect personal data',
            ]},
            { type: 'text', content: 'We take reasonable steps to ensure that all recipients of personal data, regardless of location, are subject to confidentiality obligations and data protection standards consistent with this Privacy Policy.' },
            { type: 'text', content: 'By using the Service, you acknowledge that your personal data may be transferred to and processed in jurisdictions outside your country of residence in accordance with the safeguards described above.' },
        ],
    },
    {
        number: 12,
        title: 'Age Restriction and Children\'s Privacy',
        content: [
            { type: 'text', content: 'The Service is intended solely for individuals Eighteen (18) years of age or older. We do not permit the use of the Service by minors and do not knowingly collect, solicit, or process personal data relating to individuals under the age of 18.' },
            { type: 'text', content: 'Reasonable measures are implemented to restrict access by minors, including age-declaration requirements during account registration and monitoring mechanisms designed to identify and remove underage accounts. If we become aware that personal data has been collected from a minor, we will take appropriate steps to promptly delete such information and terminate the associated account. Individuals who provide false age shall be liable to prosecution in accordance with the extant laws in the jurisdiction of residence.' },
            { type: 'text', content: 'Parents or legal guardians who believe that a minor has provided personal data through the Service may contact us at info@forj.online so that appropriate action can be taken without delay and shall hold harmless Forj for any loss resulting from it.' },
        ],
    },
    {
        number: 13,
        title: 'Updates to This Privacy Policy',
        content: [
            { type: 'text', content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal or regulatory requirements, or the features of the Service. When we make changes, we will revise the “Last Updated” date at the top of this Policy.' },
            { type: 'text', content: 'Where changes are material and affect how personal data is processed, we will take reasonable steps to notify users in advance through the Service, by email, or by other appropriate means, as required by applicable law. Continued use of the Service after an updated Privacy Policy becomes effective constitutes acknowledgment of the revised terms, except where explicit consent is required.' },
            { type: 'text', content: 'Users are encouraged to review this Privacy Policy periodically to remain informed about how their personal information is protected.' },
        ],
    },
    {
        number: 14,
        title: 'Contact Information and Data Protection Inquiries',
        content: [
            { type: 'text', content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, you may contact us using the details below:' },
            { type: 'text', content: 'Email: info@forj.online' },
            { type: 'text', content: 'This contact point may be used to:' },
            { type: 'bullets', items: [
                'Submit inquiries regarding data protection practices',
                'Exercise your rights under applicable data protection laws',
                'Request access to, correction of, or deletion of personal data',
                'Raise concerns or complaints related to privacy or data security',
            ]},
            { type: 'text', content: 'Where required by law, Forj has appointed a Data Protection Officer or designated privacy contact responsible for overseeing compliance with applicable data protection regulations. Communications submitted through the contact details above will be handled in a timely and confidential manner in accordance with applicable laws.' },
        ],
    },
]

const renderBlocks = (blocks: ContentBlock[]) =>
    blocks.map((block, i) => {
        if (block.type === 'bullets') {
            return (
                <ul key={i} className='list-disc pl-6 flex flex-col gap-1 text-black'>
                    {block.items.map((item, j) => (
                        <li key={j} className='leading-relaxed'>{item}</li>
                    ))}
                </ul>
            )
        }
        return <p key={i} className='text-black leading-relaxed'>{block.content}</p>
    })

const PrivacyPolicyPage = () => {
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
                        Privacy Policy
                    </h1>

                    <div className='mb-10 text-sm text-black leading-6'>
                        <p>Forj Dating App (Forj Technology Ltd)</p>
                        <p>Effective Date: April 8, 2026</p>
                        <p>Last Updated: April 8, 2026</p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {sections.map((section) => (
                            <div key={section.number}>
                                <p className='font-bold text-black mb-3'>
                                    {section.number}. {section.title}
                                </p>

                                {section.content.length > 0 && (
                                    <div className='flex flex-col gap-3 mb-4'>
                                        {renderBlocks(section.content)}
                                    </div>
                                )}

                                {section.subsections && (
                                    <div className='flex flex-col gap-4'>
                                        {section.subsections.map((sub) => (
                                            <div key={sub.id}>
                                                <p className='font-semibold text-black mb-2'>
                                                    {sub.id} {sub.title}
                                                </p>
                                                <div className='flex flex-col gap-3'>
                                                    {renderBlocks(sub.content)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage
