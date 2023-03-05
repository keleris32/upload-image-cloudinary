import dotenv from 'dotenv';

dotenv.config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

const config = {
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
};

export default config;
