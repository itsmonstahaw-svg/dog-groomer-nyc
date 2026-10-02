// Services and service areas. Copy comes from the original service and area pages; bullets and FAQs only
// restate what that copy (and the home page FAQ) already says. Do not invent prices, times or guarantees.

export type Service = {
  slug: string;
  title: string;
  h1: string;
  heroSub: string;
  cardDesc: string;
  image: string;
  photos: string[];
  bullets: string[];
  sections: { heading: string; text: string }[];
  faqs: [string, string][];
};

export type Area = {
  slug: string;
  name: string;
  label: string;
  h1: string;
  heroSub: string;
  areas: string[];
  sections: { heading: string; text: string }[];
};

export const SERVICES: Service[] = [
  {
    "slug": "pet-grooming",
    "title": "Pet Grooming",
    "h1": "Dog Grooming in Queens, NY",
    "heroSub": "Professional grooming tailored to your dog's breed, coat, and personality. We keep them clean, comfortable, and looking their best.",
    "cardDesc": "Professional grooming tailored to your dog's breed, coat, and personality.",
    "image": "/images/photos/b1247b1a.webp",
    "photos": [
      "/images/photos/619d4f07.webp",
      "/images/photos/26e570d1.webp",
      "/images/photos/d47242a4.webp"
    ],
    "bullets": [
      "Deep-cleansing baths",
      "Breed-specific haircuts",
      "Nail trimming",
      "Ear cleaning",
      "Premium, pet-safe products",
      "Skin and coat checked for mats and parasites"
    ],
    "sections": [
      {
        "heading": "What Is Pet Grooming?",
        "text": "Pet grooming at Heart Of Love Pet Care is a professional, high-end spa experience designed to keep the dogs of Queens and New York City looking and feeling their absolute best. We understand that every dog is unique, and our grooming in Queens is tailored to your pet's specific breed standards, coat type, and individual personality. Heart Of Love Pet Care provides a full range of services, from deep-cleansing baths and breed-specific haircuts to nail trimming, ear cleaning, and more. We use only premium, pet-safe products that are gentle on the skin and coat, ensuring a luxurious experience for every guest in our NYC facility. Our owner-operated approach at Heart Of Love Pet Care means that your dog receives personalized attention and compassionate handling, making the grooming process a positive and stress-free experience. Whether you're in Astoria, Long Island City, or anywhere in New York City, Heart Of Love Pet Care is your destination for expert pet grooming. We take pride in our attention to detail, ensuring that every dog leaves our Jamaica, Queens location feeling refreshed and revitalized."
      },
      {
        "heading": "Why Is Pet Grooming Important?",
        "text": "For dog owners in Queens / New York City, regular professional grooming is essential for maintaining your pet's overall health and well-being. Heart Of Love Pet Care believes that grooming is far more than just a cosmetic service; it is a vital part of preventative healthcare for NYC dogs. By choosing Heart Of Love Pet Care, you are ensuring that your pet's skin and coat are regularly checked for any issues, such as mats, parasites, or abnormalities that can easily go unnoticed. Our grooming in Queens helps reduce shedding and prevents the painful matting that can occur in many breeds, especially in the variable weather of New York City. Heart Of Love Pet Care focuses on the comfort and health of your pet, providing a thorough cleaning that removes the city grime and allergens that can accumulate on their fur. We are dedicated to providing the highest quality grooming services to keep your NYC dog healthy, happy, and smelling great year-round. Regular visits to Heart Of Love Pet Care in Queens can significantly improve your pet's quality of life."
      },
      {
        "heading": "When Should You Consider Pet Grooming?",
        "text": "You should consider pet grooming with Heart Of Love Pet Care whenever your dog's coat begins to lose its shine, if you notice excessive shedding in your Queens home, or if their nails are becoming uncomfortably long. Regular grooming sessions at Heart Of Love Pet Care should be a part of every NYC dog's routine, with the frequency depending on their breed and lifestyle in New York City. If your pet has been spending time in the parks of Queens or walking the streets of NYC, a deep-cleansing bath at Heart Of Love Pet Care is the perfect way to refresh them. Many of our Queens clients book grooming services before special events or simply when they want to treat their furry friend to a day of pampering. Heart Of Love Pet Care is ready to provide the expert care your pet deserves. If you want your dog to look their best in New York City, don't wait to book your appointment. Shoot us a message today or click Get Free Quote to see how Heart Of Love Pet Care can transform your pet's appearance. Our Jamaica, Queens team is excited to meet you and your pet."
      }
    ],
    "faqs": [
      [
        "What's included in a groom?",
        "Grooming can include a deep-cleansing bath, a breed-specific haircut, nail trimming and ear cleaning, all done with premium, pet-safe products that are gentle on the skin and coat."
      ],
      [
        "How long does a grooming appointment take?",
        "A typical full groom takes between 2 to 4 hours depending on the breed, size, coat condition, and temperament of your dog. We will give you a call or text when they are ready for pickup."
      ],
      [
        "How often should my dog be groomed?",
        "It depends on your dog's breed and lifestyle. Book a groom when the coat starts to lose its shine, shedding picks up, or nails are getting long. Call us and we'll help you pick a routine that suits your dog."
      ]
    ]
  },
  {
    "slug": "pet-boarding",
    "title": "Pet Boarding",
    "h1": "Pet Boarding in Queens, NY",
    "heroSub": "Safe, comfortable, and loving overnight care for your dog. We provide a stress-free environment with plenty of attention and playtime while you're away.",
    "cardDesc": "Safe, comfortable, and loving overnight care for your dog.",
    "image": "/images/photos/0e335a8e.webp",
    "photos": [
      "/images/photos/1ed3d0f9.webp",
      "/images/photos/52d90623.webp",
      "/images/photos/9da25676.webp"
    ],
    "bullets": [
      "Overnight care in a low-stress, home-like setting",
      "Individual attention for every dog",
      "Customized feeding schedules",
      "Supervised play and interaction",
      "Consistent daily routines",
      "Easy drop-off in Jamaica, Queens, close to JFK"
    ],
    "sections": [
      {
        "heading": "What Is Pet Boarding?",
        "text": "Pet boarding at Heart Of Love Pet Care is a premium overnight care service designed specifically for dog owners in Queens and throughout New York City who need a reliable second home for their furry companions. Unlike traditional large-scale facilities, our pet boarding in Queens focuses on providing a personalized, low-stress environment where your dog is treated as a guest in our own home. Heart Of Love Pet Care ensures that every pet receives individual attention, customized feeding schedules, and plenty of supervised interaction in a safe, secure setting. We pride ourselves on being a small, owner-operated business that understands the unique needs of NYC dogs, from high-energy pups to those who just want a quiet place to rest. When you choose Heart Of Love Pet Care for pet boarding in New York City, you are choosing a team that prioritizes safety, comfort, and genuine affection above all else. Our facility is designed to mimic the warmth of a real home, ensuring that your dog feels relaxed and happy throughout their entire stay in Jamaica, Queens."
      },
      {
        "heading": "Why Is Pet Boarding Important?",
        "text": "For many pet parents in Queens / New York City, finding high-quality pet boarding is essential for maintaining their dog's mental and physical health during travel or busy periods. Heart Of Love Pet Care provides a vital service by offering a structured environment that prevents the separation anxiety often associated with industrial kennels. By choosing Heart Of Love Pet Care, your dog benefits from consistent routines and social stimulation that are crucial for their well-being in a bustling city like New York. Our professional pet boarding in Queens ensures that your dog remains active and engaged, reducing the risk of destructive behaviors that can occur when pets are left alone for too long. We understand that NYC life is fast-paced, and our mission at Heart Of Love Pet Care is to provide a sanctuary where your pet can thrive while you handle your responsibilities with total peace of mind. Regular boarding also helps with socialization, making your dog more confident when navigating the busy streets and parks of New York City."
      },
      {
        "heading": "When Should You Consider Pet Boarding?",
        "text": "You should consider pet boarding with Heart Of Love Pet Care whenever you have upcoming travel, home renovations, or family events in Queens or the wider New York City area that might be stressful for your dog. If you find yourself working long hours in Manhattan or planning a weekend getaway from NYC, Heart Of Love Pet Care offers the perfect solution to ensure your pet isn't left lonely or neglected. Many of our Queens clients book pet boarding when they want their dogs to have a \"vacation\" of their own, filled with love and professional care. Whether it is a last-minute business trip or a long-planned holiday, Heart Of Love Pet Care is ready to welcome your pet into our family. If you're looking for the most trusted pet boarding in New York City, now is the time to reach out. Shoot us a message today or click Get Free Quote to secure your dog's spot with Heart Of Love Pet Care. We are conveniently located in Jamaica, Queens, making us an easy stop for anyone heading to JFK or traveling through the New York City area."
      }
    ],
    "faqs": [
      [
        "What's the difference between pet boarding and home boarding?",
        "Pet boarding is overnight care at our Jamaica, Queens location with individual attention and supervised play. Home boarding is a cage-free stay in a real home, with round-the-clock supervision and your dog's usual routines."
      ],
      [
        "Can you follow my dog's feeding schedule?",
        "Yes. Every dog gets a customized feeding schedule, plus individual attention and plenty of supervised interaction."
      ],
      [
        "Are you close to JFK?",
        "Yes. We're in Jamaica, Queens, which makes us an easy stop for anyone heading to JFK or traveling through New York City."
      ]
    ]
  },
  {
    "slug": "home-boarding",
    "title": "Home Boarding",
    "h1": "Home Boarding in Queens, NY",
    "heroSub": "A warm, cage-free alternative to traditional kennels. Your dog stays in a real home environment, receiving one-on-one love and care just like they're used to.",
    "cardDesc": "A warm, cage-free alternative where your dog stays in a real home environment.",
    "image": "/images/photos/d47242a4.webp",
    "photos": [
      "/images/photos/b11dab6d.webp",
      "/images/photos/b1247b1a.webp",
      "/images/photos/442e1b22.webp"
    ],
    "bullets": [
      "Cage-free stays in a real home",
      "Round-the-clock supervision",
      "Keeps your dog's usual routines",
      "Personalized playtime",
      "Ideal for seniors, puppies and nervous dogs",
      "Short trips and extended stays"
    ],
    "sections": [
      {
        "heading": "What Is Home Boarding?",
        "text": "Home boarding at Heart Of Love Pet Care is a specialized, cage-free alternative to traditional kennels, specifically tailored for the discerning dog owners of Queens and New York City. This service allows your dog to stay in a real home environment, where they are treated as part of the family rather than just another number in a facility. At Heart Of Love Pet Care, our home boarding in Queens focuses on maintaining the comforts and routines your dog is used to, from lounging on real furniture to enjoying personalized playtime in a familiar setting. We understand that NYC dogs often have unique needs, and our owner-operated approach ensures that every guest receives the highest level of care. Heart Of Love Pet Care provides a sanctuary for your pet within the heart of New York City, offering a level of intimacy and attention that larger commercial operations simply cannot match. Every dog in our home boarding program in Queens receives round-the-clock supervision and all the love they would get at their own home."
      },
      {
        "heading": "Why Is Home Boarding Important?",
        "text": "For many dogs in Queens / New York City, the transition from a quiet home to a noisy, high-traffic kennel can be incredibly stressful and detrimental to their health. Heart Of Love Pet Care offers home boarding as a way to eliminate that stress, providing a calm and loving atmosphere that mimics your dog's own life in NYC. By choosing Heart Of Love Pet Care, you are ensuring that your pet receives consistent companionship and emotional support, which is vital for preventing separation anxiety while you are away. Our home boarding in Queens is particularly beneficial for senior dogs, puppies, or those with nervous temperaments who require a gentler touch. Heart Of Love Pet Care believes that every dog in New York City deserves to feel safe and loved, and our home boarding service is the ultimate expression of that commitment to the well-being of your furry family member. This personalized care helps maintain their emotional balance and overall happiness in the heart of New York."
      },
      {
        "heading": "When Should You Consider Home Boarding?",
        "text": "You should consider home boarding with Heart Of Love Pet Care whenever you want the absolute best, most personalized care for your dog while you are traveling away from Queens or New York City. If your dog has struggled with traditional boarding in the past or if you simply prefer a more intimate, family-style setting in NYC, Heart Of Love Pet Care is the ideal choice. Many of our Queens clients choose home boarding for extended stays, knowing that their pet will be integrated into a loving household routine rather than being left in a stall. Whether you are planning a long vacation or a short trip out of New York City, Heart Of Love Pet Care provides the peace of mind you need. If you want your dog to experience a true home away from home in Queens, don't wait to get in touch. Shoot us a message today or click Get Free Quote to learn more about home boarding with Heart Of Love Pet Care. Our Jamaica, Queens location is perfectly situated for NYC residents looking for high-quality, local pet care."
      }
    ],
    "faqs": [
      [
        "Will my dog be kept in a cage?",
        "No. Home boarding is completely cage-free. Your dog stays in a real home and is treated as part of the family."
      ],
      [
        "Is home boarding good for nervous or senior dogs?",
        "Yes. Home boarding is especially good for senior dogs, puppies and dogs with nervous temperaments who need a calmer, gentler setting than a kennel."
      ],
      [
        "Can I book an extended stay?",
        "Yes. Many of our Queens clients choose home boarding for longer trips, knowing their dog will settle into a loving household routine."
      ]
    ]
  },
  {
    "slug": "dog-walking",
    "title": "Dog Walking",
    "h1": "Dog Walking in Queens, NY",
    "heroSub": "Reliable, energetic, and fun walks for your furry friend. We keep your dog active, socialised, and happy while you're busy at work or away.",
    "cardDesc": "Reliable, energetic, and fun walks to keep your dog active and socialized.",
    "image": "/images/photos/442e1b22.webp",
    "photos": [
      "/images/photos/cf0e9f6e.webp",
      "/images/photos/66034426.webp",
      "/images/photos/0e335a8e.webp"
    ],
    "bullets": [
      "Walks tailored to your dog's energy and temperament",
      "One-on-one attention",
      "Leash manners and positive reinforcement",
      "Flexible scheduling",
      "Daily midday breaks or occasional walks",
      "Local Queens parks and city streets"
    ],
    "sections": [
      {
        "heading": "What Is Dog Walking?",
        "text": "Dog walking at Heart Of Love Pet Care is more than just a quick trip outside; it is a professional, high-energy service designed to keep the dogs of Queens and New York City active, socialized, and mentally stimulated. We understand that NYC dogs often spend long hours indoors, and our mission at Heart Of Love Pet Care is to provide the physical exercise they need to thrive in an urban environment. Our dog walking in Queens is tailored to your pet's specific energy levels and temperament, ensuring they get the most out of every outing. Heart Of Love Pet Care provides reliable, one-on-one attention, practicing basic leash manners and positive reinforcement throughout the walk. Whether your dog enjoys a brisk pace through the streets of NYC or a leisurely stroll in a local Queens park, Heart Of Love Pet Care ensures they return home happy, tired, and content. We are proud to be the trusted walking partner for busy pet owners across New York City, offering consistency and care in every step we take."
      },
      {
        "heading": "Why Is Dog Walking Important?",
        "text": "For dog owners in Queens / New York City, regular professional walking is essential for preventing the destructive behaviours and anxiety that can stem from boredom and lack of exercise. Heart Of Love Pet Care provides a vital outlet for your dog's energy, which is especially important in the confined spaces of NYC apartments. By choosing Heart Of Love Pet Care, you are ensuring that your pet receives consistent social stimulation and physical activity, which are crucial for their long-term health and well-being. Our dog walking in Queens helps maintain a healthy weight and improves cardiovascular health, keeping your furry friend in peak condition for life in New York City. Heart Of Love Pet Care understands that a tired dog is a well-behaved dog, and our service is a key component of a happy, balanced life for any NYC pet. We are dedicated to providing the highest level of care for every dog we walk in Queens and beyond, ensuring they get the engagement they need in the city's unique environment."
      },
      {
        "heading": "When Should You Consider Dog Walking?",
        "text": "You should consider dog walking services with Heart Of Love Pet Care whenever your busy schedule in Queens or New York City prevents you from giving your pet the exercise they need. If you find yourself working long hours in Manhattan or have a high-energy dog that requires more activity than you can provide, Heart Of Love Pet Care is the perfect solution for your NYC home. Many of our Queens clients book walking services when they notice their dogs becoming restless or exhibiting anxious behaviours during the day. Heart Of Love Pet Care offers flexible scheduling to fit your life in New York City, providing you with the peace of mind that your pet is being cared for by experienced professionals. Whether it's a daily midday break or occasional support when you're tied up, Heart Of Love Pet Care is here to help. If you want the best for your dog in Queens, don't hesitate to reach out. Shoot us a message today or click Get Free Quote to schedule your first walk with Heart Of Love Pet Care. Our Jamaica, Queens team is ready to hit the pavement with your pet."
      }
    ],
    "faqs": [
      [
        "Do you walk dogs one-on-one?",
        "Yes. Every walk comes with reliable, one-on-one attention, tailored to your dog's energy level and temperament."
      ],
      [
        "Can you work around my schedule?",
        "Yes. We offer flexible scheduling, whether you need a daily midday break or occasional help when you're tied up."
      ],
      [
        "Do you work on behavior during walks?",
        "Yes. We practice basic leash manners and use positive reinforcement throughout the walk."
      ]
    ]
  },
  {
    "slug": "training-behaviour",
    "title": "Training & Behaviour",
    "h1": "Dog Training in Queens, NY",
    "heroSub": "Transform your dog's behaviour with positive, effective training. From basic obedience to solving complex behavioural issues, we help build a stronger bond between you and your pet.",
    "cardDesc": "Transform your dog's behaviour with positive, effective training techniques.",
    "image": "/images/photos/66034426.webp",
    "photos": [
      "/images/photos/bb4a3711.webp",
      "/images/photos/70924e9c.webp",
      "/images/photos/d1c037c9.webp"
    ],
    "bullets": [
      "Positive reinforcement methods",
      "Basic obedience",
      "Leash reactivity",
      "Separation anxiety",
      "Personalized sessions that coach you too",
      "Puppies and adult dogs"
    ],
    "sections": [
      {
        "heading": "What Is Training & Behaviour?",
        "text": "Training and behaviour services at Heart Of Love Pet Care are designed to help dog owners in Queens and New York City navigate the unique challenges of raising a well-adjusted pet in an urban environment. Our approach at Heart Of Love Pet Care focuses on positive reinforcement and clear communication, addressing everything from basic obedience to complex behavioural issues like leash reactivity or separation anxiety. We understand that life in NYC can be overstimulating for many dogs, and our training in Queens is specifically tailored to help them remain calm and focused amidst the city's hustle and bustle. Heart Of Love Pet Care provides personalized sessions that empower owners with the tools they need to build a lifelong bond with their pets. Whether you're in Astoria, Long Island City, or anywhere in New York City, Heart Of Love Pet Care is your partner in creating a harmonious relationship with your canine companion. Our training methods are proven to work in the real-world settings of NYC parks and busy sidewalks."
      },
      {
        "heading": "Why Is Training & Behaviour Important?",
        "text": "For dog owners in Queens / New York City, proper training is not just about tricks; it is about safety and quality of life in a dense urban setting. Heart Of Love Pet Care believes that a well-trained dog is a happy dog, and our services are essential for preventing the common behavioural problems that can lead to stress for both the pet and the owner. By choosing Heart Of Love Pet Care, you are investing in your dog's ability to navigate the parks, streets, and subways of NYC with confidence and ease. Our training in Queens helps reduce the risk of incidents and ensures that your dog can be a welcome guest in any New York City environment. Heart Of Love Pet Care focuses on building a foundation of trust, which is the most important element of any successful training program. We are dedicated to helping NYC dogs and their owners thrive together through expert guidance and compassionate care. A well-behaved dog opens up a world of possibilities for exploration in the vibrant neighborhoods of Queens and Manhattan."
      },
      {
        "heading": "When Should You Consider Training & Behaviour?",
        "text": "You should consider training and behaviour services with Heart Of Love Pet Care as soon as you notice any habits that make life in Queens or New York City difficult for you or your dog. Whether it is a new puppy needing a head start or an adult dog struggling with the distractions of NYC, Heart Of Love Pet Care is here to help at any stage of your pet's life. If you find yourself avoiding certain parks in Queens or feeling stressed during walks in New York City, it is the perfect time to reach out for professional support. Heart Of Love Pet Care offers the expertise needed to transform your dog's behaviour and restore peace to your household. Don't wait for small issues to become major problems in your NYC home. Heart Of Love Pet Care is ready to help you achieve the results you've been looking for. Shoot us a message today or click Get Free Quote to start your journey with Heart Of Love Pet Care. Our Jamaica, Queens team is passionate about helping every New York City dog reach their full potential."
      }
    ],
    "faqs": [
      [
        "What training methods do you use?",
        "We use positive reinforcement and clear communication, with personalized sessions that give you the tools to keep the training going at home."
      ],
      [
        "Can you help with leash reactivity or separation anxiety?",
        "Yes. We work on everything from basic obedience to complex behavioural issues like leash reactivity and separation anxiety."
      ],
      [
        "Do you train puppies as well as adult dogs?",
        "Yes. Whether it's a new puppy needing a head start or an adult dog struggling with city distractions, we can help at any stage."
      ]
    ]
  },
  {
    "slug": "potty-training",
    "title": "Potty Training",
    "h1": "Potty Training in Queens, NY",
    "heroSub": "Expert guidance to help your puppy or adult dog master potty training quickly and positively. Say goodbye to indoor accidents and frustration.",
    "cardDesc": "Expert guidance to help your puppy or dog build good habits from day one.",
    "image": "/images/photos/b11dab6d.webp",
    "photos": [
      "/images/photos/d4a232dc.webp",
      "/images/photos/f90c5ec5.webp",
      "/images/photos/619d4f07.webp"
    ],
    "bullets": [
      "Positive reinforcement",
      "A clear, consistent schedule",
      "Environmental management",
      "New puppies and adult dogs",
      "A plan that fits apartment living",
      "Support through setbacks"
    ],
    "sections": [
      {
        "heading": "What Is Potty Training?",
        "text": "Potty training at Heart Of Love Pet Care is a comprehensive, results-driven service designed to help dog owners in Queens and New York City establish clean and consistent habits in their homes. We understand that living in an NYC apartment or a busy Queens neighborhood presents unique challenges for housebreaking, and Heart Of Love Pet Care is here to provide the expert guidance you need. Our potty training in Queens focuses on positive reinforcement, strict scheduling, and environmental management to ensure your dog understands exactly where it is appropriate to go. Heart Of Love Pet Care works with both new puppies and adult dogs who may be struggling with the transition to a new New York City environment. We take the guesswork out of the process, providing you with a clear roadmap to success that fits into your busy NYC lifestyle. Heart Of Love Pet Care is committed to helping you achieve a clean, stress-free home for you and your pet in Jamaica, Queens."
      },
      {
        "heading": "Why Is Potty Training Important?",
        "text": "For residents of Queens / New York City, successful potty training is essential for maintaining a healthy and hygienic living space, especially in close-quarters urban environments. Heart Of Love Pet Care believes that a solid foundation in housebreaking is the first step toward a happy life with your dog in NYC. Without proper guidance, potty training can become a source of immense frustration for many Queens pet owners, often leading to damaged floors and strained relationships with pets. By choosing Heart Of Love Pet Care, you are ensuring that your dog learns the right habits from the start, preventing the long-term behavioural issues that can arise from inconsistent training. Heart Of Love Pet Care provides the professional support needed to navigate the setbacks that often occur during the potty training journey in New York City. We are dedicated to helping you and your dog thrive together in your Queens home through patience, expertise, and proven techniques that respect your dog's natural instincts."
      },
      {
        "heading": "When Should You Consider Potty Training?",
        "text": "You should consider potty training services with Heart Of Love Pet Care as soon as you bring a new puppy home to Queens or if your adult dog is having frequent accidents in your New York City apartment. If you find yourself struggling to establish a routine or feeling overwhelmed by the challenges of housebreaking in NYC, Heart Of Love Pet Care is the perfect partner to help you get back on track. Many of our Queens clients reach out when they've tried other methods without success and need the professional insight that only Heart Of Love Pet Care can provide. Whether you're a first-time dog owner in New York City or an experienced pet parent facing a difficult case, Heart Of Love Pet Care is ready to support you. Don't let potty training accidents ruin your experience of owning a dog in Queens. Heart Of Love Pet Care is here to help you achieve a breakthrough. Shoot us a message today or click Get Free Quote to start your potty training journey with Heart Of Love Pet Care. Our Jamaica, Queens facility is ready to welcome you and your furry friend."
      }
    ],
    "faqs": [
      [
        "Do you potty train adult dogs?",
        "Yes. We work with new puppies and with adult dogs who are having accidents or adjusting to a new New York City home."
      ],
      [
        "How does your potty training work?",
        "We combine positive reinforcement, a consistent schedule and environmental management, and give you a clear roadmap that fits your routine."
      ],
      [
        "We've tried other methods. Can you still help?",
        "Yes. Many of our Queens clients come to us after other methods haven't worked. We'll help you get back on track."
      ]
    ]
  }
];

