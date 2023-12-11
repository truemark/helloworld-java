import {ExtendedStack, ExtendedStackProps} from 'truemark-cdk-lib/aws-cdk';
import {Construct} from 'constructs';
import {Role, ServicePrincipal} from 'aws-cdk-lib/aws-iam';
import {StandardQueue} from 'truemark-cdk-lib/aws-sqs';

export interface AppStackProps extends ExtendedStackProps {}

export class AppStack extends ExtendedStack {

  constructor(scope: Construct, id: string, props: AppStackProps) {
    super(scope, id, props);

    const queue = new StandardQueue(this, 'Queue');

    const role = new Role(this, 'Role', {
      assumedBy: new ServicePrincipal('eks.amazonaws.com'),
    });
    queue.grantSendMessages(role);
  }
}
