import cloudinaryModule from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import config from '../config';

const { cloud_name, api_key, api_secret } = config;

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (_req, _file) => 'test_cloudinary_id',
  },
});

const uploadImage = multer({ storage: storage });

export default uploadImage;
