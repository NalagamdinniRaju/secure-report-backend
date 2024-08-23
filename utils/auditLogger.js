const fs = require('fs');
const path = require('path');

const auditLogger = (userId, reportId, action) => {
    const log = `${new Date().toISOString()} - User ${userId} performed ${action} on report ${reportId}\n`;
    fs.appendFileSync(path.join(__dirname, '..', 'logs', 'audit.log'), log);
};

module.exports = auditLogger;
