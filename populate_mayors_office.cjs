const fs = require('fs');
const path = require('path');

const data = {
  "request-for-mayors-clearance": `
**Office or Division:** MAYOR'S OFFICE
**Classification:** SIMPLE
**Types of Transaction:** G2C - Government to Citizens
**Who may avail:** Residents only

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Barangay Clearance | Barangay (where the applicant resides) |
| PNP Clearance | Baler Police Station |
| Mayor's Clearance Receipt | Municipal Treasury Office |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Submit Required Documents | 1.1 Receive, Verify and Encode | P200.00 | 10 minutes | Administrative Aide |
| | 1.2 Signing for Approval | None | 2 minutes | Municipal Mayor / Municipal Administrator |
| 2. Claim Mayor's Clearance | 2. Issue the Certificate | None | 3 minute | Administrative Aide |

**TOTAL TIME:** 15 Minutes (Excluding Waiting Time)
`,
  "request-for-transfer-of-cadaver": `
**Office or Division:** MAYOR'S OFFICE
**Classification:** SIMPLE
**Types of Transaction:** G2C - Government to Citizens
**Who may avail:** Citizens

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Death Certificate | MCR - Municipal Civil Registry Office |
| Transfer of Cadaver Receipt | Municipal Treasury Office |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Present Required Documents | 1.1 Receive, Verify and Encode | None | 10 minutes | Administrative Aide |
| | 1.2 Signing for Approval | None | 2 minute | Municipal Mayor / Municipal Administrator / Executive Assistant |
| 2. Claim Transfer of Cadaver | 2. Issue the Certificate | None | 3 minute | Administrative Aide |

**TOTAL TIME:** 15 Minutes (Excluding Waiting Time)
`,
  "request-endorsement-recommendation-letter": `
**Office or Division:** MAYOR'S OFFICE
**Classification:** SIMPLE
**Types of Transaction:** G2C - Government to Citizens
**Who may avail:** Residents of Baler

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Barangay Clearance | Designated Barangay |
| PNP Clearance | Baler Police Station |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Present Required Documents | 1.1 Receive, Client Interview and Encode | P200.00 | 10 minutes | Administrative officer |
| | 1.2 Signing for Approval | None | 2 minute | Municipal Mayor / Municipal Administrator |
| 2. Claim Request Documents | 2. Issue Endorsement/ Recommendation Letter | None | 3 minute | Administrative officer |

**TOTAL TIME:** 15 Minutes (Excluding Waiting Time)
`,
  "request-for-service-vehicle": `
**Office or Division:** MAYOR'S OFFICE
**Classification:** SIMPLE
**Types of Transaction:** G2C - Government to Citizens
**Who may avail:** Citizens

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Request Letter | From the Citizen |
| Referral Letter (For transfer of patient to other hospital) | Hospital |
| Discharge Paper (Pick-up of patient) | Hospital |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Present Required Documents | 1.1 Receive, Client Interview, Prepare Driver's Trip Ticket and Travel Order | None | 15 minutes | Administrative Aide / Administrative Officer |
| | 1.2 Signing for Approval | None | 1 minute | Municipal Mayor / Municipal Administrator / Executive Assistant |
| 2. Claim Request Documents | 2. Give Request Documents and Prepare for the Vehicle | None | 1 minute | Administrative Aide / Administrative Officer |

**TOTAL TIME:** 17 Minutes (Excluding Waiting Time)
`,
  "request-for-financial-assistance": `
The Mayor's Office offers financial assistance to indigent individuals or families with disease and/or illness health problems. Residents are being assisted depending on the seriousness of the medical condition that needs to be addressed. 
The Mayor's Office offers financial assistance to defray funeral and related expenses to indigent individual or families.

**Office or Division:** MAYOR'S OFFICE
**Classification:** SIMPLE
**Types of Transaction:** G2C - Government to Citizens
**Who may avail:** Residents of Baler

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| **If For Medical Assistance** | |
| Medical Certificate/ Medical Abstract/ Prescription | Hospital |
| Barangay Low Income or Indigency | Designated Barangay |
| 2 Xerox of Valid ID with 3 Signature of Beneficiary | From the Citizen |
| Filled up interview form and other attached documents | MSWDO - Municipal Social Welfare and Development Office |
| **If For Burial Assistance** | |
| Death Certificate/ Funeral Contract | MCR - Municipal Civil Registry Office |
| Barangay Low Income or Indigency | Designated Barangay |
| 2 Xerox of Valid ID with 3 Signature of Beneficiary | From the Citizen |
| Filled up interview form and other attached documents | MSWDO - Municipal Social Welfare and Development Office |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Present Required Documents | 1. Receive, Client Interview | None | 5 minutes | Administrative Aide / Executive Secretary |
| | 1.2 Delegate amount based on the severity of the patient's condition or the need of the client. Signing for Approval | None | 2 minute | Municipal Mayor / Executive Secretary |
| | 1.3 Prepare and Process Financial Assistance | None | 3-5 days | Administrative Aide / Executive Secretary |
| 2. Return to the Mayor's Office for the release of check/cash. | 2. Release the check/cash to the requesting client. | None | 3 minutes | Administrative Aide / Executive Secretary |

**TOTAL TIME:** 5 days and 10 Minutes (Excluding Waiting Time)
`
};

const dir = path.join(__dirname, 'content', 'services', 'mayors-office');
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
