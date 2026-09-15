const fs = require('fs');
const path = require('path');

const colorMap = {
  '0.01': '#030303', '0.02': '#050505', '0.025': '#060606', '0.03': '#080808', '0.04': '#0a0a0a',
  '0.05': '#0d0d0d', '0.055': '#0e0e0e', '0.06': '#0f0f0f', '0.07': '#121212', '0.08': '#141414',
  '0.09': '#171717', '0.1': '#1a1a1a', '0.11': '#1c1c1c', '0.12': '#1f1f1f', '0.14': '#242424',
  '0.15': '#262626', '0.16': '#292929', '0.18': '#2e2e2e', '0.2': '#333333', '0.22': '#383838',
  '0.24': '#3d3d3d', '0.25': '#404040', '0.28': '#474747', '0.3': '#4d4d4d', '0.32': '#525252',
  '0.35': '#595959', '0.38': '#616161', '0.4': '#666666', '0.42': '#6b6b6b', '0.44': '#707070',
  '0.45': '#737373', '0.5': '#808080', '0.55': '#8c8c8c', '0.56': '#8f8f8f', '0.6': '#999999',
  '0.65': '#a6a6a6', '0.7': '#b3b3b3', '0.75': '#bfbfbf', '0.8': '#cccccc', '0.85': '#d9d9d9',
  '0.9': '#e6e6e6', '0.96': '#f5f5f5'
};

const reverseMap = {};
for (const [alpha, hex] of Object.entries(colorMap)) {
  if (!reverseMap[hex]) {
    reverseMap[hex] = `rgba(255,255,255,${alpha})`;
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace hex codes back to rgba
      for (const hex of Object.keys(reverseMap)) {
        // use regex to match hex ignoring case, but ensure it's not a substring of another hex
        const regex = new RegExp(hex + '\\b', 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, reverseMap[hex]);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Reverted colors in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
