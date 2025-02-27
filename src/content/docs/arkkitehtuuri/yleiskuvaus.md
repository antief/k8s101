---
sidebar:
    order: 1
title: 'Yleiskuvaus'
author: 'Antti'
setup: |
  import { Picture } from "astro-imagetools/components";
---

![A local image](../../../assets/components-of-kubernetes.svg)


Kubernetes-arkkitehtuuri rakentuu **control plane** -komponenteista (hallintakerros) ja **työntekijäsolmuista** (worker nodes). Control plane vastaa klusterin tilan hallinnasta ja sovelluskokonaisuuksien ohjaamisesta, kun taas työntekijäsolmut ajavat varsinaisia konteissa toimivia sovelluksia.