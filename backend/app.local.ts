process.env.TABLE_NAME = 'onboarding';
process.env.AWS_REGION = 'ap-northeast-2';
process.env.DYNAMODB_ENDPOINT = 'http://localhost:8000';
process.env.JOB_QUEUE_NAME = 'onboarding';

import { ddb, TableName } from './common/dynamodb';
import { CreateTableCommand } from '@aws-sdk/client-dynamodb';
import app from './apps/local';

const port = 3001;

// https://github.com/wclr/ts-node-dev/issues/120
process.on('SIGTERM', () => {
  process.exit(1);
});

const main = async () => {
  try {
    // Initialize the main table
    await ddb.send(
      new CreateTableCommand({
        TableName,
        AttributeDefinitions: [
          { AttributeName: 'PK', AttributeType: 'S' },
          { AttributeName: 'SK', AttributeType: 'S' },
        ],
        KeySchema: [
          { AttributeName: 'PK', KeyType: 'HASH' },
          { AttributeName: 'SK', KeyType: 'RANGE' },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      }),
    );
  } catch (e) {
    console.log(e);
  }

  app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  });
};

main();
