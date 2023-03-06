import * as cdk from "aws-cdk-lib";
import { Template } from 'aws-cdk-lib/assertions';
import { CvveOnboardingServerlessStarter } from "../lib/cvve-onboarding-serverless-starter";

test("Snapshot test", () => {
  const app = new cdk.App();
  const stack = new CvveOnboardingServerlessStarter(app, "TestStack");
  const template = Template.fromStack(stack);
  expect(template).toMatchSnapshot();
});
