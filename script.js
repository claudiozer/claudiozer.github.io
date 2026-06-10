const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const languageSelect = document.querySelector("#language");

const translations = {
  es: {
    "meta.title": "Claudiozer | Portafolio",
    "meta.description": "Portafolio personal de Claudio Rafael: creatividad, tecnología, fotografía y producto.",
    "brand.home": "Claudiozer, inicio",
    "language.label": "Idioma",
    "nav.open": "Abrir menú",
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.interests": "Lo que me mueve", "nav.projects": "Proyectos", "nav.gallery": "Galería",
    "hero.hello": "¡Hola! Soy", "hero.lead": "creativo, curioso y en constante evolución.",
    "hero.body": "Apasionado por la creatividad, la fotografía y la tecnología. Creo stickers animados que transmiten emociones, capturo momentos que cuentan historias y trabajo en soluciones que mejoran procesos y conectan personas.",
    "hero.life": "Vivo aprendiendo, creando y disfrutando cada día con propósito.",
    "hero.quote": "Creo, capturo y conecto para dejar huella.", "hero.imageAlt": "Retrato ilustrado de Claudio Rafael",
    "profile.title": "Perfil", "profile.nationality": "Argentino", "profile.age": "40 años", "profile.focusLabel": "Enfocado en:", "profile.focus": "Creatividad, tecnología y soluciones que conectan.",
    "essence.title": "Mi esencia", "essence.focused": "Enfocado", "essence.focusedText": "Dirijo mi energía a lo que importa.", "essence.creative": "Creativo", "essence.creativeText": "Transformo ideas en experiencias.", "essence.disciplined": "Disciplinado", "essence.disciplinedText": "La constancia construye libertad.", "essence.calm": "Tranquilo", "essence.calmText": "Mente serena, mejores decisiones.",
    "cards.motivation": "Motivación", "cards.motivationText": "La disciplina me da estructura, la libertad me da propósito. Entreno mi cuerpo para liberar mi mente.", "cards.moves": "Lo que me mueve", "cards.music": "Música", "cards.photoVideo": "Fotografía y video", "cards.technology": "Tecnología", "cards.travel": "Viajar", "cards.coffee": "Café",
    "cards.poText": "Lidero la visión del producto, conecto equipos y entrego valor real a las personas.", "cards.productManagement": "Gestión de Producto", "cards.analysis": "Análisis", "cards.agility": "Agilidad", "cards.leadership": "Liderazgo",
    "cards.photography": "Fotografía", "cards.photographyText": "Vivo para capturar lo que siento. Cada foto es un recuerdo que no quiero olvidar.", "cards.viewGallery": "Ver galería →",
    "cards.musicText": "La música me acompaña, me guía y me empuja a seguir creando.", "cards.topMusic": "Mi top musical →",
    "cards.crossfitText": "No es solo entrenar el cuerpo, es entrenar la mente para no rendirse.", "cards.viewRoutine": "Ver rutina →",
    "cards.techAnime": "Tecnología y anime", "cards.techAnimeText": "Creo soluciones que conectan. El anime me enseña, me inspira y me motiva a soñar en grande.", "cards.tools": "Herramientas que uso →",
    "cards.travelCoffee": "Viajes y café", "cards.travelCoffeeText": "Vivo en Joinville, Brasil. Viajar me abre la mente, y el café hace que todo fluya.", "cards.favoritePlaces": "Ver lugares favoritos →",
    "closing": "❝  La creatividad es mi forma de vivir y de conectar con lo que amo.  ♡"
  },
  en: {
    "meta.title": "Claudiozer | Portfolio",
    "meta.description": "Claudio Rafael's personal portfolio: creativity, technology, photography and product.",
    "brand.home": "Claudiozer, home",
    "language.label": "Language",
    "nav.open": "Open menu",
    "nav.home": "Home", "nav.about": "About me", "nav.interests": "What moves me", "nav.projects": "Projects", "nav.gallery": "Gallery",
    "hero.hello": "Hello! I'm", "hero.lead": "creative, curious and constantly evolving.",
    "hero.body": "Passionate about creativity, photography and technology. I create animated stickers that convey emotions, capture moments that tell stories and build solutions that improve processes and connect people.",
    "hero.life": "I keep learning, creating and enjoying every day with purpose.",
    "hero.quote": "I create, capture and connect to leave a mark.", "hero.imageAlt": "Illustrated portrait of Claudio Rafael",
    "profile.title": "Profile", "profile.nationality": "Argentinian", "profile.age": "40 years old", "profile.focusLabel": "Focused on:", "profile.focus": "Creativity, technology and solutions that connect.",
    "essence.title": "My essence", "essence.focused": "Focused", "essence.focusedText": "I direct my energy toward what matters.", "essence.creative": "Creative", "essence.creativeText": "I turn ideas into experiences.", "essence.disciplined": "Disciplined", "essence.disciplinedText": "Consistency builds freedom.", "essence.calm": "Calm", "essence.calmText": "A clear mind makes better decisions.",
    "cards.motivation": "Motivation", "cards.motivationText": "Discipline gives me structure, freedom gives me purpose. I train my body to free my mind.", "cards.moves": "What moves me", "cards.music": "Music", "cards.photoVideo": "Photography and video", "cards.technology": "Technology", "cards.travel": "Travel", "cards.coffee": "Coffee",
    "cards.poText": "I lead the product vision, connect teams and deliver real value to people.", "cards.productManagement": "Product Management", "cards.analysis": "Analysis", "cards.agility": "Agility", "cards.leadership": "Leadership",
    "cards.photography": "Photography", "cards.photographyText": "I live to capture what I feel. Every photo is a memory I never want to forget.", "cards.viewGallery": "View gallery →",
    "cards.musicText": "Music stays with me, guides me and pushes me to keep creating.", "cards.topMusic": "My top music →",
    "cards.crossfitText": "It is not just about training the body, but training the mind not to give up.", "cards.viewRoutine": "View routine →",
    "cards.techAnime": "Technology and anime", "cards.techAnimeText": "I create solutions that connect. Anime teaches me, inspires me and motivates me to dream big.", "cards.tools": "Tools I use →",
    "cards.travelCoffee": "Travel and coffee", "cards.travelCoffeeText": "I live in Joinville, Brazil. Travel opens my mind, and coffee makes everything flow.", "cards.favoritePlaces": "View favorite places →",
    "closing": "❝  Creativity is my way of living and connecting with what I love.  ♡"
  },
  pt: {
    "meta.title": "Claudiozer | Portfólio",
    "meta.description": "Portfólio pessoal de Claudio Rafael: criatividade, tecnologia, fotografia e produto.",
    "brand.home": "Claudiozer, início",
    "language.label": "Idioma",
    "nav.open": "Abrir menu",
    "nav.home": "Início", "nav.about": "Sobre mim", "nav.interests": "O que me move", "nav.projects": "Projetos", "nav.gallery": "Galeria",
    "hero.hello": "Olá! Eu sou", "hero.lead": "criativo, curioso e em constante evolução.",
    "hero.body": "Apaixonado por criatividade, fotografia e tecnologia. Crio stickers animados que transmitem emoções, capturo momentos que contam histórias e trabalho em soluções que melhoram processos e conectam pessoas.",
    "hero.life": "Vivo aprendendo, criando e aproveitando cada dia com propósito.",
    "hero.quote": "Crio, capturo e conecto para deixar minha marca.", "hero.imageAlt": "Retrato ilustrado de Claudio Rafael",
    "profile.title": "Perfil", "profile.nationality": "Argentino", "profile.age": "40 anos", "profile.focusLabel": "Focado em:", "profile.focus": "Criatividade, tecnologia e soluções que conectam.",
    "essence.title": "Minha essência", "essence.focused": "Focado", "essence.focusedText": "Direciono minha energia ao que importa.", "essence.creative": "Criativo", "essence.creativeText": "Transformo ideias em experiências.", "essence.disciplined": "Disciplinado", "essence.disciplinedText": "A constância constrói liberdade.", "essence.calm": "Tranquilo", "essence.calmText": "Mente serena, melhores decisões.",
    "cards.motivation": "Motivação", "cards.motivationText": "A disciplina me dá estrutura, a liberdade me dá propósito. Treino meu corpo para libertar minha mente.", "cards.moves": "O que me move", "cards.music": "Música", "cards.photoVideo": "Fotografia e vídeo", "cards.technology": "Tecnologia", "cards.travel": "Viajar", "cards.coffee": "Café",
    "cards.poText": "Lidero a visão do produto, conecto equipes e entrego valor real para as pessoas.", "cards.productManagement": "Gestão de Produto", "cards.analysis": "Análise", "cards.agility": "Agilidade", "cards.leadership": "Liderança",
    "cards.photography": "Fotografia", "cards.photographyText": "Vivo para capturar o que sinto. Cada foto é uma lembrança que não quero esquecer.", "cards.viewGallery": "Ver galeria →",
    "cards.musicText": "A música me acompanha, me guia e me impulsiona a continuar criando.", "cards.topMusic": "Minha seleção musical →",
    "cards.crossfitText": "Não é apenas treinar o corpo, é treinar a mente para não desistir.", "cards.viewRoutine": "Ver rotina →",
    "cards.techAnime": "Tecnologia e anime", "cards.techAnimeText": "Crio soluções que conectam. O anime me ensina, me inspira e me motiva a sonhar grande.", "cards.tools": "Ferramentas que uso →",
    "cards.travelCoffee": "Viagens e café", "cards.travelCoffeeText": "Moro em Joinville, Brasil. Viajar abre minha mente, e o café faz tudo fluir.", "cards.favoritePlaces": "Ver lugares favoritos →",
    "closing": "❝  A criatividade é minha forma de viver e de me conectar com o que amo.  ♡"
  }
};

function setLanguage(language) {
  const locale = translations[language] ? language : "es";
  const dictionary = translations[locale];

  document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value) element.setAttribute("content", value);
  });

  languageSelect.value = locale;
  localStorage.setItem("claudiozer-language", locale);
}

const savedLanguage = localStorage.getItem("claudiozer-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("pt")
  ? "pt"
  : navigator.language.toLowerCase().startsWith("en") ? "en" : "es";

setLanguage(savedLanguage || browserLanguage);
languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
  });
}, { rootMargin: "-30% 0px -60%", threshold: [0, .25, .6] });

observedSections.forEach((section) => observer.observe(section));
