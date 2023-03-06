require('dotenv').config({
  path: `${process.cwd()}/.env`,
});
import { PrismaClient } from '@prisma/client';
import { users, tenents } from './data';

const usersCount = 5;
const tenentsCount = 20;

const run = async () => {
  const prisma = new PrismaClient();
  await prisma.$connect();

  // const createdTenents = await prisma.$transaction(
  //   tenents(tenentsCount).map((tenent) => prisma.tenent.create({ data: tenent }))
  // );
  // await prisma.$transaction(
  //   createdTenents.map((tenent) => prisma.user.create({ data: users(1, { tenentId: tenent.id })[0] }))
  // );
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
