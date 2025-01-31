---
title: Madera
description: Transformamos distintos tipos de madera, ya sean nobles o recicaldas, utilizando una amplia variedad de técnicas que toman en cuenta el valor de nuestros recursos naturales. Cuidamos los detalles y acabados en cada uno de nuestros proyectos.
category: 
date: 2022-01-10 08:01:35 +0300
client: Music Fest
role: Graphic Designer
image: '/images/work-1.jpg'
image_caption: 'Photo by [Freepik](https://www.freepik.com/)'
---





{% assign subfolder_images = site.data.images["01-Madera"]["images"] %}

<div class="gallery-box">
  <div class="gallery">
    {% for image in subfolder_images %}
      <img src="{{ image | relative_url }}" loading="lazy" alt="Project Image">
    {% endfor %}
  </div>
  <em>Les fotos les ha fet pare</em>
</div>