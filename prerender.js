import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://nycheartsoflovepetcare.com'

const routesMeta = {
  '/': {
    title: 'Heart Of Love Pet Care | Dog Grooming, Boarding & Training in Queens, NY',
    description: 'Expert dog grooming, home boarding, and training in Queens, NY. Small, owner-operated pet care that treats every dog like family. Book your appointment today.',
  },
  '/home': {
    title: 'Heart Of Love Pet Care | Dog Grooming, Boarding & Training in Queens, NY',
    description: 'Expert dog grooming, home boarding, and training in Queens, NY. Small, owner-operated pet care that treats every dog like family. Book your appointment today.',
  },
  '/services/pet-grooming': {
    title: 'Dog Grooming Queens NY | Heart Of Love Pet Care',
    description: 'Professional dog grooming in Queens, NY. Breed-specific cuts, baths, nail trims & more. Owner-operated salon treating every dog like family.',
  },
  '/services/pet-boarding': {
    title: 'Pet Boarding Queens NY | Heart Of Love Pet Care',
    description: 'Safe, loving home boarding for dogs in Queens, NY. No cages — just a warm home environment. Book your dog\'s stay with Heart Of Love Pet Care.',
  },
  '/services/home-boarding': {
    title: 'Home Boarding Queens NY | Heart Of Love Pet Care',
    description: 'Your dog stays in a real home, not a cage. One-on-one attention and photo updates while you\'re away. Heart Of Love Pet Care in Queens, NY.',
  },
  '/services/dog-walking': {
    title: 'Dog Walking Queens NY | Heart Of Love Pet Care',
    description: 'Reliable dog walking services in Queens, NY. Experienced, caring walkers who treat your dog like family. Book with Heart Of Love Pet Care.',
  },
  '/services/training-behaviour': {
    title: 'Dog Training Queens NY | Heart Of Love Pet Care',
    description: 'Positive reinforcement dog training in Queens, NY. From puppy basics to behaviour modification. Personalized sessions with Heart Of Love Pet Care.',
  },
  '/services/potty-training': {
    title: 'Potty Training Queens NY | Heart Of Love Pet Care',
    description: 'Structured potty training programs for puppies and adult dogs in Queens, NY. Science-based routines that work. Heart Of Love Pet Care.',
  },
  '/service-areas/queens-ny': {
    title: 'Dog Grooming & Boarding Queens NY | Heart Of Love Pet Care',
    description: 'Dog grooming and boarding in Queens, NY. Expert pet care from the trusted team at Heart Of Love Pet Care.',
  },
  '/service-areas/brooklyn-ny': {
    title: 'Dog Grooming & Boarding Brooklyn NY | Heart Of Love Pet Care',
    description: 'Dog grooming and boarding serving Brooklyn, NY. Expert pet care from Heart Of Love Pet Care — Queens\' most trusted owner-operated salon.',
  },
  '/service-areas/manhattan-ny': {
    title: 'Dog Grooming & Boarding Manhattan NY | Heart Of Love Pet Care',
    description: 'Dog grooming and boarding serving Manhattan, NY. Personalized pet care from the team at Heart Of Love Pet Care in Queens.',
  },
  '/service-areas/new-york': {
    title: 'Dog Grooming & Boarding New York NY | Heart Of Love Pet Care',
    description: 'Dog grooming and boarding serving New York City. Book with Heart Of Love Pet Care — Queens\' owner-operated pet care specialists.',
  },
  '/gallery': {
    title: 'Gallery | Heart Of Love Pet Care Queens NY',
    description: 'See our work — happy dogs after grooming sessions, boarding stays, and training milestones at Heart Of Love Pet Care in Queens, NY.',
  },
  '/blog': {
    title: 'Blog | Heart Of Love Pet Care Queens NY',
    description: 'Dog grooming tips, training advice, boarding guides & NYC pet care insights from the team at Heart Of Love Pet Care in Queens.',
  },
  '/blog/grooming-guide': {
    title: 'The Complete Guide To Professional Dog Grooming In Queens NY | Heart Of Love Pet Care',
    description: 'Looking for expert dog grooming in Queens? Discover how Heart Of Love Pet Care keeps your furry friend clean, healthy, and looking their absolute best.',
  },
  '/blog/boarding-team': {
    title: 'Your Go-To Team For Pet Boarding & Home Boarding In New York | Heart Of Love Pet Care',
    description: 'Need safe, loving care for your dog while you\'re away? Learn how Heart Of Love Pet Care provides stress-free boarding that feels like home.',
  },
  '/blog/grooming-health': {
    title: 'Why Regular Grooming Is Essential For Your Dog\'s Health | Heart Of Love Pet Care',
    description: 'Regular grooming is about more than looks. Discover how consistent grooming sessions at Heart Of Love Pet Care support your dog\'s overall wellbeing.',
  },
  '/blog/training-works': {
    title: 'From Chaos To Calm: Dog Training That Actually Works | Heart Of Love Pet Care',
    description: 'Struggling with bad behaviour or a new puppy? Explore how Heart Of Love Pet Care\'s training sessions transform dogs across Queens and NYC.',
  },
  '/blog/boarding-vs-kennels': {
    title: 'Home Boarding vs. Kennels: Which Is Better For Your Dog? | Heart Of Love Pet Care',
    description: 'Not all boarding is equal. Trust Heart Of Love Pet Care to provide warm, hands-on home boarding so your dog never has to spend a night in a cold kennel.',
  },
  '/blog/potty-training': {
    title: 'How To Potty Train Your Dog: Tips From The Pros | Heart Of Love Pet Care',
    description: 'Potty training doesn\'t have to be a nightmare. Discover proven techniques from the Heart Of Love Pet Care team to help your dog learn fast and stress-free.',
  },
  '/contact': {
    title: 'Contact Us | Heart Of Love Pet Care Queens NY',
    description: 'Contact Heart Of Love Pet Care in Queens, NY. Book a grooming session, boarding stay, or training consultation. We\'d love to meet your dog.',
  },
  '/review': {
    title: 'Leave A Review | Heart Of Love Pet Care',
    description: 'Enjoyed our service? Leave a review for Heart Of Love Pet Care and help other Queens pet parents find trusted, loving care for their dogs.',
  },
  '/discount': {
    title: 'Special Offer | Heart Of Love Pet Care Queens NY',
    description: 'Claim your special discount on dog grooming, boarding, or training services in Queens, NY. Contact Heart Of Love Pet Care today.',
  },
  '/client-submit': {
    title: 'Client Submission | Heart Of Love Pet Care',
    description: 'Submit your details to Heart Of Love Pet Care in Queens, NY.',
  },
  '/thank-you': {
    title: 'Thank You | Heart Of Love Pet Care',
    description: 'Thank you for contacting Heart Of Love Pet Care. We\'ll be in touch shortly.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Heart Of Love Pet Care',
    description: 'Privacy policy for Heart Of Love Pet Care in Queens, NY.',
  },
  '/terms': {
    title: 'Terms & Conditions | Heart Of Love Pet Care',
    description: 'Terms and conditions for Heart Of Love Pet Care in Queens, NY.',
  },
}

