// ─────────────────────────────────────────────────────────────
// CHURCH DETAILS — edit this one file to update the whole site.
// Leave a value as '' to hide the feature that depends on it.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'House of Living Bread',
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
  phone: '(236) 995-9520',
  email: 'info.holb@gmail.com',

  // Weekly gatherings. Add more lines for midweek meetings.
  services: [
    { name: 'Sunday Service', day: 'Sunday', dayShort: 'Su', start: '10:00', end: '12:00', label: 'Sundays, 10 a.m. to 12 p.m.' },
  ],

  social: {
    youtube: 'https://www.youtube.com/@HouseofLivingBread',
    instagram: 'https://www.instagram.com/house_of_living_bread/',
    facebook: '',
  },

  // YouTube channel ID (starts with "UC"). Find it at youtube.com/account_advanced.
  // When set, the newest sermons appear on the site automatically.
  youtubeChannelId: 'UCyS4xk_5Ct_7Yk0HR08wu0Q',

  // Link to your online giving page. When set, a "Give" page and menu item appear.
  giveUrl: '',

  // Access key from web3forms.com (free; sign up with the church email).
  // When set, forms send straight to the church inbox. When empty, forms open the visitor's email app.
  formKey: '',

  // Lead pastors. Their bio is written out on the About page (src/pages/about.astro).
  pastor: { name: 'Pastors Umesh & Sweta Koli', role: 'Founders & Lead Pastors', photo: '/pastors.jpg' },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ', ' + fullAddress)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
export const telLink = 'tel:+1' + site.phone.replace(/\D/g, '');
