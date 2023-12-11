#!/usr/bin/env node
import {DataClassification, ExtendedApp} from 'truemark-cdk-lib/aws-cdk';
import {AppStack} from '../lib/app-stack';
import {StringHelper} from 'truemark-cdk-lib/helpers';

const app = new ExtendedApp({
  standardTags: {
    automationTags: {
      id: "helloworld-java",
      url: "https://github.com/truemark/helloworld-java.git"
    },
    costCenterTags: {
      businessUnitName: "technology",
      projectName: "helloworld-java"
    },
    securityTags: {
      dataClassification: DataClassification.Public
    },
    teamTags: {
      name: "technology"
    }
  }
});

let env = app.node.tryGetContext("env");
if (!env) {
  throw new Error("Missing env in context");
}
env = StringHelper.toPascalCase(env);

new AppStack(app, `HelloWorld${env}`, {
  environment: env,
  env: { account: app.account, region: app.region}
});

