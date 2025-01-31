---
title: Metales
description: Utilizamos el hierro y otros metales reciclados para fabricar nuestros artículos decorativos.
category: 
date: 2022-01-08 08:01:35 +0300
client: Music Festival
role: Graphic Designer
image: '/images/work-3.jpg'
image_caption: 'Photo by [Freepik](https://www.freepik.com/)'
---

{% assign subfolder_images = site.data.images["03-Metales"]["images"] %}

<div class="gallery-box">
  <div class="gallery">
    {% for image in subfolder_images %}
      <img src="{{ image | relative_url }}" loading="lazy" alt="Project Image">
    {% endfor %}
  </div>
  <em>Les fotos les ha fet pare</em>
</div>