---
title: "Leaflet Test"
layout: story
---

<div class="container-fluid px-0">
  <div class="row g-0 full-height">

    <!-- Scrollspy (dots on the left) -->
    <div class="col-auto d-none d-lg-block position-relative">
      <nav id="story-scrollspy" class="position-fixed start-0 top-25 ps-3">
        <ul class="nav flex-column">
          {%- assign rows = site.data.story -%}
          {%- for row in rows -%}
            <li class="nav-item">
              <a class="nav-link small text-muted" href="#step{{ row.id }}">●</a>
            </li>
          {%- endfor -%}
        </ul>
      </nav>
    </div>

    <!-- Left column: scrolling steps -->
    <div class="col-lg-4 overflow-auto"
         id="scroll-column"
         data-bs-spy="scroll"
         data-bs-target="#story-scrollspy"
         data-bs-offset="100"
         tabindex="0">
      <div class="steps-container">
        {%- for row in site.data.story -%}
          {%- include story/adapter.html row=row -%}
        {%- endfor -%}
      </div>
    </div>

    <!-- Right column: media area (map/timeline/video) -->
    <div class="col-lg-8 position-relative">
      {% include story/slide-map.html %}
      {% include story/slide-timeline.html %}
      {% include story/slide-video.html %}
    </div>

  </div>
</div>
