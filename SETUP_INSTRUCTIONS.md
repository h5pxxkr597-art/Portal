# Portal Setup Instructions - Timothy Syndrome Alliance

## 🎯 Quick Setup Guide

Your portal is **99% complete**! You just need to add the actual charity contact information.

## 📋 Step 1: Gather Information from timothysyndrome.org

Visit **https://timothysyndrome.org** and collect the following:

### Required Information:

#### Contact Details
- [ ] Main contact email (e.g., info@timothysyndrome.org)
- [ ] Research coordinator email
- [ ] Clinical trials contact email
- [ ] Phone number(s)
- [ ] Physical mailing address

#### Donation Information
- [ ] Donation page URL (the actual link where people donate)
- [ ] Tax ID / EIN number (usually shown on donation page)
- [ ] PayPal/donation processor information if applicable

#### Social Media
- [ ] Facebook page URL
- [ ] Twitter/X handle
- [ ] Instagram handle
- [ ] LinkedIn company page

#### Programs & Research
- [ ] Names of active research studies
- [ ] Contact emails for each study
- [ ] Any specific program information

## 📝 Step 2: Update charity-config.js

Open the file `charity-config.js` and update the marked sections:

### 1. Contact Information

Find this section:
```javascript
contact: {
    research: {
        email: "research@timothysyndrome.org",  // ← UPDATE THIS
        phone: "+1 (XXX) XXX-XXXX"              // ← UPDATE THIS
    },
```

Replace with actual information from the website.

### 2. Address

Find this section:
```javascript
address: {
    street: "[Street Address]",  // ← UPDATE THIS
    city: "[City]",              // ← UPDATE THIS
    state: "[State]",            // ← UPDATE THIS
    zip: "[ZIP]",                // ← UPDATE THIS
    country: "USA"
}
```

### 3. Donation Page

Find this section:
```javascript
web: {
    mainSite: "https://timothysyndrome.org",
    donationPage: "https://timothysyndrome.org/donate", // ← VERIFY URL
```

### 4. Tax ID

Find this section:
```javascript
organization: {
    taxId: "XX-XXXXXXX", // ← UPDATE WITH ACTUAL 501(c)(3) EIN
```

### 5. Social Media

Find this section:
```javascript
social: {
    facebook: "https://facebook.com/timothysyndrome",   // ← UPDATE
    twitter: "https://twitter.com/timothysyndrome",     // ← UPDATE
    instagram: "https://instagram.com/timothysyndrome", // ← UPDATE
```

## 🔍 Where to Find This Information

### On timothysyndrome.org:

1. **Contact Page** → Email addresses, phone, mailing address
2. **Donate Page** → Donation URL, Tax ID/EIN
3. **About Page** → Organization description, mission
4. **Footer** → Usually has social media icons/links
5. **Research/Programs Page** → Study names and contacts

## 💡 Tips

- **Can't find something?** Leave it as placeholder for now
- **Email format**: Use the actual email addresses from the website
- **Phone format**: Use the format shown on their website
- **Social media**: Look for icons in the header or footer of timothysyndrome.org

## ✅ Step 3: Test Your Changes

After updating `charity-config.js`:

1. Open `index.html` in your browser (or run `python3 -m http.server 8000`)
2. Check the contact section at the bottom
3. Verify donation buttons link to the correct page
4. Test that email links open correctly

## 🚀 Step 4: Go Live!

Once everything is updated and tested:

### Option A: GitHub Pages (Easiest)
1. Commit your changes to GitHub
2. Go to repository Settings → Pages
3. Enable GitHub Pages
4. Your portal is live!

### Option B: Use Your Own Hosting
1. Upload all files to your web server via FTP
2. Point your domain to the folder
3. Test the live site

## 📞 What If Information is Missing?

If you can't find some information on timothysyndrome.org:

### For Internal Use (not publicly visible):
- Leave as placeholder - you can update later
- Use a general email like info@timothysyndrome.org

### For Public Portal:
You MUST have:
- ✅ At least one contact email
- ✅ Donation page URL (if accepting donations)
- ✅ Organization name

Optional but recommended:
- Phone number
- Mailing address  
- Social media links
- Tax ID (required for donations to be tax-deductible)

## 🎨 Optional: Add Your Logo

If you have a logo file:

1. Save it in the Portal folder (e.g., `logo.png`)
2. Open `index.html`
3. Find line ~20 with `<div class="logo-placeholder">`
4. Replace that entire div with:
   ```html
   <img src="logo.png" alt="Timothy Syndrome Alliance" style="height: 60px;">
   ```

## 📊 Current Placeholder Values

These are currently in the portal and need updating:

- ❌ `research@timothysyndrome.org` - May be correct, verify!
- ❌ `+1 (XXX) XXX-XXXX` - Need actual phone numbers
- ❌ `[Street Address]` - Need actual address
- ❌ `XX-XXXXXXX` - Need Tax ID/EIN
- ❌ Social media links - Need actual account URLs

## ✨ You're Almost Done!

The portal has:
- ✅ Professional design
- ✅ Full functionality (search, export, modals, tabs)
- ✅ Responsive mobile layout
- ✅ Charity features (donations, resources, trials)
- ✅ Comprehensive variant database

All you need is the real contact information! 🎉

---

**Need help?** Check README.md for detailed documentation.
**Questions about features?** See CHARITY_FEATURES.md and TESTING_COMPLETE.md.
