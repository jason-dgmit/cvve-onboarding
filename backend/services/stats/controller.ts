import { ScanCommand } from '@aws-sdk/client-dynamodb';
import { ddb, TableName } from '../../common/dynamodb';
import { Handler } from '../../common/express';

export const getStats: Handler = async (req, res) => {
  // You should avoid DynamoDB scan on production. It is used here just for demo purpose.
  const tenentCount = await ddb.send(
    new ScanCommand({
      TableName,
      Select: 'COUNT',
      FilterExpression: 'begins_with(PK, :prefix)',
      ExpressionAttributeValues: {
        ':prefix': { S: 'TENENT' },
      },
    }),
  );

  const jobCount = await ddb.send(
    new ScanCommand({
      TableName,
      Select: 'COUNT',
      FilterExpression: 'begins_with(PK, :prefix)',
      ExpressionAttributeValues: {
        ':prefix': { S: 'JOB' },
      },
    }),
  );

  return { tenentCount: tenentCount.Count, jobCount: jobCount.Count };
};
