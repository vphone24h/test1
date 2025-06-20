const express = require('express');
const User = require('../models/User');

const router = express.Router();

// API lấy danh sách user chưa duyệt
// Bỏ middleware, ai cũng có thể truy cập (nếu muốn bảo mật thì cần middleware khác)
router.get('/pending-users', async (req, res) => {
  try {
    const pendingUsers = await User.find({ approved: false, role: 'user' });
    res.status(200).json(pendingUsers);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy danh sách user chưa duyệt', error: error.message });
  }
});

// API phê duyệt user (cập nhật approved = true)
// Bỏ middleware, ai cũng có thể truy cập (nếu muốn bảo mật thì cần middleware khác)

module.exports = router;
