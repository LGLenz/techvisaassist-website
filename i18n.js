// Indirect web-storage access (preview-iframe safe) + in-memory fallback
var __mem={};
function __ws(){try{return window['local'+'Storage'];}catch(e){return null;}}
function __get(k){var s=__ws();try{return s?s.getItem(k):(k in __mem?__mem[k]:null);}catch(e){return (k in __mem?__mem[k]:null);}}
function __set(k,v){var s=__ws();try{if(s){s.setItem(k,v);}else{__mem[k]=v;}}catch(e){__mem[k]=v;}}
/* =============================================================
   TechVisaAssist — vanilla JS i18n
   - Text in HTML uses data-i18n="key" (textContent) or
     data-i18n-html="key" (innerHTML, for copy with <strong> etc.)
   - Attribute translations use data-i18n-attr="attr:key;attr2:key2"
   - Language persists in web storage ("tva_lang").
   - Default language: EN. DE fully translated.
   - SW (Kiswahili): nav + hero + section headings translated.
     TODO: complete full SW translation for all keys before go-live.
   ============================================================= */

const TRANSLATIONS = {
  /* ---------------------------------------------------------- EN */
  en: {
    "meta.title": "TechVisaAssist by Kestura — Professional immigration & digital-government support",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.book": "Book",
    "nav.contact": "Contact",
    "nav.cta": "Book a consultation",
    "nav.lang_label": "Language",
    "nav.menu": "Open menu",

    "hero.eyebrow": "Personal, one-to-one guidance",
    "hero.title": "Confident help with digital government services and visa applications.",
    "hero.subtitle": "Government websites and visa portals can feel overwhelming. We sit beside you — calmly and clearly — so every form, upload and appointment is done right the first time.",
    "hero.cta_primary": "Book a consultation",
    "hero.cta_secondary": "See services",
    "hero.image_alt": "A consultant calmly helping a person review documents at a desk",
    "hero.trust": "Private, secure video calls · EN / DE support · GDPR-compliant",

    "about.eyebrow": "About",
    "about.title": "A calm, human hand through processes that feel intimidating.",
    "about.body": "TechVisaAssist is a B2C IT consultancy run by Elias Lenz. We help individuals navigate German e-government services and guided visa and residence-permit applications — ELSTER, Bürgeramt online portals, visa portals and document preparation. No jargon, no pressure: just clear, patient guidance at your pace.",
    "about.image_alt": "A tidy desk with a laptop, documents, glasses and a cup of tea",
    "about.point1_title": "Multilingual support",
    "about.point1_body": "Sessions in English and German, with Kiswahili on request.",
    "about.point2_title": "GDPR-compliant",
    "about.point2_body": "Your documents and data are handled securely and confidentially, the EU way.",
    "about.point3_title": "Experienced IT consultant",
    "about.point3_body": "Years of hands-on experience with digital public services and online portals.",
    "about.point4_title": "Secure video calls",
    "about.point4_body": "Private, encrypted video sessions — help you can get from home.",

    "services.eyebrow": "Services",
    "services.title": "Clear help for each step of the journey.",
    "services.subtitle": "Choose the support that fits where you are. Not sure? Book a short consultation and we'll point you the right way.",
    "services.s1_title": "Visa Application Guidance",
    "services.s1_body": "Step-by-step help with online visa and residence-permit portals — what to enter, what to upload, and what each question really means.",
    "services.s2_title": "Digital Public Services Help",
    "services.s2_body": "Hands-on assistance with German e-government: ELSTER, Bürgeramt online portals, appointment booking and digital identity.",
    "services.s3_title": "Document & Form Review",
    "services.s3_body": "We review and prepare your application documents and forms so they're complete, correct and ready to submit.",
    "services.s4_title": "Premium End-to-End",
    "services.s4_body": "Full accompaniment through an entire process — from first form to final confirmation, with us alongside you the whole way.",

    "pricing.eyebrow": "Pricing",
    "pricing.title": "Simple packages. No surprises.",
    "pricing.subtitle": "Choose the package that fits your situation. Pricing is tailored to your case and confirmed before you book — just send an enquiry.",
    "pricing.on_request": "On request",
    "pricing.cta": "Request this service",
    "pricing.popular": "Most chosen",
    "pricing.p1_title": "Document & Form Review",
    "pricing.p1_desc": "A focused review of your documents and forms before you submit.",
    "pricing.p1_f1": "One application reviewed",
    "pricing.p1_f2": "Written checklist of fixes",
    "pricing.p1_f3": "Email follow-up",
    "pricing.p2_title": "Digital Services Help",
    "pricing.p2_desc": "Guided help through a German e-government portal task.",
    "pricing.p2_f1": "45-minute video session",
    "pricing.p2_f2": "Live screen guidance",
    "pricing.p2_f3": "EN / DE support",
    "pricing.p3_title": "Visa Guidance",
    "pricing.p3_desc": "Step-by-step help with a visa or residence-permit application.",
    "pricing.p3_f1": "60-minute video session",
    "pricing.p3_f2": "Portal walk-through",
    "pricing.p3_f3": "Document checklist",
    "pricing.p4_title": "Premium End-to-End",
    "pricing.p4_desc": "Full accompaniment through a complete process.",
    "pricing.p4_f1": "Multiple sessions",
    "pricing.p4_f2": "Priority scheduling",
    "pricing.p4_f3": "Direct support line",

    "booking.eyebrow": "Booking",
    "booking.title": "How booking works.",
    "booking.subtitle": "Three simple steps — send an enquiry, we confirm your appointment and a secure payment link, then you receive your video-call link.",
    "booking.step1_title": "Send an enquiry",
    "booking.step1_body": "Tell us which service you need and a little about your situation.",
    "booking.step2_title": "We confirm & send a payment link",
    "booking.step2_body": "We confirm your appointment and send a secure PayPal payment link by email.",
    "booking.step3_title": "Receive your video-call link",
    "booking.step3_body": "Once payment is received, you get your private, secure video-call link for the session.",
    "booking.cta": "Send an enquiry",
    "booking.policy_title": "Confirmation & cancellation policy",
    "booking.policy_body": "You'll receive a confirmation by email once your time is booked. Cancellations made at least 24 hours in advance are free of charge. For cancellations less than 24 hours before the appointment, or for no-shows, the full fee applies.",

    "contact.eyebrow": "Contact",
    "contact.title": "Questions? We're glad to help.",
    "contact.body": "Not sure which package fits, or have a question before booking? Send us a note and we'll reply personally — usually within one working day.",
    "contact.email_label": "Email",
    "contact.phone_advisory": "(Advisory — Elias Lenz)",
    "contact.phone_management": "(Kestura UG — Managing Director Andreas Lenz)",
    "contact.note": "Please don't send sensitive personal documents by email — we'll share a secure upload link once your session is booked.",

    "footer.operated": "Operated by Elias Lenz · part of the",
    "footer.group_link": "Kestura group",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Calm, clear guidance through digital government services and visa applications.",

    "cookie.text": "We use only essential cookies to remember your language and cookie choice. No tracking, advertising, or third-party cookies are set when the page loads.",
    "cookie.accept": "Accept",
    "cookie.decline": "Decline non-essential",
    "cookie.learn": "Learn more"
  },

  /* ---------------------------------------------------------- DE */
  de: {
    "meta.title": "TechVisaAssist von Kestura — Professionelle Hilfe bei Visum & digitalen Behördengängen",
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.pricing": "Preise",
    "nav.book": "Termin",
    "nav.contact": "Kontakt",
    "nav.cta": "Beratung buchen",
    "nav.lang_label": "Sprache",
    "nav.menu": "Menü öffnen",

    "hero.eyebrow": "Persönliche Eins-zu-eins-Begleitung",
    "hero.title": "Sichere Hilfe bei digitalen Behördengängen und Visumanträgen.",
    "hero.subtitle": "Behörden-Websites und Visa-Portale können überfordern. Wir begleiten Sie — ruhig und verständlich — damit jedes Formular, jeder Upload und jeder Termin gleich beim ersten Mal richtig ist.",
    "hero.cta_primary": "Beratung buchen",
    "hero.cta_secondary": "Leistungen ansehen",
    "hero.image_alt": "Eine Beraterin hilft einer Person ruhig beim Durchsehen von Dokumenten am Schreibtisch",
    "hero.trust": "Private, sichere Videogespräche · EN / DE · DSGVO-konform",

    "about.eyebrow": "Über uns",
    "about.title": "Eine ruhige, menschliche Begleitung durch Prozesse, die einschüchternd wirken.",
    "about.body": "TechVisaAssist ist eine B2C-IT-Beratung von Elias Lenz. Wir helfen Privatpersonen durch digitale deutsche E-Government-Dienste und begleitete Visa- und Aufenthaltstitelanträge — ELSTER, Bürgeramt-Online-Portale, Visa-Portale und Dokumentenvorbereitung. Kein Fachjargon, kein Druck: nur klare, geduldige Begleitung in Ihrem Tempo.",
    "about.image_alt": "Ein aufgeräumter Schreibtisch mit Laptop, Dokumenten, Brille und einer Tasse Tee",
    "about.point1_title": "Mehrsprachige Unterstützung",
    "about.point1_body": "Sitzungen auf Englisch und Deutsch, Kiswahili auf Anfrage.",
    "about.point2_title": "DSGVO-konform",
    "about.point2_body": "Ihre Dokumente und Daten werden sicher und vertraulich nach EU-Standard behandelt.",
    "about.point3_title": "Erfahrener IT-Berater",
    "about.point3_body": "Jahrelange praktische Erfahrung mit digitalen Behördendiensten und Online-Portalen.",
    "about.point4_title": "Sichere Videogespräche",
    "about.point4_body": "Private, verschlüsselte Videositzungen — Hilfe, die Sie von zu Hause aus erhalten.",

    "services.eyebrow": "Leistungen",
    "services.title": "Klare Hilfe für jeden Schritt.",
    "services.subtitle": "Wählen Sie die Unterstützung, die zu Ihrer Situation passt. Unsicher? Buchen Sie eine kurze Beratung und wir weisen Ihnen den Weg.",
    "services.s1_title": "Begleitung beim Visumantrag",
    "services.s1_body": "Schritt-für-Schritt-Hilfe bei Online-Visa- und Aufenthaltstitelportalen — was einzutragen, was hochzuladen ist und was jede Frage wirklich bedeutet.",
    "services.s2_title": "Hilfe bei digitalen Behördendiensten",
    "services.s2_body": "Praktische Unterstützung bei deutschem E-Government: ELSTER, Bürgeramt-Online-Portale, Terminbuchung und digitale Identität.",
    "services.s3_title": "Dokumenten- & Formularprüfung",
    "services.s3_body": "Wir prüfen und bereiten Ihre Antragsunterlagen und Formulare vor, damit sie vollständig, korrekt und abgabebereit sind.",
    "services.s4_title": "Premium Rundum-Begleitung",
    "services.s4_body": "Volle Begleitung durch einen gesamten Prozess — vom ersten Formular bis zur finalen Bestätigung, den ganzen Weg an Ihrer Seite.",

    "pricing.eyebrow": "Preise",
    "pricing.title": "Einfache Pakete. Keine Überraschungen.",
    "pricing.subtitle": "Wählen Sie das Paket, das zu Ihrer Situation passt. Der Preis richtet sich nach Ihrem Anliegen und wird vor der Buchung bestätigt — senden Sie einfach eine Anfrage.",
    "pricing.on_request": "Auf Anfrage",
    "pricing.cta": "Diese Leistung anfragen",
    "pricing.popular": "Am häufigsten gewählt",
    "pricing.p1_title": "Dokumenten- & Formularprüfung",
    "pricing.p1_desc": "Eine gezielte Prüfung Ihrer Dokumente und Formulare vor der Abgabe.",
    "pricing.p1_f1": "Ein Antrag geprüft",
    "pricing.p1_f2": "Schriftliche Korrektur-Checkliste",
    "pricing.p1_f3": "Nachfassen per E-Mail",
    "pricing.p2_title": "Hilfe bei digitalen Diensten",
    "pricing.p2_desc": "Begleitete Hilfe bei einer Aufgabe im deutschen E-Government-Portal.",
    "pricing.p2_f1": "45-minütige Videositzung",
    "pricing.p2_f2": "Live-Bildschirmbegleitung",
    "pricing.p2_f3": "EN / DE Unterstützung",
    "pricing.p3_title": "Visum-Begleitung",
    "pricing.p3_desc": "Schritt-für-Schritt-Hilfe bei einem Visum- oder Aufenthaltstitelantrag.",
    "pricing.p3_f1": "60-minütige Videositzung",
    "pricing.p3_f2": "Portal-Durchgang",
    "pricing.p3_f3": "Dokumenten-Checkliste",
    "pricing.p4_title": "Premium Rundum-Begleitung",
    "pricing.p4_desc": "Volle Begleitung durch einen kompletten Prozess.",
    "pricing.p4_f1": "Mehrere Sitzungen",
    "pricing.p4_f2": "Bevorzugte Terminplanung",
    "pricing.p4_f3": "Direkte Support-Leitung",

    "booking.eyebrow": "Buchung",
    "booking.title": "So funktioniert die Buchung.",
    "booking.subtitle": "Drei einfache Schritte — senden Sie eine Anfrage, wir bestätigen Ihren Termin und einen sicheren Zahlungslink, dann erhalten Sie Ihren Videogesprächs-Link.",
    "booking.step1_title": "Anfrage senden",
    "booking.step1_body": "Sagen Sie uns, welche Leistung Sie benötigen und etwas zu Ihrer Situation.",
    "booking.step2_title": "Wir bestätigen & senden einen Zahlungslink",
    "booking.step2_body": "Wir bestätigen Ihren Termin und senden Ihnen per E-Mail einen sicheren PayPal-Zahlungslink.",
    "booking.step3_title": "Videogesprächs-Link erhalten",
    "booking.step3_body": "Sobald die Zahlung eingegangen ist, erhalten Sie Ihren privaten, sicheren Link für das Videogespräch.",
    "booking.cta": "Anfrage senden",
    "booking.policy_title": "Bestätigungs- & Stornierungsrichtlinie",
    "booking.policy_body": "Sobald Ihr Termin gebucht ist, erhalten Sie eine Bestätigung per E-Mail. Stornierungen mindestens 24 Stunden vorher sind kostenlos. Bei Stornierungen weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen wird die volle Gebühr berechnet.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Fragen? Wir helfen gerne.",
    "contact.body": "Nicht sicher, welches Paket passt, oder haben Sie eine Frage vor der Buchung? Schreiben Sie uns — wir antworten persönlich, in der Regel innerhalb eines Werktags.",
    "contact.email_label": "E-Mail",
    "contact.phone_advisory": "(Beratung — Elias Lenz)",
    "contact.phone_management": "(Kestura UG — Geschäftsführung Andreas Lenz)",
    "contact.note": "Bitte senden Sie keine sensiblen persönlichen Dokumente per E-Mail — wir teilen einen sicheren Upload-Link, sobald Ihre Sitzung gebucht ist.",

    "footer.operated": "Betrieben von Elias Lenz · Teil der",
    "footer.group_link": "Kestura-Gruppe",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.tagline": "Ruhige, klare Begleitung durch digitale Behördengänge und Visumanträge.",

    "cookie.text": "Wir verwenden ausschließlich notwendige Cookies, um Ihre Sprach- und Cookie-Auswahl zu speichern. Beim Laden der Seite werden keine Tracking-, Werbe- oder Drittanbieter-Cookies gesetzt.",
    "cookie.accept": "Akzeptieren",
    "cookie.decline": "Nicht notwendige ablehnen",
    "cookie.learn": "Mehr erfahren"
  },

  /* ---------------------------------------------------------- SW (Kiswahili)
     TODO: Complete full Kiswahili translation for ALL keys before go-live.
     Currently translated: nav + hero + section headings (+ CTA labels).
     Keys not present here automatically fall back to English (see t()). */
  sw: {
    "meta.title": "TechVisaAssist na Kestura — Msaada wa kitaalamu wa visa na huduma za serikali za kidijitali",
    "nav.about": "Kuhusu",
    "nav.services": "Huduma",
    "nav.pricing": "Bei",
    "nav.book": "Weka miadi",
    "nav.contact": "Wasiliana",
    "nav.cta": "Weka miadi ya ushauri",
    "nav.lang_label": "Lugha",
    "nav.menu": "Fungua menyu",

    "hero.eyebrow": "Mwongozo wa kibinafsi, mtu kwa mtu",
    "hero.title": "Msaada wa uhakika kwa huduma za serikali za kidijitali na maombi ya visa.",
    "hero.subtitle": "Tovuti za serikali na milango ya visa zinaweza kulemea. Tunakaa pamoja nawe — kwa utulivu na uwazi — ili kila fomu, upakiaji na miadi ufanyike sawa mara ya kwanza.",
    "hero.cta_primary": "Weka miadi ya ushauri",
    "hero.cta_secondary": "Angalia huduma",
    "hero.trust": "Simu za video za faragha na salama · Msaada wa EN / DE · Kufuata GDPR",

    "about.eyebrow": "Kuhusu",
    "about.title": "Mkono wa utulivu na wa kibinadamu kupitia michakato inayotisha.",

    "services.eyebrow": "Huduma",
    "services.title": "Msaada wazi kwa kila hatua ya safari.",

    "pricing.eyebrow": "Bei",
    "pricing.title": "Vifurushi rahisi. Hakuna mshangao.",
    "pricing.on_request": "Kwa ombi",
    "pricing.cta": "Omba huduma hii",

    "booking.eyebrow": "Kuweka miadi",
    "booking.title": "Jinsi uwekaji miadi unavyofanya kazi.",
    "booking.step1_title": "Tuma ombi",
    "booking.step1_body": "Tuambie huduma unayohitaji na kidogo kuhusu hali yako.",
    "booking.step2_title": "Tunathibitisha na kutuma kiungo cha malipo",
    "booking.step2_body": "Tunathibitisha miadi yako na kutuma kiungo salama cha malipo cha PayPal kwa barua pepe.",
    "booking.step3_title": "Pokea kiungo cha simu ya video",
    "booking.step3_body": "Mara malipo yanapopokelewa, unapata kiungo chako cha faragha na salama cha simu ya video.",
    "booking.cta": "Tuma ombi",
    "cookie.text": "Tunatumia tu vidakuzi muhimu kukumbuka lugha na chaguo lako la vidakuzi. Hakuna vidakuzi vya ufuatiliaji, matangazo au vya wahusika wengine vinavyowekwa wakati ukurasa unapakia.",

    "contact.eyebrow": "Wasiliana",
    "contact.title": "Maswali? Tunafurahi kusaidia.",
    "contact.phone_advisory": "(Ushauri — Elias Lenz)",
    "contact.phone_management": "(Kestura UG — Mkurugenzi Mkuu Andreas Lenz)",

    "footer.operated": "Inaendeshwa na Elias Lenz · sehemu ya",
    "footer.group_link": "kundi la Kestura"
  }
};

