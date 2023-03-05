import express from 'express';
import uploadImage from '../middleware/uploadImage';

const uploadImageRouter = express.Router();

/**
 * @desc upload image
 * @route POST /api/upload
 */
uploadImageRouter.post(
  '/upload',
  uploadImage.single('picture'),
  async (req, res) => {
    if (req?.file) {
      return res.json({ url: req.file?.path });
    }

    return res.send('Error');
  }
);
