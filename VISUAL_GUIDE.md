# Portal Configuration Visual Guide

## 🎯 Where Things Are Located

```
Portal Project Structure:
│
├─ 📘 START_HERE.md ........................... ⭐ READ THIS FIRST
├─ 📗 SETUP_INSTRUCTIONS.md ................... Step-by-step guide
├─ 📙 QUICK_REFERENCE.txt ..................... Quick cheat sheet
├─ 📕 README.md ............................... Complete documentation
│
├─ ⚙️  charity-config.js ....................... 🔴 UPDATE THIS FILE
│
├─ 🌐 index.html .............................. Main portal (ready!)
├─ 🎨 styles.css .............................. Styling (ready!)
├─ ⚡ script-new.js ........................... Functionality (ready!)
│
└─ 📊 Documentation files
   ├─ CHARITY_FEATURES.md ..................... Feature list
   ├─ TESTING_COMPLETE.md ..................... Test results
   └─ TEST_RESULTS.md ......................... Initial tests
```

## 🔴 The ONE File You Must Edit: charity-config.js

```javascript
┌─────────────────────────────────────────────────────────┐
│  charity-config.js                                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Section 1: ORGANIZATION INFO                          │
│  ├─ name: "Timothy Syndrome Alliance"                  │
│  ├─ taxId: "XX-XXXXXXX" ................ ✏️ Update!   │
│  └─ tagline: "Research Data Portal"                    │
│                                                         │
│  Section 2: CONTACT INFORMATION                        │
│  ├─ research.email ...................... ✏️ Update!   │
│  ├─ research.phone ...................... ✏️ Update!   │
│  ├─ general.email ....................... ✏️ Update!   │
│  ├─ general.phone ....................... ✏️ Update!   │
│  └─ address (street/city/state/zip) .... ✏️ Update!   │
│                                                         │
│  Section 3: WEBSITE & SOCIAL MEDIA                     │
│  ├─ mainSite: "https://timothysyndrome.org"           │
│  ├─ donationPage ........................ ✏️ Verify!   │
│  ├─ facebook ............................ ✏️ Update!   │
│  ├─ twitter ............................. ✏️ Update!   │
│  ├─ instagram ........................... ✏️ Update!   │
│  └─ linkedin ............................ ✏️ Update!   │
│                                                         │
│  Section 4: DONATION INFO                              │
│  └─ Already configured, verify only                    │
│                                                         │
│  Section 5: PROGRAMS & STATISTICS                      │
│  └─ Already configured                                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 📧 Information Collection Workflow

```
Step 1: Open Website                Step 2: Navigate & Collect
┌─────────────────────┐            ┌──────────────────────────┐
│                     │            │                          │
│  timothysyndrome    │────────────▶  Look for:              │
│       .org          │            │  • Contact page          │
│                     │            │  • About page            │
└─────────────────────┘            │  • Donate page           │
                                   │  • Footer info           │
                                   │  • Social media icons    │
                                   └──────────────────────────┘
                                             │
                                             │
                                             ▼
Step 3: Edit Configuration          Step 4: Test & Deploy
┌──────────────────────────┐       ┌──────────────────────┐
│                          │       │                      │
│  Open charity-config.js  │───────▶  Open index.html    │
│  Replace placeholders    │       │  Test all links      │
│  Save changes            │       │  Deploy to web host  │
│                          │       │                      │
└──────────────────────────┘       └──────────────────────┘
```

## 🎯 Placeholder Values to Replace

| Current Value | What to Find | Where to Find It |
|---------------|--------------|------------------|
| `research@timothysyndrome.org` | Actual research email | Contact page |
| `+1 (XXX) XXX-XXXX` | Real phone number | Contact page |
| `[Street Address]` | Mailing address | Contact or About page |
| `[City], [State] [ZIP]` | Full address | Contact page |
| `XX-XXXXXXX` | Tax ID (EIN) | Donation page or Form 990 |
| `https://timothysyndrome.org/donate` | Actual donation URL | Test donation button |
| Facebook/Twitter/Instagram links | Real social accounts | Footer or header icons |

