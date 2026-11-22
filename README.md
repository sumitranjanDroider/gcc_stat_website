# GCC-STAT Mobile App — Marketing, Support & Legal Portal

Official website project for the **GCC Stat** Employee Self-Service (ESS) Mobile Application on the Apple App Store.

---

## 1. Apple App Store Connect — Field Values Reference

When submitting the **GCC Stat** app on App Store Connect, use the following exact values:

### A. Copyright Field
> **App Store Connect Instruction:**  
> *"The name of the person or entity that owns the exclusive rights to your app, preceded by the year the rights were obtained (for example, '2008 Acme Inc.'). Do not provide a URL."*

**Recommended Entry (Copy & Paste):**
```text
2026 Statistical Centre for the Cooperation Council for the Arab Countries of the Gulf (GCC-Stat)
```
*(Alternative concise option if character-limited: `2026 GCC-Stat`)*

---

### B. Support URL
> **App Store Connect Instruction:**  
> *"A URL with support information for your app. This appears on your app’s product page once you release your app on the App Store."*

**Live GitHub Pages Entry:**
```text
https://sumitranjandroider.github.io/gcc_stat_website/support.html
```
*(Or custom domain `https://your-domain.com/support.html`)*

**Features included on this page:**
- GCC-STAT IT Help Desk direct contact (`support@gccstat.org`, phone `+968 2434 6400`)
- Working hours & headquarters in Muscat, Sultanate of Oman
- Interactive FAQ accordion for login issues, password reset, approval stages, biometric syncing, and payslips
- Ticket submission form with validation for reporting technical issues

---

### C. Marketing URL
> **App Store Connect Instruction:**  
> *"A URL with marketing information about your app. This URL will be visible on the App Store."*

**Live GitHub Pages Entry:**
```text
https://sumitranjandroider.github.io/gcc_stat_website/
```
*(Or custom domain `https://your-domain.com/`)*

**Features included on this page:**
- High-fidelity product showcase featuring official GCC-STAT branding & mobile app screenshots
- Value proposition and feature breakdown for employees & managers
- Enterprise security and compliance details (SAP HANA, TLS/HTTPS, Keychain storage)
- Dual language highlighting (Arabic RTL & English)

---

### D. Privacy Policy URL (Apple App Store Guideline 5.1.1 Mandatory Field & Google Play Store)
> **App Store Connect & Google Play Console Instruction:**  
> *"A URL that links to your company's privacy policy. A privacy policy is required for all apps."*

**Live GitHub Pages Entry (Both Stores):**
```text
https://sumitranjandroider.github.io/gcc_stat_website/privacy.html
```
*(Or custom domain `https://your-domain.com/privacy.html`)*

---

## 2. Google Play Store Console — Data Safety Form Alignment

This privacy policy is pre-configured to comply with Google Play's strict **User Data Policy**, **Data Safety section**, and **Account Deletion Requirement**:

| Google Play Console Question | Response to Select | Policy Justification in `privacy.html` |
|---|---|---|
| **Does your app collect or share any user data?** | **Yes** | Collects Name, Employee ID, Leave & Attendance records, and Payslips. |
| **Is all user data collected by your app encrypted in transit?** | **Yes** | Section 5: All traffic encrypted via TLS 1.3 / HTTPS. |
| **Do you provide a way for users to request that their data is deleted?** | **Yes** | Section 7: Account & Data Deletion request link via email/web form. |
| **Account Deletion URL (Play Console requirement)** | `https://your-domain.com/privacy.html` or `https://your-domain.com/support.html#contact-form` | Covered with designated request process. |
| **Does your app share data with third parties?** | **No** | Section 4 & 6: Zero third-party data sharing or commercial ad networks. |

---

## 3. Project File Structure

```
gcc_stat_website/
├── index.html             # Marketing URL landing page
├── support.html           # Support URL & Help Desk portal
├── privacy.html           # App Store required Privacy Policy
├── terms.html             # Terms of Service & Acceptable Use
├── package.json           # Lightweight local server configuration
├── README.md              # Documentation & App Store instructions
└── assets/
    ├── css/
    │   └── styles.css     # Institutional brand theme (GCC Green, Navy, Gold)
    ├── js/
    │   └── main.js        # Mobile menu toggle, FAQ accordions & support forms
    └── images/
        ├── logo.png       # Mobile app brand logo
        ├── logo-img.png   # Full horizontal GCC-STAT logo
        ├── app-icon.png   # High-resolution 1024x1024 app icon
        └── screenshots/   # Real screenshots from the mobile app
            ├── 01_login_screen.png
            ├── 02_dashboard_screen.png
            ├── 03_approvals_screen.png
            ├── 04_leave_quotas_screen.png
            ├── 05_salary_earnings_screen.png
            ├── 06_payslip_records_screen.png
            ├── 07_attendance_history_screen.png
            └── 08_employee_profile_screen.png
```

---

## 3. Local Preview & Testing

To preview the website locally on your computer:

### Option A: Using Node.js (Included)
```bash
cd /Users/madhukerganji/TenxProjects/gcc_stat_website
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Using Python
```bash
cd /Users/madhukerganji/TenxProjects/gcc_stat_website
python3 -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Option C: Direct Browser Open
Double-click `index.html` or `support.html` to open directly in Chrome, Safari, or Edge.

---

## 4. Hosting & Deployment Options

This website is built with vanilla HTML5, CSS3, and JavaScript, meaning it requires **zero build steps** and can be hosted anywhere for free or on your organization's domain:

1. **GitHub Pages (Free)**
   - Push this folder to a GitHub repository.
   - Go to **Settings > Pages** and select the main branch.
   - Your URLs will instantly be `https://<username>.github.io/<repo>/index.html` and `https://<username>.github.io/<repo>/support.html`.

2. **Cloudflare Pages / Vercel / Netlify**
   - Connect the repository or drag-and-drop the `gcc_stat_website` folder into Netlify Drop.
   - Link your custom domain (e.g. `gccstat.org` or `app.gccstat.org`).

3. **Enterprise IIS / Apache / Nginx**
   - Copy the files directly into your web server's `wwwroot` or `public_html` directory under `/app/` or a dedicated subdomain.
