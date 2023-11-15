# Helm Chart Deployment

## Prerequisites
You will need to authenticate to the account using the following command:
```bash
aws configure sso
SSO start URL [None]: https://truemark-blue.awsapps.com/start/
SSO Region [None]: us-east-2
```
In the browser window that opens up you will need to follow the instructions to complete the authentication process.
It will show you what roles you have access to and you will need to select `DevOpsEngineer`. For the rest of the choices you can just press enter.
You will need to take note of the **CLI Profile Name** as you will need it to run the following command that completes the authentication to the cluster:
```bash
aws eks --region us-east-2 update-kubeconfig --name truemark-stage --profile <CLI Profile Name>

# The following commands are used to verify you have access to the cluster.
kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
external-dns-5c685f9488-v76dr   1/1     Running   0          20h
```

## Deploying the Helm Chart
Now that you have access to the cluster before deploying the helm chart you can see what is there by running:
```bash
helm list
NAME    NAMESPACE       REVISION        UPDATED STATUS  CHART   APP VERSION
```

To deploy the helm chart run the following command from the root of the repo directory:
```bash
helm install hello-world ./helm-charts/truemark -f helm-charts/values-test.yml
```
