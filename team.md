---
layout: page
title: Team
title_id: Tim
tag: 04. Recurring contributors
tag_id: 04. Kontributor tetap
dek: Names that recur across CoREM-affiliated papers. Roles are drawn from published affiliations, not internal titles.
dek_id: Nama-nama yang berulang kali muncul dalam publikasi berafiliasi CoREM. Peran ditulis berdasarkan afiliasi dalam publikasi, bukan jabatan resmi internal.
photo: team_photo.png
permalink: /team/
---

<div class="team-grid">
  {% for person in site.data.team %}
  <div class="team-card">
    <div class="initials">{{ person.initials }}</div>
    <h3>{{ person.name }}</h3>
    <p>
      <span class="lang-en">{{ person.role }}</span><span class="lang-id">{{ person.role_id }}</span>
    </p>
  </div>
  {% endfor %}
</div>

<p class="page-note">
  <span class="lang-en" markdown="1">Edit `_data/team.yml` to add members, photos, or update roles once the lab confirms official titles.</span>
  <span class="lang-id" markdown="1">Ubah `_data/team.yml` untuk menambah anggota, foto, atau memperbarui peran setelah laboratorium mengonfirmasi jabatan resminya.</span>
</p>
