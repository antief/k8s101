---
sidebar:
    order: 3
title: 'Worker nodes'
author: 'Antti'
---

  - Jokaisella solmulla on *kubelet*-prosessi, joka hallinnoi nodea ja pystyy käynnistämään tai sammuttamaan kontteja tarpeen mukaan.  
  - *kube-proxy* vastaa verkon reitityksestä ja sääntöjen soveltamisesta työntekijäsolmuilla.  
  - Sovellukset pyörivät *Podi*-yksiköissä, jotka ovat Kubernetesin pienin ajoaikainen yksikkö.