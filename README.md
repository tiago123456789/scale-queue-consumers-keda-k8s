## ABOUT

The project is proof of concept to test KEDA(kubernetes event drive autoscaling) to scale consumer application when queue has a lot messages queued to process.

## TECHONLOGIES

- Node.js
- Sqs
- Aws cli
- Kubernetes
- Helm(like npm or composer to manager projects in kubernetes)
- Minikube(to run kubernetes locally)


## INSTRUCTIONS 

- Clone project
- (Opcional) Execute command **docker image build -t name_image_here/version_here .** to build your own docker image.
- Execute command **minikube start** to start cluster kubernetes locally.
- Execute command **helm repo add kedacore https://kedacore.github.io/charts && helm repo update && helm install keda kedacore/keda --namespace keda --create-namespace** to install keda charts
- Execute command **kubectl apply -f ./k8s/** to deploy consumer application in cluster kubernetes. Execute the follow actions before:
    - Access file ./k8s/consumer.secrets.yml and fill information
    - Access file ./k8s/consumer.scaledobject and fill information