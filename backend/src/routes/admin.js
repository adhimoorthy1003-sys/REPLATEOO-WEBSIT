const auth = require('../middlewares/auth');
const router = require('express').Router();

router.get('/users', auth('admin'), async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
