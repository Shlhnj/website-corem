---
layout: page
title: Research
tag: 02 — Research programs
dek: Each program is named the way the lab's own papers tag their sample sites — short, functional, field-legible.
permalink: /research/
---

<div class="focus-grid">
  {% for program in site.data.research %}
  <div class="focus-card">
    <span class="code">{{ program.code }}</span>
    <h3>{{ program.title }}</h3>
    <p>{{ program.summary }}</p>
    <div class="sites">{{ program.sites }}</div>
  </div>
  {% endfor %}
</div>

<p class="page-note">Field sites span the batik-industry estuaries of Pekalongan to the open waters of the Savu Sea — the throughline is coastal risk, read at the resolution of a single village.</p>
