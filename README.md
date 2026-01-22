# Timothy Syndrome Research Portal

A comprehensive genomic research database portal for the Timothy Syndrome Alliance charity.

## 🏥 About Timothy Syndrome

Timothy Syndrome is a rare genetic disorder caused by mutations in the CACNA1C or CACNA1D genes, affecting cardiac function, neurological development, and other organ systems.

## 📊 Portal Features

- **Variant Database**: Comprehensive CACNA1C/CACNA1D genetic variant information
- **Search & Filter**: Search by gene, variant ID, phenotype, or clinical significance
- **Export Data**: CSV export functionality for research purposes
- **Variant Details**: Detailed modal views with clinical correlations and PubMed references
- **Data Browser**: Tabbed interface for variants, genes, phenotypes, and studies
- **Charity Features**: Donation integration, family resources, clinical trial information
- **Responsive Design**: Mobile-friendly layout

## 🚀 Quick Start

1. **View the Portal**: Open `index.html` in a web browser
2. **Run Local Server** (recommended):
   ```bash
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000

## ⚙️ Configuration & Setup

### 📧 IMPORTANT: Update Charity Information

**The portal currently has placeholder contact information. Please update with actual details:**

1. **Edit `charity-config.js`** - Central configuration file for all charity info:
   - Contact emails and phone numbers
   - Mailing address
   - Tax ID (EIN)
   - Donation page URL
   - Social media links
   - Program descriptions

2. **Visit https://timothysyndrome.org** to get accurate information:
   - Primary contact email
   - Research coordinator contact
   - Phone numbers
   - Mailing address
   - Actual donation page URL
   - Social media account links

### Key Files to Customize

1. **charity-config.js**: ⭐ **START HERE** - All charity information
2. **index.html**: Main portal structure
3. **styles.css**: Visual styling and branding
4. **script-new.js**: Functionality and variant data

## 📝 Step-by-Step Configuration

### Step 1: Update Contact Information

Edit `charity-config.js`:

```javascript
contact: {
    research: {
        email: "research@timothysyndrome.org",  // ✏️ Update with real email
        phone: "+1 (XXX) XXX-XXXX"              // ✏️ Add actual phone
    },
    general: {
        email: "info@timothysyndrome.org",      // ✏️ Update
        phone: "+1 (XXX) XXX-XXXX"              // ✏️ Update
    },
    address: {
        street: "[Street Address]",              // ✏️ Add real address
        city: "[City]",                          // ✏️ Update
        state: "[State]",                        // ✏️ Update
        zip: "[ZIP]",                            // ✏️ Update
        country: "USA"
    }
}
```

### Step 2: Update Donation Links

In `charity-config.js`:

```javascript
web: {
    mainSite: "https://timothysyndrome.org",
    donationPage: "https://timothysyndrome.org/donate", // ✏️ Verify actual URL
}
```

### Step 3: Add Social Media

```javascript
social: {
    facebook: "https://facebook.com/[actual-page]",   // ✏️ Update
    twitter: "https://twitter.com/[actual-handle]",   // ✏️ Update
    instagram: "https://instagram.com/[actual-page]", // ✏️ Update
    linkedin: "https://linkedin.com/company/[page]"   // ✏️ Update
}
```

### Step 4: Update Tax ID

```javascript
organization: {
    taxId: "XX-XXXXXXX",  // ✏️ Add actual 501(c)(3) EIN
}
```

## 📋 Information Checklist

Gather from https://timothysyndrome.org:

- [ ] Primary contact email
- [ ] Research coordinator email  
- [ ] Clinical trials contact
- [ ] General phone number
- [ ] Mailing address (street, city, state, zip)
- [ ] Tax ID (EIN) - Usually in donation section or Form 990
- [ ] Actual donation page URL
- [ ] Facebook page URL
- [ ] Twitter/X handle
- [ ] Instagram handle
- [ ] LinkedIn page
- [ ] Program/study names and contacts

## 🎨 Customizing Design

### Update Colors

Edit `styles.css`:

```css
:root {
    --primary-color: #e74c3c;   /* Main red - cardiac theme */
    --secondary-color: #3498db;  /* Blue accent */
    --accent-color: #f39c12;     /* Orange for donations */
}
```

### Add Your Logo

1. Save your logo image (e.g., `logo.png`) in the Portal folder
2. Edit `index.html`, find the logo section and replace:

```html
<!-- Replace this: -->
<div class="logo-placeholder">
    <span class="logo-text">TS</span>
