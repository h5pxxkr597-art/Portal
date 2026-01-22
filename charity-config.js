/**
 * Timothy Syndrome Alliance - Charity Configuration
 * Update this file with actual charity information
 */

const charityConfig = {
    // Organization Information
    organization: {
        name: "Timothy Syndrome Alliance",
        legalName: "Timothy Syndrome Alliance",
        taxId: "XX-XXXXXXX", // 501(c)(3) EIN - UPDATE WITH ACTUAL
        tagline: "Research Data Portal",
        description: "Supporting Timothy Syndrome research, families, and advancing treatment options"
    },

    // Contact Information
    contact: {
        // Primary Research Contact
        research: {
            email: "research@timothysyndrome.org",
            phone: "+1 (XXX) XXX-XXXX" // UPDATE WITH ACTUAL
        },
        
        // General Contact
        general: {
            email: "info@timothysyndrome.org",
            phone: "+1 (XXX) XXX-XXXX" // UPDATE WITH ACTUAL
        },
        
        // Clinical Trials Contact
        clinicalTrials: {
            email: "trials@timothysyndrome.org",
            phone: "+1 (XXX) XXX-XXXX" // UPDATE WITH ACTUAL
        },
        
        // Mailing Address
        address: {
            street: "[Street Address]", // UPDATE WITH ACTUAL
            city: "[City]",
            state: "[State]",
            zip: "[ZIP]",
            country: "USA"
        }
    },

    // Website & Social Media
    web: {
        mainSite: "https://timothysyndrome.org",
        donationPage: "https://timothysyndrome.org/donate", // UPDATE IF DIFFERENT
        
        // Social Media Links (update with actual accounts)
        social: {
            facebook: "https://facebook.com/timothysyndrome", // UPDATE
            twitter: "https://twitter.com/timothysyndrome", // UPDATE
            instagram: "https://instagram.com/timothysyndrome", // UPDATE
            linkedin: "https://linkedin.com/company/timothysyndrome" // UPDATE
        }
    },

    // Donation Information
    donation: {
        methods: ["Credit Card", "PayPal", "Check", "Wire Transfer"],
        recurringOptions: ["Monthly", "Quarterly", "Annually"],
        presetAmounts: [25, 50, 100, 250, 500, 1000],
        taxDeductible: true,
        processingInfo: "Timothy Syndrome Alliance is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law."
    },

    // Research Programs
    programs: {
        naturalHistoryStudy: {
            name: "Timothy Syndrome Natural History Study",
            status: "Active",
            contactEmail: "trials@timothysyndrome.org",
            description: "Long-term study tracking symptoms, treatments, and outcomes in Timothy Syndrome patients."
        },
        cardiacStudy: {
            name: "Cardiac Treatment Response Study",
            status: "Recruiting",
            contactEmail: "cardiac@timothysyndrome.org",
            description: "Evaluating effectiveness of various medications for cardiac symptoms in Timothy Syndrome."
        }
    },

    // Statistics (update with actual data)
    statistics: {
        variants: 147,
        patients: 238,
        studies: 56,
        publications: 124,
        lastUpdated: "January 2026"
    },

    // Resources for Families
    resources: {
        familySupport: {
            title: "Family Support",
            description: "Connect with other families, access support groups, and find resources for daily care and management.",
            link: "https://timothysyndrome.org/family-support" // UPDATE
        },
        clinicalGuidelines: {
            title: "Clinical Guidelines",
            description: "Evidence-based treatment protocols, cardiac care guidelines, and management recommendations for healthcare providers.",
            link: "https://timothysyndrome.org/clinical-guidelines" // UPDATE
        },
        geneticTesting: {
            title: "Genetic Testing",
            description: "Information about genetic testing, counseling services, and understanding CACNA1C/CACNA1D mutations.",
            link: "https://timothysyndrome.org/genetic-testing" // UPDATE
        },
        educationalMaterials: {
            title: "Educational Materials",
            description: "Videos, brochures, and educational content about Timothy Syndrome for families and medical professionals.",
            link: "https://timothysyndrome.org/resources" // UPDATE
        }
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = charityConfig;
}
