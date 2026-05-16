import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://trirefrigerationhvac.com'

const routesMeta = {
  '/': {
    title: 'Tri Refrigeration & HVAC | Houston, TX',
    description: 'Expert commercial & residential HVAC, refrigeration, walk-in coolers, and restaurant equipment repair in Houston, TX. Fully insured. Call (713) 909-7745.',
  },
  '/home': {
    title: 'Tri Refrigeration & HVAC | Houston, TX',
    description: 'Expert commercial & residential HVAC, refrigeration, walk-in coolers, and restaurant equipment repair in Houston, TX. Fully insured. Call (713) 909-7745.',
  },
  '/services/commercial-refrigeration': {
    title: 'Commercial Refrigeration Repair Houston TX | Tri Refrigeration & HVAC',
    description: 'Expert commercial refrigeration repair, maintenance & installation for Houston TX restaurants and supermarkets. Walk-in coolers, freezers & display cases. Call (713) 909-7745.',
  },
  '/services/hvac-air-conditioning': {
    title: 'HVAC & Air Conditioning Houston TX | Tri Refrigeration & HVAC',
    description: 'Commercial & residential HVAC installation, repair & maintenance in Houston TX. Rooftop units, split systems & more. Fully insured. Call (713) 909-7745.',
  },
  '/services/ice-machine-ems': {
    title: 'Ice Machine Repair & EMS Systems Houston TX | Tri Refrigeration & HVAC',
    description: 'Commercial ice machine repair, installation & sanitation in Houston TX. Fast response, fully insured. Call (713) 909-7745.',
  },
  '/services/residential-refrigeration': {
    title: 'Residential Refrigeration Repair Houston TX | Tri Refrigeration & HVAC',
    description: 'Professional home refrigerator & freezer repair in Houston TX. Fast, reliable, fully insured. Call (713) 909-7745.',
  },
  '/services/restaurant-equipment': {
    title: 'Restaurant Equipment Repair Houston TX | Tri Refrigeration & HVAC',
    description: 'Commercial restaurant equipment repair & maintenance in Houston TX. Ovens, fryers, coolers & more. Minimise downtime. Call (713) 909-7745.',
  },
  '/services/walk-in-coolers': {
    title: 'Walk-In Cooler & Freezer Repair Houston TX | Tri Refrigeration & HVAC',
    description: 'Walk-in cooler & freezer repair, installation & maintenance in Houston TX. Overtime available. Fully insured. Call (713) 909-7745.',
  },
  '/locations/houston-tx': {
    title: 'HVAC & Refrigeration Houston TX | Tri Refrigeration & HVAC',
    description: 'Houston TX HVAC and refrigeration services for restaurants, supermarkets & businesses. Serving Downtown, River Oaks, Galleria & surrounding areas. Call (713) 909-7745.',
  },
  '/locations/katy-tx': {
    title: 'HVAC & Refrigeration Katy TX | Tri Refrigeration & HVAC',
    description: 'Katy TX HVAC and refrigeration repair & installation. Serving Cinco Ranch, Cross Creek Ranch, Kelliwood & beyond. Call (713) 909-7745.',
  },
  '/locations/pearland-tx': {
    title: 'HVAC & Refrigeration Pearland TX | Tri Refrigeration & HVAC',
    description: 'Pearland TX HVAC and refrigeration services for commercial and residential clients. Fast, reliable, fully insured. Call (713) 909-7745.',
  },
  '/locations/sugar-land-tx': {
    title: 'HVAC & Refrigeration Sugar Land TX | Tri Refrigeration & HVAC',
    description: 'Sugar Land TX HVAC and refrigeration repair & maintenance. Experienced, fully insured technicians. Call (713) 909-7745.',
  },
  '/locations/the-woodlands-tx': {
    title: 'HVAC & Refrigeration The Woodlands TX | Tri Refrigeration & HVAC',
    description: 'The Woodlands TX HVAC and refrigeration services. Commercial and residential. Overtime available. Call (713) 909-7745.',
  },
  '/gallery': {
    title: 'Gallery | Tri Refrigeration & HVAC Houston TX',
    description: 'See our work — commercial refrigeration installs, HVAC systems, walk-in coolers & restaurant equipment across Houston TX.',
  },
  '/blog': {
    title: 'Blog | Tri Refrigeration & HVAC Houston TX',
    description: 'HVAC and refrigeration tips, maintenance guides & industry news from Tri Refrigeration & HVAC in Houston TX.',
  },
  '/blog/why-houston-restaurants-need-specialist': {
    title: 'Why Houston Restaurants Need A Refrigeration Specialist | Tri Refrigeration & HVAC',
    description: 'Discover why Houston restaurants and food service businesses need a dedicated commercial refrigeration specialist to protect their operations and bottom line.',
  },
  '/blog/walk-in-cooler-not-holding-temperature': {
    title: 'Walk-In Cooler Not Holding Temperature? Here\'s What To Do | Tri Refrigeration & HVAC',
    description: 'Step-by-step guide for Houston food service businesses when a walk-in cooler stops holding temperature. When to call a professional.',
  },
  '/blog/commercial-hvac-maintenance-houston': {
    title: 'Commercial HVAC Maintenance: Why Houston Businesses Can\'t Skip It | Tri Refrigeration & HVAC',
    description: 'Why regular HVAC maintenance is essential for Houston businesses and homeowners. Cost savings, efficiency, and avoiding emergency breakdowns.',
  },
  '/blog/true-cost-broken-walk-in-freezer': {
    title: 'The True Cost Of A Broken Walk-In Freezer | Tri Refrigeration & HVAC',
    description: 'What a walk-in freezer breakdown really costs Houston food service operations — spoilage, downtime, lost revenue, and how to prevent it.',
  },
  '/blog/hvac-refrigeration-katy-sugar-land-woodlands': {
    title: 'HVAC & Refrigeration In Katy, Sugar Land & The Woodlands | Tri Refrigeration & HVAC',
    description: 'What businesses and homeowners in Katy, Sugar Land & The Woodlands need to know about commercial HVAC and refrigeration services.',
  },
  '/blog/choose-right-commercial-hvac-technician-houston': {
    title: 'How To Choose The Right HVAC Technician In Houston TX | Tri Refrigeration & HVAC',
    description: 'Key factors to consider when choosing a commercial HVAC and refrigeration technician in Houston TX. Licensing, experience, and response times.',
  },
  '/contact': {
    title: 'Contact Us | Tri Refrigeration & HVAC Houston TX',
    description: 'Contact Tri Refrigeration & HVAC in Houston TX. Call (713) 909-7745 or send a message for fast, professional HVAC and refrigeration service.',
  },
  '/review': {
    title: 'Leave A Review | Tri Refrigeration & HVAC',
    description: 'Enjoyed our service? Leave a review for Tri Refrigeration & HVAC and help other Houston businesses find reliable HVAC and refrigeration repair.',
  },
  '/discount': {
    title: '10% Discount Offer | Tri Refrigeration & HVAC Houston TX',
    description: 'Claim your 10% discount on HVAC and refrigeration services in Houston TX. Contact Tri Refrigeration & HVAC today.',
  },
  '/client-submit': {
    title: 'Client Submission | Tri Refrigeration & HVAC',
    description: 'Submit your service request to Tri Refrigeration & HVAC in Houston TX.',
  },
  '/thank-you': {
    title: 'Thank You | Tri Refrigeration & HVAC',
    description: 'Thank you for contacting Tri Refrigeration & HVAC. We\'ll be in touch shortly.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Tri Refrigeration & HVAC',
    description: 'Privacy policy for Tri Refrigeration & HVAC in Houston TX.',
  },
  '/terms': {
    title: 'Terms & Conditions | Tri Refrigeration & HVAC',
    description: 'Terms and conditions for Tri Refrigeration & HVAC in Houston TX.',
  },
}

const DEFAULT_META = {
  title: 'Tri Refrigeration & HVAC | Houston, TX',
  description: 'Expert commercial & residential HVAC, refrigeration, walk-in coolers, and restaurant equipment repair in Houston, TX. Call (713) 909-7745.',
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
