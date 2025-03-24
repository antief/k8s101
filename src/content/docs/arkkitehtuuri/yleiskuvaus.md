---
sidebar:
    order: 1
title: 'Yleiskuvaus'
author: 'Antti'
setup: |
  import { Picture } from "astro-imagetools/components";
---

![Kubernetes](https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg)


Kubernetes-arkkitehtuuri rakentuu **control plane** -komponenteista (hallintakerros) ja **työntekijäsolmuista** (worker nodes). Control plane vastaa klusterin tilan hallinnasta ja sovelluskokonaisuuksien ohjaamisesta, kun taas työntekijäsolmut ajavat varsinaisia konteissa toimivia sovelluksia.
