---
title: Telas
description: Seleccionamos las mejores telas para confeccionar nuestros productos, ya sean bolsos, neceseres, cortinas, manteles, delantales, o tapices para muebles. 
category: 
date: 2022-01-07 08:01:35 +0300
client: Music Festival
role: Graphic Designer
image: '/images/work-4.jpg'
image_caption: 'Photo by [Freepik](https://www.freepik.com/)'
---


{% assign subfolder_images = site.data.images["04-Telas"]["images"] %}

<div class="gallery-box">
  <div class="gallery">
    {% for image in subfolder_images %}
      <img src="{{ image | relative_url }}" loading="lazy" alt="Project Image">
    {% endfor %}
  </div>
  <em>Les fotos les ha fet pare</em>
</div>