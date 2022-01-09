# nodejsapi-on-k8s
Deploy a simple NodeJs app in a local Kubernetes cluster using Minukube. This microservice uses a simple docker image published on docker hub.  

Minikube provides a local Kubernetes to start playing.  
Kubectl is a command line tool used to run commands against Kubernetes clusters.  
Helm helps you manage Kubernetes applications, Helm is a package manager for Kubernetes.


**DEPENDENCIES - Pre-Requisite Tools**

● [Docker](https://docs.docker.com/get-docker/)  
● [Minibuke](https://minikube.sigs.k8s.io/docs/start/)  
● [Helm](https://helm.sh/docs/intro/install/#from-chocolatey-windows)  
● [Kubectl](https://kubernetes.io/)  


**HOW-TO:**  
● Clone the repo using your preferred method.  
for ex SSH:  
<code>git clone git@github.com:nachoy2k/nodejsapi-on-k8s.git</code>  

* Start Minikube  
<code>minikube start</code>

● Navigate to the folder and run:

 <code>helm package plan-a</code>  
 <code>helm install plan-a 'path_to_your_packaged_file\plan-a-0.1.0.tgz'</code>  
 <code>kubectl port-forward service/nodejs-chart 3000:3000</code>  
