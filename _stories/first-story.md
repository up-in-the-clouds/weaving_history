---
title: "Leaflet Test"
layout: story
---

<p style="color: red">DEBUG: This should show up</p>

<div class="container-fluid px-0">
  <div class="row g-0 full-height">

    <!-- Scrollspy (left dots) -->
    <div class="col-auto d-none d-lg-block position-relative">
      <nav id="story-scrollspy" class="position-fixed start-0 top-25 ps-3">
        <ul class="nav flex-column">
          {% for i in (1..5) %}
          <li class="nav-item">
            <a class="nav-link small text-muted" href="#step{{ i }}">●</a>
          </li>
          {% endfor %}
        </ul>
      </nav>
    </div>

    <!-- Left column (text) -->
    <div class="col-lg-4 overflow-auto" id="scroll-column" data-bs-spy="scroll"
         data-bs-target="#story-scrollspy"
         data-bs-offset="100"
         tabindex="0">
      <div class="steps-container">

{% include story/step.html
  id="step1"
  data_step="step1"
  x="900"
  y="600"
  zoom="0"
  title="Where is the story happening?"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  offcanvas_id="panel1"
%}

{% include story/step.html
  id="step2"
  data_step="step2"
  x="1400"
  y="600"
  zoom="1.25"
  title="What is happening?"
  text="Ut enim ad minim veniam, quis nostrud exercitation..."
  offcanvas_id="panel2"
%}

{% include story/step.html
  id="step3"
  data_step="step3"
  x="600"
  y="500"
  zoom="1"
  title="Who was involved?"
  text="Duis aute irure dolor in reprehenderit..."
%}

{% include story/step.html
  id="step4"
  data_step="timeline"
  x="0"
  y="0"
  zoom="1"
  title="What else was happening?"
  text="Excepteur sint occaecat cupidatat non proident..."
%}

{% include story/step.html
  id="step5"
  data_step="video1"
  x="0"
  y="0"
  zoom="1"
  title="What other sources can be found?"
  text="Excepteur sint occaecat cupidatat non proident..."
%}

      </div>
    </div>

    <!-- Right column (media) -->
    <div class="col-lg-8 position-relative">
      {% include story/slide-map.html %}
      {% include story/slide-timeline.html %}
      {% include story/slide-video.html %}
    </div>

  </div>
</div>

{% include story/panel-primary.html
  id="panel1"
  title="Additional Information"
  content="<p>Here you can include more detailed content, images, or links.</p><img src='/assets/images/moravia.jpg' style='width:75%' />"
  nested_button_id="panel3"
%}

{% include story/panel-secondary.html
  id="panel2"
  title="More Context"
  content="<p>This is more nested content for step 2.</p>"
%}

{% include story/panel-tertiary.html
  id="panel3"
  title="Even More Info"
  content="<p>This is the deepest layer of info for step 1.</p>"
%}
