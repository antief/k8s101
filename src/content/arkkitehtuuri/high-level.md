---
title: 'Korkean tason arkkitehtuuri'
author: 'Antti'
---

Kubernetes-arkkitehtuuri rakentuu **control plane** -komponenteista (hallintakerros) ja **työntekijäsolmuista** (worker nodes). Control plane vastaa klusterin tilan hallinnasta ja sovelluskokonaisuuksien ohjaamisesta, kun taas työntekijäsolmut ajavat varsinaisia konteissa toimivia sovelluksia.

- **Control Plane**  
  - Sisältää Kubernetesin keskeiset hallintakomponentit, kuten API-palvelimen, suunnittelijan (scheduler) ja controller manager -prosessit.  
  - Tallentaa klusterin tilatiedot keskitetysti *etcd*-tietokantaan.  
  - Vastaa siitä, että klusteri toimii halutun mukaisesti (esim. oikea määrä sovelluspodeja on käynnissä).

- **Työntekijäsolmut (Worker Nodes)**  
  - Jokaisella solmulla on *kubelet*-prosessi, joka hallinnoi nodea ja pystyy käynnistämään tai sammuttamaan kontteja tarpeen mukaan.  
  - *kube-proxy* vastaa verkon reitityksestä ja sääntöjen soveltamisesta työntekijäsolmuilla.  
  - Sovellukset pyörivät *Podi*-yksiköissä, jotka ovat Kubernetesin pienin ajoaikainen yksikkö.