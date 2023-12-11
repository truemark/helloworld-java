import {ExtendedStack, ExtendedStackProps} from 'truemark-cdk-lib/aws-cdk';
import {Construct} from 'constructs';
import {Role, ServicePrincipal} from 'aws-cdk-lib/aws-iam';
import {StandardQueue} from 'truemark-cdk-lib/aws-sqs';
import {StringHelper} from 'truemark-cdk-lib/helpers';

export interface AppStackProps extends ExtendedStackProps {
  readonly environment: string
}

export class AppStack extends ExtendedStack {

  constructor(scope: Construct, id: string, props: AppStackProps) {
    super(scope, id, props);

    const queue = new StandardQueue(this, 'Queue');

    const role = new Role(this, 'Role', {
      roleName: `helloworld-java-${props.environment.toLowerCase()}`,
      assumedBy: new ServicePrincipal('eks.amazonaws.com'),
    });
    queue.grantSendMessages(role);
  }
}
