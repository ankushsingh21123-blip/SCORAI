#!/usr/bin/env node

/**
 * SCOR AI — Open Source MCP Server CLI
 * ────────────────────────────────────
 * Runs the SCOR AI Model Context Protocol server over stdio using the bundled JS.
 */

const path = require('path');

// Require the compiled MCP server bundle
require(path.join(__dirname, '../dist/mcp-server.js'));
