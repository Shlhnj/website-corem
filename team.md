---
layout: page
title: Team
tag: 04 — Recurring contributors
dek: Names that recur across CoREM-affiliated papers. Roles are drawn from published affiliations, not internal titles.
permalink: /team/
---

<div class="team-grid">
  {% for person in site.data.team %}
  <div class="team-card">
    <div class="initials">{{ person.initials }}</div>
    <h3>{{ person.name }}</h3>
    <p>{{ person.role }}</p>
  </div>
  {% endfor %}
</div>

<p class="page-note">Edit <code>_data/team.yml</code> to add members, photos, or update roles once the lab confirms official titles.</p>
