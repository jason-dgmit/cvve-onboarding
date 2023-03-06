#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CvveOnboardingServerlessStarter } from '../lib/cvve-onboarding-serverless-starter';

const app = new cdk.App();
new CvveOnboardingServerlessStarter(app, 'CvveOnboardingServerlessStarter', {});

// import { Aspects } from 'aws-cdk-lib';
// import { AwsSolutionsChecks } from 'cdk-nag';
// Aspects.of(app).add(new AwsSolutionsChecks());
