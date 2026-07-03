// 1. Animacionet dhe efektet e tua origjinale
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.borderBottomColor = window.scrollY > 60 ? 'rgba(0,170,255,0.12)' : 'rgba(255,255,255,0.07)';
});


// 2. SISTEMI I PËRKTHIMIT KREJTËSISHT NË JAVASCRIPT
const voc = {
  en: {
    nav_about: "About Us", nav_portfolio: "Portfolio", nav_services: "Services", nav_contact: "Contact",
    nav_btn: 'Book a Project <i class="fas fa-arrow-right"></i>',
    hero_badge: "LAUNCHED MAY 1, 2026", hero_t1: "Solutions that", hero_t2: "drive the future",
    hero_sub: "Premium web architecture & digital solutions for businesses and HoReCa.",
    hero_btn1: 'Our Work <i class="fas fa-arrow-right"></i>', hero_btn2: "Contact Us",
    serv_eyebrow: "SERVICES", serv_h1: "Your business will look", serv_h2: "Flawless", serv_h3: "on every device.",
    serv_sub: "Precision-designed digital solutions to elevate your business.",
    s1_t: "Modern & Unique Design", s1_d: "Websites tailored to your brand.",
    s2_t: "Professional Showcase", s2_d: "Websites that build trust with your new clients.",
    s3_t: "Fully Responsive", s3_d: "Your business will look flawless on every device.",
    s4_t: "E-commerce Websites", s4_d: "Convert visitors into customers with a modern e-commerce store.",
    port_eyebrow: "PORTFOLIO", port_title: "Our Premium Projects",
    p1_tag: "EVENT EXPERIENCE", p1_t: "Digital Invitations", p1_tag_h: "EVENT EXPERIENCE", p1_t_h: "Digital Invitations", p1_d: "Elevating your event experience.", p_btn: 'Explore Project <i class="fas fa-arrow-right"></i>',
    p2_tag: "HORECA / QR MENU", p2_t: "Digital Menu", p2_tag_h: "HORECA / QR MENU", p2_t_h: "Digital Menu", p2_d: "Modern QR-based menus for restaurants & cafes.", p_btn2: 'Explore Project <i class="fas fa-arrow-right"></i>',
    ab_eyebrow: "ABOUT US", ab_h1: "Perfection in", ab_h2: "every", ab_blue: "pixel",
    ab_p1: "<strong>DigiTech.101</strong> was officially founded on May 1, 2026, with a clear mission: to redefine how modern businesses present themselves in the digital world. We build precision-engineered web architectures, delivering elite performance and a premium aesthetic.",
    ab_p2: "Every solution we create is fully custom—from unique design and optimized code to flawless user experience. We serve brands that aim to dominate the modern digital market with an unforgettable image.",
    st1: "ESTABLISHED", st2: "CUSTOM CODE", st3: "SUPPORT",
    cont_eyebrow: "CONTACT & BOOKING", cont_h1: "Let's build something", cont_h2: "premium",
    f_title: "Book a Project", f_sub: "Fill out the form and we will contact you within 24 hours.",
    f_lbl1: "NAME", f_lbl2: "EMAIL", f_lbl3: "CATEGORY", f_lbl4: "MESSAGE",
    p_name: "Your Name", p_email: "you@example.com", p_msg: "Describe your project...",
    btn_send: 'Send <i class="fas fa-paper-plane"></i>', btn_sent: '<i class="fas fa-check"></i> Sent!',
    foot_tag: "Solutions that drive the future", foot_copy: "Copyright © 2026 DigiTech.101 — All rights reserved.",
    categories: ["Choose an option", "Portfolio", "Digital Menu", "Digital Invitation", "Booking / Appointment System", "Personal Brand Website", "E-commerce Website", "One-Page Website", "Car Rental System", "Membership System", "Other"],
    
    // Përkthimet e reja për Kontaktin
    cont_lbl_loc: "LOCATION", cont_val_loc: "Lipjan, Kosovo",
    cont_lbl_hours: "WORKING HOURS", cont_val_hours: "Mon - Sat: 09:00 - 17:00"
  },
  sq: {
    nav_about: "Rreth Nesh", nav_portfolio: "Portofoli", nav_services: "Shërbimet", nav_contact: "Kontakt",
    nav_btn: 'Rezervo Projekt <i class="fas fa-arrow-right"></i>',
    hero_badge: "LANSUAR MË 1 MAJ, 2026", hero_t1: "Zgjidhje që", hero_t2: "udhëheqin të ardhmen",
    hero_sub: "Arkitekturë ueb premium & zgjidhje digjitale për biznese dhe HoReCa.",
    hero_btn1: 'Puna Jonë <i class="fas fa-arrow-right"></i>', hero_btn2: "Na Kontaktoni",
    serv_eyebrow: "SHËRBIMET", serv_h1: "Biznesi juaj do të duket", serv_h2: "Perfekt", serv_h3: "në çdo pajisje.",
    serv_sub: "Zgjidhje digjitale të dizajnuara me precizion për të ngritur biznesin tuaj.",
    s1_t: "Dizajn Modern & Unik", s1_d: "Uebfaqe të përshtatshme saktësisht për brendin tuaj.",
    s2_t: "Prezantim Profesional", s2_d: "Uebfaqe që ndërtojnë besim med klientët tuaj të rinj.",
    s3_t: "Plotësisht Responsive", s3_d: "Biznesi juaj do të duket pa asnjë të metë në çdo ekran.",
    s4_t: "E-commerce (Shitje Online)", s4_d: "Kthejini vizitorët në klientë me një dyqan modern online.",
    port_eyebrow: "PORTOFOLI", port_title: "Projektet tona Premium",
    p1_tag: "PËRVOJË EVENTESH", p1_t: "Ftesa Digjitale", p1_tag_h: "PËRVOJË EVENTESH", p1_t_h: "Ftesa Digjitale", p1_d: "Duke ngritur përvojën e eventit tuaj.", p_btn: 'Eksploro Projektin <i class="fas fa-arrow-right"></i>',
    p2_tag: "HORECA / QR MENU", p2_t: "Menu Digjitale", p2_tag_h: "HORECA / QR MENU", p2_t_h: "Menu Digjitale", p2_d: "Menu moderne me kod QR për restorante dhe kafene.", p_btn2: 'Eksploro Projektin <i class="fas fa-arrow-right"></i>',
    ab_eyebrow: "RRETH NESH", ab_h1: "Perfeksion në", ab_h2: "çdo", ab_blue: "piksel",
    ab_p1: "<strong>DigiTech.101</strong> u themelua zyrtarisht më 1 Maj, 2026, med një mision të qartë: të ridefinoj mënyrën se si bizneset moderne prezantohen në botën digjitale. Ne ndërtojmë arkitektura ueb të projektuara me precizion, duke ofruar performancë elitare dhe një estetikë premium.",
    ab_p2: "Çdo zgjidhje që krijojmë është plotësisht e personalizuar—vom dizajni unik dhe kodi i optimizuar deri te përvoja e përsosur e përdoruesit. Ne u shërbejmë brendeve që synojnë të dominojnë tregun modern digjital me një imazh të paharrueshëm.",
    st1: "THEMELUAR", st2: "KOD 100% CUSTOM", st3: "SUPORT 24/7",
    cont_eyebrow: "KONTAKT & REZERVIME", cont_h1: "Le të ndërtojmë diçka", cont_h2: "premium",
    f_title: "Rezervo një Projekt", f_sub: "Plotësoni formularin dhe ne do t'ju kontaktojmë brenda 24 orëve.",
    f_lbl1: "EMRI", f_lbl2: "EMAIL", f_lbl3: "KATEGORIA", f_lbl4: "MESAZHI",
    p_name: "Emri Juaj", p_email: "ju@example.com", p_msg: "Përshkruani projektin tuaj...",
    btn_send: 'Dërgo <i class="fas fa-paper-plane"></i>', btn_sent: '<i class="fas fa-check"></i> U dërgua!',
    foot_tag: "Zgjidhje që udhëheqin të ardhmen", foot_copy: "Copyright © 2026 DigiTech.101 — Të gjitha të drejtat e rezervuara.",
    categories: ["Zgjidhni një opsion", "Portofol", "Menu Digjitale", "Ftesë Digjitale", "Sistem Rezervimesh / Takimesh", "Uebfaqe për Brend Personal", "Uebfaqe E-commerce (Shitje)", "Uebfaqe Një faqëshe (One-Page)", "Sistem për Rent a Car", "Sistem Anëtarësie", "Tjetër"],
    
    // Përkthimet e reja për Kontaktin
    cont_lbl_loc: "VENDNDODHJA", cont_val_loc: "Lipjan, Kosovë",
    cont_lbl_hours: "ORARI I PUNËS", cont_val_hours: "Hën - Sht: 09:00 - 17:00"
  },
  de: {
    nav_about: "Über uns", nav_portfolio: "Portfolio", nav_services: "Services", nav_contact: "Kontakt",
    nav_btn: 'Projekt buchen <i class="fas fa-arrow-right"></i>',
    hero_badge: "GESTARTET AM 1. MAI 2026", hero_t1: "Lösungen, die die", hero_t2: "Zukunft antreiben",
    hero_sub: "Premium-Webarchitektur & digitale Lösungen für Unternehmen und HoReCa.",
    hero_btn1: 'Unsere Arbeit <i class="fas fa-arrow-right"></i>', hero_btn2: "Kontaktieren Sie uns",
    serv_eyebrow: "DIENSTLEISTUNGEN", serv_h1: "Ihr Unternehmen wird auf jedem Gerät", serv_h2: "Makellos", serv_h3: "aussehen.",
    serv_sub: "Präzise gestaltete digitale Lösungen, um Ihr Unternehmen aufzuwerten.",
    s1_t: "Modernes & einzigartiges Design", s1_d: "Auf Ihre Marke zugeschnittene Websites.",
    s2_t: "Professionelle Präsentation", s2_d: "Websites, die Vertrauen bei Ihren neuen Kunden aufbauen.",
    s3_t: "Vollständig Responsive", s3_d: "Ihr Unternehmen wird auf jedem Bildschirm makellos aussehen.",
    s4_t: "E-Commerce-Websites", s4_d: "Verwandeln Sie Besucher mit einem modernen Online-Shop in Kunden.",
    port_eyebrow: "PORTFOLIO", port_title: "Unsere Premium-Projekte",
    p1_tag: "EVENT-ERFAHRUNG", p1_t: "Digitale Einladungen", p1_tag_h: "EVENT-ERFAHRUNG", p1_t_h: "Digitale Einladungen", p1_d: "Ergänzen Sie Ihr Event-Erlebnis.", p_btn: 'Projekt erkunden <i class="fas fa-arrow-right"></i>',
    p2_tag: "HORECA / QR-MENÜ", p2_t: "Digitales Menü", p2_tag_h: "HORECA / QR-MENÜ", p2_t_h: "Digitales Menü", p2_d: "Moderne QR-basierte Menüs für Restaurants & Cafés.", p_btn2: 'Projekt erkunden <i class="fas fa-arrow-right"></i>',
    ab_eyebrow: "ÜBER UNS", ab_h1: "Perfektion in", ab_h2: "jedem", ab_blue: "Pixel",
    ab_p1: "<strong>DigiTech.101</strong> wurde offiziell am 1. Mai 2026 gegründet, mit einer klaren Mission: die Art und Weise neu zu definieren, wie sich moderne Unternehmen in der digitalen Welt präsentieren. Wir bauen präzise gestaltete Webarchitekturen, die Spitzenleistung und eine Premium-Ästhetik bieten.",
    ab_p2: "Jede von uns erstellte Lösung ist vollständig maßgeschneidert – von einzigartigem Design und optimiertem Code bis hin zu fehlerfreier Benutzererfahrung. Wir bedienen Marken, die den modernen digitalen Markt mit einem unvergesslichen Image dominieren wollen.",
    st1: "GEGRÜNDET", st2: "100% CUSTOM CODE", st3: "24/7 SUPPORT",
    cont_eyebrow: "KONTAKT & BUCHUNG", cont_h1: "Lassen Sie uns etwas", cont_h2: "Premium bauen",
    f_title: "Projekt buchen", f_sub: "Füllen Sie das Formular aus und wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
    f_lbl1: "NAME", f_lbl2: "E-MAIL", f_lbl3: "KATEGORIE", f_lbl4: "NACHRICHT",
    p_name: "Ihr Name", p_email: "you@example.com", p_msg: "Beschreiben Sie Ihr Projekt...",
    btn_send: 'Senden <i class="fas fa-paper-plane"></i>', btn_sent: '<i class="fas fa-check"></i> Gesendet!',
    foot_tag: "Lösungen, die die Zukunft antreiben", foot_copy: "Copyright © 2026 DigiTech.101 — Alle Rechte vorbehalten.",
    categories: ["Wählen Sie eine Option", "Portfolio", "Digitales Menü", "Digitale Einladung", "Buchungs- / Terminsystem", "Persönliche Marken-Website", "E-Commerce-Website", "One-Page-Website", "Autovermietungssystem", "Mitgliedschaftssystem", "Anderes"],
    
    // Përkthimet e reja për Kontaktin
    cont_lbl_loc: "STANDORT", cont_val_loc: "Lipjan, Kosovo",
    cont_lbl_hours: "ARBEITSZEITEN", cont_val_hours: "Mo - Sa: 09:00 - 17:00"
  },
  fr: {
    nav_about: "À Propos", nav_portfolio: "Portfolio", nav_services: "Services", nav_contact: "Contact",
    nav_btn: 'Réserver un Projet <i class="fas fa-arrow-right"></i>',
    hero_badge: "LANCÉ LE 1 MAI 2026", hero_t1: "Des solutions qui", hero_t2: "propulsent l'avenir",
    hero_sub: "Architecture web premium & solutions digitales pour entreprises et HoReCa.",
    hero_btn1: 'Notre Travail <i class="fas fa-arrow-right"></i>', hero_btn2: "Contactez-nous",
    serv_eyebrow: "SERVICES", serv_h1: "Votre entreprise sera", serv_h2: "Impeccable", serv_h3: "sur tous les écrans.",
    serv_sub: "Solutions digitales conçues avec précision pour valoriser votre entreprise.",
    s1_t: "Design Unique & Moderne", s1_d: "Des sites web adaptés à l'image de votre marque.",
    s2_t: "Vitrine Professionnelle", s2_d: "Des sites web qui instaurent la confiance avec vos nouveaux clients.",
    s3_t: "Entièrement Responsive", s3_d: "Votre entreprise sera impeccable sur n'importe quel écran.",
    s4_t: "Sites E-commerce", s4_d: "Transformez vos visiteurs en clients avec une boutique en ligne moderne.",
    port_eyebrow: "PORTFOLIO", port_title: "Nos Projets Premium",
    p1_tag: "EXPÉRIENCE D'ÉVÉNEMENT", p1_t: "Invitations Digitales", p1_tag_h: "EXPÉRIENCE D'ÉVÉNEMENT", p1_t_h: "Invitations Digitales", p1_d: "Sublimez l'expérience de vos événements.", p_btn: 'Explorer le Projet <i class="fas fa-arrow-right"></i>',
    p2_tag: "HORECA / MENU QR", p2_t: "Menu Digital", p2_tag_h: "HORECA / MENU QR", p2_t_h: "Menu Digital", p2_d: "Menus QR modernes pour restaurants & cafés.", p_btn2: 'Explorer le Projet <i class="fas fa-arrow-right"></i>',
    ab_eyebrow: "À PROPOS DE NOUS", ab_h1: "La perfection dans", ab_h2: "chaque", ab_blue: "pixel",
    ab_p1: "<strong>DigiTech.101</strong> a été officiellement fondée le 1er mai 2026, avec une mission claire : redéfinir la manière dont les entreprises modernes se présentent dans le monde digital. Nous concevons des architectures web de précision, offrant des performances d'élite et une esthétique premium.",
    ab_p2: "Chaque solution que nous créeons est entièrement sur mesure — du design unique au code optimisé, jusqu'à une expérience utilisateur sans faille. Nous accompagnons les marques qui ambitionnent de dominer le marché digital moderne avec une image mémorable.",
    st1: "FONDÉE EN", st2: "CODE 100% SUR MESURE", st3: "SUPPORT 24/7",
    cont_eyebrow: "CONTACT & RÉSERVATION", cont_h1: "Créons quelque chose de", cont_h2: "premium",
    f_title: "Réserver un Projet", f_sub: "Remplissez le formulaire et nous vous contacterons sous 24 heures.",
    f_lbl1: "NOM", f_lbl2: "E-MAIL", f_lbl3: "CATÉGORIE", f_lbl4: "MESSAGE",
    p_name: "Votre Nom", p_email: "vous@example.com", p_msg: "Décrivez votre projet...",
    btn_send: 'Envoyer <i class="fas fa-paper-plane"></i>', btn_sent: '<i class="fas fa-check"></i> Envoyé !',
    foot_tag: "Des solutions qui propulsent l'avenir", foot_copy: "Copyright © 2026 DigiTech.101 — Tous droits réservés.",
    categories: ["Choisissez une option", "Portfolio", "Menu Digital", "Invitation Digitale", "Système de Réservation / Rendez-vous", "Site de Marque Personnelle", "Site E-commerce", "Site One-Page", "Système de Location de Voitures", "Système de Membres", "Autre"],
    
    // Përkthimet e reja për Kontaktin
    cont_lbl_loc: "EMPLACEMENT", cont_val_loc: "Lipjan, Kosovo",
    cont_lbl_hours: "HEURES DE TRAVAIL", cont_val_hours: "Lun - Sam: 09:00 - 17:00"
  }
};

