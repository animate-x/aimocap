# AIMoCap Video2Motion Project Page

This repository contains the public project page for AIMoCap:

https://animate-x.github.io/aimocap

AIMoCap turns short videos into animation-ready FBX motion and Unitree G1 robot
motion outputs. The page is a static Vite site for demos, comparison tables,
workflow explanation, and links to AIMoCap Studio.

## Page Structure

- Hero demo with direct links to HF Space, AIMoCap Studio, and the GitHub report
- Demo results for animation and Unitree G1 motion workflows
- Technical framework section for the public video-to-motion pipeline
- Comparison table for positioning against pose estimation and traditional mocap

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build output is written to `docs/` so GitHub Pages can publish from the
repository branch and `docs` folder.

## Public Scope

This repository is only the public project page. It does not contain hosted
service code, account systems, processing systems, or private model assets.
