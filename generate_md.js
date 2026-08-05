const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml'); // Assuming js-yaml is installed, otherwise I'll write a simple regex parser

const contentDir = path.join(__dirname, 'content');
const servicesDir = path.join(contentDir, 'services');

const dirs = fs.readdirSync(servicesDir);

for (const dir of dirs) {
  const indexPath = path.join(servicesDir, dir, 'index.yaml');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf-8');
    // very basic slug extraction
    const slugs = content.match(/slug:\s*'([^']+)'|slug:\s*"([^"]+)"/g);
    const names = content.match(/name:\s*'([^']+)'|name:\s*"([^"]+)"/g);
    
    if (slugs && names) {
      for (let i = 0; i < slugs.length; i++) {
        let slug = slugs[i].replace(/slug:\s*/, '').replace(/['"]/g, '');
        let name = names[i].replace(/name:\s*/, '').replace(/['"]/g, '');
        const mdPath = path.join(servicesDir, dir, `${slug}.md`);
        if (!fs.existsSync(mdPath)) {
          console.log(`Creating ${mdPath}`);
          fs.writeFileSync(mdPath, `# ${name}\n\nContent coming soon...\n`);
        }
      }
    }
  }
}
