import AdminJS from 'adminjs';
import { Database as PrismaDatabase, Resource as PrismaResource } from '@adminjs/prisma';
import locale from './locale';
import theme from './theme';

import { CreateUserResource, CreateTenentResource } from '../sources/prisma/resources';

import { DESIGN_SYSTEM_EXAMPLE_PAGE, SOME_STATS } from './components.bundler';
// import { CryptoDatabase } from '../sources/rest/crypto-database';

AdminJS.registerAdapter({
  Database: PrismaDatabase,
  Resource: PrismaResource,
});

export const menu = {
  rest: { name: 'REST', icon: 'Purchase' },
  prisma: { name: 'Onboarding', icon: 'Industry' },
};

export const generateAdminJSConfig = () => ({
  locale,
  assets: {
    styles: ['/custom.css'],
    scripts: process.env.NODE_ENV === 'production' ? ['/gtm.js'] : [],
  },
  rootPath: '/admin',
  branding: {
    companyName: 'AdminJS demo page',
    favicon: '/favicon.ico',
    theme,
  },
  version: {
    admin: true,
    app: '2.0.0',
  },
  resources: [
    // custom
    // new CryptoDatabase(),

    // prisma
    CreateUserResource(),
    CreateTenentResource(),
  ],
  pages: {
    'Custom Page': {
      component: SOME_STATS,
      icon: 'Purchase',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: async (request, response, context) => {
        return {
          text: 'I am fetched from the backend',
        };
      },
    },
    'Design system example': {
      component: DESIGN_SYSTEM_EXAMPLE_PAGE,
      icon: 'Workspace',
    },
  },
});

export const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

// export const createAdmin = async () => {
//   const admin = await AdminModel.findOne({ email: ADMIN.email });
//   if (!admin) {
//     await AdminModel.create({
//       email: ADMIN.email,
//       password: await argon2.hash(ADMIN.password),
//     });
//   }
// };
