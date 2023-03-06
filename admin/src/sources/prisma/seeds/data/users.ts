import { faker } from '@faker-js/faker';

const users = (count: number) =>
  Array.from({ length: count }, () => ({
    name: faker.company.companyName(),
    email: faker.internet.email(),
  }));

export default users;
