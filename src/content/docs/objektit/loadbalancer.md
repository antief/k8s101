---
title: 'Load Balancer'
author: 'Antti'
---

- Erikoistapaus Service-objektista (`type: LoadBalancer`).  
- Kytkee ulkoisen liikenteen (esim. internetistä) Kubernetes-klusteriin ja jakaa liikenteen halutuille Podeille.  
- Yleinen ratkaisu tuotantoympäristöissä, erityisesti suuremmissa pilvipalveluissa kuten AWS, Azure tai GCP.