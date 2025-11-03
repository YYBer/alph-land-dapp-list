import { dapps, DappInfo } from '@alphland/dapps';

// Get all dApps
console.log(dapps);

// Filter by tag
const defiDapps = dapps.filter(dapp => dapp.tags.includes('DeFi'));

// Find a specific dApp
const ayin = dapps.find(dapp => dapp.url === 'ayin');

// Get verified dApps
const verifiedDapps = dapps.filter(dapp => dapp.verified);

// Get dApps with audits
const auditedDapps = dapps.filter(dapp => dapp.audits.length > 0);