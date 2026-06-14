(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const r="https://huggingface.co/spaces/animate-x/aimocap",s="https://aimocap.net",n="https://github.com/animate-x/aimocap-video2motion",l=[{label:"Animation",title:"Video to FBX motion",copy:"Generate humanoid motion files for DCC review, cleanup, and game-engine import.",src:"/aimocap/assets/feature-video-motion-lite.mp4",poster:"/aimocap/assets/feature-video-motion-poster.jpg"},{label:"Robotics",title:"Video to Unitree G1 motion",copy:"Retarget the same source clip into robot-oriented motion JSON for simulation review.",src:"/aimocap/assets/feature-video-robot-lite.mp4",poster:"/aimocap/assets/feature-video-robot-poster.jpg"}];document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="brand" href="${s}" aria-label="AIMoCap website">
      <img src="/aimocap/assets/brand-logo.png" alt="" />
      <span>AIMoCap</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#demos">Demos</a>
      <a href="#method">Method</a>
      <a href="#compare">Compare</a>
      <a href="${n}">GitHub</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">AIMoCap Video2Motion</p>
          <h1>
            <span>Video to motion</span>
            <span>for characters</span>
            <span>and robots.</span>
          </h1>
          <p class="lead">
            A public research-style showcase for converting a short monocular
            clip into animation-ready FBX, avatar-ready motion, and Unitree G1 robot output.
          </p>
          <div class="actions" aria-label="Primary links">
            <a class="button primary" href="${r}">Try HF Space</a>
            <a class="button" href="${s}">Open Studio</a>
            <a class="button subtle" href="${n}">Read GitHub Report</a>
          </div>
        </div>

        <div class="demo-console" aria-label="AIMoCap hero demo">
          <div class="console-top">
            <span>source video</span>
            <strong>motion preview</strong>
            <span>FBX + robot JSON</span>
          </div>
          <video
            src="/aimocap/assets/hero-video-lite-v2.mp4"
            poster="/aimocap/assets/hero-video-poster.jpg"
            autoplay
            muted
            loop
            playsinline
          ></video>
        </div>
      </div>

      <div class="metric-row" aria-label="AIMoCap output highlights">
        <div><strong>Monocular</strong><span>single video input</span></div>
        <div><strong>FBX</strong><span>animation export</span></div>
        <div><strong>Unitree G1</strong><span>robot motion JSON</span></div>
        <div><strong>API</strong><span>async job workflow</span></div>
      </div>
    </section>

    <section id="demos" class="section demos-section">
      <div class="section-heading">
        <p class="section-kicker">Demo Results</p>
        <h2>One clip, multiple motion targets.</h2>
        <p>
          AIMoCap is organized around the handoff: inspect motion visually,
          then export a target-specific artifact for animation or robotics workflows.
        </p>
      </div>
      <div class="showcase-grid">
        ${l.map(o=>`
              <article class="showcase-card">
                <video
                  src="${o.src}"
                  poster="${o.poster}"
                  muted
                  loop
                  playsinline
                  controls
                ></video>
                <div class="card-copy">
                  <span class="tag">${o.label}</span>
                  <h3>${o.title}</h3>
                  <p>${o.copy}</p>
                </div>
              </article>
            `).join("")}
      </div>
    </section>

    <section id="method" class="method-section">
      <div class="method-copy">
        <p class="section-kicker">Technical Framework</p>
        <h2>From pixels to target-specific motion artifacts.</h2>
        <p>
          The public workflow separates source preparation, motion reconstruction,
          target adaptation, and export review into a compact pipeline.
        </p>
      </div>
      <div class="pipeline" aria-label="AIMoCap technical pipeline">
        <article>
          <span>01</span>
          <strong>Source Clip</strong>
          <p>Upload a short, readable monocular video segment.</p>
        </article>
        <article>
          <span>02</span>
          <strong>Motion Core</strong>
          <p>Estimate full-body temporal motion from the selected clip.</p>
        </article>
        <article>
          <span>03</span>
          <strong>Target Adapter</strong>
          <p>Map motion to humanoid animation or Unitree G1 output space.</p>
        </article>
        <article>
          <span>04</span>
          <strong>Review Export</strong>
          <p>Inspect previews and download FBX or robot motion JSON.</p>
        </article>
      </div>
    </section>

    <section class="section feature-band">
      <article>
        <span class="tag">Markerless</span>
        <h3>No capture suit</h3>
        <p>Start with ordinary video rather than optical markers or a capture stage.</p>
      </article>
      <article>
        <span class="tag">Target aware</span>
        <h3>Animation plus robotics</h3>
        <p>Use one source motion for FBX animation and Unitree G1 motion review.</p>
      </article>
      <article>
        <span class="tag">Review first</span>
        <h3>Inspect before export</h3>
        <p>Evaluate visual results before downloading downstream files.</p>
      </article>
    </section>

    <section id="compare" class="section compare-section">
      <div class="section-heading">
        <p class="section-kicker">Technical Comparison</p>
        <h2>More than keypoints, lighter than a mocap stage.</h2>
        <p>
          The workflow is aimed at teams that need motion artifacts quickly from
          clean short videos.
        </p>
      </div>
      <div class="compare-table" role="table" aria-label="AIMoCap comparison table">
        <div class="compare-row header" role="row">
          <span>Capability</span>
          <span>Pose repos</span>
          <span>Traditional mocap</span>
          <span>AIMoCap</span>
        </div>
        <div class="compare-row" role="row">
          <span>Input</span><span>Video or image</span><span>Capture stage</span><span>Short video</span>
        </div>
        <div class="compare-row" role="row">
          <span>Primary result</span><span>Keypoints</span><span>Motion data</span><span>FBX + robot JSON</span>
        </div>
        <div class="compare-row" role="row">
          <span>Robot target</span><span>Rare</span><span>Separate setup</span><span>Unitree G1</span>
        </div>
        <div class="compare-row" role="row">
          <span>Browser review</span><span>Limited</span><span>Workflow dependent</span><span>Built in</span>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <p class="eyebrow">Try the public workflow</p>
      <h2>Bring your own short motion clip.</h2>
      <p>
        Start with the HF Space demo, then open AIMoCap Studio for the full
        browser workflow and downloadable motion outputs.
      </p>
      <div class="actions">
        <a class="button primary" href="${r}">Try HF Space</a>
        <a class="button" href="${s}">Open Studio</a>
      </div>
    </section>
  </main>

  <footer>
    <span>AIMoCap Video2Motion</span>
    <a href="${n}">GitHub</a>
    <a href="${s}">Website</a>
    <a href="${r}">HF Space</a>
  </footer>
`;
