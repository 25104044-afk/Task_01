const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

// Any logged-in user can access this
router.get("/dashboard", protect, (req, res) => {
  res.status(200).json({
    message: `Welcome to your dashboard, ${req.user.name}!`,
    user: req.user,
  });
});

// Only users with role "admin" can access this
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.status(200).json({
    message: "Welcome to the admin panel",
  });
});

module.exports = router;
