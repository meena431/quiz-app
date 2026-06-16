import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Missing/bad header');
    return res.status(401).json({
      success: false,
      message: 'Not authorized, token missing',
    });
  }

  const token = authHeader.split(' ')[1]; 

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User Not Found',
      });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('JWT Verification Failed', err);
    return res.status(401).json({
      success: false,
      message: 'Token Invalid or Expired',
    });
  }
}
