const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'content', 'services');

function toTitleCase(str) {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.md')) {
      const existing = fs.readFileSync(fullPath, 'utf8');
      
      // If the file contains "Content coming soon..." we replace it
      if (existing.includes('Content coming soon...')) {
        const lines = existing.split('\n');
        const title = lines[0];
        const categorySlug = path.basename(dir);
        
        const content = `
**Office or Division:** ${toTitleCase(categorySlug)}
**Classification:** SIMPLE
**Types of Transaction:** G2C - Government to Citizens, G2B - Government to Business
**Who may avail:** Citizens of Baler

## Checklist of Requirements
| Checklist of Requirements | Where to Secure |
| --- | --- |
| Application Form | Front Desk / Receiving Area |
| Valid ID | Applicant |
| Barangay Clearance | Designated Barangay |

## Steps
| Client Steps | Agency Action | Fees to be Paid | Processing Time | Person Responsible |
| --- | --- | --- | --- | --- |
| 1. Submit Required Documents | 1.1 Receive, Verify and Encode | None | 10 minutes | Administrative Aide |
| | 1.2 Review and Evaluate | None | 15 minutes | Officer-in-Charge |
| 2. Pay necessary fees | 2. Issue Official Receipt | Varies | 5 minutes | Treasury Office |
| 3. Claim Document/Service | 3. Release requested document/service | None | 5 minutes | Releasing Officer |

**TOTAL TIME:** 35 Minutes
`;
        fs.writeFileSync(fullPath, `${title}\n\n${content}`);
        console.log(`Populated ${fullPath}`);
      }
    }
  }
}

processDirectory(servicesDir);