## 🔍 Visual Map of Portal Sections

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER: Logo + Navigation                                  │
│  [Timothy Syndrome Alliance]  Home Research Data Donate     │
└─────────────────────────────────────────────────────────────┘
│
│  HERO SECTION
│  • Gradient background (red → blue)
│  • "Advancing Research for Timothy Syndrome"
│  • 3 action buttons
│  • Statistics cards (147 variants, 238 patients...)
│
├──────────────────────────────────────────────────────────────
│  RESEARCH DATABASE SECTION
│  • Search bar ✓ WORKS
│  • Filter checkboxes ✓ WORKS
│  • Results display ✓ WORKS
│  • Export button ✓ WORKS
│
├──────────────────────────────────────────────────────────────
│  DATA BROWSER SECTION  
│  • 4 tabs (Variants/Genes/Phenotypes/Studies) ✓ WORKS
│  • Data tables ✓ WORKS
│  • View details buttons ✓ WORKS
│
├──────────────────────────────────────────────────────────────
│  RESOURCES SECTION
│  • Family Support card
│  • Clinical Guidelines card
│  • Genetic Testing card
│  • Educational Materials card
│
├──────────────────────────────────────────────────────────────
│  GET INVOLVED SECTION
│  • Clinical trials information
│  • Study descriptions
│  • Recruitment details
│
├──────────────────────────────────────────────────────────────
│  DONATION SECTION
│  • Preset amounts ($25, $50, $100...)
│  • "Donate Now" button → Links to donation page
│  • Tax-deductible notice
│
├──────────────────────────────────────────────────────────────
│  ABOUT SECTION
│  • Mission statement
│  • Timothy Syndrome information
│  • Database features
│
├──────────────────────────────────────────────────────────────
│  CONTACT SECTION ⬅️ UPDATE IN charity-config.js
│  • Email: research@timothysyndrome.org ✏️
│  • Phone: +1 (XXX) XXX-XXXX ✏️
│  • Address: [Update needed] ✏️
│  • Website: timothysyndrome.org
│
└──────────────────────────────────────────────────────────────
│  FOOTER
│  • Organization description
│  • Resource links
│  • Copyright notice
└─────────────────────────────────────────────────────────────┘
```

## ✅ Testing Checklist Visual

```
After updating charity-config.js, verify:

Navigation
├─ ☑ Home button scrolls to top
├─ ☑ Research scrolls to search section
├─ ☑ Data Browser scrolls to tables
├─ ☑ Resources scrolls to resource cards
├─ ☑ Get Involved scrolls to trials
└─ ☑ Donate scrolls to donation section

Search & Data
├─ ☑ Type "CACNA1C" → Shows 6 results
├─ ☑ Type "G406R" → Shows 1 result
├─ ☑ Export button downloads CSV file
├─ ☑ View Details opens modal popup
└─ ☑ Modal close button works

Tabs
├─ ☑ Variants tab shows variant table
├─ ☑ Genes tab shows gene summary
├─ ☑ Phenotypes tab shows phenotype data
└─ ☑ Studies tab shows research studies

Links & Contact
├─ ☑ Donation buttons link to correct page
├─ ☑ Email links open mail client
├─ ☑ Phone numbers are clickable (on mobile)
├─ ☑ PubMed links open in new tab
└─ ☑ Social media icons link correctly

Mobile
├─ ☑ Resize browser to phone size
├─ ☑ Layout adapts properly
├─ ☑ All buttons still accessible
└─ ☑ Text remains readable
```

## 🚀 Deployment Flow

```
Local → Testing → Git → Hosting
  ↓        ↓       ↓       ↓
Edit   Open in  Commit  GitHub Pages
files  browser  changes  or Web Host
                   │
                   └──→ LIVE PORTAL! 🎉
```

## 💡 Quick Tips

```
✓ DO:
  • Update charity-config.js first
  • Test locally before deploying
  • Verify all emails are correct
  • Check donation link works
  • Replace logo placeholder (optional)

✗ DON'T:
  • Edit index.html for contact info (use charity-config.js)
  • Deploy without testing
  • Include private contact information
  • Forget to update Tax ID for tax-deductible donations
```

## 🎯 Success Indicators

```
You're ready to deploy when:
├─ ✓ All placeholders in charity-config.js are updated
├─ ✓ Email addresses are verified
├─ ✓ Phone numbers are correct
├─ ✓ Donation link tested
├─ ✓ Tax ID added (for tax-deductible donations)
├─ ✓ Local testing completed
└─ ✓ All links work correctly

Then: DEPLOY! 🚀
```

---

## Need Help?

**Can't find information?**
→ Check SETUP_INSTRUCTIONS.md for detailed guidance

**Technical questions?**
→ Read README.md for complete documentation

**Feature questions?**
→ See CHARITY_FEATURES.md for full feature list

**Ready to start?**
→ Open charity-config.js and begin updating!

---

**The portal is 100% ready. You just need to add real contact information! 🎉**