const DEFAULT_META = {
  title: 'Heart Of Love Pet Care | Dog Grooming, Boarding & Training in Queens, NY',
  description: 'Expert dog grooming, home boarding, and training in Queens, NY. Owner-operated pet care that treats every dog like family.',
}

const routes = Object.keys(routesMeta)

async function prerender() {
  const templatePath = path.resolve(__dirname, 'dist/index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const { render } = await import('./dist/server/entry-server.js')

  for (const route of routes) {
    const meta = routesMeta[route] || DEFAULT_META
    const canonical = `${BASE_URL}${route === '/' ? '' : route}`

    const appHtml = render(route)
    let html = template
      .replace('<!--app-html-->', appHtml)
      .replace(/<!--page-title-->/g, meta.title)
      .replace(/<!--page-description-->/g, meta.description)
      .replace(/<!--page-canonical-->/g, canonical)

    const routePath = route === '/' ? '/index.html' : `${route}/index.html`
    const filePath = path.resolve(__dirname, `dist${routePath}`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)
    console.log(`✓ Pre-rendered: ${route}`)
  }

  console.log('\n✅ Static site generation complete!')
  console.log(`   ${routes.length} pages written to dist/`)
}

prerender().catch((err) => {
  console.error('SSG failed:', err)
  process.exit(1)
})