const order = ['en', 'sq', 'de', 'fr'];
let currentLang = 'en';

function updateLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (voc[lang][key]) el.innerHTML = voc[lang][key];
  });

  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.getAttribute('data-placeholder');
    if (voc[lang][key]) el.setAttribute('placeholder', voc[lang][key]);
  });

  const select = document.getElementById('category-select');
  if (select) {
    select.innerHTML = '';
    voc[lang].categories.forEach((cat, index) => {
      const opt = document.createElement('option');
      if (index === 0) {
        opt.disabled = true;
        opt.selected = true;
        opt.value = "";
      }
      opt.textContent = cat;
      select.appendChild(opt);
    });
  }

  document.getElementById('current-lang-txt').textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-opt').forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active-lang');
    } else {
      opt.classList.remove('active-lang');
    }
  });
}

const dropdown = document.querySelector('.lang-dropdown');
const switcherBtn = document.getElementById('lang-switcher');

switcherBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('active');
});

document.querySelectorAll('.lang-opt').forEach(opt => {
  opt.addEventListener('click', function() {
    currentLang = this.getAttribute('data-lang');
    updateLanguage(currentLang);
    dropdown.classList.remove('active');
  });
});

document.addEventListener('click', () => {
  dropdown.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(currentLang);
});

document.getElementById('submit-btn').addEventListener('click', (e) => {
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = voc[currentLang]['btn_sent'];
  btn.style.background = 'linear-gradient(90deg,#00aa44,#00cc66)';
  setTimeout(() => {
    btn.innerHTML = voc[currentLang]['btn_send'];
    btn.style.background = '';
  }, 3000);
});

// ── LOGJIKA E HAMBURGER MENU (DROPDOWN PANEL) ──
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});