import path from 'path';
// import mongoose from 'mongoose';
import express, { Express } from 'express';
import cors from 'cors';
import AdminJS from 'adminjs';
import { ADMIN, generateAdminJSConfig } from '../../admin';
import AdminJSExpress from '@adminjs/express';
import getHtml from '../../admin/views/get-html';
import Login from '../../admin/views/components/login';

const attachAdminJS = async (app: Express) => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);

  AdminJS.prototype.renderLogin = async function ({ action, errorMessage }) {
    return getHtml(adminJS, Login, {
      credentials: ADMIN,
      action: action ?? adminJS.options.loginPath,
      errorMessage,
    });
  };

  const adminRouter = AdminJSExpress.buildRouter(adminJS);

  app.use(adminJS.options.rootPath, adminRouter);
  app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
  app.use(express.static(path.join(__dirname, '../../../public')));
};

const start = async () => {
  const app = express();
  app.enable('trust proxy');
  app.use(cors({ credentials: true, origin: true }));

  await attachAdminJS(app);

  app.listen(process.env.PORT, async () => {
    console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
  });
};

start();
