const fs = require('fs');
const path = require('path');

const data = {
  "application-for-business-permit-new": `
Application for Mayor's Permit for a new business establishment.

**Office or Division:** Business Permit and Licensing Office
**Classification:** SIMPLE
**Types of Transaction:** G2B - Government to Business
**Who may avail:** Citizens who wish to establish a business

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| DTI/SEC/CDA Registration | DTI/SEC/CDA |
| Barangay Clearance for Business | Barangay Hall |
| Contract of Lease (If leased) / Tax Declaration (If owned) | Applicant |
| Zoning Clearance | MPDO |
| Sanitary Permit | MHO |
| Fire Safety Inspection Certificate | BFP |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Submit Application | 1. Verify Application and Requirements | None | 15 mins | BPLO Officer |
| 2. Proceed to Assessment | 2. Assess fees based on business nature | Varies | 15 mins | BPLO Assessor |
| 3. Pay Fees | 3. Receive Payment and issue Official Receipt | Refer to assessment | 10 mins | Treasury |
| 4. Claim Permit | 4. Release Mayor's Permit | None | 5 mins | BPLO Releasing Officer |

**TOTAL TIME:** 45 Minutes
`,
  "application-for-business-permit-renewal": `
Renewal of Mayor's Permit for existing business establishment.

**Office or Division:** Business Permit and Licensing Office
**Classification:** SIMPLE
**Types of Transaction:** G2B - Government to Business
**Who may avail:** Existing business owners

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Previous Mayor's Permit | Applicant |
| Barangay Clearance for Business | Barangay Hall |
| Sanitary Permit | MHO |
| Fire Safety Inspection Certificate | BFP |
| Income Tax Return (Previous Year) | BIR |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Submit Renewal Form | 1. Verify Application and Requirements | None | 10 mins | BPLO Officer |
| 2. Proceed to Assessment | 2. Assess fees | Varies | 15 mins | BPLO Assessor |
| 3. Pay Fees | 3. Receive Payment and issue Official Receipt | Refer to assessment | 10 mins | Treasury |
| 4. Claim Permit | 4. Release Mayor's Permit | None | 5 mins | BPLO Releasing Officer |

**TOTAL TIME:** 40 Minutes
`
};

const dir = path.join(__dirname, 'content', 'services', 'business-permit-and-licensing-office');
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
