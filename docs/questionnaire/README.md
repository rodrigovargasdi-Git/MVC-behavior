# Website questionnaire for Marija

- `marija-website-questionnaire.pdf`: fillable PDF (7 pages, 134 fields). Send it to Marija; she fills it in with Acrobat Reader, Apple Preview or a browser, saves it and sends it back.
- `build_questionnaire.py`: the questions as data. Edit and re-run (`pip install reportlab`).
- Put the **filled** PDF into `answers/`. That folder is git-ignored because it contains personal data. Claude reads the answers from there and fills `site/src/content/site.ts`.

Covers the evaluation's questions (§5.8 A–G) plus the new direction: 4 languages, US + Germany experience, her sister in the team, premium services, photos, and her current employment (side-activity and non-compete clauses).
