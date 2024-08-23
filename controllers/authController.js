// // const User = require('../models/User');
// // const jwt = require('jsonwebtoken');
// // const bcrypt = require('bcryptjs');

// // exports.register = async (req, res) => {
// //     const { username, password } = req.body;
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = new User({ username, password: hashedPassword });
// //     await user.save();
// //     res.status(201).json({ message: 'User registered successfully' });
// // };

// // exports.login = async (req, res) => {
// //     const { username, password } = req.body;
// //     const user = await User.findOne({ username });
// //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
// //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token, user });
// // };
// // controllers/authController.js
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// exports.register = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user', error: error.message });
//   }
// };

// // exports.login = async (req, res) => {
// //   try {
// //     const { username, password } = req.body;
// //     const user = await User.findOne({ username });
// //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
// //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token, user: { id: user._id, username: user.username } });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error logging in', error: error.message });
// //   }
// // };
// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username }).populate('role');
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ 
//       token, 
//       user: {
//         id: user._id,
//         username: user.username,
//         role: user.role ? user.role.name : 'Unknown'
//       }
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Error logging in', error: error.message });
//   }
// };
// above is the corre 
// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};