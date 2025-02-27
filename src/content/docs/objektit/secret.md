---
title: 'Secret'
author: 'Antti'
---

- Vastaava idea kuin ConfigMap, mutta *Secret* on tarkoitettu salaisten tietojen (esim. salasanat, API-avaimet) tallennukseen.  
- Kubernetes pyrkii pitämään Secretin sisällön salattuna lepotilassa sekä kuljetuksen aikana (kun noudetaan klusterin sisällä).