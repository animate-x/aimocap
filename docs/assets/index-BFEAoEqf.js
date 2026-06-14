(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function p(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=p(e);fetch(e.href,a)}})();const n="https://huggingface.co/spaces/animate-x/aimocap",o="https://aimocap.net",t="https://github.com/animate-x/aimocap-video2motion";document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="brand" href="${o}" aria-label="AIMoCap website">
      <img src="/aimocap/assets/brand-logo.png" alt="" />
      <span>AIMoCap</span>
    </a>
    <nav>
      <a href="#demos">Demos</a>
      <a href="#framework">Framework</a>
      <a href="#compare">Compare</a>
      <a href="${t}">GitHub</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">AIMoCap Video2Motion</p>
        <h1>Turn video into motion for characters and robots.</h1>
        <p class="lead">
          A research-style demo page for AI video mocap, animation-ready FBX
          output, and Unitree G1 robot motion generation from a short clip.
        </p>
        <div class="actions">
          <a class="button primary" href="${n}">Try HF Space</a>
          <a class="button" href="${o}">Open Studio</a>
          <a class="button ghost" href="${t}">GitHub</a>
        </div>
      </div>

      <div class="hero-stage" aria-label="AIMoCap demo video">
        <div class="stage-toolbar">
          <span></span><span></span><span></span>
          <strong>source video → motion preview</strong>
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

      <div class="metric-row" aria-label="AIMoCap output highlights">
        <div><strong>Monocular</strong><span>video input</span></div>
        <div><strong>FBX</strong><span>animation output</span></div>
        <div><strong>Unitree G1</strong><span>robot motion JSON</span></div>
        <div><strong>Browser</strong><span>review workflow</span></div>
      </div>
    </section>

    <section id="demos" class="section">
      <div class="section-kicker">Demo Results</div>
      <div class="split-heading">
        <h2>One clip, target-aware motion outputs.</h2>
        <p>
          AIMoCap is arranged around the handoff: preview the result visually,
          then export the file format your downstream pipeline needs.
        </p>
      </div>
      <div class="showcase-grid">
        <article class="showcase-card large">
          <video
            src="/aimocap/assets/feature-video-motion-lite.mp4"
            poster="/aimocap/assets/feature-video-motion-poster.jpg"
            muted
            loop
            playsinline
            controls
          ></video>
          <div>
            <span class="tag">Animation</span>
            <h3>Video to FBX motion</h3>
            <p>Export humanoid motion for DCC review, cleanup, and game engine integration.</p>
          </div>
        </article>
        <article class="showcase-card large">
          <video
            src="/aimocap/assets/feature-video-robot-lite.mp4"
            poster="/aimocap/assets/feature-video-robot-poster.jpg"
            muted
            loop
            playsinline
            controls
          ></video>
          <div>
            <span class="tag">Robotics</span>
            <h3>Video to Unitree G1 motion</h3>
            <p>Generate robot-oriented motion JSON for simulation and motion collection review.</p>
          </div>
        </article>
      </div>
    </section>

    <section id="framework" class="section framework-section">
      <div class="section-kicker">Technical Framework</div>
      <div class="split-heading">
        <h2>From pixels to target-specific motion artifacts.</h2>
        <p>
          The public workflow separates source preparation, motion reconstruction,
          target adaptation, and review/export into clear stages.
        </p>
      </div>
      <div class="pipeline">
        <div class="pipeline-node">
          <span>01</span>
          <strong>Source video</strong>
          <p>Short monocular clip with a readable motion segment.</p>
        </div>
        <div class="pipeline-arrow">→</div>
        <div class="pipeline-node accent">
          <span>02</span>
          <strong>Motion core</strong>
          <p>Full-body motion reconstruction and temporal normalization.</p>
        </div>
        <div class="pipeline-arrow">→</div>
        <div class="pipeline-node">
          <span>03</span>
          <strong>Target adapter</strong>
          <p>Map motion into humanoid or robot-oriented output spaces.</p>
        </div>
        <div class="pipeline-arrow">→</div>
        <div class="pipeline-node output">
          <span>04</span>
          <strong>FBX / JSON</strong>
          <p>Review and download target-specific files.</p>
        </div>
      </div>
    </section>

    <section class="section feature-band">
      <article>
        <span class="tag">Markerless</span>
        <h3>No suit or marker setup</h3>
        <p>Start from a clean video clip instead of a capture stage.</p>
      </article>
      <article>
        <span class="tag">Target aware</span>
        <h3>Animation and robot outputs</h3>
        <p>Use the same source motion for FBX and Unitree G1 review.</p>
      </article>
      <article>
        <span class="tag">Review first</span>
        <h3>Inspect before download</h3>
        <p>Check generated motion visually before exporting files.</p>
      </article>
    </section>

    <section id="compare" class="section">
      <div class="section-kicker">Comparison</div>
      <div class="split-heading">
        <h2>More than keypoints, lighter than a capture stage.</h2>
        <p>AIMoCap fits teams that need motion artifacts quickly from ordinary video.</p>
      </div>
      <div class="compare-table">
        <div class="compare-row header">
          <span>Capability</span>
          <span>Pose repos</span>
          <span>Traditional mocap</span>
          <span>AIMoCap</span>
        </div>
        <div class="compare-row">
          <span>Input</span><span>Video/image</span><span>Capture stage</span><span>Short video</span>
        </div>
        <div class="compare-row">
          <span>Primary result</span><span>Keypoints</span><span>Motion data</span><span>FBX + robot JSON</span>
        </div>
        <div class="compare-row">
          <span>Robot target</span><span>Rare</span><span>Separate setup</span><span>Unitree G1</span>
        </div>
        <div class="compare-row">
          <span>Browser review</span><span>Limited</span><span>No</span><span>Yes</span>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <p class="eyebrow">Try the public workflow</p>
      <h2>Bring your own short motion clip.</h2>
      <p>
        Start with the HF Space demo, then move into AIMoCap Studio for the full
        browser workflow and downloads.
      </p>
      <div class="actions">
        <a class="button primary" href="${n}">Try HF Space</a>
        <a class="button" href="${o}">Open Studio</a>
      </div>
    </section>
  </main>

  <footer>
    <span>AIMoCap Video2Motion</span>
    <a href="${t}">GitHub</a>
    <a href="${o}">Website</a>
  </footer>
`;
