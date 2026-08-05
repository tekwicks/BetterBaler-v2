const fs = require('fs');
const path = require('path');

const data = {
  "issuance-of-sanitary-permit": `
Secure Sanitary Permits for Business and Health Certificates for Food and Non-Food Handlers

**Office or Division:** Municipal Health Office (Sanitation)
**Classification:** SIMPLE
**Types of Transaction:** G2C, G2B, G2G
**Who may avail:** All individuals who are employed as food/non-food handlers; All business establishments

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Sputum smear/Chest X-ray | LGU/Private Health Facility |
| Fecalysis | LGU/Private Health Facility |
| Urinalysis | LGU/Private Health Facility |
| Photocopy of recent cedula/valid ID | LGU/Private Health Facility |
| Receipt (Sanitary/Health Cert) | MTO |
| 1x1 pic | LGU/Private Health Facility |
| Recent water analysis (Refilling station/Ice plant/Resort) | Valid Water Testing Center |
| Drug Test (as requested) | Valid Drug testing facility |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Submit requirements to Rural Sanitary Inspector | 1. Receive and evaluate submitted requirements | none | 5 minutes | RSI/Designate |
| | 2. Enter to logbook | none | 5 minutes | RSI/Designate |
| | 3. Secure signature | none | 2 minutes | MHO |
| 2. Claim sanitary/health certificate | 4. Issue the certificate | none | 2 minutes | RSI/Designate |

**TOTAL TIME:** 14 Minutes
`,
  "outpatient-consultation": `
Provision of Medical services on Out Patient setting

**Office or Division:** Municipal Health Office
**Classification:** SIMPLE
**Types of Transaction:** G2C
**Who may avail:** All patients coming for check-up

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| ID / PhilHealth ID (if any) | Given |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Provide demographic data | 1. List name in the OPD logbook. Retrieval/Creation of Individual Treatment Record (ITR). Instruct patient to wait for name to be called. | none | 10 minutes | OPD Clerk |
| 2. Have vital signs taken | 2. Take body weight, height, temperature, and blood pressure. Take chief complaints. Assign patient to designated MD | none | 5 minutes | Nurse/Midwife on Duty |
| 3. State chief complaints | 3. Elicit signs and symptoms. PE if needed. Recommend needed diagnostic tests if available | none | 10 minutes | Medical Officer |
| 4. Ask for instructions/referral | 4. Provision of initial medications/Refer to higher health facility if necessary. Prescribe needed meds | none | 5 minutes | Medical Officer |
| 5. Present prescription | 5. Instruction on medicine use. Dispense medicine. List in logbook | none | 5 minutes | Pharmacy Clerk |

**TOTAL TIME:** 35 Minutes
`
};

const dir = path.join(__dirname, 'content', 'services', 'municipal-health-office');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

for (const [slug, content] of Object.entries(data)) {
  const filePath = path.join(dir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, 'utf8');
    const header = existing.split('\n')[0]; // preserve the h1 header
    fs.writeFileSync(filePath, `${header}\n\n${content}`);
    console.log(`Updated ${filePath}`);
  }
}
