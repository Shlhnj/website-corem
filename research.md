---
layout: page
title: Research
title_id: Penelitian
tag: 02. Research programs
tag_id: 02. Program penelitian
dek: Each program is named the way the lab's own papers tag their sample sites, short, functional, field-legible.
dek_id: Setiap program diberi nama seperti kode lokasi sampel dalam publikasi laboratorium, singkat, fungsional, dan mudah dikenali di lapangan.
permalink: /research/
---

<div class="focus-grid">
  {% for program in site.data.research %}
  <div class="focus-card">
    {% include photo.html filename=program.photo alt=program.title class="card-photo" %}
    <span class="code">{{ program.code }}</span>
    <h3>
      <span class="lang-en">{{ program.title }}</span><span class="lang-id">{{ program.title_id }}</span>
    </h3>
    <p>
      <span class="lang-en">{{ program.summary }}</span><span class="lang-id">{{ program.summary_id }}</span>
    </p>
    <div class="sites">{{ program.sites }}</div>
  </div>
  {% endfor %}
</div>

<p class="page-note">
  <span class="lang-en">Field sites span the batik-industry estuaries of Pekalongan to the open waters of the Savu Sea, the throughline is coastal risk, read at the resolution of a single village.</span>
  <span class="lang-id">Lokasi penelitian membentang dari muara-muara industri batik di Pekalongan hingga perairan terbuka Laut Sawu, benang merahnya adalah risiko pesisir, dibaca hingga skala satu desa.</span>
</p>
