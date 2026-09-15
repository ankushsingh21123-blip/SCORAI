import { runBrowserAudit } from './src/lib/scorai/browser-agent';

async function main() {
  console.log('Starting Interactive Agent Test...');
  // Ensure we run with headless: false for interactive mode
  process.env.SCORAI_INTERACTIVE = 'true';

  try {
    const report = await runBrowserAudit('http://localhost:3000', (msg) => {
      console.log(`[Status] ${msg}`);
    }, { interactive: true });

    console.log('\n--- Audit Complete ---');
    console.log(`Found ${report.findings.length} findings.`);
    if (report.findings.length > 0) {
      console.log('Sample finding:', report.findings[0]?.description);
    }
    
    // Process exits
    process.exit(0);
  } catch (e) {
    console.error('Test Failed:', e);
    process.exit(1);
  }
}

main();
