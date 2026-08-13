# Photos

Drop image files into this folder using these exact names, and they'll appear
automatically on the matching page. Nothing else needs to change — the
templates already reference these filenames.

| Filename                | Appears on            | Suggested shape       |
|--------------------------|------------------------|------------------------|
| `home_photo.png`         | Home (below hero)      | Wide banner (~21:9)    |
| `about_photo.png`        | About                  | Wide banner (~21:9)    |
| `research_photo1.png`    | Research → CVI card    | Roughly 4:3            |
| `research_photo2.png`    | Research → MGR card    | Roughly 4:3            |
| `research_photo3.png`    | Research → RS card     | Roughly 4:3            |
| `research_photo4.png`    | Research → WQ card     | Roughly 4:3            |
| `research_photo5.png`    | Research → DM card     | Roughly 4:3            |
| `publications_photo.png` | Publications           | Wide banner (~21:9)    |
| `team_photo.png`         | Team                   | Wide banner (~21:9)    |
| `news_photo.png`         | News                   | Wide banner (~21:9)    |
| `contact_photo.png`      | Contact                | Wide banner (~21:9)    |

Until a file is added, that spot shows a dashed placeholder naming the
expected file instead of a broken image — nothing looks broken while photos
are still being gathered.

`.png` is assumed above; if you'd rather use `.jpg`, update the `filename:`
value in each page's front matter (`about.md`, `research.yml`, etc.) to match.
