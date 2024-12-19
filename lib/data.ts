export const hotels = [
  {
    id: "1",
    name: "The Luxe Marathon",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "0.5 miles",
    rating: 4.8,
    amenities: ["Brunch + Pool", "Spa", "Gym"],
    ispartner:true,
    price: 24999,
    description:
      "Luxury hotel with premium amenities perfect for post-marathon recovery.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "A delightful brunch experience with pool access.",
        price: 1,
        features: ["Gourmet brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description:
          "Relaxing spa treatment with full access to spa facilities.",
        price: 10999,
        features: ["Full spa access", "60-min massage"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Brunch with pool and spa access for ultimate relaxation.",
        price: 14999,
        features: [
          "Gourmet brunch",
          "Pool access",
          "60-min massage",
          "Spa treatment",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Skyline Retreat",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "0.8 miles",
    rating: 4.7,
    amenities: ["Brunch Only", "Rooftop Pool"],
    price: 21999,
    description: "Modern hotel with stunning city views and premium services.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Premium brunch experience with rooftop pool access.",
        price: 7499,
        features: ["Gourmet brunch", "Rooftop pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Exclusive spa treatment with luxury service.",
        price: 11999,
        features: ["Full spa access", "Relaxing treatment"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Combination package with brunch, pool, and spa.",
        price: 15999,
        features: ["Gourmet brunch", "Rooftop pool", "Spa treatment"],
      },
    ],
  },
  {
    id: "3",
    name: "The Wellness Hotel",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.2 miles",
    rating: 4.9,
    amenities: ["Spa Package", "Indoor Pool", "Yoga"],
    ispartner:true,
    price: 25999,
    description:
      "Wellness-focused hotel with extensive spa and recovery facilities.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Enjoy a healthy brunch with access to our indoor pool.",
        price: 7999,
        features: ["Healthy brunch", "Indoor pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Comprehensive wellness spa package.",
        price: 12999,
        features: ["Full spa access", "Personalized treatment"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Brunch, pool access, and a complete spa treatment.",
        price: 17999,
        features: [
          "Healthy brunch",
          "Indoor pool",
          "Full spa access",
          "Wellness treatment",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Marina Bay",
    images: [
      "https://images.unsplash.com/photo-1506748686218-bc81284b6c55?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506748686218-bc81284b6c55?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.5 miles",
    rating: 4.5,
    amenities: ["Brunch + Pool", "Spa", "Yoga"],
    price: 23999,
    description:
      "A serene hotel offering beach views and a range of wellness packages.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "A relaxed brunch with a beachside pool view.",
        price: 6499,
        features: ["Gourmet brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Revitalizing spa experience with massage and relaxation.",
        price: 9999,
        features: ["Massage", "Pool access", "Spa therapy"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "The complete rejuvenation package: brunch, pool, and spa.",
        price: 13999,
        features: ["Brunch", "Pool access", "Spa treatment"],
      },
    ],
  },
  {
    id: "5",
    name: "Sapphire Suites",
    images: [
      "https://images.unsplash.com/photo-1606123455489-c1c0710e3d44?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606123455489-c1c0710e3d44?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "2 miles",
    rating: 4.7,
    amenities: ["Brunch + Pool", "Spa", "Fitness Center"],
    ispartner:true,
    price: 22999,
    description:
      "Sophisticated hotel with spa services and luxurious brunch options.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Gourmet brunch with poolside relaxation.",
        price: 7499,
        features: ["Buffet brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description:
          "Healing treatments and exclusive access to wellness facilities.",
        price: 10999,
        features: ["Massage", "Facial treatment", "Steam room"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "Relax with brunch, pool access, and a full spa treatment.",
        price: 14999,
        features: ["Brunch", "Pool access", "Spa treatment"],
      },
    ],
  },
  {
    id: "6",
    name: "Palm View Resort",
    images: [
      "https://images.unsplash.com/photo-1597682451112-c7b5be62214e?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597682451112-c7b5be62214e?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1 mile",
    rating: 4.6,
    amenities: ["Brunch + Pool", "Spa", "Outdoor Pool"],
    price: 25999,
    description:
      "Tranquil resort offering beautiful poolside brunches and premium spa services.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Brunch with serene poolside views.",
        price: 6999,
        features: ["Brunch", "Outdoor pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Exclusive spa package to rejuvenate the body and mind.",
        price: 9999,
        features: ["Full body massage", "Facial treatment"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "A complete package with brunch, pool, and spa treatments.",
        price: 13999,
        features: ["Brunch", "Pool access", "Spa treatment"],
      },
    ],
  },
  {
    id: "7",
    name: "Golden Sands Resort",
    images: [
      "https://images.unsplash.com/photo-1571001316928-2ffed7414e6f?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571001316928-2ffed7414e6f?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.3 miles",
    rating: 4.9,
    amenities: ["Brunch + Pool", "Yoga", "Spa"],
    price: 26999,
    description:
      "A luxurious beachfront resort with wellness and recovery options.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Relaxing brunch with poolside views and beach access.",
        price: 7999,
        features: ["Brunch", "Beach access", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Luxury spa treatments with access to private facilities.",
        price: 11999,
        features: ["Spa access", "Private treatment rooms"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "Complete experience with brunch, pool, and spa treatment.",
        price: 15999,
        features: ["Brunch", "Pool access", "Spa treatment"],
      },
    ],
  },
  {
    id: "8",
    name: "Ocean Breeze Hotel",
    images: [
      "https://images.unsplash.com/photo-1602137414821-59c3f5e8a380?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602137414821-59c3f5e8a380?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.8 miles",
    rating: 4.6,
    amenities: ["Brunch + Pool", "Yoga", "Spa"],
    ispartner:true,
    price: 25999,
    description:
      "A chic hotel with ocean views, ideal for relaxation and wellness.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Brunch by the pool with a view of the ocean.",
        price: 7499,
        features: ["Gourmet brunch", "Pool access", "Ocean view"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Spa treatments focused on relaxation and rejuvenation.",
        price: 10999,
        features: ["Full body massage", "Facial treatment"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Combination of brunch, pool, and spa experience.",
        price: 14999,
        features: ["Brunch", "Pool access", "Spa treatment"],
      },
    ],
  },
  {
    id: "9",
    name: "The Palm Grove",
    images: [
      "https://images.unsplash.com/photo-1592486844967-fc6c4386a9a2?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592486844967-fc6c4386a9a2?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "2.1 miles",
    rating: 4.7,
    amenities: ["Brunch + Pool", "Rooftop Pool", "Spa"],
    price: 22999,
    description:
      "A luxury hotel with rooftop views and premium wellness services.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Elegant brunch experience with rooftop pool access.",
        price: 6999,
        features: ["Brunch", "Rooftop pool"],
      },
      {
        id: "2",
        name: "Spa",
        description: "A full spa experience with signature treatments.",
        price: 10999,
        features: ["Massage", "Spa therapies", "Relaxation rooms"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Luxury combination of brunch, pool, and spa treatments.",
        price: 14999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "10",
    name: "Sunrise Heights",
    images: [
      "https://images.unsplash.com/photo-1616594820428-5e4b70091f32?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594820428-5e4b70091f32?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "2.5 miles",
    rating: 4.5,
    amenities: ["Brunch + Pool", "Spa", "Wellness Center"],
    price: 23999,
    description:
      "A wellness-oriented hotel with a peaceful atmosphere and spa facilities.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Healthy brunch with poolside relaxation.",
        price: 6999,
        features: ["Brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Holistic spa treatments for complete relaxation.",
        price: 9999,
        features: ["Facial", "Body massage", "Aromatherapy"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "A rejuvenating package with brunch, pool, and spa access.",
        price: 13999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "11",
    name: "The Sky Lounge Hotel",
    images: [
      "https://images.unsplash.com/photo-1606750031906-44d03fdd4d94?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606750031906-44d03fdd4d94?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "3 miles",
    rating: 4.8,
    amenities: ["Brunch + Pool", "Yoga", "Rooftop Pool"],
    price: 24999,
    description: "A luxurious stay with rooftop views and wellness packages.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description:
          "Delicious brunch served with an exclusive poolside experience.",
        price: 7999,
        features: ["Brunch", "Rooftop pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Exquisite spa treatments to refresh and rejuvenate.",
        price: 11999,
        features: ["Massage", "Facial treatment"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "Brunch, pool, and spa package for the ultimate luxury experience.",
        price: 15999,
        features: ["Brunch", "Pool access", "Spa treatment"],
      },
    ],
  },
  {
    id: "12",
    name: "The Royal Mirage",
    images: [
      "https://images.unsplash.com/photo-1592395890747-8ba81a697740?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592395890747-8ba81a697740?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.4 miles",
    rating: 4.9,
    amenities: ["Brunch + Pool", "Spa", "Fitness Center"],
    price: 26999,
    ispartner:true,
    description:
      "Elegant hotel offering high-end wellness services and a royal experience.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Royal brunch with a poolside retreat.",
        price: 8499,
        features: ["Buffet brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Exclusive spa package with luxury treatments.",
        price: 12999,
        features: ["Massage", "Facial", "Aromatherapy"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Brunch, pool, and a full spa experience.",
        price: 16999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "13",
    name: "The Metropolitan",
    images: [
      "https://images.unsplash.com/photo-1604677897732-c03f8ea1165a?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604677897732-c03f8ea1165a?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.6 miles",
    rating: 4.6,
    amenities: ["Brunch + Pool", "Spa", "Gym"],
    price: 24999,
    description: "Modern hotel with a mix of wellness and fitness offerings.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Savor brunch while relaxing by the pool.",
        price: 6999,
        features: ["Brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Soothing spa treatments to rejuvenate your senses.",
        price: 10999,
        features: ["Massage", "Facial treatments"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Enjoy brunch, pool access, and a full spa experience.",
        price: 14999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "14",
    name: "City Heights",
    images: [
      "https://images.unsplash.com/photo-1567443218-957c8e923198?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567443218-957c8e923198?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.7 miles",
    rating: 4.7,
    amenities: ["Brunch + Pool", "Rooftop Lounge", "Spa"],
    price: 22999,
    description: "Contemporary hotel with luxury spa and brunch options.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description:
          "Luxurious brunch with a view of the city and pool access.",
        price: 6999,
        features: ["Brunch", "Pool access", "City view"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Pamper yourself with a full luxury spa experience.",
        price: 9999,
        features: ["Massage", "Facial", "Relaxation therapies"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "The perfect combination of brunch, pool, and spa relaxation.",
        price: 13999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "15",
    name: "The Horizon Suites",
    images: [
      "https://images.unsplash.com/photo-1566438482-6a3809b3409e?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566438482-6a3809b3409e?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "2.9 miles",
    rating: 4.7,
    amenities: ["Brunch + Pool", "Spa", "Fitness Center"],
    price: 25999,
    description: "A stylish hotel offering wellness services with great views.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Delicious brunch and refreshing poolside relaxation.",
        price: 7499,
        features: ["Brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Indulge in full spa treatments for ultimate relaxation.",
        price: 10999,
        features: ["Massage", "Facial treatment", "Relaxation"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Complete luxury package with brunch, pool, and spa.",
        price: 14999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "16",
    name: "The Bay View Resort",
    images: [
      "https://images.unsplash.com/photo-1580937791573-c6adfbd5bb74?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580937791573-c6adfbd5bb74?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "3.2 miles",
    rating: 4.8,
    amenities: ["Brunch + Pool", "Yoga", "Spa"],
    price: 27999,
    description:
      "A peaceful retreat with panoramic views and wellness services.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Enjoy brunch with a poolside view of the bay.",
        price: 7999,
        features: ["Brunch", "Pool access", "Bay view"],
      },
      {
        id: "2",
        name: "Spa",
        description:
          "Luxurious spa treatments to rejuvenate your body and mind.",
        price: 11999,
        features: ["Full body massage", "Facial", "Sauna"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Perfect combination of brunch, pool, and spa experience.",
        price: 15999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "17",
    name: "Saffron Palace",
    images: [
      "https://images.unsplash.com/photo-1602588324156-19c0198e64ca?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602588324156-19c0198e64ca?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "2.3 miles",
    rating: 4.6,
    amenities: ["Brunch + Pool", "Spa", "Fitness Center"],
    price: 24999,
    ispartner:true,
    description:
      "A blend of tradition and luxury, offering exclusive wellness packages.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Gourmet brunch experience by the pool.",
        price: 6999,
        features: ["Brunch", "Pool access"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Pamper yourself with a luxurious spa treatment.",
        price: 10999,
        features: ["Massage", "Facial", "Aromatherapy"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "Combination of brunch, pool, and rejuvenating spa treatments.",
        price: 13999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "18",
    name: "The Regent Plaza",
    images: [
      "https://images.unsplash.com/photo-1602101700422-b4bcb8d5b197?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602101700422-b4bcb8d5b197?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "2.6 miles",
    rating: 4.9,
    amenities: ["Brunch + Pool", "Yoga", "Spa"],
    price: 28999,
    description:
      "A regal experience with top-tier amenities and wellness packages.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Elegant brunch by the pool with refreshing drinks.",
        price: 7999,
        features: ["Brunch", "Pool access", "Gourmet beverages"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Ultimate spa treatments for relaxation and rejuvenation.",
        price: 12999,
        features: ["Massage", "Facial", "Holistic therapy"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "The ultimate combination package with brunch, pool, and spa.",
        price: 16999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "19",
    name: "The Emerald Bay",
    images: [
      "https://images.unsplash.com/photo-1566797353-e4d89d0ff68b?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566797353-e4d89d0ff68b?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "1.9 miles",
    rating: 4.7,
    amenities: ["Brunch + Pool", "Rooftop Lounge", "Spa"],
    price: 25999,
    description:
      "A chic hotel with rooftop views, luxurious brunch, and wellness services.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Enjoy brunch with rooftop views and pool access.",
        price: 7499,
        features: ["Brunch", "Rooftop pool", "View of the bay"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Holistic spa treatments for a refreshing experience.",
        price: 10999,
        features: ["Body massage", "Facial", "Therapeutic treatments"],
      },
      {
        id: "3",
        name: "Combo",
        description: "Brunch, pool, and spa experience all in one package.",
        price: 14999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
  {
    id: "20",
    name: "The Crescent Bay",
    images: [
      "https://images.unsplash.com/photo-1604882244113-d1fe975431d5?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604882244113-d1fe975431d5?q=80&w=1920&auto=format&fit=crop&h=1200",
    ],
    distance: "3.5 miles",
    rating: 4.8,
    amenities: ["Brunch + Pool", "Spa", "Wellness Retreat"],
    price: 27999,
    description:
      "Exclusive hotel offering wellness retreats with brunch and pool packages.",
    packages: [
      {
        id: "1",
        name: "Brunch with Pool",
        description: "Gourmet brunch by the pool with stunning views.",
        price: 7999,
        features: ["Brunch", "Pool access", "Luxury drinks"],
      },
      {
        id: "2",
        name: "Spa",
        description: "Luxurious spa treatments for ultimate relaxation.",
        price: 11999,
        features: ["Massage", "Facial", "Thermal baths"],
      },
      {
        id: "3",
        name: "Combo",
        description:
          "Combination of brunch, pool, and wellness spa experience.",
        price: 15999,
        features: ["Brunch", "Pool access", "Spa treatments"],
      },
    ],
  },
];
