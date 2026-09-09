from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from PIL import Image
import tempfile

ROOT=Path(__file__).resolve().parents[1]; PUB=ROOT/"public"; OUT=ROOT/"output/pdf/dr-khanh-nguyen-speaker-media-kit.pdf"; OUT.parent.mkdir(parents=True,exist_ok=True)
W,H=letter; TEAL=colors.HexColor("#155E56"); GOLD=colors.HexColor("#B8874A"); CREAM=colors.HexColor("#FAF7F2"); INK=colors.HexColor("#1C1B19"); DARK=colors.HexColor("#071713"); LINE=colors.HexColor("#DCD5CB"); MUTED=colors.HexColor("#6E6861")
FONTROOT="/opt/codex/runtimes/codex-primary-runtime/dependencies/native/libreoffice-headless/libreoffice/share/fonts/truetype"
for n,f in [("Serif","DejaVuSerif.ttf"),("SerifI","DejaVuSerif-Italic.ttf"),("Sans","DejaVuSans.ttf"),("SansB","DejaVuSans-Bold.ttf")]: pdfmetrics.registerFont(TTFont(n,f"{FONTROOT}/{f}"))
c=canvas.Canvas(str(OUT),pagesize=letter); c.setTitle("Dr. Khanh Nguyen - Speaker & Media Kit"); c.setAuthor("Dr. Khanh Nguyen")
cache_dir=Path(tempfile.mkdtemp(prefix="dr-khanh-media-kit-")); image_cache={}

def optimized_reader(path):
    key=str(path)
    if key not in image_cache:
        im=Image.open(path).convert("RGB"); im.thumbnail((1600,1600),Image.Resampling.LANCZOS)
        target=cache_dir/(Path(path).stem+".jpg"); im.save(target,"JPEG",quality=82,optimize=True)
        image_cache[key]=ImageReader(str(target))
    return image_cache[key]

def rect(color,x=0,y=0,w=W,h=H): c.setFillColor(color); c.rect(x,y,w,h,stroke=0,fill=1)
def crop(path,x,y,w,h,focus=.5):
    p=str(path); im=Image.open(p); iw,ih=im.size; scale=max(w/iw,h/ih); dw,dh=iw*scale,ih*scale; dx=x-(dw-w)*focus; dy=y-(dh-h)/2; c.saveState(); q=c.beginPath(); q.rect(x,y,w,h); c.clipPath(q,stroke=0); c.drawImage(optimized_reader(path),dx,dy,dw,dh,mask="auto"); c.restoreState()
def text(s,x,y,size=10,font="Serif",color=INK): c.setFillColor(color); c.setFont(font,size); c.drawString(x,y,s)
def para(s,x,y,w,h,size=10,leading=15,font="Serif",color=INK,align=0):
    p=Paragraph(s,ParagraphStyle("p",fontName=font,fontSize=size,leading=leading,textColor=color,alignment=align)); p.wrapOn(c,w,h); p.drawOn(c,x,y-p.height); return p.height
def eyebrow(s,x,y,color=TEAL): text(s.upper(),x,y,7.2,"SansB",color)
def footer(n,dark=False):
    col=colors.Color(1,1,1,.45) if dark else MUTED; c.setStrokeColor(colors.Color(1,1,1,.2) if dark else LINE); c.line(45,32,W-45,32); text("DR. KHANH NGUYEN  |  OFFICIAL SPEAKER & MEDIA KIT",45,18,6,"Sans",col); c.drawRightString(W-45,18,str(n))
def page(n,bg=CREAM,dark=False): rect(bg); footer(n,dark)
def show(): c.showPage()

# 1 - authority cover
crop(PUB/"dr-khanh-stage-square.png",0,0,W,H,.62); c.saveState(); from reportlab.pdfgen.canvas import Canvas
for i in range(200):
    a=.92*(1-i/200); c.setFillColor(colors.Color(3/255,17/255,13/255,a)); c.rect(i*W/300,0,W/300+1,H,0,1)
