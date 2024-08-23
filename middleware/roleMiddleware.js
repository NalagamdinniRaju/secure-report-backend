// // middleware/roleMiddleware.js
// const Role = require('../models/Role');

// exports.checkRole = (...allowedRoles) => {
//   return async (req, res, next) => {
//     try {
//       const user = req.user; // Assume you set this in your auth middleware
//       const role = await Role.findById(user.role);
      
//       if (!role) {
//         return res.status(403).json({ message: 'Role not found' });
//       }

//       if (allowedRoles.includes(role.name)) {
//         next();
//       } else {
//         res.status(403).json({ message: 'Access denied' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Error checking role', error: error.message });
//     }
//   };
// };
// middleware/roleMiddleware.js
exports.checkRole = (...allowedRoles) => {
    return (req, res, next) => {
      if (allowedRoles.includes(req.user.role)) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied' });
      }
    };
  };