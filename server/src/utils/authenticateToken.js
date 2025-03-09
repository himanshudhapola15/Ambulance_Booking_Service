const authenticateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(400).json({ message: 'Invalid token format.' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied.' });
  }

  if (token !== process.env.SECRET_TOKEN) {
    return res.status(403).json({ message: 'Invalid token.' });
  }

  next();
};

module.exports = authenticateToken;

