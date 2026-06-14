import "./styles.css";

const hfSpaceUrl = "https://huggingface.co/spaces/animatex/aimocap";
const websiteUrl = "https://aimocap.net";
const repoUrl = "https://github.com/animatex/aimocap-video2motion";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="${websiteUrl}" aria-label="AIMoCap website">
      <img src="/aimocap/assets/brand-logo.png" alt="" />
      <span>AIMoCap</span>
    </a>
    <nav>
      <a href="#demos">Demos</a>
      <a href="#workflow">Workflow</a>
      <a href="#compare">Compare</a>
      <a href="${repoUrl}">GitHub</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Video2Motion for animation and robots</p>
        <h1>AI video mocap from a short clip to usable motion output.</h1>
        <p class="lead">
          AIMoCap converts clear monocular video into animation-ready FBX motion
          and Unitree G1 robot motion JSON, with a browser-first review flow.
        </p>
        <div class="actions">
          <a class="button primary" href="${hfSpaceUrl}">Try the HF Space</a>
          <a class="button" href="${websiteUrl}">Open AIMoCap Studio</a>
          <a class="button subtle" href="${repoUrl}">View GitHub</a>
        </div>
      </div>
      <div class="hero-media">
        <video
          src="/aimocap/assets/hero-video-lite-v2.mp4"
          poster="/aimocap/assets/hero-video-poster.jpg"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </div>
    </section>

    <section id="demos" class="section">
      <div class="section-heading">
        <p class="eyebrow">Demos</p>
        <h2>One source video, multiple motion targets.</h2>
      </div>
      <div class="demo-grid">
        <article class="demo-card">
          <video
            src="/aimocap/assets/feature-video-motion-lite.mp4"
            poster="/aimocap/assets/feature-video-motion-poster.jpg"
            muted
            loop
            playsinline
            controls
          ></video>
          <h3>Video to FBX motion</h3>
          <p>Generate humanoid animation output for review, cleanup, and DCC pipelines.</p>
        </article>
        <article class="demo-card">
          <video
            src="/aimocap/assets/feature-video-robot-lite.mp4"
            poster="/aimocap/assets/feature-video-robot-poster.jpg"
            muted
            loop
            playsinline
            controls
          ></video>
          <h3>Video to Unitree G1 motion</h3>
          <p>Collect robot-oriented motion JSON from the same video workflow.</p>
        </article>
        <article class="demo-card text-only">
          <div class="target-list">
            <span>Default FBX</span>
            <span>Unitree G1</span>
            <span>Custom avatar</span>
          </div>
          <h3>Multi-target review</h3>
          <p>Submit once, compare outputs, and download the format each downstream pipeline needs.</p>
        </article>
      </div>
    </section>

    <section id="workflow" class="section">
      <div class="section-heading">
        <p class="eyebrow">Workflow</p>
        <h2>Built around the motion handoff, not just pose estimation.</h2>
      </div>
      <ol class="workflow">
        <li><span>1</span><strong>Upload</strong><p>Start from a clean short video with readable full-body motion.</p></li>
        <li><span>2</span><strong>Trim</strong><p>Select the useful motion segment before processing.</p></li>
        <li><span>3</span><strong>Choose targets</strong><p>Request FBX, Unitree G1, or a published custom avatar target.</p></li>
        <li><span>4</span><strong>Review</strong><p>Inspect visual output before downloading production files.</p></li>
      </ol>
    </section>

    <section id="compare" class="section">
      <div class="section-heading">
        <p class="eyebrow">Comparison</p>
        <h2>Where AIMoCap fits.</h2>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Approach</th>
              <th>Input</th>
              <th>Output</th>
              <th>Best fit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pose estimation repos</td>
              <td>Image or video</td>
              <td>Keypoints</td>
              <td>Research and analysis</td>
            </tr>
            <tr>
              <td>Traditional mocap</td>
              <td>Capture stage</td>
              <td>High quality motion</td>
              <td>Studio capture sessions</td>
            </tr>
            <tr>
              <td>AIMoCap</td>
              <td>Short video</td>
              <td>FBX and robot motion</td>
              <td>Fast review, animation delivery, robot motion collection</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section faq">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Common questions.</h2>
      </div>
      <div class="faq-list">
        <details open>
          <summary>Do I need a mocap suit?</summary>
          <p>No. AIMoCap is designed for markerless video mocap from monocular video.</p>
        </details>
        <details>
          <summary>What should I try first?</summary>
          <p>Start with the HF Space demo, then open AIMoCap Studio when you want longer workflows and downloads.</p>
        </details>
        <details>
          <summary>Is this the full product source?</summary>
          <p>No. This public page explains the workflow and links to public examples. The hosted service runs separately.</p>
        </details>
      </div>
    </section>

    <section class="final-cta">
      <h2>Try AIMoCap on your own motion clip.</h2>
      <div class="actions">
        <a class="button primary" href="${hfSpaceUrl}">Try the HF Space</a>
        <a class="button" href="${websiteUrl}">Open AIMoCap Studio</a>
      </div>
    </section>
  </main>

  <footer>
    <span>AIMoCap Video2Motion</span>
    <a href="${repoUrl}">GitHub</a>
    <a href="${websiteUrl}">Website</a>
  </footer>
`;
