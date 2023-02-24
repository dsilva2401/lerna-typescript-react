const fs = require('fs');
const path = require('path');

// Load root variables
const envVars = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../env-vars.json'),
    'utf-8'
  )
)

// Generate env vars files
Object.keys(envVars.packages).forEach(packageKey => {
  const envFilePath = path.join(__dirname, `../packages/${packageKey}/.env`);
  const envVarsFile = Object.keys(envVars.packages[packageKey]).map(key => `${key}=${envVars.packages[packageKey][key]}`).join('\n');
  fs.writeFileSync(envFilePath, envVarsFile);
})