c.restoreState(); eyebrow("Official speaker & media kit",48,H-68,colors.white); para("Dr. Khanh Nguyen",48,H-100,420,80,36,40,"Serif",colors.white); para("Regenerative medicine.<br/><font name='SerifI' color='#E2B778'>Made clear. Made responsible.</font>",48,H-154,430,120,26,31,"Serif",colors.white); para("Approved brand assets, speaking topics, interview preparation, credentials, and booking details.",48,190,325,70,11,17,"Serif",colors.white); rect(colors.Color(3/255,17/255,13/255,.8),0,0,W,62); text("PHYSICIAN",48,28,7,"SansB",colors.white); text("SSRP FELLOW",164,28,7,"SansB",colors.white); text("INTERNATIONAL SPEAKER",284,28,7,"SansB",colors.white); text("REGENERATIVE MEDICINE EXPERT",430,28,7,"SansB",colors.white); show()

# 2 - brand system
page(2); eyebrow("Brand system",45,H-55); para("A consistent presence,<br/><font name='SerifI' color='#B8874A'>wherever she appears.</font>",45,H-80,500,100,29,34); rect(colors.white,45,420,522,180); c.drawImage(ImageReader(str(PUB/"dr-khanh-nguyen-logo.png")),75,475,462,92,mask="auto",preserveAspectRatio=True,anchor="c"); text("OFFICIAL LOGO  |  TRANSPARENT PNG",65,440,7,"SansB",TEAL)
eyebrow("Core palette",45,382); sw=[(TEAL,"REGENERATIVE TEAL","#155E56"),(GOLD,"WARM GOLD","#B8874A"),(INK,"INK","#1C1B19"),(CREAM,"EDITORIAL CREAM","#FAF7F2")]
for i,(col,n,hx) in enumerate(sw): x=45+i*130.5; rect(col,x,275,130.5,82); text(n,x+9,294,6.2,"SansB",colors.white if i!=3 else INK); text(hx,x+9,282,6,"Sans",colors.white if i!=3 else INK)
eyebrow("Typography & usage",45,240); text("Editorial serif",45,204,22,"Serif",INK); text("CLEAN SANS-SERIF",45,180,8,"SansB",INK); para("Preserve clear space around the logo. Do not stretch, recolor, outline, crop, or place it over a visually busy area. Use approved photography without facial retouching or filters.",290,220,275,80,8.5,13,"Sans",MUTED); show()

# 3 - photography
page(3,DARK,True); eyebrow("Approved photography",45,H-55,colors.white); para("Authority in every setting.",45,H-82,500,60,31,36,"Serif",colors.white)
crop(PUB/"dr-khanh-stage-square.png",45,362,330,280,.62); crop(PUB/"dr-khanh-nguyen.png",385,362,182,280,.5); crop(PUB/"dr-khanh-pompa-interview-clean.png",45,100,522,235,.57)
text("ON-STAGE KEYNOTE",55,375,6.5,"SansB",colors.white); text("OFFICIAL PORTRAIT",395,375,6.5,"SansB",colors.white); text("PODCAST & INTERVIEW",55,113,6.5,"SansB",colors.white); show()

