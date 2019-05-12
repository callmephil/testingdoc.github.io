export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({
    success: false,
    err: 'unauthorized API Call',
    auth: req.isAuthenticated()
  });
}
