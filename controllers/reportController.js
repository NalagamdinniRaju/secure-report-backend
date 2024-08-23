// // const Report = require('../models/Report');
// // const auditLogger = require('../utils/auditLogger');

// // exports.viewReport = async (req, res) => {
// //     const report = await Report.findById(req.params.reportId);
// //     if (!report) return res.status(404).json({ message: 'Report not found' });

// //     auditLogger(req.user.userId, req.params.reportId, 'view');
// //     res.json(report);
// // };

// // exports.shareReport = async (req, res) => {
// //     const { reportId, recipientEmail } = req.body;
// //     const report = await Report.findById(reportId);
// //     if (!report) return res.status(404).json({ message: 'Report not found' });

// //     // Share report logic here (e.g., email the report)

// //     auditLogger(req.user.userId, reportId, 'share');
// //     res.status(200).json({ message: 'Report shared successfully' });
// // };

// // controllers/reportController.js
// const Report = require('../models/Report');

// exports.getReports = async (req, res) => {
//   try {
//     const reports = await Report.find().select('title summary');
//     res.json(reports);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching reports', error: error.message });
//   }
// };

// exports.getReportById = async (req, res) => {
//   try {
//     const report = await Report.findById(req.params.id);
//     if (!report) return res.status(404).json({ message: 'Report not found' });
//     res.json(report);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching report', error: error.message });
//   }
// };

// exports.shareReport = async (req, res) => {
//   try {
//     const { reportId, recipientEmail } = req.body;
//     // Implement email sending logic here
//     console.log(`Sharing report ${reportId} with ${recipientEmail}`);
//     res.json({ message: 'Report shared successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error sharing report', error: error.message });
//   }
// };
// abov is the 
// controllers/reportController.js
const Report = require('../models/Report');

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().select('title summary');
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reports', error: error.message });
  }
};

exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching report', error: error.message });
  }
};

exports.shareReport = async (req, res) => {
  try {
    const { reportId, recipientEmail } = req.body;
    // Implement email sending logic here
    console.log(`Sharing report ${reportId} with ${recipientEmail}`);
    res.json({ message: 'Report shared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sharing report', error: error.message });
  }
};