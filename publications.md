---
layout: page
title: Publications
tag: 03 — Selected publications
dek: Peer-reviewed papers carrying the CoREM affiliation, newest first.
permalink: /publications/
---

<ul class="pub-list">
  {% for pub in site.data.publications %}
  <li class="pub-item">
    <div class="pub-year mono">{{ pub.year }}</div>
    <div>
      <p class="pub-title">{{ pub.title }}</p>
      <p class="pub-meta">{{ pub.authors }}{% if pub.journal != "" %} — <span class="journal">{{ pub.journal }}</span>{% endif %}{% if pub.detail != "" %} {{ pub.detail }}{% endif %}</p>
    </div>
  </li>
  {% endfor %}
</ul>

<p class="page-note">This list was assembled from public journal records (Wiley, IOP, Undip's own journals, and the university research portal) rather than an internal archive — CoREM did not previously have a public site or publication page. Edit <code>_data/publications.yml</code> to add, correct, or reorder entries.</p>
