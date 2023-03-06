import AdminJSExpress from '@adminjs/express';
import AdminJS from 'adminjs';
import { Router } from 'express';

export const expressRouter = () => {
  const admin = new AdminJS({});
  return AdminJSExpress.buildRouter(admin);
};
