---
title: Restauración
description: Damos nueva vida a objetos antiguos o dañados, restaurando muebles, piezas de cuero, o metales con técnicas que preservan su esencia original.
category: 
date: 2022-01-06 08:01:35 +0300
client: Club Presents
role: Graphic Designer
image: '/images/work-5.jpg'
image_caption: 'Photo by [Freepik](https://www.freepik.com/)'
---

{% assign subfolder_images = site.data.images["05-Restauracion"]["images"] %}

<div class="gallery-box">
  <div class="gallery">
    {% for image in subfolder_images %}
      <img src="{{ image | relative_url }}" loading="lazy" alt="Project Image">
    {% endfor %}
  </div>
  <em>Les fotos les ha fet pare</em>
</div>