/* ============================================================
   CHARACTERS.JS — Whimsical Pond Tails: Duck Family Manual
   ============================================================
   TO ADD A NEW CHARACTER:
   1. Drop their image into the /images folder (e.g. images/newduck.jpg)
   2. Copy one object below, paste it into the right section array,
      and edit the fields.
   3. Save. Refresh the page (or push to GitHub). That's it —
      no HTML/CSS editing needed.

   FIELDS:
   - img:      path to the image inside the /images folder
   - name:     character's front name (shown on the front of the card)
   - backName: character's back name (shown on the back when flipped; defaults to name if omitted)
   - role:     short title/tagline (shown under the name, front of card)
   - bio:      funny 1-2 sentence bio (shown on the back when flipped)

   SECTIONS:
   Add a character to one of the three arrays below: ELDERS,
   FAMILY, or DUCKLINGS. Want a whole new section (e.g. "Pets" or
   "Villains")? Scroll to the bottom of this file — there's a
   3-line example showing how to register a new section too.
============================================================= */

const ELDERS = [
  {
    img: "images/mama.jpg",
    name: "Mama Duck",
    backName: "Levi",
    role: "Head of the Nest",
    bio: "Runs the pond like a five-star general with a stick for a scepter. Still gets misty-eyed over shiny bald heads — ask Papa how that turned out."
  },
  {
    img: "images/papi.jpg",
    name: "Papa Duck",
    backName: "Papi",
    role: "The Runaway Dad",
    bio: "Used to be perfectly bald and perfectly loved. One rogue hair sprouted, one war started, and now he lives on the opposite shore looking permanently betrayed by his own follicle."
  },
  {
    img: "images/iska.jpg",
    name: "Brainy Grandpa",
    backName: "Iska",
    role: "Chief Storyteller",
    bio: "Tells stories and poems, showers his wisdom with literary anecdotes. Ducklings love his stories. He helps keep the family together :)"
  },
  {
    img: "images/serratia.jpg",
    name: "Fierce Grandma",
    backName: "Serratia",
    role: "Nest Enforcer",
    bio: "Zero patience, unlimited energy. Will chase off a leaf, a cloud, or your bad attitude before breakfast is even served."
  }
];

const FAMILY = [
  {
    img: "images/akuku.jpg",
    name: "cool yet evil uncle",
    backName: "Akuku",
    role: "Self-Appointed Detective",
    bio: "100% convinced several ducklings are secretly aliens from Mars and Jupiter. Has a notebook full of 'evidence' that is mostly just doodles of eyeballs."
  },
  {
    img: "images/gracie.jpg",
    name: "Ruthless Falcon Aunt",
    backName: "Gracie",
    role: "The Menace with a Whistle",
    bio: "Sporty, loud, and the initiator of the 'mermaid tail' hunt beacuse she loves having them for breakfast."
  },
  {
    img: "images/jazzie.jpg",
    name: "Golden-Winged cool Aunt",
    backName: "Jazzie",
    role: "The Flying Gift Shop",
    bio: "Shows up out of nowhere when ducklings need her, drops presents into everyone's wings, brings snacks when ducklings cry, also on a mermaid tail hunt, she is a hoarder but always low on rss"
  },
  {
    img: "images/moha.jpg",
    name: "Migratory Uncle",
    backName: "Moha",
    role: "Professional Napper",
    bio: "Flies impossibly far, comes back with souvenirs as compensation, takes the longest nap known to pond-kind, then disappears again without warning."
  },
  {
    img: "images/ladyv.jpg",
    name: "Elegant Swan Aunt",
    backName: "Lady Vivanna",
    role: "The Only Calm One",
    bio: "Glides through total chaos in a tiara, dispensing serene advice nobody follows. The eye of every storm this family creates."
  },
  {
    img: "images/ladyk.jpg",
    name: "Dove Godmother",
    backName: "Lady Kweenie",
    role: "Guardian of the Twins",
    bio: "Soft-spoken, sparkly, and quietly the most powerful bird at the pond. Shows up right when the twins need saving — no cape required."
  },
  {
    img: "images/Joe.png",
    name: "White-Beard Drake",
    backName: "Joe",
    role: "Papa's Landlord of Love",
    bio: "Kind, successful, impeccably bearded. Gave Papa a comfy new life on the far shore. Genuinely zero villain energy — just excellent real estate."
  },
  {
    img: "images/luma.jpg",
    name: "Fling Drake",
    backName: "Luma",
    role: "The Convertible Guy",
    bio: "Cruised into Papa's life in a red convertible armed with a water gun. Sweet, fun, and about as permanent as a pond ripple."
  },
    {
    img: "images/kakosi.png",
    name: "Tipsy Duck-vader",
    backName: "Kakosi",
    role: "not so professional kidnapper",
    bio: "Shades-wearing Uncle Kakosi has eyesight so terrible he mistakes ducklings for chirping breadcrumbs. He has buff wings but when drunk, showers everyone with riches until broke."
  },
      {
    img: "images/anamika.png",
    name: "Her Grace Koyal",
    backName: "Anamika",
    role: "The Royal Advisor of the Pond",
    bio: "Official Royal Advisor and Voice of Reason of the paternal nest. She is the one everyone turns to when chaos gets too loud, and somehow her calm words makes the wc family listen."
  },
  {
    img: "images/ehab.jpg",
    name: "Savior Uncle",
    backName: "EhabEseed",
    role: "The Legend with a Rope",
    bio: "Bearded, badge-wearing, first-aid-kit-carrying hero. Once swooped in and rescued the twins from literally being served on a pan. Absolute legend status: unlocked."
  }
];