export const AREAS: Area[] = [
  {
    "slug": "queens-ny",
    "name": "Queens",
    "label": "Queens, NY",
    "h1": "Your Dependable Queens, NY Pet Care Specialist",
    "heroSub": "Home base for Heart Of Love Pet Care. Grooming, boarding, training and dog walking from our Jamaica, Queens location.",
    "areas": [
      "Astoria",
      "Long Island City",
      "Forest Hills",
      "Jamaica",
      "Flushing",
      "Bayside",
      "Ridgewood",
      "Sunnyside"
    ],
    "sections": [
      {
        "heading": "Pet Care & Dog Grooming Services In Queens NY",
        "text": "Dog owners in Queens NY understand the importance of finding a reliable, professional pet care provider that treats their furry friends like family. In a borough as diverse and busy as Queens NY, your dog needs a safe haven and expert grooming to stay healthy and happy. Whether you are navigating the streets of Astoria or enjoying the parks in Forest Hills, professional pet care and grooming are essential for maintaining your dog's well-being. At Heart Of Love Pet Care, we provide a dedicated service tailored to the unique needs of Queens NY pets. Our team is committed to ensuring every dog in Queens NY receives the highest standard of care in a stress-free environment. Reliable pet care in Queens NY means peace of mind for you and a joyful experience for your pet. We take pride in being the go-to choice for discerning dog owners across Queens NY who value quality and compassion. From routine baths to specialized treatments, our services in Queens NY are designed to make your dog feel loved and pampered."
      },
      {
        "heading": "Here For All Your Pet Care Needs In Queens NY",
        "text": "Heart Of Love Pet Care is proud to offer a comprehensive suite of services to meet every need of the Queens NY dog community. Our professional grooming ensures your pet stays clean and healthy, while our boarding and home boarding options provide a safe, loving environment when you are away from Queens NY. For active dogs, our dog walking services in Queens NY provide the exercise and mental stimulation they need to thrive in the city. We also specialize in expert training and behavior modification for dogs in Queens NY, helping them become well-adjusted members of your household. If you have recently welcomed a new puppy, our potty training programs in Queens NY offer the perfect start for a lifetime of good habits. Whatever your pet requires, Heart Of Love Pet Care is here to serve the dog owners of Queens NY with excellence and heart. We serve all neighborhoods throughout Queens NY, ensuring that top-tier pet care is always accessible to our local clients."
      },
      {
        "heading": "Why Choose Heart Of Love Pet Care In Queens NY",
        "text": "Choosing Heart Of Love Pet Care in Queens NY means choosing a small, owner-operated business that prioritizes genuine care over corporate numbers. We believe that every dog in Queens NY deserves to be treated like family, which is why we provide a personalized and stress-free environment for all our services. Our experienced team in Queens NY brings a deep love for animals to everything we do, from grooming to walking and beyond. We are dedicated to building lasting relationships with the pet parents of Queens NY, offering a level of trust and transparency that is hard to find. Choosing us in Queens NY means your dog will benefit from a calm, nurturing atmosphere where their well-being is always the top priority. Our booking process is simple and efficient, making it easy for busy Queens NY residents to schedule the care their pets deserve. Experience the difference that true passion makes for pet care in Queens NY. Shoot us a message or click Get Free Quote to join the Heart Of Love Pet Care family today."
      }
    ]
  },
  {
    "slug": "brooklyn-ny",
    "name": "Brooklyn",
    "label": "Brooklyn, NY",
    "h1": "Your Dependable Brooklyn, NY Pet Care Specialist",
    "heroSub": "Owner-operated pet care for Brooklyn dogs: grooming, boarding, home boarding, dog walking and training.",
    "areas": [
      "Park Slope",
      "Williamsburg",
      "Flatbush",
      "Bay Ridge",
      "Bushwick",
      "Crown Heights",
      "Bed-Stuy",
      "Sunset Park"
    ],
    "sections": [
      {
        "heading": "Pet Care & Dog Grooming Services In Brooklyn NY",
        "text": "Dog owners in Brooklyn NY know that finding reliable pet care is a top priority in such a vibrant and fast-paced borough. From the tree-lined streets of Park Slope to the creative hubs of Williamsburg, your pet deserves a care provider that treats them with the same love you do. Reliable, professional pet care and grooming are essential for maintaining your dog's health and happiness in the unique urban landscape of Brooklyn NY. At Heart Of Love Pet Care, we offer a dedicated approach that ensures your furry friend receives the highest standard of care right here in Brooklyn NY. Whether it's a routine bath or a full grooming makeover, our services in Brooklyn NY are designed to keep your dog comfortable and looking their best. We are proud to be a trusted name for pet parents across Brooklyn NY who value quality and genuine compassion. Our team understands the specific needs of Brooklyn NY dogs and works tirelessly to provide a safe and nurturing environment for every guest."
      },
      {
        "heading": "Here For All Your Pet Care Needs In Brooklyn NY",
        "text": "Heart Of Love Pet Care provides a full range of services designed to meet the needs of every dog owner in Brooklyn NY. Our professional grooming keeps your pet healthy and clean, while our boarding and home boarding options offer a stress-free sanctuary when you are away from Brooklyn NY. For dogs that need to stay active, our dog walking services in Brooklyn NY provide the exercise and mental stimulation they need to thrive in the city. We also specialize in expert training and behavior modification for dogs in Brooklyn NY, helping them become well-adjusted members of your community. If you have recently added a new puppy to your home, our potty training programs in Brooklyn NY offer the perfect start for a happy life together. Whatever your pet's needs may be, Heart Of Love Pet Care is committed to providing exceptional service to the dog owners of Brooklyn NY. We serve all neighborhoods throughout Brooklyn NY, ensuring that professional pet care is always just a phone call away for our valued clients."
      },
      {
        "heading": "Why Choose Heart Of Love Pet Care In Brooklyn NY",
        "text": "What sets Heart Of Love Pet Care apart in Brooklyn NY is our commitment to being a small, owner-operated business that treats every dog like family. We believe that pet care in Brooklyn NY should be personal, which is why we focus on building strong relationships with both our human and canine clients. Our experienced team in Brooklyn NY provides a stress-free environment for every service, ensuring your dog feels relaxed and cared for at all times. We bring a genuine love for animals to everything we do in Brooklyn NY, from grooming to walking and beyond. Choosing Heart Of Love Pet Care in Brooklyn NY means choosing a team that prioritizes your dog's well-being above all else. Our booking process is simple and efficient, making it easy for busy Brooklyn NY residents to schedule the care their pets deserve. Experience the peace of mind that comes with choosing the most dedicated pet care specialists in Brooklyn NY. Shoot us a message or click Get Free Quote to join the Heart Of Love Pet Care family today."
      }
    ]
  },
  {
    "slug": "manhattan-ny",
    "name": "Manhattan",
    "label": "Manhattan, NY",
    "h1": "Your Dependable Manhattan, NY Pet Care Specialist",
    "heroSub": "Personal, owner-operated pet care for Manhattan dogs, from grooming and boarding to walking and training.",
    "areas": [
      "Upper East Side",
      "Upper West Side",
      "Harlem",
      "Chelsea",
      "Midtown",
      "Hell's Kitchen",
      "Greenwich Village",
      "Tribeca"
    ],
    "sections": [
      {
        "heading": "Pet Care & Dog Grooming Services In Manhattan NY",
        "text": "In the heart of Manhattan NY, dog owners face unique challenges when it comes to providing the best care for their pets. From high-rise living to the fast-paced energy of the city, your dog needs a dedicated professional who understands the Manhattan NY lifestyle. Reliable, professional pet care and grooming are essential for maintaining your dog's health and happiness in the bustling environment of Manhattan NY. At Heart Of Love Pet Care, we offer specialized services that cater to the needs of Manhattan NY's most discerning pet parents. Whether your dog needs a relaxing grooming session or a safe place to stay, our services in Manhattan NY are designed to provide the highest level of comfort and care. We are committed to being the trusted partner for dog owners across Manhattan NY who want only the best for their furry companions. Our team is experienced in handling the diverse needs of Manhattan NY dogs, ensuring they feel safe and secure in the middle of the city."
      },
      {
        "heading": "Here For All Your Pet Care Needs In Manhattan NY",
        "text": "Heart Of Love Pet Care is proud to serve the Manhattan NY community with a full range of professional pet services. Our grooming experts ensure your dog stays healthy and clean, while our boarding and home boarding options provide a loving home away from home when you are away from Manhattan NY. For active city dogs, our dog walking services in Manhattan NY offer the exercise and stimulation they need to thrive in the city. We also specialize in training and behavior modification for dogs in Manhattan NY, helping them navigate the city's busy streets with ease. If you're starting fresh with a new puppy, our potty training programs in Manhattan NY offer the guidance and support you need for a successful transition. No matter what your pet requires, Heart Of Love Pet Care is here to provide exceptional care for the dogs of Manhattan NY. We serve neighborhoods from the Upper East Side to Tribeca, ensuring that quality pet care is always accessible for our Manhattan NY clients."
      },
      {
        "heading": "Why Choose Heart Of Love Pet Care In Manhattan NY",
        "text": "Choosing Heart Of Love Pet Care in Manhattan NY means choosing a small, owner-operated business that treats your dog as an individual. We believe that every pet in Manhattan NY deserves genuine love and attention, which is why we focus on creating a stress-free environment for all our services. Our experienced team in Manhattan NY brings a wealth of knowledge and a compassionate touch to every interaction, ensuring your dog feels safe and happy. We pride ourselves on the relationships we build with our Manhattan NY clients, offering a personalized level of service that corporate facilities cannot match. Choosing us in Manhattan NY means joining a community of pet lovers who prioritize their dogs' well-being above all else. Our booking process is simple and designed with the busy Manhattan NY lifestyle in mind, making it easy to schedule the care your pet needs. Experience the difference of truly dedicated pet care in Manhattan NY by choosing Heart Of Love Pet Care. Shoot us a message or click Get Free Quote to get started today."
      }
    ]
  },
  {
    "slug": "new-york",
    "name": "New York",
    "label": "New York (Statewide)",
    "h1": "Proudly Serving Pet Owners Across New York",
    "heroSub": "Based in Jamaica, Queens and proudly serving pet owners across New York.",
    "areas": [
      "Queens",
      "Brooklyn",
      "Manhattan",
      "The Bronx",
      "Long Island",
      "Westchester",
      "Staten Island",
      "Upstate NY"
    ],
    "sections": [
      {
        "heading": "Pet Care & Dog Grooming Services In New York Statewide",
        "text": "Dog owners across New York Statewide understand that finding high-quality pet care is essential for their furry companions' well-being. Whether you're in the heart of New York City or in the surrounding areas of New York Statewide, your pet deserves professional attention that is both reliable and compassionate. Professional pet care and grooming are vital for maintaining your dog's health and happiness throughout New York Statewide. At Heart Of Love Pet Care, we are dedicated to providing top-tier services that meet the needs of pet parents all over New York Statewide. From refreshing baths to full grooming sessions, our services in New York Statewide are designed to keep your dog looking and feeling their best. We are proud to be a trusted provider for families across New York Statewide who value expert care and a personal touch. Our team is committed to ensuring that every dog in New York Statewide receives the highest standard of care, regardless of their breed or age."
      },
      {
        "heading": "Here For All Your Pet Care Needs In New York Statewide",
        "text": "Heart Of Love Pet Care is proud to offer a comprehensive range of pet services to the communities of New York Statewide. Our professional grooming ensures your dog stays clean and healthy, while our boarding and home boarding options provide a safe and loving environment when you are away from New York Statewide. For dogs that need to stay active, our dog walking services in New York Statewide offer the exercise and mental stimulation they need to thrive in the city. We also specialize in training and behavior modification for dogs in New York Statewide, helping them become well-mannered companions. If you're welcoming a new puppy into your home in New York Statewide, our potty training programs offer the perfect foundation for success. No matter where you are in New York Statewide, Heart Of Love Pet Care is here to provide exceptional service and support for you and your pet. We are dedicated to serving dog owners across New York Statewide with professional expertise and genuine care."
      },
      {
        "heading": "Why Choose Heart Of Love Pet Care In New York Statewide",
        "text": "What sets Heart Of Love Pet Care apart in New York Statewide is our commitment to being a small, owner-operated business that treats every dog like family. We believe that pet care in New York Statewide should be personal and stress-free, which is why we focus on creating a nurturing environment for every service we provide. Our experienced team in New York Statewide brings a deep love for animals to everything we do, ensuring your dog feels safe and loved at all times. We pride ourselves on the relationships we build with our clients across New York Statewide, offering a level of care that larger corporate facilities simply cannot match. Choosing Heart Of Love Pet Care in New York Statewide means choosing a team that prioritizes your dog's well-being above all else. Our booking process is easy and straightforward, allowing busy pet parents in New York Statewide to schedule the care their pets need with confidence. Experience the difference of truly compassionate pet care in New York Statewide by choosing Heart Of Love Pet Care. Shoot us a message or click Get Free Quote to get started."
      }
    ]
  }
];

export const servicePath = (s: Service) => `/services/${s.slug}`;
export const areaPath = (a: Area) => `/service-areas/${a.slug}`;