</div>

<!-- With this: -->
<img src="logo.png" alt="Timothy Syndrome Alliance" style="height: 60px;">
```

## 🔬 Managing Variant Data

Variant data is in `script-new.js` in the `variants` array:

```javascript
const variants = [
    {
        id: 'CACNA1C-G406R',
        gene: 'CACNA1C',
        position: 'chr12:2162859',
        type: 'Missense',
        significance: 'Pathogenic',
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Syndactyly', 'Autism'],
        qtcInterval: '550-650ms',
        inheritance: 'De novo',
        references: ['PMID: 15107499', 'PMID: 20301310']
    },
    // Add more variants here
];
```

## 🧪 Testing

1. **Open `test.html`** in browser for automated tests
2. **Manual testing checklist**:
   - [ ] All navigation links scroll correctly
   - [ ] Search returns results for "CACNA1C"
   - [ ] Export button downloads CSV file
   - [ ] Variant detail modals open/close
   - [ ] Tab switching works (Variants/Genes/Phenotypes/Studies)
   - [ ] All buttons are functional
   - [ ] Contact emails are correct
   - [ ] Donation links work
   - [ ] Mobile responsive design works

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📂 File Structure

```
Portal/
├── index.html              # Main portal page
├── styles.css             # All styling
├── script-new.js          # Main functionality (USE THIS ONE)
├── script.js              # Alternative version
├── charity-config.js      # ⭐ Charity info config (UPDATE THIS)
├── test.html              # Testing interface
├── CHARITY_FEATURES.md    # Feature documentation
├── TESTING_COMPLETE.md    # Testing checklist
├── TEST_RESULTS.md        # Test results
└── README.md              # This file
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Commit all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your portal will be live at `https://[username].github.io/Portal`

### Option 2: Web Hosting
Upload all files to your web host via FTP/SFTP

### Option 3: Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your Portal folder
3. Get instant deployment

## 🔒 Privacy & Data Compliance

- ⚠️ No personal patient data should be included
- ✅ All variant data must be anonymized
- ✅ Ensure HIPAA/GDPR compliance
- ✅ Use only public-facing contact emails
- ✅ No protected health information (PHI)

## 📞 Getting Help

**For portal technical questions:**
- Review this README and documentation files
- Check `TESTING_COMPLETE.md` for feature details
- Verify `charity-config.js` has correct information

**For Timothy Syndrome Alliance:**
- Visit: https://timothysyndrome.org
- Update contact info in `charity-config.js` after gathering from website

## 🎯 Quick Start Checklist

1. [ ] Open `charity-config.js`
2. [ ] Visit https://timothysyndrome.org to gather accurate info
3. [ ] Update all email addresses
4. [ ] Update all phone numbers
5. [ ] Add mailing address
6. [ ] Add Tax ID (EIN)
7. [ ] Verify donation page URL
8. [ ] Add social media links
9. [ ] Replace logo placeholder
10. [ ] Test all links and features
11. [ ] Deploy to web host or GitHub Pages

## 📄 Additional Resources

- **CHARITY_FEATURES.md**: Detailed list of all charity-specific features
- **TESTING_COMPLETE.md**: Complete testing checklist
- **TEST_RESULTS.md**: Initial test results

---

**Portal Version**: 1.0  
**Last Updated**: January 2026  
**Created for**: Timothy Syndrome Alliance  
**Status**: ⚠️ **Requires configuration** - Update charity-config.js before deployment