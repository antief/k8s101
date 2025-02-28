---
sidebar:
    order: 1
title: 'Johdanto'
author: 'Antti'
next: false
setup: |
  import { Picture } from "astro-imagetools/components";
---

![Kubernetes](/k8s101/src/assets/kubernetes-horizontal-all-blue-color.png)

Kubernetes on konttien orkestrointialusta, joka on noussut tärkeäksi työkaluksi nykyaikaisten, 
pilvipohjaisten ja skaalautuvien sovellusten kehittämisessä. Sen tehtävä on automatisoida konttien
(esimerkiksi Docker-konttien) ajaminen, hallinta ja verkottaminen. Kubernetes mahdollistaa sovellusten 
dynaamisen skaalaamisen, itsekorjaavuuden ja joustavan käyttöönoton eri ympäristöissä.

Kubernetesin historia juontaa juurensa Googlen sisäisiin järjestelmiin (Borg ja Omega), ja nykyään 
se on avoimen lähdekoodin projekti, jota hallinnoi Cloud Native Computing Foundation [(CNCF)](https://www.cncf.io/). Ympäri 
maailmaa on laaja yhteisö, joka kehittää ja tukee Kubernetesia. Monien yritysten valinta 
konttiorkestroinnissa on juuri Kubernetes, koska se on laajalti dokumentoitu, tuettu ja käytetty 
eri pilvialustoilla sekä paikallisissa ympäristöissä.