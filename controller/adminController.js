const jwt = require('jsonwebtoken');

const loginAdmin = (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: 'Invalid password' });
  }
};

const verifyAdmin = (req, res) => {
  return res.json({ message: 'Token is valid. Admin verified.' });
};

module.exports = { loginAdmin, verifyAdmin };
