const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');
const servicesDir = path.join(contentDir, 'services');

const dirs = fs.readdirSync(servicesDir);

for (const dir of dirs) {
  const dirPath = path.join(servicesDir, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;
  
  const indexPath = path.join(dirPath, 'index.yaml');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf-8');
    // very basic slug extraction
    const slugs = content.match(/slug:\s*'([^']+)'|slug:\s*"([^"]+)"/g) || [];
    const names = content.match(/name:\s*'([^']+)'|name:\s*"([^"]+)"/g) || [];
    
    if (slugs.length && names.length) {
      for (let i = 0; i < Math.min(slugs.length, names.length); i++) {
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
