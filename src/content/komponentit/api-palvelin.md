---
title: 'Api Palvelin'
author: 'Antti'
---

- Vastaanottaa kaikki käskyt ja pyynnöt (esim. `kubectl`-komennot).  
- Kommunikoi taustalla muiden control plane -komponenttien kanssa.  
- On ainoa komponentti, joka pääsee suoraan tallentamaan ja lukemaan tietoa *etcd*-tietokannasta.