"""Build the fillable website questionnaire for Marija (PDF with form fields).

Run:  python build_questionnaire.py   (needs: pip install reportlab)
Output: marija-website-questionnaire.pdf next to this script.
Questions are data (QUESTIONS below) — edit and re-run.
"""
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

OUT = Path(__file__).with_name("marija-website-questionnaire.pdf")
FONTS = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("Body", str(FONTS / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Bold", str(FONTS / "arialbd.ttf")))
pdfmetrics.registerFont(TTFont("Serif", str(FONTS / "georgia.ttf")))

GREEN = colors.HexColor("#1f4d3a")
TERRA = colors.HexColor("#8e493b")
GREY = colors.HexColor("#555555")
IVORY = colors.HexColor("#f7f3ec")

W, H = A4
M = 50  # margin
TEXT_W = W - 2 * M

# Question types: ("text", id, label, lines) · ("check", id, label, [options], hint) · ("note", text)
# A ★ in an option marks our recommendation.
QUESTIONS = [
    ("section", "1. Your company & brand", "How the business will be called and set up."),
    ("check", "brand", "Brand name (tick one or write your own below)", [
        "Marija Vargas · Behavior Analysis & Consulting ★",
        "Vargas Human Behavior",
        "Vargas Behavior International",
    ], ""),
    ("text", "brand_other", "Other name idea / tagline", 1),
    ("check", "legal_form", "Legal form", ["Freiberuflich / Einzelunternehmen ★", "UG", "GmbH", "Not decided yet"], "A Steuerberater should confirm freiberuflich vs. gewerblich."),
    ("check", "kleinunternehmer", "Kleinunternehmerregelung (§ 19 UStG)?", ["Yes", "No", "Don't know"], ""),
    ("text", "domain", "Preferred domain(s), e.g. marijavargas.de / .com", 1),
    ("check", "launch", "Target launch", ["Within 4 weeks", "Within 8 weeks ★", "No fixed date"], ""),

    ("section", "2. Current employment (important)", "You currently work at Der Steg. Your own company must fit your contract."),
    ("check", "contract", "Have you checked your employment contract for side-activity (Nebentätigkeit) and non-compete clauses?", ["Yes — side activity allowed", "Yes — needs employer approval", "Not yet checked ★ check before launch"], "Until clarified, the website should not target the same clients as your employer."),
    ("text", "contract_notes", "Notes (e.g. hours you can offer, what you must not offer)", 2),

    ("section", "3. Credentials & experience", "Only what you confirm in writing will appear on the website."),
    ("check", "certs", "Certifications (tick all that apply)", ["BCBA", "BCaBA", "IBA (International Behavior Analyst)", "QBA / RBT", "Other"], ""),
    ("text", "degrees", "Degrees — exact titles, universities, countries, years", 3),
    ("check", "recognition", "Foreign degree recognised in Germany (ZAB / anabin)?", ["Yes", "No", "In progress", "Not relevant"], ""),
    ("text", "usa", "Experience in the USA — years, cities, organisations, roles", 3),
    ("text", "germany", "Experience in Germany — years, organisations, roles", 3),
    ("text", "numbers", "Numbers we may publish (years of practice, families supported, therapists supervised, trainings given)", 2),
    ("check", "title", "Do you hold an Approbation or Heilpraktiker (Psychotherapie) permission?", ["Yes", "No — then we avoid the word 'Therapie' for your own services ★"], ""),
    ("check", "insurance", "Berufshaftpflicht (professional liability insurance)?", ["Yes", "No", "Planned"], ""),

    ("section", "4. Languages & international profile", "Your 4 languages are a key differentiator."),
    ("note", "For each language, tick what you can offer professionally."),
    ("check", "lang_de", "German", ["Sessions", "Written reports", "Trainings / talks", "Website text review"], ""),
    ("check", "lang_hr", "Croatian (mother tongue)", ["Sessions", "Written reports", "Trainings / talks", "Website text review"], ""),
    ("check", "lang_en", "English", ["Sessions", "Written reports", "Trainings / talks", "Website text review"], ""),
    ("check", "lang_es", "Spanish", ["Sessions", "Written reports", "Trainings / talks", "Website text review"], ""),
    ("check", "site_langs", "Website languages at launch", ["DE + EN ★ (HR + ES soon after)", "All four at launch", "DE only"], ""),
    ("check", "families", "Which families do you want to reach? (tick all)", ["German", "Croatian (in Germany and Croatia)", "Spanish-speaking", "English-speaking / expat", "International (online)"], ""),

    ("section", "5. Team", "Your sister (linguist / speech & language)."),
    ("check", "sister_role", "Should your sister appear on the website?", ["Yes — as partner / team member", "Yes — as cooperation partner", "Not now"], ""),
    ("text", "sister_profile", "Her name, profession, qualifications, where she is licensed (Logopädie is a regulated profession in Germany), languages", 3),
    ("check", "photos", "Photos on the website", ["Real photos (photo shoot) ★", "AI-generated portraits for now", "No photos of us"], "Samples in the draft use the AI portraits from the Visual library."),

    ("section", "6. Services & audiences", "Tick what you offer today — the website only shows ticked services."),
    ("check", "svc_families", "For families", ["Initial consultation / assessment", "Behaviour support plan", "Parent coaching / training", "Home programme supervision", "Sleep problems", "Toilet training", "Feeding / picky eating", "Challenging behaviour", "Communication & social skills", "School / Kita consultation"], ""),
    ("check", "svc_pro", "For professionals & institutions", ["Individual supervision", "Group supervision", "Supervision hours for certification (BACB)", "Team trainings (in-house)", "Open workshops", "Keynotes / conferences", "Case consultation for Jugendamt / Träger"], ""),
    ("check", "ages", "Age groups", ["0–6", "6–12", "12–18", "Young adults"], ""),
    ("check", "delivery", "Delivery", ["Online (Germany-wide)", "Online (international)", "In person in my region", "Home visits", "School / Kita visits"], ""),
    ("text", "region", "City / region for in-person work", 1),

    ("section", "7. Approach & ABA positioning", "ABA is debated in Germany — we name it openly and state your commitments."),
    ("check", "aba_name", "Name 'ABA' on the website?", ["Yes ★", "Only 'Verhaltensanalyse / behaviour analysis'", "No"], ""),
    ("check", "commit", "Commitments that are TRUE for your practice (only ticked ones are published)", ["Goals agreed with family and child", "Assent-based; pause on distress", "No aversive or punishment procedures", "No aim to suppress stimming", "Collaboration with speech therapy, OT, school", "Parent coaching as a core part", "Progress data shared with the family"], ""),
    ("text", "philosophy", "Your approach in 3–5 sentences, in your own words", 4),

    ("section", "8. Prices, booking & funding", "Premium positioning: we recommend 'from' prices only."),
    ("check", "prices", "Prices on the website", ["'From' price for the first consultation only ★", "All packages public", "No prices"], ""),
    ("text", "price_first", "Price of the first consultation / assessment (€) and what it includes", 2),
    ("check", "discovery", "Free 15-minute intro call?", ["Yes ★", "No"], ""),
    ("check", "cancel", "Cancellation policy", ["24 h", "48 h ★", "Other"], ""),
    ("check", "jugendamt", "Jugendamt / Eingliederungshilfe (§ 35a SGB VIII)", ["Already funded cases", "Want agreements", "Case by case only ★", "Not relevant"], ""),
    ("check", "booking", "Contact at launch", ["Form + e-mail ★", "Form + booking link", "Booking link only"], ""),

    ("section", "9. Contact & legal (Impressum)", "Required by law — this will be public."),
    ("text", "legal_name", "Full name / company name for the Impressum", 1),
    ("text", "address", "Business address (office, coworking or virtual office recommended — not your home)", 2),
    ("text", "email", "Business e-mail", 1),
    ("text", "phone", "Business phone (optional)", 1),
    ("text", "vat", "USt-IdNr. (if any) · professional title and country where it was awarded", 2),

    ("section", "10. Proof & content", "What makes families trust you."),
    ("text", "bio_short", "Short bio (50–80 words)", 4),
    ("text", "bio_long", "Why you founded the company / your story (or bullet points — we'll write it)", 5),
    ("check", "testimonials", "Testimonials at launch", ["Professionals / institutions only ★", "Also anonymous parents (written consent)", "None"], ""),
    ("text", "links", "LinkedIn, publications, conferences, memberships, media", 3),
    ("text", "donts", "Anything that must NOT appear on the website", 2),
]


class Doc:
    def __init__(self):
        self.c = canvas.Canvas(str(OUT), pagesize=A4)
        self.c.setTitle("Website questionnaire — Marija Vargas")
        self.c.setAuthor("Rodrigo & Claude")
        self.page = 1
        self.y = H - M
        self.header()

    def header(self):
        c = self.c
        c.setFillColor(IVORY)
        c.rect(0, H - 34, W, 34, fill=1, stroke=0)
        c.setFillColor(GREEN)
        c.setFont("Bold", 9)
        c.drawString(M, H - 21, "Website questionnaire · Marija Vargas · Behavior Analysis")
        c.setFont("Body", 9)
        c.drawRightString(W - M, H - 21, f"Page {self.page}")
        self.y = H - 60

    def need(self, h):
        if self.y - h < M:
            self.c.showPage()
            self.page += 1
            self.header()

    def wrap(self, text, font, size, width):
        words, lines, line = text.split(), [], ""
        for w in words:
            test = f"{line} {w}".strip()
            if pdfmetrics.stringWidth(test, font, size) <= width:
                line = test
            else:
                lines.append(line)
                line = w
        if line:
            lines.append(line)
        return lines

    def para(self, text, font="Body", size=10, color=colors.black, gap=3, width=TEXT_W, x=M):
        lines = self.wrap(text, font, size, width)
        self.need(len(lines) * (size + gap))
        self.c.setFont(font, size)
        self.c.setFillColor(color)
        for ln in lines:
            self.c.drawString(x, self.y, ln)
            self.y -= size + gap

    def section(self, title, intro):
        self.need(70)
        self.y -= 10
        self.c.setFillColor(GREEN)
        self.c.setFont("Serif", 15)
        self.c.drawString(M, self.y, title)
        self.y -= 6
        self.c.setStrokeColor(TERRA)
        self.c.setLineWidth(1.2)
        self.c.line(M, self.y, M + 60, self.y)
        self.y -= 16
        self.para(intro, size=9.5, color=GREY)
        self.y -= 6

    def text(self, fid, label, lines):
        h = 18 if lines == 1 else 14 * lines + 6
        label_lines = self.wrap(label, "Bold", 10, TEXT_W)
        self.need(len(label_lines) * 13 + h + 14)
        self.para(label, font="Bold", size=10, gap=3)
        self.y -= h + 2
        self.c.acroForm.textfield(
            name=fid, x=M, y=self.y, width=TEXT_W, height=h, fontName="Helvetica", fontSize=10,
            borderColor=colors.HexColor("#b9b2a6"), fillColor=colors.white, textColor=colors.black,
            forceBorder=True, fieldFlags="multiline" if lines > 1 else "",
        )
        self.y -= 20

    def check(self, fid, label, options, hint):
        label_lines = self.wrap(label, "Bold", 10, TEXT_W)
        self.need(len(label_lines) * 13 + 16 + 14)
        self.para(label, font="Bold", size=10, gap=3)
        self.y -= 4
        col_w = TEXT_W / 2
        for i, opt in enumerate(options):
            col = i % 2
            if col == 0:
                self.need(18)
            x = M + col * col_w
            self.c.acroForm.checkbox(
                name=f"{fid}_{i + 1}", x=x, y=self.y - 11, size=11, buttonStyle="check",
                borderColor=colors.HexColor("#8a8277"), fillColor=colors.white, forceBorder=True,
            )
            self.c.setFont("Body", 9.5)
            self.c.setFillColor(TERRA if "★" in opt else colors.black)
            shown = opt.replace(" ★", " (recommended)").replace("★", "(recommended)")
            for j, ln in enumerate(self.wrap(shown, "Body", 9.5, col_w - 24)[:2]):
                self.c.drawString(x + 17, self.y - 9 - j * 11, ln)
            if col == 1 or i == len(options) - 1:
                self.y -= 26 if any(len(self.wrap(o.replace(" ★", " (recommended)"), "Body", 9.5, col_w - 24)) > 1 for o in options[i - col:i + 1]) else 18
        if hint:
            self.y -= 2
            self.para(hint, size=8.5, color=GREY)
        self.y -= 12

    def cover(self):
        c = self.c
        self.y -= 20
        c.setFillColor(GREEN)
        c.setFont("Serif", 26)
        c.drawString(M, self.y, "Your website —")
        self.y -= 32
        c.drawString(M, self.y, "what only you can tell us")
        self.y -= 30
        self.para("Liebe Marija, this questionnaire collects everything we need to finish your website in German, "
                  "English, Croatian and Spanish. It takes about 30–40 minutes. You can fill it in directly in this PDF "
                  "(Adobe Acrobat Reader, Apple Preview or your browser), save it, and send it back to Rodrigo.", size=11, gap=5)
        self.y -= 6
        self.para("How to answer:", font="Bold", size=11)
        for t in ["Tick boxes where you see options. Options in terracotta marked “recommended” are our suggestion — you can always choose differently.",
                  "Write in any of your languages. Bullet points are fine; we turn them into polished copy in all four languages.",
                  "Only information you confirm here will appear on the website. Leave anything blank that you are unsure about.",
                  "Please don't write health information about clients or children anywhere in this form."]:
            self.para("•  " + t, size=10.5, gap=5, x=M + 8, width=TEXT_W - 8)
        self.y -= 10
        self.para("What happens next: Rodrigo sends the filled PDF back into the project; Claude fills the placeholders in the "
                  "website, writes the texts in four languages for your review, and prepares the legal pages for a lawyer's check.",
                  size=10, color=GREY, gap=4)
        self.y -= 14

    def build(self):
        self.cover()
        for q in QUESTIONS:
            kind = q[0]
            if kind == "section":
                self.section(q[1], q[2])
            elif kind == "text":
                self.text(q[1], q[2], q[3])
            elif kind == "check":
                self.check(q[1], q[2], q[3], q[4])
            elif kind == "note":
                self.para(q[1], size=9.5, color=GREY)
                self.y -= 4
        self.need(60)
        self.y -= 10
        self.para("Thank you! Save this PDF and send it back to Rodrigo.", font="Bold", size=11, color=GREEN)
        self.c.save()


if __name__ == "__main__":
    Doc().build()
    print(f"written {OUT}")
