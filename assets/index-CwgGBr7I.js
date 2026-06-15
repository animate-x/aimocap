(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(o){if(o.ep)return;o.ep=!0;const a=c(o);fetch(o.href,a)}})();const n="https://huggingface.co/spaces/animtex/AIMoCap?utm_source=github_pages&utm_medium=project_page&utm_campaign=public_preview",t="https://aimocap.net/?utm_source=github_pages&utm_medium=project_page&utm_campaign=public_preview",s="https://github.com/animate-x/aimocap-video2motion",l=[{label:"Character animation",title:"Video to FBX",copy:"Recover stable humanoid motion from monocular video for DCC and game-engine review.",src:"/aimocap/assets/feature-video-motion-lite.mp4",poster:"/aimocap/assets/feature-video-motion-poster.jpg"},{label:"Robot motion",title:"Video to Unitree G1",copy:"Retarget reconstructed motion into robot-oriented JSON for simulation and validation.",src:"/aimocap/assets/feature-video-robot-lite.mp4",poster:"/aimocap/assets/feature-video-robot-poster.jpg"}],d=[{step:"01",title:"Single-frame pose encoder",copy:"Extract keypoints, heatmaps, and body evidence from each RGB frame.",accent:"green"},{step:"02",title:"Temporal Transformer",copy:"Model sequence embeddings across time to suppress jitter and recover occluded frames.",accent:"blue"},{step:"03",title:"Diffusion motion prior",copy:"Denoise latent pose sequences and repair implausible full-body motion.",accent:"violet"},{step:"04",title:"Kinematic retargeting",copy:"Apply contact cleanup, IK constraints, and target-specific export mapping.",accent:"amber"}],m=[{name:"AIMoCap",href:t,score:"4.0 / 5 goal",free:"HF Space public demo",price:"Studio pricing on site",fit:"Video to FBX plus Unitree G1 motion output"},{name:"Rokoko Vision",href:"https://www.rokoko.com/products/video",score:"3.5 / 5",free:"Free single-camera clips under 15s",price:"Basic from $10/mo billed yearly",fit:"Creator-friendly video mocap and Rokoko workflow"},{name:"DeepMotion Animate 3D",href:"https://www.deepmotion.com/animate-3d",score:"3.5 / 5",free:"Freemium 60 animation seconds/month",price:"Paid creator and API tiers",fit:"Browser video-to-animation for creators"},{name:"Plask",href:"https://plask.ai/pricing",score:"3.0 / 5",free:"15 seconds daily limit",price:"Standard $18/mo billed yearly",fit:"Quick web-based character animation workflow"},{name:"Move AI",href:"https://www.move.ai/",score:"4.0 / 5",free:"Move One free clips up to 30s",price:"Starter $18/mo + VAT",fit:"Higher-end markerless capture workflows"}],u=[{label:"Export first",title:"FBX and robot motion",copy:"Most video mocap demos stop at pose tracks. AIMoCap is positioned around downstream files for animation and Unitree G1 review."},{label:"Research readable",title:"AI motion pipeline",copy:"The public report explains pose encoding, temporal modeling, diffusion refinement, and retargeting in one place."},{label:"Try before signup",title:"HF Space public demo",copy:"The project page sends developers to a public demo path before they decide whether to use the fuller Studio workflow."}];document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="brand" href="${t}" aria-label="AIMoCap website">
      <img src="/aimocap/assets/brand-logo.png" alt="" />
      <span>AIMoCap</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#demos">Demos</a>
      <a href="#method">Method</a>
      <a href="#compare">Compare</a>
      <a href="#market">Products</a>
      <a href="${s}">GitHub</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-layout">
        <div class="hero-copy">
          <p class="eyebrow">AIMoCap Video2Motion</p>
          <h1>
            <span>Video to motion</span>
            <span>for animation</span>
            <span>and robots.</span>
          </h1>
          <p class="lead">
            Convert a short monocular clip into temporally stable FBX animation,
            avatar motion, and Unitree G1 robot motion outputs.
          </p>
          <div class="actions" aria-label="Primary links">
            <a class="button primary" href="${n}">Try HF Space</a>
            <a class="button" href="${t}">Open Studio</a>
            <a class="button quiet" href="${s}">Technical Report</a>
            <a class="button quiet" href="${s}">Star on GitHub</a>
          </div>
        </div>

        <div class="hero-demo" aria-label="AIMoCap demo video">
          <div class="demo-bar">
            <span>Input video</span>
            <strong>Motion reconstruction</strong>
            <span>FBX / JSON</span>
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

      <div class="hero-facts" aria-label="AIMoCap highlights">
        <div><span>Input</span><strong>Monocular RGB video</strong></div>
        <div><span>Core</span><strong>Pose + temporal model</strong></div>
        <div><span>Prior</span><strong>Diffusion refinement</strong></div>
        <div><span>Exports</span><strong>FBX and Unitree G1 JSON</strong></div>
      </div>
    </section>

    <section id="demos" class="section demos-section">
      <div class="section-heading">
        <p class="section-kicker">Demo Results</p>
        <h2>Review the generated motion, then export the target format.</h2>
        <p>
          The public demo path is built around visual inspection first, followed
          by animation or robotics handoff.
        </p>
      </div>
      <div class="demo-grid">
        ${l.map(e=>`
              <article class="demo-card">
                <video
                  src="${e.src}"
                  poster="${e.poster}"
                  muted
                  loop
                  playsinline
                  controls
                ></video>
                <div>
                  <span class="tag">${e.label}</span>
                  <h3>${e.title}</h3>
                  <p>${e.copy}</p>
                </div>
              </article>
            `).join("")}
      </div>
    </section>

    <section id="method" class="method-section">
      <div class="method-intro">
        <p class="section-kicker">AI Method</p>
        <h2>From frame-level pose evidence to coherent target motion.</h2>
        <p>
          AIMoCap combines single-frame pose estimation, sequence-level temporal
          modeling, diffusion-style motion repair, and kinematic target adaptation.
        </p>
      </div>
      <div class="pipeline">
        ${d.map(e=>`
              <article class="pipeline-node ${e.accent}">
                <span>${e.step}</span>
                <h3>${e.title}</h3>
                <p>${e.copy}</p>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="section output-section">
      <div class="output-copy">
        <p class="section-kicker">Outputs</p>
        <h2>One source clip, multiple downstream artifacts.</h2>
      </div>
      <div class="output-grid">
        <article>
          <span>FBX</span>
          <h3>Humanoid animation</h3>
          <p>Animation-ready export for DCC cleanup, preview, and engine import.</p>
        </article>
        <article>
          <span>JSON</span>
          <h3>Unitree G1 motion</h3>
          <p>Robot-oriented motion sequence for simulation and controlled validation.</p>
        </article>
        <article>
          <span>Avatar</span>
          <h3>Custom retargeting</h3>
          <p>Target-aware motion mapping for character rigs and avatar workflows.</p>
        </article>
      </div>
    </section>

    <section id="compare" class="section compare-section">
      <div class="section-heading">
        <p class="section-kicker">Comparison</p>
        <h2>More than pose estimation, lighter than a capture stage.</h2>
        <p>
          AIMoCap focuses on exportable motion artifacts instead of stopping at
          keypoints or raw pose tracks.
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
          <span>Input</span><span>Video or image</span><span>Capture volume</span><span>Short monocular video</span>
        </div>
        <div class="compare-row" role="row">
          <span>Temporal stability</span><span>Post smoothing</span><span>Hardware dependent</span><span>Transformer + motion prior</span>
        </div>
        <div class="compare-row" role="row">
          <span>Primary result</span><span>Keypoints</span><span>Motion data</span><span>FBX + robot JSON</span>
        </div>
        <div class="compare-row" role="row">
          <span>Robot target</span><span>Rare</span><span>Separate setup</span><span>Unitree G1</span>
        </div>
      </div>
    </section>

    <section id="market" class="section market-section">
      <div class="section-heading">
        <p class="section-kicker">AI Mocap Product Comparison</p>
        <h2>Positioned for public demos, exports, and robot motion.</h2>
        <p>
          Pricing and free quotas change often, so this table uses public-facing
          signals and qualitative workflow scores rather than a controlled benchmark.
        </p>
      </div>
      <div class="market-table" role="table" aria-label="AI mocap product comparison">
        <div class="market-row header" role="row">
          <span>Product</span>
          <span>Accuracy / stability</span>
          <span>Free access</span>
          <span>Public price signal</span>
          <span>Best fit</span>
        </div>
        ${m.map(e=>`
              <div class="market-row" role="row">
                <span><a href="${e.href}">${e.name}</a></span>
                <span>${e.score}</span>
                <span>${e.free}</span>
                <span>${e.price}</span>
                <span>${e.fit}</span>
              </div>
            `).join("")}
      </div>
      <p class="comparison-note">
        Scores are product-positioning estimates from public workflows, not lab
        benchmarks. AIMoCap emphasizes target-aware exports and robot motion.
      </p>
    </section>

    <section class="section why-section">
      <div class="output-copy">
        <p class="section-kicker">Why AIMoCap</p>
        <h2>Built for developers comparing motion outputs, not just pose demos.</h2>
      </div>
      <div class="why-grid">
        ${u.map(e=>`
              <article>
                <span>${e.label}</span>
                <h3>${e.title}</h3>
                <p>${e.copy}</p>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="final-cta">
      <div>
        <p class="eyebrow">Try the public workflow</p>
        <h2>Bring a short motion clip.</h2>
      </div>
      <div class="final-copy">
        <p>
          Start with the HF Space demo, then move into AIMoCap Studio for
          review, export, and longer workflows.
        </p>
        <div class="actions">
          <a class="button primary" href="${n}">Try HF Space</a>
          <a class="button" href="${t}">Open Studio</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <span>AIMoCap Video2Motion</span>
    <a href="${s}">GitHub</a>
    <a href="${t}">Website</a>
    <a href="${n}">HF Space</a>
  </footer>
`;
