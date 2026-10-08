// Shared business details used across the site.
export const SITE = {
  name: "Heart Of Love Pet Care",
  phone: "(347) 335-3131",
  phoneHref: "tel:+13473353131",
  email: "heartoflovepetcare@gmail.com",
  address: "166-09 144th Ave, Jamaica, NY 11434",
  mapQuery: "166-09+144th+Ave,+Jamaica,+NY+11434",
  rating: "5.0",
  reviewCount: 23,
  googleUrl:
    "https://www.google.com/search?q=Heart+Of+Love+pet+care+nyc",
  instagramUrl: "https://www.instagram.com/heartoflovepetcare/",
  // GoHighLevel webhook for quote form leads. The chat widget is the GHL script in index.html.
  ghlWebhook: "https://services.leadconnectorhq.com/hooks/kCk0jPqtmsHRZPu3GWpJ/webhook-trigger/eaa82684-4ea3-4f05-aa8a-9b1d48e22c9e",
  reviewSurveyUrl: "https://api.leadconnectorhq.com/widget/survey/bVJmpV7IwCk5H0Trl0UN",
  // Hero background videos (public/videos/). hero.mp4 is 10 Pexels clips (grooming, boarding & play, training),
  // ~2.5s each, merged at 16:9. List several files to play them in order, then repeat. Empty = hero photo only.
  heroVideos: ["/videos/hero.mp4"] as string[],
  heroVideoPoster: "/videos/hero-poster.jpg",
  heroImage: "https://vibe.filesafe.space/1777030353190232844/attachments/b368c911-7f25-4632-acad-64db52f092c2.png",
  logo:"https://vibe.filesafe.space/1777030353190232844/attachments/c896108d-a195-4a99-9db4-723af21b2087.png",
};

export const reviewCountLabel = `${SITE.reviewCount} Google Reviews`;

// Same hours as the footer.
export const HOURS = [
  { day: "Monday - Friday", time: "8:00am - 5:00pm" },
  { day: "Saturday", time: "8:00am - 2:00pm" },
  { day: "Sunday", time: "Closed" },
];

// Short facts used in trust strips and "at a glance" cards. Only things the site already states.
export const TRUST_POINTS = [
  "Owner-operated family business",
  "10+ years experience",
  "Licensed & fully insured",
  "100% local to Queens, NY",
  "Dogs of all sizes and breeds",
];
