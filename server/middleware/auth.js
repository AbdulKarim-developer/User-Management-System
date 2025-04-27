module.exports = function (req, res, next) {
    const apiKey = req.headers['x-api-key'];
  
    if (apiKey !== 'your-secure-api-key') {
      return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
  
    next();
};  