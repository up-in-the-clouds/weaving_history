---
title: "Leaflet Test"
layout: story
---

<div class="container-fluid px-0">
   <div class="row g-0 full-height">

   <div class="row g-0 full-height">
  <!-- Scrollspy (left, vertical dots) -->
  <div class="col-auto d-none d-lg-block position-relative">
    <nav id="story-scrollspy" class="position-fixed start-0 top-25 ps-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link small text-muted" href="#step1">●</a>
        </li>
        <li class="nav-item">
          <a class="nav-link small text-muted" href="#step2">●</a>
        </li>
        <li class="nav-item">
          <a class="nav-link small text-muted" href="#step3">●</a>
        </li>
        <li class="nav-item">
          <a class="nav-link small text-muted" href="#step4">●</a>
        </li>
        <li class="nav-item">
          <a class="nav-link small text-muted" href="#step5">●</a>
        </li>
      </ul>
    </nav>
  </div>

      <!-- Left text column: 1/3 -->
      <div class="col-lg-4 overflow-auto" id="scroll-column" data-bs-spy="scroll"
     data-bs-target="#story-scrollspy"
     data-bs-offset="100"
     tabindex="0">
         <div class="steps-container">
      <section class="step" id="step1" data-step="step1" data-x="900" data-y="600" data-zoom="0">
         <h4>Where is the story happening?</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <button type="button" class="btn btn-outline-dark mt-4" data-bs-toggle="offcanvas" data-bs-target="#infoPanel" aria-controls="infoPanel" data-bs-backdrop="false"> More info</button>

   </section>

   <section class="step" id="step2" data-step="step2" data-x="1400" data-y="600" data-zoom="1.25">
   <h4>What is happening?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button type="button" class="btn btn-outline-dark mt-4" data-bs-toggle="offcanvas" data-bs-target="#infoPanel01" aria-controls="infoPanel" data-bs-backdrop="false"> More info</button>

   </section>

   <section class="step" id="step3" data-step="step3" data-x="600" data-y="500" data-zoom="1">
   <h4>Who was involved?</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </section>

   <section class="step" id="step4" data-step="timeline">
   <h4>What else was happening?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </section>

   <section class="step" id="step5" data-step="video1">
   <h4>What other sources can be found?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </section>
   </div>
</div>
 <!-- Right image column: 2/3 -->
 <div class="col-lg-8 position-relative">

   <div id="map-slide" class="w-100 h-100 position-absolute top-0 start-0">
  <div id="map"></div>
</div>

<div id="timeline-slide" class="w-100 h-100 position-absolute top-0 start-0 d-none">
  <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=650" width="100%" height="768px" frameborder="0"></iframe>
</div>

<div id="video-slide" class="w-100 h-100 position-absolute top-0 start-0 d-none">
  <div id="yt-player" class="w-100 h-100"></div>
</div>

</div>

   </div>
</div>

<div class="offcanvas offcanvas-end offcanvas-first p-5" tabindex="-1" id="infoPanel" aria-labelledby="infoPanelLabel">
  <div class="offcanvas-header">
    <h3 id="infoPanelLabel" class="pt-5">Additional Information</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Here you can include more detailed content, images, or links.</p>
    <ul>
      <li>Key context</li>
      <li>Related stories</li>
      <li>Further reading</li>
    </ul>
    <img style="width:75%" src="{{ '/assets/images/moravia2.jpg' | relative_url }}">
  </div>
</div>

<div class="offcanvas offcanvas-end offcanvas-first p-5" tabindex="-1" id="infoPanel01" aria-labelledby="infoPanelLabel">
  <div class="offcanvas-header">
    <h3 id="infoPanelLabel" class="pt-5">Additional Information</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Here you can include more detailed content, images, or links.</p>
    <ul>
      <li>Key context</li>
      <li>Related stories</li>
      <li>Further reading</li>
    </ul>
        <button class="btn btn-secondary" onclick="openLayeredPanel('infoPanelLevel2')">
  Go deeper
</button>

  </div>
</div>

<div class="offcanvas offcanvas-end offcanvas-second p-5" tabindex="-1" id="infoPanelLevel2" aria-labelledby="infoPanelLevel2Label">
  <div class="offcanvas-header">
    <h4 id="infoPanelLevel2Label pt-5">Even More Info</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>

<script>
  function openLayeredPanel(id) {
    const panel = document.getElementById(id);
    const bsOffcanvas = new bootstrap.Offcanvas(panel);
    bsOffcanvas.show();
  }
</script>
