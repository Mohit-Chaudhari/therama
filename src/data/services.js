import { FileText, Shield, Globe, Building, CheckCircle, TrendingUp, Users } from 'lucide-react';

export const servicesData = {
    // Start Business
    "llp-registration": {
        title: "Limited Liability Partnership (LLP) Registration",
        category: "Start New Business",
        icon: Building,
        shortDescription: "Combine the flexibility of a partnership with the benefits of limited liability.",
        overview: "A Limited Liability Partnership (LLP) is a popular business structure that provides the benefits of limited liability to its partners while allowing them the flexibility of organizing their internal structure as a partnership. It is a separate legal entity from its partners.",
        process: [
            { title: "DSC & DIN", description: "Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN) for all partners." },
            { title: "Name Reservation", description: "Apply for the reservation of the LLP name through the RUN-LLP service on the MCA portal." },
            { title: "Incorporation", description: "File the incorporation form (FiLLiP) along with necessary documents like the subscriber sheet and consent of partners." },
            { title: "LLP Agreement", description: "Draft and file the LLP Agreement within 30 days of incorporation." }
        ],
        documents: [
            "PAN Card & ID Proof of Partners",
            "Address Proof of Partners (Voter ID/Passport/Driving License)",
            "Proof of Registered Office (Utility Bill/Rent Agreement)",
            "Digital Signature Certificate (DSC)",
            "Passport size photos of partners"
        ],
        whyChooseUs: [
            "Expert drafting of LLP Agreement",
            "Fastest name approval assistance",
            "Complete post-incorporation support"
        ]
    },
    "private-limited-company-registration": {
        title: "Private Limited Company Registration",
        category: "Start New Business",
        icon: Building,
        shortDescription: "The most popular legal structure for businesses in India, offering limited liability and credibility.",
        overview: "Private Limited Company Registration is the most popular legal structure for businesses in India. It offers limited liability to its shareholders and is ideal for businesses looking to raise capital or scale operations. It is a separate legal entity distinct from its owners.",
        process: [
            { title: "Consultation", description: "Initial discussion to understand your business needs and structure." },
            { title: "Name Reservation", description: "We assist in checking name availability and reserving your unique company name." },
            { title: "Documentation", description: "Collection and verification of all necessary KYC and registered office documents." },
            { title: "Incorporation", description: "Filing of the SPICe+ form with the Ministry of Corporate Affairs (MCA)." },
            { title: "Post-Registration", description: "Assistance with PAN, TAN, and opening of the company bank account." }
        ],
        documents: [
            "PAN Card of all Directors/Shareholders",
            "Aadhar Card/Voter ID/Passport",
            "Latest Bank Statement/Utility Bill",
            "Passport size photographs",
            "Rent Agreement/NOC for Registered Office"
        ],
        whyChooseUs: [
            "Dedicated CA/CS support",
            "Seamless online process",
            "Transparent pricing with no hidden costs",
            "Lifetime compliance support"
        ]
    },
    "one-person-company-registration": {
        title: "One Person Company (OPC) Registration",
        category: "Start New Business",
        icon: Users,
        shortDescription: "Ideal for solo entrepreneurs who want limited liability with complete control.",
        overview: "One Person Company (OPC) allows a single entrepreneur to operate a corporate entity with limited liability protection. It combines the structure of a proprietorship with the benefits of a company.",
        process: [
            { title: "DSC & Approval", description: "Obtain Digital Signature and apply for name approval." },
            { title: "Incorporation Filing", description: "File incorporation documents with the Registrar of Companies (ROC)." },
            { title: "Certificate of Incorporation", description: "Receive the COI along with PAN and TAN." }
        ],
        documents: [
            "PAN & ID Proof of the Owner",
            "Nominee Consent Form",
            "Registered Office Proof",
            "Owner's Photograph"
        ],
        whyChooseUs: [
            "Quick processing for solo founders",
            "Guidance on nominee appointment",
            "Affordable packages"
        ]
    },

    // Government Registration
    "gst-registration": {
        title: "GST Registration",
        category: "Government Registration",
        icon: FileText,
        shortDescription: "Mandatory tax registration for businesses with turnover above the threshold limit.",
        overview: "Goods and Services Tax (GST) is a unified indirect tax across India. GST Registration is mandatory for businesses whose turnover exceeds the prescribed limit (₹20/40 Lakhs) or for those involved in interstate commerce or e-commerce.",
        process: [
            { title: "Application Filing", description: "Filling the GST REG-01 application on the GST portal." },
            { title: "Document Upload", description: "Uploading necessary documents like PAN, Aadhaar, and business proof." },
            { title: "ARN Generation", description: "Receipt of Application Reference Number (ARN) for tracking." },
            { title: "Verification & Approval", description: "GST officer validates the application and grants the GST Certificate." }
        ],
        documents: [
            "PAN Card of the Business/Owner",
            "Aadhar Card of the Applicant",
            "Proof of Business Address (Rent Agreement/Electricity Bill)",
            "Bank Account Statement/Cancelled Cheque",
            "Digital Signature (for Companies/LLPs)"
        ],
        whyChooseUs: [
            "Error-free application filing",
            "Clarification on HSN/SAC codes",
            "Fast track approval assistance"
        ]
    },
    "import-export-code": {
        title: "Import Export Code (IEC)",
        category: "Government Registration",
        icon: Globe,
        shortDescription: "Essential license for businesses engaged in import or export of goods/services.",
        overview: "The Import Export Code (IEC) is a 10-digit unique code issued by the DGFT. It is a mandatory requirement for any business or individual wishing to import or export goods/services from/to India.",
        process: [
            { title: "Application Preparation", description: "Gathering specific details about the nature of import/export." },
            { title: "DGFT Information", description: "Filing particulars on the DGFT portal." },
            { title: "Fee Payment & Submission", description: "Paying government fees and submitting with DSC." },
            { title: "IEC Issuance", description: "Receiving the IEC certificate digitally." }
        ],
        documents: [
            "Details of the Entity (PAN, Bank, etc.)",
            "Bank Certificate or Cancelled Cheque",
            "Address Proof of the Firm",
            "Director/Partner details"
        ],
        whyChooseUs: [
            "Lifetime validity assistance",
            "No renewal required guidance",
            "Support for modification if needed"
        ]
    },

    // IPR
    "trademark-registration": {
        title: "Trademark Registration",
        category: "Intellectual Property Rights",
        icon: Shield,
        shortDescription: "Protect your brand name, logo, or slogan from unauthorized use.",
        overview: "Trademark Registration provides legal protection for your brand's unique identity. It grants you the exclusive right to use your brand name or logo and prevents others from copying it.",
        process: [
            { title: "Trademark Search", description: "Conducting a comprehensive search to ensure your mark is unique." },
            { title: "Class Selection", description: "Identifying the correct class of goods/services for your brand." },
            { title: "Application Filing", description: "Filing form TM-A with the Trademark Registry." },
            { title: "Examination & Publishing", description: "Responding to objections (if any) and journal publication." }
        ],
        documents: [
            "Logo/Brand Name Image",
            "Applicant Details (KYC)",
            "Power of Attorney (Form 48)",
            "User Affidavit (if claiming prior use)"
        ],
        whyChooseUs: [
            "Detailed conflicting mark search",
            "Expert attorney filing",
            "Regular status updates"
        ]
    },

    // Tax & Compliance
    "gst-return-filing": {
        title: "GST Return Filing",
        category: "Tax & Compliance",
        icon: TrendingUp,
        shortDescription: "Monthly or quarterly filing of GSTR-1, GSTR-3B, and annual returns.",
        overview: "Regular GST Return filing is crucial to maintain compliance and avoid heavy penalties. We handle all your GSTR-1 (Sales), GSTR-3B (Summary), and Annual Return (GSTR-9) needs.",
        process: [
            { title: "Data Collection", description: "Collecting sales and purchase invoices for the period." },
            { title: "Reconciliation", description: "Matching purchase data with GSTR-2A/2B to maximize ITC." },
            { title: "Filing", description: "Uploading returns to the GST portal." },
            { title: "Challan Generation", description: "Generating challan for tax payment if liability exists." }
        ],
        documents: [
            "Sales & Purchase Invoices",
            "Bank Statement",
            "Previous Return Details"
        ],
        whyChooseUs: [
            "Input Tax Credit (ITC) maximization",
            "Zero penalty assurance for timely data",
            "Expert advisory on complex transactions"
        ]
    },

    // Loans
    "personal-loan": {
        title: "Personal Loan",
        category: "Loan Services",
        icon: Users,
        shortDescription: "Unlock financial freedom with our hassle-free personal loans.",
        overview: "Our personalized personal loan solutions provide swift approval, flexible repayment terms, and tailored support to meet your unique needs. Whether it is for a wedding, medical emergency, or personal expenses, we have got you covered.",
        process: [
            { title: "Application Submission", description: "Submit your details along with required documentation." },
            { title: "Verification", description: "We verify your credit score, income, and background." },
            { title: "Approval", description: "Fast track approval process ensures you get a quick decision." },
            { title: "Disbursal", description: "Funds are transferred directly into your bank account." }
        ],
        documents: [
            "Aadhar Card, PAN Card, Voter ID",
            "Last 6 months Bank Statement",
            "Salary Slips / ITR for last 2 years",
            "Passport Size Photographs"
        ],
        whyChooseUs: [
            "High Approval Rates",
            "Minimal Documentation",
            "Fastest Disbursal",
            "No Hidden Fees"
        ]
    },
    "home-loan": {
        title: "Home Loan",
        category: "Loan Services",
        icon: Building,
        shortDescription: "Build your dream home with our seamless home loan process.",
        overview: "Get closer to your dream home with our easy home loans. We offer competitive interest rates, long repayment tenures, and maximum funding to make your home ownership journey smooth.",
        process: [
            { title: "Property Selection", description: "Finalize the property you wish to purchase." },
            { title: "Application & Assessment", description: "Submit application to assess your eligibility and property valuation." },
            { title: "Sanction", description: "Get the loan sanction letter based on eligibility." },
            { title: "Legal & Technical Check", description: "Verification of property documents and physical technical check." },
            { title: "Disbursement", description: "Loan amount is disbursed to the builder/seller." }
        ],
        documents: [
            "Property Documents (Chain of titles, NOC, etc.)",
            "Proof of Identity and Address",
            "Income Proof (Salary slips/ITR)",
            "Bank Statements of the last 6 months"
        ],
        whyChooseUs: [
            "Lower Interest Rates",
            "Flexible Repayment Options",
            "Complete end-to-end guidance",
            "Transparent Process"
        ]
    }
};

// Helper to get default content for missing services
export const getDefaultService = (slug) => {
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
        title: title,
        category: "General Service",
        icon: CheckCircle,
        shortDescription: "Professional assistance for your business needs.",
        overview: `${title} is an essential service for businesses looking to ensure compliance and operational efficiency. Our team of experts provides end-to-end assistance to make this process seamless for you.`,
        process: [
            { title: "Consultation", description: "Speak with our experts to understand requirements." },
            { title: "Documentation", description: "Preparation of necessary documents and forms." },
            { title: "Filing/Processing", description: "Submission to the relevant authorities." },
            { title: "Completion", description: "Handover of final certificates or acknowledgments." }
        ],
        documents: [
            "Identity Proof",
            "Address Proof",
            "Specific documents related to the service"
        ],
        whyChooseUs: [
            "Expert Guidance",
            "Timely Completion",
            "Dedicated Support"
        ]
    };
};
