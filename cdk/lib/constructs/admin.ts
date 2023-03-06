import { Construct } from 'constructs';
import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { BlockPublicAccess, Bucket, BucketEncryption, IBucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontWebDistribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { NodejsBuild } from 'deploy-time-build';
import { Auth } from './auth';
import { IHttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';

export interface AdminProps {
  readonly backendApi: IHttpApi;
  readonly auth: Auth;
  readonly accessLogBucket: IBucket;
}

export class Admin extends Construct {
  readonly cloudFrontWebDistribution: CloudFrontWebDistribution;
  constructor(scope: Construct, id: string, props: AdminProps) {
    super(scope, id);

    const assetBucket = new Bucket(this, 'AssetBucket', {
      encryption: BucketEncryption.S3_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    const distribution = new CloudFrontWebDistribution(this, 'Distribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: assetBucket,
            originAccessIdentity,
          },
          behaviors: [
            {
              isDefaultBehavior: true,
            },
          ],
        },
      ],
      errorConfigurations: [
        {
          errorCode: 404,
          errorCachingMinTtl: 0,
          responseCode: 200,
          responsePagePath: '/',
        },
        {
          errorCode: 403,
          errorCachingMinTtl: 0,
          responseCode: 200,
          responsePagePath: '/',
        },
      ],
      loggingConfig: {
        bucket: props.accessLogBucket,
        prefix: 'Admin/',
      },
    });

    new NodejsBuild(this, 'ReactBuild', {
      assets: [
        {
          path: '../admin',
          exclude: ['node_modules', 'dist'],
          commands: ['npm ci'],
          // prevent too frequent admin deployment, for temporary use
          // assetHash: 'admin_asset',
        },
      ],
      buildCommands: ['npm run bundle'],
      buildEnvironment: {
        VITE_BACKEND_API_URL: props.backendApi.apiEndpoint,
        VITE_USER_POOL_ID: props.auth.userPool.userPoolId,
        VITE_USER_POOL_CLIENT_ID: props.auth.client.userPoolClientId,
        VITE_AWS_REGION: Stack.of(props.auth.userPool).region,
      },
      destinationBucket: assetBucket,
      distribution,
      outputSourceDirectory: 'dist',
    });

    this.cloudFrontWebDistribution = distribution;
  }
}
