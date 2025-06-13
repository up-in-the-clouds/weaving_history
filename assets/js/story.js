// -------------------------------------------
// Leaflet Map Setup for Static Image Overlay
// -------------------------------------------
// We're using L.imageOverlay with crs: L.CRS.Simple
// because this is a static image (not a real-world map).
//
// The coordinate system is based on pixel dimensions:
// [0,0] is top-left, [height,width] is bottom-right.
//
// If you want to use a geographic basemap instead (like OpenStreetMap),
// replace this setup with L.tileLayer() and remove crs: L.CRS.Simple.
//
// Example for tile-based map:
// const map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//
// For this prototype, we're keeping it image-based for flexibility.
//
// Global map reference

// -------------------------------------------
// Leaflet Map Setup for Static Image Overlay
// -------------------------------------------
let map;
let markers = {};
let ytPlayer;

document.addEventListener("DOMContentLoaded", function () {
  const scrollEl = document.getElementById("scroll-column");

  // Optional Bootstrap ScrollSpy init (if you still want it visually synced)
  bootstrap.ScrollSpy.getOrCreateInstance(scrollEl, {
    target: "#story-scrollspy",
    offset: 100,
  });

  const bounds = [
    [0, 0],
    [1364, 2048],
  ];

  map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomControl: true,
  });

  L.imageOverlay("/assets/images/moravia.jpg", bounds).addTo(map);
  map.fitBounds(bounds);
  map.setMaxBounds(bounds);

  markers = {
    step1: L.circleMarker([750, 700], { radius: 10, color: "red" }).bindPopup(
      "Upper VaLorem ipsum dolor sit amet..."
    ),
    step2: L.circleMarker([700, 1400], { radius: 10, color: "blue" }).bindPopup(
      "Lorem ipsum dolor sit amet..."
    ),
    step3: L.circleMarker([600, 500], { radius: 10, color: "green" }).bindPopup(
      "Lorem ipsum dolor sit amet..."
    ),
  };

  Object.values(markers).forEach((marker) => {
    marker.addTo(map);
    marker.setStyle({ opacity: 0, fillOpacity: 0 });
  });

  setupScrollama();
});

function setupScrollama() {
  const scroller = scrollama();

  scroller
    .setup({
      step: ".step",
      offset: 0.6,
      debug: false,
    })
    .onStepEnter((response) => {
      document
        .querySelectorAll(".step")
        .forEach((el) => el.classList.remove("is-active"));
      response.element.classList.add("is-active");

      const el = response.element;
      const x = parseFloat(el.dataset.x);
      const y = parseFloat(el.dataset.y);
      const zoom = parseFloat(el.dataset.zoom);
      const stepId = el.dataset.step;

      // View switching
      const mapSlide = document.getElementById("map-slide");
      const timelineSlide = document.getElementById("timeline-slide");
      const videoSlide = document.getElementById("video-slide");

      mapSlide.classList.add("d-none");
      timelineSlide.classList.add("d-none");
      videoSlide.classList.add("d-none");

      if (stepId === "timeline") {
        timelineSlide.classList.remove("d-none");
      } else if (stepId === "video1") {
        if (ytPlayer && ytPlayer.playVideo) {
          ytPlayer.seekTo(181);
          ytPlayer.playVideo();
        }
        videoSlide.classList.remove("d-none");
      } else {
        mapSlide.classList.remove("d-none");

        if (!isNaN(x) && !isNaN(y) && !isNaN(zoom)) {
          const currentZoom = map.getZoom();
          if (zoom === currentZoom) {
            map.panTo([y, x], { animate: true, duration: 1.2 });
          } else {
            map.flyTo([y, x], zoom, { animate: true, duration: 1.5 });
          }
        }

        Object.values(markers).forEach((m) =>
          m.setStyle({ opacity: 0, fillOpacity: 0 })
        );

        if (ytPlayer && ytPlayer.pauseVideo && stepId !== "video1") {
          ytPlayer.pauseVideo();
        }

        if (markers[stepId]) {
          markers[stepId].setStyle({ opacity: 1, fillOpacity: 0.8 });
          markers[stepId].openPopup();
        }
      }

      // ✅ Highlight the active scrollspy dot manually
      document
        .querySelectorAll("#story-scrollspy .nav-link")
        .forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${stepId}`) {
            link.classList.add("active");
          }
        });
    });
}

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player("yt-player", {
    videoId: "no5RgObBOO4",
    playerVars: {
      start: 181,
      autoplay: 0,
      rel: 0,
      mute: 1,
    },
    events: {
      onReady: function (event) {
        // optional preload handling
      },
    },
  });
}