const DUCKLINGS = [
  {
    img: "images/romeo.jpg",
    name: "Hardworking Non-Chalant Duckling",
    backName: "Romeo",
    role: "Eldest Brother, Secret Alien",
    bio: "Quiet, denim-clad, and permanently looks like he's seen things no duckling should see. Trying to get revenge on his runaway dad."
  },
  {
    img: "images/salaxi.jpg",
    name: "Pretty Eye Duckling",
    backName: "Salaxi",
    role: "The Mirror's Biggest Fan",
    bio: "Soft-eyed, braid-having, daisy-holding, and deeply committed to staring at her own reflection like it owes her money."
  },
  {
    img: "images/samesizeclaws.jpg",
    name: "Ninja Claws",
    backName: "Samesizeclaws",
    role: "Ninja Lobster Sibling",
    bio: "Walks sideways, wears a full ninja mask, and is ready to 'protect' the family from any threat — including, tragically, innocent flowers."
  },
  {
    img: "images/vovan.jpg",
    name: "Multilingual competitive chameleon",
    backName: "Vovan",
    role: "The Committed Chameleon",
    bio: "A chameleon who fits in every situation, ready to compete, insisting on a full green chameleon costume, curly tail included."
  },
  {
    img: "images/gojo.jpg",
    name: "Hyper-active Duckling",
    backName: "SatoruGojo",
    role: "Chaos, Uncontained",
    bio: "A hyperactive ball of energy who cant stay still and wants evrything asap. Sitting still is not in his vocabulary."
  },
  {
    img: "images/twinns.jpg",
    name: "The TWINNS",
    backName: "Nobu & Orion",
    role: "The Inseparable Aliens",
    bio: "Secretly extraterrestrial, definitely up to something, and capable of turning into mermaids the moment things get dicey. Uncle Akuku has a whole file on them."
  },
  {
    img: "images/spiderman.jpg",
    name: "Fun spidey duckling",
    backName: "Spiderman",
    role: "The Pun Machine",
    bio: "Never removes his Spider-Man mask, not even for meals. His jokes are so bad they make the frogs cry — from laughing, allegedly."
  },
  {
    img: "images/synthetic.jpg",
    name: "Cool ciel duckling",
    backName: "Synthetic",
    role: "The Tiny Detective",
    bio: "Top hat, eyepatch, full black suit. Says almost nothing, observes everything, and is judging every decision this family has ever made."
  },
  {
    img: "images/nookie.jpg",
    name: "Introvert Duckling",
    backName: "Nookie",
    role: "Introvert-in-Chief",
    bio: "Lives in a hoodie, prefers the quietest corner of the nest, and only emerges from hiding when snacks are confirmed to be involved."
  },
  {
    img: "images/young.jpg",
    name: "Soju-lover Duckling",
    backName: "Young",
    role: "Power Level: Over 9000",
    bio: "Vanished into the woods as a lost duckling, came back in a red cape holding soju in one hand and a finish-line flag. Nobody asks what happened out there."
  },
  {
    img: "images/hikal.jpg",
    name: "Strong-flipper duckling",
    backName: "Hikal",
    role: "The Treadmill Addict",
    bio: "Forever jogging on a floating lily-pad treadmill, rain or shine, threat or no threat. Cardio comes first, even during a family crisis."
  },
  {
    img: "images/c88666poiny.jpg",
    name: "Ulty Duckling",
    backName: "C88666poiny",
    role: "Backyard Ultraman",
    bio: "Tiny red-and-silver hero suit, glowing forehead gem, dramatic poses on demand. Declares 'I will save the pond!' at least six times before lunch."
  },
  {
    img: "images/merida.jpg",
    name: "Love-Charm assassin Duckling",
    backName: "Merida",
    role: "The Honey-Trap Cousin",
    bio: "Long wavy hair, one sweet smile, and an unnerving ability to blind fred by love and steal his rss."
  },
  {
    img: "images/tnknews.jpg",
    name: "Frogy sibling",
    backName: "TNK News",
    role: "The 9-to-5 Frog",
    bio: "A suit-wearing, sunglasses-clad, first-aid-kit-toting frog cousin who somehow has a more serious career than every duck in this family combined."
  },
    {
    img: "images/borjuiss.png",
    name: "Chancellor Feather Duckling",
    backName: "Borjuiss",
    role: "Lead Etiquette Expert of Reeds",
    bio: "Endlessly kind yet ridiculously formal, Borjuiss says “pardon me” before splashing and serves bread crumbs like fine high tea."
  },
    {
    img: "images/nyes.png",
    name: "The Caring Comedian",
    backName: "Nyes",
    role: "The worrier of clan",
    bio: "Kind duckling who constantly checks on you before instantly dropping the silliest giggly punchline."
  },
  {
    img: "images/cousins.jpg",
    name: "The Cousins",
    backName: "all other GNX members",
    role: "The Pond Freak Squad",
    bio: "little cousins, one shared brain cell, unlimited mud. Their full-time job is building mud islands and creating pure aquatic mayhem."
  },
  {
    img: "images/alexa.png",
    name: "Island Sharer Duckling",
    backName: "Alexa",
    role: "here for streaming Island Likes",
    bio: "Alexa constantly shares her mud island for likes, dropping links mid-chat without saying a word."
  },   
  {
    img: "images/pyro.png",
    name: "The Pond Diplomat Duckling",
    backName: "Pyro",
    role: "Chief Pond Peace Officer",
    bio: "Pyro solves silly nest arguments using dramatic logic, pond laws, and supreme peace-summit vibes."
  },
   {
   img: "images/pager.png",
  name: "The Playful Beeper",
  backName: "PAGERWISE",
  role: "The Always-On-Call fun Pager",
  bio: "Kind to the core. He carries a tiny glowing pager that goes off at the worst possible moments, then politely excuses himself with ‘One moment please…’ even if no one actually called him."
}
];
const VILLAINS = [
   {
      img: "images/nemo.png",
      name: "The Overpowered Clownfish",
      backName: "Nemo",
      role: "The One Who Actually Has the Stats",
      bio: "The real Nemo of the clan… except this version is ridiculously overpowered and still runs around with his favourite little backpack, stuffing every shiny crystal he sees into it like a hyperactive collector."

   }
];

/* ------------------------------------------------------------
   SECTIONS — registers which arrays show up, in what order,
   and under what heading. To add a brand-new section (not just
   a new character in an existing one), add another object here:

   { id: "villains", label: "Pond Villains", data: VILLAINS }

   ...and define `const VILLAINS = [ {...}, {...} ];` above like
   the others. The page will pick it up automatically — no other
   changes needed.
------------------------------------------------------------- */
const SECTIONS = [
  { id: "elders",    label: "The Elders",                data: ELDERS },
  { id: "family",    label: "Aunts, Uncles & In-Laws",    data: FAMILY },
  { id: "ducklings", label: "The Duckling Squad",         data: DUCKLINGS },
   { id: "fishes", label: "The Ocean friends", data: FISHES}
];
