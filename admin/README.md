## Onboarding Admin

## Starting the app

First, install all dependencies

```bash
yarn install --frozen-lockfile
```

Make sure you have all environmental variables set up (read the previous paragraph).

Then create postgres database and run migrations:

```bash
$ npx prisma generate     # # this sets up Prisma Client in your node_modules
$ yarn migration:up
```

Note: If you see the error below when Prisma MySQL migration is run:
```
Error: P1017: Server has closed the connection.
```
Please wait a minute or two for the MySQL server to start and retry.

In the end, you can launch the app

```bash
$ yarn build:watch      # keep it running if developing
$ yarn start:dev        # in a separate terminal tab, concurrently
```

By default the app will be available under: `http://localhost:3000/admin`

#### prisma
- `npx prisma migrate dev --schema prisma/schema.prisma`
