---
title: Pintura y dibujo
description: 
category: 
date: 2022-01-06 08:01:35 +0300
client: Club Presents
role: Graphic Designer
image: '/images/06-Pinturas/IMG20250127100235.jpg'
image_caption: 'Photo by [Freepik](https://www.freepik.com/)'
---

{% assign subfolder_images = site.data.images["06-Pinturas"]["images"] %}

<div class="gallery-box">
  <div class="gallery">
    {% for image in subfolder_images %}
      <img src="{{ image | relative_url }}" loading="lazy" alt="Project Image">
    {% endfor %}
  </div>
  <em>Les fotos les ha fet pare</em>
</div>