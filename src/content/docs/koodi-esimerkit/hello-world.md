---
title: 'Hello world esimerkki'
author: 'Antti'
---
## Esimerkki koodi

Seuraavassa on yksinkertainen “Hello World” -sovellus, joka havainnollistaa Kubernetes-objektien käyttöä. Se sisältää **Deployment**-resurssin ja **Service**-resurssin, jonka tyyppinä on `LoadBalancer`.

> Huom. Jos ajat Kubernetesia paikallisesti (esim. Minikube), `LoadBalancer`-tyyppi ei välttämättä tuo julkista IP-osoitetta. Voit silti testata toimintaa käyttämällä esim. `minikube service hello-service`.

Luodaan hello-world.yaml seuraavalla sisällöllä:


```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: hello
  template:
    metadata:
      labels:
        app: hello
    spec:
      containers:
      - name: hello-container
        image: gcr.io/google-samples/hello-app:1.0
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello-service
spec:
  selector:
    app: hello
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 8080
```


## Lisääminen klusteriin

Lisätään sovellus klusteriin komennolla:
```
kubectl apply -f hello-world.yaml
```


## Vahvistetaan ohjelman lisäys

Tarkistetaan sovelluksen toiminta seuraavilla komennoilla:

```
kubectl get deployments
kubectl get services
kubectl get pods
```

Jos ohjelma asentui klusteriin oikein, tuloste näyttää jotain tämän suuntaista:

```
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
hello-deployment   2/2     2            2           1m

NAME             TYPE           CLUSTER-IP     EXTERNAL-IP       PORT(S)        AGE
hello-service    LoadBalancer   10.98.127.12   203.0.113.45       80:31234/TCP   1m

NAME                                 READY   STATUS    RESTARTS   AGE
hello-deployment-7f486c8bdc-64r2k    1/1     Running   0          1m
hello-deployment-7f486c8bdc-c82g5    1/1     Running   0          1m
```