# 4 - bios
page(4); eyebrow("Approved biographies",45,H-55); para("Choose the right length.<br/><font name='SerifI' color='#B8874A'>Keep the story intact.</font>",45,H-80,500,100,29,34)
short="Dr. Khanh Nguyen is a longevity and regenerative medicine expert, founder of Austin Regenerative Therapy, and SSRP Fellow. She helps audiences understand the science, promise, and responsible application of emerging therapies designed to extend healthspan and human performance."
medium="Dr. Khanh Nguyen is a longevity and regenerative medicine expert with more than 20 years of hospital-based critical care experience. After navigating her own autoimmune illness and caring for a son with a rare neurological condition, she shifted her work toward proactive, cellular-level healing. As founder of Austin Regenerative Therapy, she brings clarity and clinical perspective to peptides, Young Plasma Exchange, VSEL stem cells, exosomes, NAD+, hormone optimization, and the Hallmarks of Aging. Dr. Nguyen is an SSRP Fellow, educator, and sought-after voice on the science, ethics, and future of living better for longer."
rect(TEAL,45,360,220,265); eyebrow("01  Short bio",63,598,colors.white); para(short,63,570,184,185,11,18,"Serif",colors.white); rect(colors.white,277,360,290,265); eyebrow("02  Medium bio",295,598); para(medium,295,570,254,190,9.2,14.8,"Serif",INK)
eyebrow("03  Full biography",45,326); full=["Dr. Khanh Nguyen is a physician, longevity and regenerative medicine expert, educator, and founder of Austin Regenerative Therapy. With more than 20 years in hospital-based critical care, she brings the rigor of acute medicine to one of health care's fastest-moving fields.","Her path into regenerative medicine is deeply personal. After overcoming an autoimmune illness and caring for a son with a rare neurological condition, Dr. Nguyen began looking beyond crisis-driven care toward proactive, cellular-level healing. Today, her concierge approach combines personalized diagnostics, peptide therapy, hormone optimization, functional strategies, and regenerative modalities including Young Plasma Exchange, VSEL stem cells, exosomes, and NAD+.","Born in Vietnam, Dr. Nguyen escaped the country by boat at 13 and rebuilt her life in the United States. She earned her medical degree from Rush Medical College and completed fellowship training in critical care. She is board-certified in internal medicine, an SSRP Fellow and faculty member, and an ISSCA educator."]
for i,p in enumerate(full): para(p,45+i*174,298,158,220,8.2,13,"Serif",INK); show() if False else None
show()

# 5 - speaking topics
page(5,DARK,True); eyebrow("Speaking platform",45,H-55,colors.white); para("Science made clear.<br/><font name='SerifI' color='#E2B778'>Possibility made responsible.</font>",45,H-80,500,100,29,34,"Serif",colors.white)
topics=[("Plasma Exchange & Healthspan","Evidence, protocols, and the questions responsible patients should ask."),("Peptides & Personalized Medicine","Biomarkers, pathways, goals, and a precise approach to peptide therapy."),("Cellular Medicine, Without the Hype","Promise versus proof across VSELs, exosomes, and treatment sequencing."),("Hormones, Women & Longevity","Energy, sexual health, cognition, and hormonal change across every decade."),("From Burnout to Reinvention","Rebuilding work, health, and identity when success is no longer sustainable."),("Resilience by Design","Turning lived adversity into purposeful leadership and lasting performance.")]
for i,(t,d) in enumerate(topics):
    col=i%2; row=i//2; x=45+col*261; y=585-row*155; c.setStrokeColor(colors.Color(1,1,1,.2)); c.line(x,y-130,x+245,y-130); text(f"0{i+1}",x,y,7,"SansB",GOLD); para(t,x,y-20,235,55,15,18,"Serif",colors.white); para("<font name='SansB' color='#E2B778'>AUDIENCE TAKEAWAY</font><br/>"+d,x,y-74,235,60,8,12,"Sans",colors.Color(1,1,1,.7))
show()

