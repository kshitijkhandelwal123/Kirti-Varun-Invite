/* ============ EDIT ONLY THIS FILE FOR EACH NEW COUPLE ============
   Pictures: replace files inside the images/ folder (same name) OR change the path below.
   Leave a picture as "" to hide it.                                          */
window.WEDDING = {
  groom: "Varun",
  bride: "Kirti",
  monogram: "V & K",
  groomParents: "S/O Mr. Vikram & Mrs. Anjali Khanna",
  brideParents: "D/O Mr. Rohit & Mrs. Neha Sethi",
  blessing: "॥ श्री गणेशाय नमः ॥",
  tagline: "Two hearts, two souls, bound together in love forever.",
  inviteLine: "We request the pleasure of your company as we celebrate the marriage of our children.",

  // ---- pictures ----
  cover: "images/cover.jpg",            // opening envelope picture (portrait 1080x1920 works best)
  coverGradient: "linear-gradient(160deg,#9a2a4d,#4d0f22)",  // shows if the cover picture is missing
  couplePhoto: "",                      // optional round photo of the couple in the invitation card, e.g. "images/couple.jpg"
  venueImage: "images/venue.jpg",
  gallery: [],                          // optional photos, e.g. ["images/g1.jpg","images/g2.jpg"]

  // Countdown target – use +05:30 for India
  weddingDateTime: "2027-02-21T19:30:00+05:30",
  dateDay: "21", dateMonth: "FEB", dateYear: "2027",
  dateReveal: "Tap to reveal the date",
  rememberReveal: true,   // true = a guest only scratches once per phone

  events: [
    { date: "20 Feb", time: "11:00 AM", title: "Haldi",            note: "Yellow vibes & lots of laughter", image: "images/ev-haldi.jpg" },
    { date: "20 Feb", time: "7:00 PM",  title: "Sangeet",          note: "Music, dance & dinner",           image: "images/ev-sangeet.jpg" },
    { date: "21 Feb", time: "4:00 PM",  title: "Baraat",           note: "The celebration begins",          image: "images/ev-baraat.jpg" },
    { date: "21 Feb", time: "7:30 PM",  title: "Varmala & Pheras", note: "Two hearts, one forever",         image: "images/ev-pheras.jpg" },
    { date: "21 Feb", time: "10:00 PM", title: "Reception",        note: "Followed by dinner",              image: "images/ev-reception.jpg" }
  ],

  muhurat: { title: "Auspicious Muhurat", label: "Varmala & Pheras", time: "8:41 PM", text: "Please be seated by 8:15 PM" },

  eventsEyebrow: "Two days of celebration",
  venueNote: "Under the stars, surrounded by those we love most. We would be honoured to celebrate with you.",
  venueCity: "Venue · Udaipur",
  venueName: "The Royal Orchid Palace",
  venueAddress: "Lake Pichola Road, City Palace Area, Udaipur, Rajasthan 313001",
  mapQuery: "City Palace Udaipur Rajasthan",
  dressEyebrow: "Dress for the moment",
  dressTitle: "Wardrobe Planner",
  dressImage: "",                      // optional single picture above the list
  dressCode: [                         // use "|" for a new line in "look"; image = picture of the outfits ("" to hide)
    { event: "Haldi",   look: "Pastel shades|Indian traditional", image: "images/look-haldi.png" },
    { event: "Sangeet", look: "Glitz & glam|Indo western",        image: "images/look-sangeet.png" },
    { event: "Wedding", look: "Royal traditional",                image: "images/look-wedding.png" }
  ],

  theme:{main:"#6b1630",dark:"#4d0f22",gold:"#c2994d"},
  hideSections:[],  /* e.g. ["dress","gallery"] hides those sections. ids: date, events, venue, gallery, dress, rsvp */
  whatsapp: "910000000000",      // RSVP replies go here (country code + number, no + or spaces)
  rsvpBy: "5 Feb 2027",
  closing: "We look forward to celebrating this beautiful beginning with you.",
  families: "With love & warmest wishes — The Khanna & Sethi Families",
  music: "music/song.mp3"        // optional
};
