import('@alphland/dapps').then(({ dapps }) => {
  // Get all dApps
  console.log('Total dApps:', dapps.length);
  console.log('\nFirst dApp media URLs:');
  console.log('Logo:', dapps[0].media.logoUrl);
  console.log('Banner:', dapps[0].media.bannerUrl);
  console.log('Preview:', dapps[0].media.previewUrl);

  // Test a few more to verify all are absolute URLs
  console.log('\nSecond dApp media URLs:');
  console.log('Logo:', dapps[1].media.logoUrl);
  console.log('Banner:', dapps[1].media.bannerUrl);
  console.log('Preview:', dapps[1].media.previewUrl);

  // Check if all URLs are absolute GitHub URLs
  const allAbsolute = dapps.every(dapp =>
    dapp.media.logoUrl.startsWith('https://raw.githubusercontent.com') &&
    dapp.media.bannerUrl.startsWith('https://raw.githubusercontent.com') &&
    dapp.media.previewUrl.startsWith('https://raw.githubusercontent.com')
  );

  console.log('\n✓ All media URLs are absolute GitHub URLs:', allAbsolute);

  // Filter by tag
  const defiDapps = dapps.filter(dapp => dapp.tags.includes('DeFi'));
  console.log('\n✓ DeFi dApps count:', defiDapps.length);

  // Find a specific dApp
  const ayin = dapps.find(dapp => dapp.url === 'ayin');
  console.log('✓ Found AYIN:', ayin?.name);

  // Get verified dApps
  const verifiedDapps = dapps.filter(dapp => dapp.verified);
  console.log('✓ Verified dApps count:', verifiedDapps.length);

  // Get dApps with audits
  const auditedDapps = dapps.filter(dapp => dapp.audits.length > 0);
  console.log('✓ Audited dApps count:', auditedDapps.length);
});