// ─────────────────────────────────────────────────────────────
// CHURCH DETAILS — edit this one file to update the whole site.
// Leave a value as '' to hide the feature that depends on it.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'House of Living Bread',
  // The name with "Church", used where visitors and Google need to know what we are.
  fullName: 'House of Living Bread Church',
  shortName: 'HOLB',
  // The live web address, no trailing slash. Set it to the church's own domain once it is bought.
  // Until then the site uses the address Vercel gives it automatically.
  url: process.env.SITE_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321'),

  tagline: 'A place to encounter Jesus, a family to belong to, and a life to grow in.',

  address: {
    street: '6625 Fraser St',
    city: 'Vancouver',
    region: 'BC',
    postalCode: 'V5X 3T6',
    country: 'CA',
  },
  // Leave empty until the church has its own phone line; every phone link on the site hides itself.
  phone: '',
  email: 'info.holb@gmail.com',

  // The Sunday service. `end` is when the service finishes; fellowship continues after it.
  services: [
    { name: 'Sunday Service', day: 'Sunday', dayShort: 'Su', start: '10:00', end: '11:30', label: 'Sundays at 10 a.m.' },
  ],
  // What happens around the service, shown on Plan a Visit and the home page.
  sundayFlow: [
    { time: '9:30 a.m.', title: 'Coffee is on', text: 'Come early, grab a cup and meet a few friendly faces before we start.' },
    { time: '10 a.m.', title: 'Service starts', text: 'We worship, pray and open the Bible together.' },
    { time: '11:30 a.m.', title: 'Stay a while', text: 'The service ends, but the conversation keeps going. The pastors are always around to pray with anyone who would like it.' },
  ],

  // Other regular gatherings, shown on the Get Involved page.
  gatherings: {
    prayer: { name: 'Last Friday Prayer', when: 'Last Friday of every month', time: '6 to 7:30 p.m.' },
    houseGroups: { name: 'House Groups', when: 'Every other week', time: '' },
  },

  // Special services. Each one shows on the home page until the day after it, then hides itself.
  specialServices: [
    { name: 'Christmas Day Service', date: '2026-12-25', time: '10 a.m.', start: '10:00', end: '11:30', blurb: 'Celebrate the birth of Jesus with us on Christmas morning. Bring the whole family; everyone is welcome.' },
  ],

  social: {
    youtube: 'https://www.youtube.com/@HouseofLivingBread',
    instagram: 'https://www.instagram.com/house_of_living_bread/',
    facebook: '',
    threads: '',
    x: '',
  },

  // YouTube channel ID (starts with "UC"). Find it at youtube.com/account_advanced.
  // When set, the newest sermons appear on the site automatically.
  youtubeChannelId: 'UCyS4xk_5Ct_7Yk0HR08wu0Q',

  // Link to your online giving page. When set, a "Give" page and menu item appear.
  giveUrl: '',

  // Access key from web3forms.com (free; sign up with the church email).
  // When set, forms send straight to the church inbox. When empty, forms open the visitor's email app.
  formKey: 'c9258a26-2afa-4433-9f9f-2cedbb4e5c1d',

  // Lead pastors. Their bio is written out on the About page (src/pages/about.astro).
  pastor: { name: 'Pastors Umesh & Sweta Koli', role: 'Founders & Lead Pastors', photo: '/pastors.jpg' },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ', ' + fullAddress)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
export const telLink = site.phone ? 'tel:+1' + site.phone.replace(/\D/g, '') : '';
