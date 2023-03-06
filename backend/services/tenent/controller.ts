import { CreateTenentRequest, DeleteTenentRequest } from './type';
import { ddb, TableName } from '../../common/dynamodb';
import { Handler } from '../../common/express';
import { DeleteCommand, PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { runJob } from 'common/jobs';

export const createTenent: Handler = async (req, res) => {
  const request = req.body as CreateTenentRequest;
  const userId = res.locals.userId as string;
  const now = Date.now()
  const item = {
    PK: pk(userId),
    SK: now.toString(),
    id: request.id,
    businessName : request.businessName,
    businessType : request.businessType,
    status : request.status,
    brn : request.brn,
    ceo : request.ceo,
    cpo : request.cpo,
    address1 : request.address1,
    address2 : request.address2,
    postal : request.postal,
    phone : request.phone,
    updatedAt: now,
    createdAt: now,
  };
  const response = await ddb.send(
    new PutCommand({
      TableName,
      Item: item,
    }),
  );

  return item;
};

export const getTenents: Handler = async (req, res) => {
  const userId = res.locals.userId as string;
  const Tenents = await ddb.send(
    new QueryCommand({
      TableName,
      KeyConditionExpression: 'PK = :pk',
      ExpressionAttributeValues: {
        ':pk': pk(userId),
      },
      ScanIndexForward: false,
    }),
  );

  return { Tenents: Tenents.Items ?? [] };
};

export const deleteTenent: Handler = async (req, res) => {
  const userId = res.locals.userId as string;
  const request = req.body as DeleteTenentRequest;
  await ddb.send(
    new DeleteCommand({
      TableName,
      Key: {
        PK: pk(userId),
        SK: request.sk,
      },
    }),
  );

  return {};
};

export const runSampleJob: Handler = async (req, res) => {
  const userId = res.locals.userId as string;
  await runJob(userId, {
    jobType: 'sample',
    payload: {},
  });
};

const pk = (userId: string) => `Tenent#${userId};`;
