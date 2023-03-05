import express, { Application } from 'express';

const app: Application = express();

app.use('/', (_req, res) => {
  res.send('Hello World! 👋');
});

const startServer = (port: string) => {
  try {
    app.listen(port, () => console.log('Server is live 🚀'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer(process.env.PORT ?? '4000');