# 6 - credentials + appearances
page(6); eyebrow("Credentials & selected appearances",45,H-55); para("Trusted with the<br/><font name='SerifI' color='#B8874A'>important conversations.</font>",45,H-80,500,100,29,34)
creds=["Founder & CEO, Austin Regenerative Therapy","20+ years in hospital-based critical care","Board-certified in Internal Medicine","Fellowship-trained in Critical Care Medicine","SSRP Fellow & faculty member","ISSCA faculty and educator","MD, Rush Medical College","Biology, University of Southern California"]
for i,s in enumerate(creds): x=45+(i%2)*261; y=585-(i//2)*35; text("+",x,y,10,"Serif",GOLD); text(s,x+14,y,8,"Sans",INK)
eyebrow("Selected engagements",45,420); apps=[("The Dr. Pompa Podcast","Podcast guest","2026"),("Ben Greenfield Life","Two-time guest","2025-2026"),("Longevity Optimization","Guest with Kayla Barnes-Lentz","2026"),("ISSCA Peptide World Conference","Speaker - Lima, Peru","2026"),("Peptide World Congress","SSRP faculty panel","2026"),("International Regenerative Medicine Conference","ISSCA speaker - Lima, Peru","2025")]
for i,(a,b,d) in enumerate(apps):
    y=388-i*52; c.setStrokeColor(LINE); c.line(45,y-20,567,y-20)
    para(a,45,y+7,260,30,10.5,13,"Serif",INK); text(b,338,y,6.6,"Sans",MUTED); c.setFont("Sans",6.6); c.setFillColor(MUTED); c.drawRightString(567,y,d)
show()

# 7 - interview questions
page(7,GOLD); eyebrow("Interview preparation",45,H-55,DARK); para("Ten questions that create<br/>a conversation - not a commercial.",45,H-80,500,85,28,33,"Serif",DARK)
qs=["What does regenerative medicine actually mean - and where does the hype begin?","Which Hallmarks of Aging can clinicians meaningfully address today?","How do Young Plasma Exchange and therapeutic plasma exchange differ?","What should patients understand before considering peptides, exosomes, or cellular therapies?","How do you personalize a longevity plan without chasing every new intervention?","What did critical care teach you about prevention and healthspan?","How did your own health experience change the way you practice medicine?","Where do ethics and patient safety fit in a field moving this quickly?","What do most people misunderstand about aging - and what should they focus on instead?","For listeners ready to explore whether regenerative care is right for them, where can they learn more and schedule a discovery call with your team?"]
for i,q in enumerate(qs): y=600-i*46; c.setStrokeColor(colors.Color(0,0,0,.2)); c.line(45,y-29,567,y-29); text(f"{i+1:02}",45,y,7,"SansB",DARK); para(q,75,y+5,475,35,9.2,13,"Serif",DARK)
rect(TEAL,45,75,522,49); text("10",60,96,7,"SansB",colors.white); text("LISTENER PATHWAY  |  WEBSITE + DISCOVERY CALL",91,96,7,"SansB",colors.white); show()

# 8 - stage intro
page(8); eyebrow("Stage introduction",45,H-55); para("Ready to read as written.",45,H-80,500,60,31,36); rect(colors.HexColor("#F0E8DD"),45,340,522,330); c.setStrokeColor(GOLD); c.setLineWidth(1); c.line(70,380,70,625)
stage="Our guest is a physician, longevity and regenerative medicine expert, and founder of Austin Regenerative Therapy. After more than 20 years in hospital-based critical care, Dr. Khanh Nguyen turned her focus to proactive, cellular-level medicine. She is an SSRP Fellow and faculty member, an ISSCA educator, and a trusted voice on peptides, plasma exchange, cellular therapies, hormones, and the science of healthspan. Please welcome Dr. Khanh Nguyen."
para(stage,95,620,430,235,17,26,"SerifI",INK); crop(PUB/"dr-khanh-expertise-hero.png",45,72,522,230,.65); show()

# 9 - booking
page(9,DARK,True); eyebrow("Booking & production",45,H-55,colors.white); para("Bring the right expertise<br/><font name='SerifI' color='#E2B778'>into the conversation.</font>",45,H-80,500,100,29,34,"Serif",colors.white)
plans=[("Formats","Keynotes, panels, fireside conversations, podcasts, media appearances, and virtual sessions. Typical talks adapt from 20-60 minutes."),("Production","Wireless lavalier or headset microphone, presentation connection, confidence monitor for timed programs, and an on-site AV check."),("Travel","Based in Austin, Texas. Final travel, accommodations, transportation, and scheduling are confirmed during booking.")]
for i,(t,d) in enumerate(plans): x=45+i*174; text(f"0{i+1}",x,555,7,"SansB",GOLD); para(t,x,530,158,40,17,20,"Serif",colors.white); para(d,x,485,158,120,8.3,13,"Sans",colors.Color(1,1,1,.68))
c.setStrokeColor(colors.Color(1,1,1,.2)); c.line(45,345,567,345); eyebrow("Media & booking contact",45,310,colors.white); para("Start a booking inquiry or schedule a discovery call:<br/><font name='SerifI' color='#E2B778'>dr-khanh-nguyen.kimgarstbiz.chatgpt.site/contact</font>",45,280,500,100,16,25,"Serif",colors.white); text("Planning guidance is preliminary. Final technical and travel requirements are confirmed with Dr. Nguyen's team.",45,115,7,"Sans",colors.Color(1,1,1,.52)); show()

c.save(); print(OUT)
