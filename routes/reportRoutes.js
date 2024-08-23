// const express = require('express');
// const { viewReport, shareReport } = require('../controllers/reportController');
// const authMiddleware = require('../middleware/authMiddleware');
// const router = express.Router();

// router.get('/:reportId', authMiddleware, viewReport);
// router.post('/share', authMiddleware, shareReport);

// module.exports = router;
// routes/reportRoutes.js
// const express = require('express');
// const { getReports, getReportById } = require('../controllers/reportController');
// const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

// router.get('/', authMiddleware, getReports);
// router.get('/:id', authMiddleware, getReportById);

// module.exports = router;
// routes/reportRoutes.js
// below is the correct 
// const express = require('express');
// const { getReports, getReportById, shareReport } = require('../controllers/reportController');
// const authMiddleware = require('../middleware/authMiddleware');
// const { checkRole } = require('../middleware/roleMiddleware');

// const router = express.Router();

// router.get('/', authMiddleware, getReports);
// router.get('/:id', authMiddleware, getReportById);
// router.post('/share', authMiddleware, checkRole('Admin', 'Editor'), shareReport);

// module.exports = router;
// above is the correct 
// routes/reportRoutes.js
const express = require('express');
const { getReports, getReportById, shareReport } = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getReports);
router.get('/:id', authMiddleware, getReportById);
router.post('/share', authMiddleware, checkRole('Admin', 'Editor'), shareReport);

module.exports = router;