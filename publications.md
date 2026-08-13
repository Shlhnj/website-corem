---
layout: page
title: Publications
title_id: Publikasi
tag: 03. Selected publications
tag_id: 03. Publikasi terpilih
dek: Peer-reviewed papers carrying the CoREM affiliation, newest first.
dek_id: Publikasi terindeks yang mencantumkan afiliasi CoREM, diurutkan dari yang terbaru.
photo: publications_photo.png
permalink: /publications/
---

<ul class="pub-list">
  {% for pub in site.data.publications %}
  <li class="pub-item">
    <div class="pub-year mono">{{ pub.year }}</div>
    <div>
      <p class="pub-title">{{ pub.title }}</p>
      <p class="pub-meta">{{ pub.authors }}{% if pub.journal != "" %} -- <span class="journal">{{ pub.journal }}</span>{% endif %}{% if pub.detail != "" %} {{ pub.detail }}{% endif %}</p>
    </div>
  </li>
  {% endfor %}
</ul>

<p class="page-note">
  <span class="lang-en" markdown="1">This list was assembled from public journal records (Wiley, IOP, Undip's own journals, and the university research portal) rather than an internal archive, CoREM did not previously have a public site or publication page. Edit `_data/publications.yml` to add, correct, or reorder entries.</span>
  <span class="lang-id" markdown="1">Daftar ini disusun dari catatan jurnal publik (Wiley, IOP, jurnal internal Undip, dan portal riset universitas), bukan dari arsip internal, CoREM sebelumnya belum memiliki situs atau halaman publikasi publik. Ubah `_data/publications.yml` untuk menambah, mengoreksi, atau mengurutkan ulang entri.</span>
</p>