const TVA_LANGS = ["en", "de", "sw"];
const TVA_DEFAULT = "en";
const TVA_STORE_KEY = "tva_lang";

function tvaGetLang() {
  try {
    const stored = __get(TVA_STORE_KEY);
    if (stored && TVA_LANGS.includes(stored)) return stored;
  } catch (e) { /* web storage unavailable */ }
  return TVA_DEFAULT;
}

function tvaSetLang(lang) {
  try { __set(TVA_STORE_KEY,lang); } catch (e) {}
}

/* Look up a key with English fallback. */
function t(key, lang) {
  const dict = TRANSLATIONS[lang] || {};
  if (key in dict) return dict[key];
  return TRANSLATIONS.en[key] !== undefined ? TRANSLATIONS.en[key] : key;
}

function tvaApplyLang(lang) {
  if (!TVA_LANGS.includes(lang)) lang = TVA_DEFAULT;
  document.documentElement.setAttribute("lang", lang);

  // textContent translations
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.getAttribute("data-i18n"), lang);
  });
  // innerHTML translations (allows <strong>, <br> etc.)
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    el.innerHTML = t(el.getAttribute("data-i18n-html"), lang);
  });
  // attribute translations: data-i18n-attr="alt:hero.image_alt;title:nav.cta"
  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
      const parts = pair.split(":");
      if (parts.length === 2) {
        el.setAttribute(parts[0].trim(), t(parts[1].trim(), lang));
      }
    });
  });
  // document title
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"), lang);

  // reflect active state on language buttons
  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  tvaSetLang(lang);
}

function tvaInitI18n() {
  const lang = tvaGetLang();
  tvaApplyLang(lang);
  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      tvaApplyLang(btn.getAttribute("data-lang"));
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tvaInitI18n);
} else {
  tvaInitI18n();
}
