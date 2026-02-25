// Production data from scraped manifest

// Founders of The Company Theatre
export interface Founder {
  name: string;
  role: string;
  bio: string;
  headshot?: string;
}

export const founders: Founder[] = [
  {
    name: "Philip Riccio",
    role: "Co-Founder & Artistic Director",
    bio: "Philip Riccio co-founded The Company Theatre in 2004 with Allan Hawco. As Artistic Director, he has directed many of the company's most acclaimed productions and performed in numerous others. His work has earned multiple Dora Mavor Moore Awards and Toronto Theatre Critics Awards. Philip continues to lead the company's mission of bringing world-class, radically live theatre to Canadian audiences.",
    headshot: "/images/cast/philip-riccio.jpg"
  },
  {
    name: "Allan Hawco",
    role: "Co-Founder & Co-Artistic Director",
    bio: "Allan Hawco co-founded The Company Theatre in 2004 with Philip Riccio. A versatile actor known for both stage and screen, Allan has appeared in productions including Belleville, Festen, and the company's debut production A Whistle in the Dark. He is also known for creating and starring in the hit CBC series Republic of Doyle.",
    headshot: "/images/cast/allan-hawco.jpg"
  }
];

export const theatreInfo = {
  name: "The Company Theatre",
  tagline: "Radically Live Theatre",
  heroBlurb: "Twenty years of fearless theatre. World-class actors. Stories that stay with you.",
  description: "Provocative international plays with Canada's finest actors.",
  founded: 2004,
  location: "Toronto, Canada",
  logo: "/images/logo.png",
  contact: {
    artisticDirector: "Philip Riccio",
    email: "philip@companytheatre.ca",
    social: {
      facebook: "https://www.facebook.com/thecompanytheatre",
      twitter: "https://twitter.com/companytheatre",
      instagram: "https://www.instagram.com/companytheatreto/",
      youtube: "https://www.youtube.com/user/companytheatrevideos",
      medium: "https://medium.com/@thecompanytheatre"
    }
  },
  about: {
    whoWeAre: "Since 2004, The Company Theatre has been bringing bold, uncompromising stories to Toronto stages. We hunt down the most electrifying plays from around the world and put them in the hands of Canada's finest actors.",
    mission: "No gimmicks. No safety nets. Just raw, authentic performances that unfold differently every single night. When the lights come up, anything can happen—and that's exactly the point.",
    approach: "Think of it as prestige television, but live and breathing in front of you. We're drawn to stories that dig into the messy, complicated, thrilling parts of being human. The kind of nights that stay with you long after you leave the theatre.",
    stats: "13 productions. 15+ awards. Two decades of theatre that critics have called 'one of the best things ever seen in Toronto.'",
    venue: "We don't have a permanent home—we partner with theatres across Toronto and beyond, bringing our work wherever the right stage awaits."
  }
};

export interface CastMember {
  role?: string;
  actor: string;
  bio?: string;
  headshot?: string;
}

export interface CrewMember {
  role: string;
  name: string;
  bio?: string;
  headshot?: string;
}

export interface Production {
  id: string;
  title: string;
  playwright: string;
  director?: string;
  dates?: string;
  year?: number;
  venue: string;
  partnership?: string;
  synopsis: string;
  adaptation?: string;
  cast: CastMember[];
  crew: CrewMember[];
  images: string[];
  quotes?: { text: string; source: string }[];
  reviews?: { quote: string; source: string }[];
  awards?: string[];
  advisory?: string;
  press?: { title: string; source: string }[];
  status: "current" | "past" | "upcoming";
}

export const productions: Production[] = [
  {
    id: "things-i-know-to-be-true",
    title: "Things I Know to be True",
    playwright: "Andrew Bovell",
    director: "Philip Riccio",
    dates: "February 1 – February 26, 2023",
    venue: "CAA Theatre — 651 Yonge St",
    partnership: "Mirvish Productions",
    synopsis: "A heart-wrenching and uplifting journey of a family struggling to stay together in a rapidly changing world. Things I Know to be True is the story of a year in the life of the Price family. Bob, recently let go from his job at a car factory, and Fran, a registered nurse, have raised their four children — Pip, Mia, Ben, and Rosie — the best they could. But a parent's job is never finished, and as the seasons change Bob and Fran find themselves guiding and supporting their children as they each face life-altering changes that shake the foundation of the once-stable family home.",
    cast: [
      { role: "Bob", actor: "Tom McCamus", headshot: "/images/cast/tom-maccamus.jpg" },
      { role: "Fran", actor: "Seana McKenna", headshot: "/images/cast/seana-mckenna.jpg" },
      { role: "Rosie", actor: "Alanna Bale", headshot: "/images/cast/alanna-bale.jpg" },
      { role: "Mia", actor: "Michael Derworiz", headshot: "/images/cast/michael-derworiz.jpg" },
      { role: "Pip", actor: "Christine Horne", headshot: "/images/cast/christine-horne.jpg" },
      { role: "Ben", actor: "Daniel Maslany", headshot: "/images/cast/daniel-maslany.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Set Design", name: "Shannon Lea Doyle" },
      { role: "Costume Design", name: "Ming Wong" },
      { role: "Sound Design", name: "Deanna H. Choi" },
      { role: "Lighting Design", name: "Nick Blais" },
      { role: "Stage Manager", name: "Robert Harding" },
      { role: "Assistant Stage Manager", name: "Alysse Szatkowski" }
    ],
    images: [
      "/images/things-i-know-to-be-true-hero.jpg",
      "/images/things-i-know-to-be-true/tiktbt-01.jpg",
      "/images/things-i-know-to-be-true/tiktbt-02.jpg",
      "/images/things-i-know-to-be-true/tiktbt-03.jpg",
      "/images/things-i-know-to-be-true/tiktbt-04.jpg",
      "/images/things-i-know-to-be-true/tiktbt-05.jpg",
      "/images/things-i-know-to-be-true/tiktbt-06.jpg",
      "/images/things-i-know-to-be-true/tiktbt-07.jpg",
      "/images/things-i-know-to-be-true/tiktbt-08.jpg",
      "/images/things-i-know-to-be-true/tiktbt-09.jpg",
      "/images/things-i-know-to-be-true/tiktbt-10.jpg",
      "/images/things-i-know-to-be-true/tiktbt-11.jpg",
      "/images/things-i-know-to-be-true/tiktbt-12.jpg",
      "/images/things-i-know-to-be-true/tiktbt-13.jpg",
      "/images/things-i-know-to-be-true/tiktbt-14.jpg",
      "/images/things-i-know-to-be-true/tiktbt-15.jpg",
      "/images/things-i-know-to-be-true/tiktbt-16.jpg",
      "/images/things-i-know-to-be-true/tiktbt-17.jpg",
      "/images/things-i-know-to-be-true/tiktbt-18.jpg"
    ],
    reviews: [
      { quote: "One of the best plays I've ever seen. Remarkable performances. Rush to see it.", source: "Steve Paikin, TVO" },
      { quote: "This is must see theatre. A masterclass in acting. You will be blown away.", source: "Rick Mercer" }
    ],
    status: "past"
  },
  {
    id: "jerusalem",
    title: "Jerusalem",
    playwright: "Jez Butterworth",
    director: "Mitchell Cushman",
    dates: "February 13 – March 17, 2018",
    venue: "Streetcar Crowsnest",
    partnership: "Outside the March and The Company Theatre co-production in association with Starvox Entertainment",
    synopsis: "The Company Theatre's production of Jerusalem in 2018, starring Kim Coates (Bad Blood, Sons of Anarchy) was an award-winning success. Johnny 'Rooster' Byron, local waster and modern-day Pied Piper, is a wanted man. The council want to evict him; his son wants him to take him to the fair; Troy Whitworth wants to give him a serious kicking; and the villagers want to celebrate St George's Day with a dance around his maypole. But Rooster has other plans.",
    cast: [
      { role: "Johnny 'Rooster' Byron", actor: "Kim Coates", headshot: "/images/cast/kim-coates.jpg" },
      { role: "Ginger", actor: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Tanya", actor: "Brenna Coates", headshot: "/images/cast/brenna-coates.jpg" },
      { role: "Dawn", actor: "Diana Donnelly", headshot: "/images/cast/diana-donnelly.jpg" },
      { role: "Lee", actor: "Christo Graham", headshot: "/images/cast/christo-graham.jpg" },
      { role: "Pea", actor: "Katelyn McCulloch", headshot: "/images/cast/katelyn-mcculloch.jpg" },
      { role: "Mr. Parsons", actor: "Michael Spencer-Davis", headshot: "/images/cast/michael-spencer-davis.jpg" },
      { role: "Troy Whitworth", actor: "Jason Cadieux", headshot: "/images/cast/jason-cadieux.jpg" },
      { role: "The Professor", actor: "Nicholas Campbell", headshot: "/images/cast/nicholas-campbell.jpg" },
      { role: "Phaedra", actor: "Shakura Dickson" },
      { role: "Davey", actor: "Peter Fernandes", headshot: "/images/cast/peter-fernandes.jpg" },
      { role: "Wesley", actor: "Daniel Kash", headshot: "/images/cast/daniel-kash.jpg" },
      { role: "Ms. Fawcett", actor: "Kieran Sequoia", headshot: "/images/cast/kieran-sequoia.jpg" }
    ],
    crew: [
      { role: "Director", name: "Mitchell Cushman" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Assistant Director", name: "Chala Hunter" },
      { role: "Assistant Stage Manager", name: "Sam Hale" },
      { role: "Apprentice Stage Manager", name: "Kelly Boudreau" },
      { role: "Set Design", name: "Nick Blais" },
      { role: "Costume Design", name: "Lindsay Dagger Junkin" },
      { role: "Lighting Design", name: "André du Toit" },
      { role: "Sound Design", name: "Richard Feren" },
      { role: "Production Manager", name: "Dave DeGrow" },
      { role: "Dialect Coach", name: "John Nelles" },
      { role: "Fight Director", name: "Anita Nittoly" }
    ],
    images: [
      "/images/jerusalem-1.jpg",
      "/images/jerusalem-3.jpg",
      "/images/galleries/jerusalem/jerusalem-01.jpg",
      "/images/galleries/jerusalem/jerusalem-03.jpg",
      "/images/galleries/jerusalem/jerusalem-05.jpg",
      "/images/galleries/jerusalem/jerusalem-06.jpg",
      "/images/galleries/jerusalem/jerusalem-07.jpg",
      "/images/galleries/jerusalem/jerusalem-08.jpg",
      "/images/galleries/jerusalem/jerusalem-09.jpg",
      "/images/galleries/jerusalem/jerusalem-11.jpg",
      "/images/galleries/jerusalem/jerusalem-12.jpg",
      "/images/galleries/jerusalem/jerusalem-14.jpg",
      "/images/galleries/jerusalem/jerusalem-15.jpg",
      "/images/galleries/jerusalem/jerusalem-16.jpg",
      "/images/galleries/jerusalem/jerusalem-17.jpg",
      "/images/galleries/jerusalem/jerusalem-18.jpg",
      "/images/galleries/jerusalem/jerusalem-19.jpg",
      "/images/galleries/jerusalem/jerusalem-20.jpg",
      "/images/galleries/jerusalem/jerusalem-21.jpg",
      "/images/galleries/jerusalem/jerusalem-22.jpg",
      "/images/galleries/jerusalem/jerusalem-23.jpg",
      "/images/galleries/jerusalem/jerusalem-25.jpg",
      "/images/galleries/jerusalem/jerusalem-26.jpg",
      "/images/galleries/jerusalem/jerusalem-27.jpg",
      "/images/galleries/jerusalem/jerusalem-28.jpg",
      "/images/galleries/jerusalem/jerusalem-29.jpg",
      "/images/galleries/jerusalem/jerusalem-30.jpg",
      "/images/galleries/jerusalem/jerusalem-31.jpg",
      "/images/galleries/jerusalem/jerusalem-32.jpg",
      "/images/galleries/jerusalem/jerusalem-33.jpg",
      "/images/galleries/jerusalem/jerusalem-34.jpg",
      "/images/galleries/jerusalem/jerusalem-36.jpg",
      "/images/galleries/jerusalem/jerusalem-37.jpg",
      "/images/galleries/jerusalem/jerusalem-38.jpg",
      "/images/galleries/jerusalem/jerusalem-39.jpg",
      "/images/galleries/jerusalem/jerusalem-40.jpg",
      "/images/galleries/jerusalem/jerusalem-41.jpg"
    ],
    awards: [
      "2018 Dora Mavor Moore Award - Outstanding Production",
      "2018 Dora Mavor Moore Award - Outstanding Direction (Mitchell Cushman)",
      "2018 Dora Mavor Moore Award - Outstanding Performance by a Male in a Principal Role (Kim Coates)",
      "2018 Dora Mavor Moore Award - Outstanding Performance by an Ensemble",
      "2018 Dora Mavor Moore Award - Outstanding Scenic Design (Nick Blais)",
      "2018 Dora Mavor Moore Award - Outstanding Lighting Design (André du Toit)",
      "2018 Dora Mavor Moore Award - John Kaplan Audience Choice Award",
      "2018 Toronto Theatre Critics Award - Best Design"
    ],
    reviews: [
      { quote: "Jerusalem triumphs as pure theatre of the kind we rarely see", source: "J. Kelly Nestruck, The Globe & Mail" },
      { quote: "A fable for a gentrified generation", source: "Jen Norman, BlogTO" },
      { quote: "Kim Coates is marvellous keeping a steady stream of teenage visitors enthralled", source: "J. Kelly Nestruck, The Globe & Mail" },
      { quote: "The most ambitious stagecraft I've ever witnessed", source: "Jen Norman, BlogTO" }
    ],
    status: "past"
  },
  {
    id: "john",
    title: "John",
    playwright: "Annie Baker",
    director: "Jonathan Goad",
    year: 2017,
    dates: "2017",
    venue: "Berkeley Street Upstairs Theatre, Toronto",
    synopsis: "The Canadian premiere of Annie Baker's John. The production opened to immense critical acclaim, receiving top marks from the Globe and Mail, Toronto Star, NOW Magazine and various other publications. A young couple arrives at a bed and breakfast in Gettysburg, Pennsylvania. In the home of an eccentric older woman, they are forced to confront the cracks in their relationship and the unsettling presence that seems to permeate the room.",
    cast: [
      { actor: "Nancy Beatty", headshot: "/images/cast/nancy-beatty.jpg" },
      { actor: "Nora McLellan", headshot: "/images/cast/nora-mclellan.jpg" },
      { actor: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { actor: "Loretta Yu", headshot: "/images/cast/loretta-yu.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jonathan Goad" },
      { role: "Set Design", name: "Shannon Lea Doyle" }
    ],
    images: [
      "/images/galleries/john/john-31.jpg",
      "/images/galleries/john/john-33.jpg",
      "/images/john-1.jpg",
      "/images/galleries/john/john-01.jpg",
      "/images/galleries/john/john-02.jpg",
      "/images/galleries/john/john-03.jpg",
      "/images/galleries/john/john-04.jpg",
      "/images/galleries/john/john-05.jpg",
      "/images/galleries/john/john-06.jpg",
      "/images/galleries/john/john-07.jpg",
      "/images/galleries/john/john-08.jpg",
      "/images/galleries/john/john-09.jpg",
      "/images/galleries/john/john-10.jpg",
      "/images/galleries/john/john-11.jpg",
      "/images/galleries/john/john-12.jpg",
      "/images/galleries/john/john-13.jpg",
      "/images/galleries/john/john-14.jpg",
      "/images/galleries/john/john-15.jpg",
      "/images/galleries/john/john-16.jpg",
      "/images/galleries/john/john-17.jpg",
      "/images/galleries/john/john-18.jpg",
      "/images/galleries/john/john-19.jpg",
      "/images/galleries/john/john-20.jpg",
      "/images/galleries/john/john-21.jpg",
      "/images/galleries/john/john-22.jpg",
      "/images/galleries/john/john-23.jpg",
      "/images/galleries/john/john-24.jpg",
      "/images/galleries/john/john-25.jpg",
      "/images/galleries/john/john-26.jpg",
      "/images/galleries/john/john-27.jpg",
      "/images/galleries/john/john-28.jpg",
      "/images/galleries/john/john-29.jpg",
      "/images/galleries/john/john-30.jpg",
      "/images/galleries/john/john-32.jpg",
      "/images/galleries/john/john-34.jpg"
    ],
    awards: [
      "2017 Dora Mavor Moore Award - Outstanding Performance (Female) - Nora McLellan (Won)",
      "2017 Dora Mavor Moore Award - Outstanding Performance (Female) - Nancy Beatty (Nominated)",
      "2017 Dora Mavor Moore Award - Outstanding Performance (Male) - Philip Riccio (Nominated)",
      "2017 Dora Mavor Moore Award - Outstanding Scenic Design - Shannon Lea Doyle (Won)",
      "2017 Toronto Theatre Critics Award - Best Supporting Actress - Nora McLellan (Won)",
      "2017 Toronto Theatre Critics Award - Best International Play (Won)",
      "2017 Toronto Theatre Critics Award - Best Production (Won)"
    ],
    reviews: [
      { quote: "John shows the extraordinary beneath the ordinary", source: "Glenn Sumi, NOW Magazine" },
      { quote: "Company Theatre's John a fine introduction to Annie Baker's work", source: "Carly Maga, Toronto Star" },
      { quote: "An evening very well spent", source: "Rebecca Felgate, Toronto Guardian" },
      { quote: "Annie Baker's John is a religious experience", source: "The Globe & Mail" },
      { quote: "The Company Theatre's production of three-hour play set in a quaint B&B will have you riveted to your seat", source: "Glenn Sumi, NOW Magazine" }
    ],
    status: "past"
  },
  {
    id: "domesticated",
    title: "Domesticated",
    playwright: "Bruce Norris",
    director: "Philip Riccio",
    dates: "November 17 – December 20, 2015",
    venue: "Berkeley Street Theatre",
    partnership: "Canadian Stage co-production",
    synopsis: "TCT and Canadian Stage closed their partnership with a production of Bruce Norris's Domesticated. The play starred Paul Gross and Martha Burns, alongside a cast of nine other actors, in what was TCT's largest ensemble production since 2008's Festen. Due to the popularity of the production, Domesticated ran for an extended, completely sold-out fifth week. Bill Pulver is a politician in crisis mode. A scandalous incident in a hotel room has left his wife Judy publicly humiliated and his political career in jeopardy. As the couple navigates the fallout in front of an unrelenting media circus, Bruce Norris weaves a scathing and hilarious examination of gender politics, power, and public perception.",
    cast: [
      { role: "Bill Pulver", actor: "Paul Gross" },
      { role: "Judy Pulver", actor: "Martha Burns", headshot: "/images/cast/martha-burns.jpg" },
      { role: "Bobbie", actor: "Torri Higginson", headshot: "/images/cast/torri-higginson.jpg" },
      { role: "Casey", actor: "Kelly McNamee", headshot: "/images/cast/kelly-mcnamee.jpg" },
      { role: "Jackie", actor: "Sarah Dodd", headshot: "/images/cast/sarah-dodd.jpg" },
      { role: "Becky", actor: "Vanessa Smythe", headshot: "/images/cast/vanessa-smythe.jpg" },
      { actor: "Nicola Lipman", headshot: "/images/cast/nicola-lipman.jpg" },
      { actor: "Maria Vacratsis", headshot: "/images/cast/maria-vacratsis.jpg" },
      { actor: "Akosua Amo-Adem", headshot: "/images/cast/akosua-amo-adem.jpg" },
      { actor: "Salvatore Antonio", headshot: "/images/cast/salvatore-antonio.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Set Design", name: "Nick Blais" },
      { role: "Costume Design", name: "Ming Wong" },
      { role: "Lighting Design", name: "Kevin Lamotte" },
      { role: "Sound Design", name: "Thomas Ryder Payne" },
      { role: "Projection Design", name: "Cameron Davis" }
    ],
    images: [
      "/images/galleries/domesticated/domesticated-5.jpg",
      "/images/galleries/domesticated/domesticated-1.jpg",
      "/images/galleries/domesticated/domesticated-2.jpg",
      "/images/galleries/domesticated/domesticated-3.jpg",
      "/images/galleries/domesticated/domesticated-4.jpg",
      "/images/galleries/domesticated/domesticated-6.jpg",
      "/images/galleries/domesticated/domesticated-7.jpg",
      "/images/galleries/domesticated/domesticated-8.jpg",
      "/images/galleries/domesticated/domesticated-9.jpg",
      "/images/galleries/domesticated/domesticated-10.jpg",
      "/images/galleries/domesticated/domesticated-11.jpg",
      "/images/galleries/domesticated/domesticated-12.jpg",
      "/images/galleries/domesticated/domesticated-13.jpg",
      "/images/galleries/domesticated/domesticated-14.jpg",
      "/images/galleries/domesticated/domesticated-15.jpg",
      "/images/galleries/domesticated/domesticated-16.jpg",
      "/images/galleries/domesticated/domesticated-17.jpg",
      "/images/galleries/domesticated/domesticated-18.jpg",
      "/images/galleries/domesticated/domesticated-19.jpg",
      "/images/galleries/domesticated/domesticated-20.jpg"
    ],
    reviews: [
      { quote: "Domesticated is Paul Gross' best stage work to date", source: "Robert Cushman, National Post" },
      { quote: "This production is energized by the brilliant casting of real-life couple Paul Gross and Martha Burns in the leads", source: "Glenn Sumi, NOW Magazine" },
      { quote: "Full of 'stellar female performances'", source: "NOW Magazine" },
      { quote: "Martha Burns as Judy... is a force. I was transfixed by her performance", source: "Tracey Beltrano" },
      { quote: "Paul Gross goes through one heck of a roller coaster... His performance was effortless", source: "Tracey Beltrano" }
    ],
    status: "past"
  },
  {
    id: "the-seagull",
    title: "The Seagull",
    playwright: "Anton Chekhov",
    director: "Chris Abraham",
    dates: "January 11 – February 8, 2015",
    venue: "Berkeley Street Theatre",
    partnership: "A Crow's Theatre production in association with Canadian Stage and The Company Theatre",
    adaptation: "Robert Falls adaptation, translated by George Calderon",
    synopsis: "TCT's 2015 interpretation of The Seagull by Anton Chekhov, a co-production with Crow's Theatre, received a sold-out run. At a country estate, the famous actress Arkadina presides over a household brimming with unrequited love, artistic ambition, and hidden jealousies. Her son Konstantin, an aspiring playwright, yearns for her approval and the love of the beautiful Nina. When the celebrated writer Trigorin arrives, passions ignite and hearts are broken in Chekhov's timeless meditation on art, love, and human frailty.",
    cast: [
      { role: "Arkadina", actor: "Yanna McIntosh", headshot: "/images/cast/yanna-mcintosh.jpg" },
      { role: "Konstantin", actor: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Sorin", actor: "Eric Peterson", headshot: "/images/cast/eric-peterson.jpg" },
      { role: "Nina", actor: "Christine Horne", headshot: "/images/cast/christine-horne.jpg" },
      { role: "Polina", actor: "Tara Nicodemo", headshot: "/images/cast/tara-nicodemo.jpg" },
      { role: "Shamrayev", actor: "Tony Nappo", headshot: "/images/cast/tony-nappo.jpg" },
      { role: "Masha", actor: "Bahia Watson", headshot: "/images/cast/bahia-watson.jpg" },
      { role: "Trigorin", actor: "Tom Rooney", headshot: "/images/cast/tom-rooney.jpg" },
      { role: "Dorn", actor: "Tom McCamus", headshot: "/images/cast/tom-maccamus.jpg" },
      { role: "Medvedenko", actor: "Gregory Prest", headshot: "/images/cast/gregory-prest.jpg" },
      { role: "Yakov", actor: "Marcus Jamin" }
    ],
    crew: [
      { role: "Director", name: "Chris Abraham" },
      { role: "Set & Costume Design", name: "Julie Fox" },
      { role: "Lighting Design", name: "Kimberly Purtell" },
      { role: "Sound Design", name: "Thomas Ryder Payne" }
    ],
    images: [
      "/images/galleries/the-seagull/the-seagull-3.jpg",
      "/images/galleries/the-seagull/the-seagull-1.jpg",
      "/images/galleries/the-seagull/the-seagull-2.jpg",
      "/images/galleries/the-seagull/the-seagull-4.jpg",
      "/images/galleries/the-seagull/the-seagull-5.jpg",
      "/images/galleries/the-seagull/the-seagull-6.jpg"
    ],
    reviews: [
      { quote: "Chekhov's The Seagull flies high in Toronto", source: "The National Post" },
      { quote: "A fine production finds the comedy and tragedy in Chekhov's complex, very human characters", source: "Jon Kaplan, NOW Magazine" },
      { quote: "The Seagull glows with rich humanity", source: "Jon Kaplan, NOW Magazine" },
      { quote: "We don't so much observe this world as become part of it", source: "Jon Kaplan, NOW Magazine" }
    ],
    status: "past"
  },
  {
    id: "belleville",
    title: "Belleville",
    playwright: "Amy Herzog",
    director: "Jason Byrne",
    dates: "April 6 – May 4, 2014",
    venue: "Berkeley Street Theatre",
    partnership: "In association with Canadian Stage",
    synopsis: "Co-Artistic Director and co-founder Allan Hawco returned to the stage after a five-year hiatus to perform in Amy Herzog's Belleville. He worked alongside TCT ensemble member Christine Horne, as well as newcomers Dalmar Abuzied and Marsha Regis. A young American couple, Zack and Abby, have fled the uncertainties of post-9/11 America to forge a new life in the idyllic streets of Belleville, Paris. But as the cracks in their relationship begin to show, their downstairs neighbours Alioune and Amina become unwilling witnesses to a psychological unravelling that will leave no one untouched.",
    cast: [
      { role: "Zack", actor: "Allan Hawco", headshot: "/images/cast/allan-hawco.jpg" },
      { role: "Abby", actor: "Christine Horne", headshot: "/images/cast/christine-horne.jpg" },
      { role: "Alioune", actor: "Dalmar Abuzeid", headshot: "/images/cast/dalmar-abuzeid.jpg" },
      { role: "Amina", actor: "Marsha Regis", headshot: "/images/cast/marsha-regis.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Set & Costume Design", name: "Yannik Larivée" },
      { role: "Lighting Design", name: "Kevin Lamotte" },
      { role: "Sound Design", name: "Richard Feren" }
    ],
    images: [
      "/images/galleries/belleville/belleville-1.jpg",
      "/images/galleries/belleville/belleville-2.jpg",
      "/images/galleries/belleville/belleville-3.jpg",
      "/images/galleries/belleville/belleville-4.jpg"
    ],
    reviews: [
      { quote: "It's the women who kill in this thriller", source: "J. Kelly Nestruck, The Globe and Mail" },
      { quote: "The Company Theatre's production of Belleville [combines] simple production techniques, sophisticated acting, and a story that will shake you", source: "Adnan Mohamedbhai, The Arts Guild" },
      { quote: "Belleville is an unusually penetrating melodrama", source: "Robert Kushman, The National Post" },
      { quote: "Company Theatre's Belleville a nail-biting drama", source: "Keith Bennie, blogTO" },
      { quote: "Both action and dialogue feel like they are unfolding for the first time right before your eyes", source: "Evan Andrew Mackay, Streets of Toronto" },
      { quote: "Intense performances and timely themes enrich this powerful look at two Americans in Paris", source: "Glenn Sumi, NOW Magazine" },
      { quote: "Hawco and Horne's Zack and Abby play off each other beautifully", source: "Glenn Sumi, NOW Magazine" },
      { quote: "Amy Herzog's Belleville is frighteningly intense", source: "Robert Cushman" }
    ],
    press: [
      { title: "Belleville a 'Top Live Theatre Show in Toronto April 2014'", source: "Keith Bennie, blogTO" },
      { title: "Republic of Doyle's Allan Hawco stars in Belleville", source: "Richard Ouzounian, Toronto Star" },
      { title: "TV's Allan Hawco returns to stage roots", source: "Victoria Ahearn, The Canadian Press" },
      { title: "Actors sink their teeth into juicy play about an unravelling couple", source: "Jon Kaplan, NOW Magazine" },
      { title: "Allan Hawco moves from Republic of Doyle back to the stage", source: "Brad Wheeler, The Globe and Mail" },
      { title: "Allan Hawco Returns To Theatre", source: "Catherine Kustanczy, Broadway World Toronto" }
    ],
    status: "past"
  },
  {
    id: "speaking-in-tongues",
    title: "Speaking in Tongues",
    playwright: "Andrew Bovell",
    director: "Philip Riccio",
    dates: "October 29 – November 24, 2012",
    venue: "Berkeley Street Theatre",
    partnership: "In association with Canadian Stage",
    synopsis: "Australian playwright Andrew Bovell's Speaking in Tongues saw the stage debut of acclaimed Australian-Canadian actor Helene Joy. After a successful run in 2012, TCT re-mounted the show at the Belfry Theatre in Victoria, BC, in January 2013. Nine parallel lives intersect in this haunting and seductive puzzle about love, betrayal, and the choices we make. A woman disappears. A marriage falters. A stranger returns home. In a dance of interconnected stories spanning years and continents, Bovell crafts a meditation on the mysteries of human connection.",
    cast: [
      { role: "Pete/Neil/John", actor: "Richard Clarkin", headshot: "/images/cast/richard-clarkin.jpg" },
      { role: "Leon/Nick", actor: "Jonathan Goad", headshot: "/images/cast/jonathan-goad.jpg" },
      { role: "Jane/Sarah", actor: "Hélène Joy", headshot: "/images/cast/helene-joy.jpg" },
      { role: "Sonja/Valerie", actor: "Yanna McIntosh", headshot: "/images/cast/yanna-mcintosh.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Assistant Director", name: "Jillian Harper" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Assistant Stage Manager", name: "Laura Baxter" },
      { role: "Set, Costume & Lighting Design", name: "John Thompson" },
      { role: "Sound Design", name: "Michael Laird" },
      { role: "Choreographer", name: "Kate Hilliard" },
      { role: "Fight Director", name: "John Stead" }
    ],
    images: [
      "/images/speaking-in-tongues-3.jpg",
      "/images/galleries/speaking-in-tongues/speaking-in-tongues-4.jpg",
      "/images/galleries/speaking-in-tongues/speaking-in-tongues-1.jpg",
      "/images/galleries/speaking-in-tongues/speaking-in-tongues-2.jpg",
      "/images/galleries/speaking-in-tongues/speaking-in-tongues-3.jpg",
      "/images/galleries/speaking-in-tongues/speaking-in-tongues-5.jpg",
      "/images/galleries/speaking-in-tongues/speaking-in-tongues-6.jpg"
    ],
    reviews: [
      { quote: "Speaking in Tongues is more than just a coincidence", source: "Robert Cushman, National Post" },
      { quote: "Challenging, dynamic, and will make you proud of Toronto theatre", source: "Ryan Kerr, Mooney on Theatre" },
      { quote: "Words, stories and characters overlap", source: "J. Kelly Nestruck, The Globe and Mail" },
      { quote: "An often fascinating daisy chain of a mystery from the lives of troubled couples", source: "Jon Kaplan, NOW Magazine" },
      { quote: "Speaking in Tongues bursts with intrigue", source: "Keith Bennie, blogTO" },
      { quote: "Speaking in Tongues Reveals Love's Layers", source: "Carly Maga, Torontoist" },
      { quote: "Unique. Complex. Brilliant", source: "Adnan Mohamedbhai, The Arts Guild" },
      { quote: "The perfect play for people who like intellectual puzzles", source: "Christopher Hoile, Stage Door" },
      { quote: "The first half resonates with its poignant truths", source: "Jon Kaplan, NOW Magazine" },
      { quote: "A quartet of fine artists, each juggling two or three characters with an easy understated assurance", source: "John Coulbourn" }
    ],
    status: "past"
  },
  // NEW HISTORICAL PRODUCTIONS (2011-2005)
  {
    id: "the-test",
    title: "The Test",
    playwright: "Lukas Bärfuss",
    director: "Jason Byrne",
    dates: "October 31 – November 26, 2011",
    year: 2011,
    venue: "Berkeley Street Theatre, Toronto",
    partnership: "In association with Canadian Stage",
    synopsis: "The Test by Swiss playwright Lukas Bärfuss marked The Company Theatre's continued partnership with Canadian Stage. This original English translation by Birgit Schreyer Duarte presented a provocative examination of modern relationships and moral dilemmas. When Simon and Helle's carefully constructed life is thrown into question by a seemingly simple request, the couple must confront uncomfortable truths about trust, paternity, and the foundations of their relationship.",
    cast: [
      { role: "Simon", actor: "Eric Peterson", headshot: "/images/cast/eric-peterson.jpg" },
      { role: "Helle", actor: "Sonja Smits", headshot: "/images/cast/sonja-smits.jpg" },
      { role: "Peter", actor: "Gord Rand", headshot: "/images/cast/gord-rand.jpg" },
      { role: "Agnes", actor: "Liisa Repo-Martell", headshot: "/images/cast/liisa-repo-martell.jpg" },
      { role: "Franzeck", actor: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Translation", name: "Birgit Schreyer Duarte" },
      { role: "Lighting, Set and Costume Design", name: "John Thompson" },
      { role: "Sound Design", name: "Richard Feren" }
    ],
    images: [
      "/images/the-test-1.jpg",
      "/images/galleries/the-test/test-01.jpg",
      "/images/galleries/the-test/test-02.jpg",
      "/images/galleries/the-test/test-03.jpg",
      "/images/galleries/the-test/test-04.jpg"
    ],
    awards: [
      "2012 Toronto Theatre Critics Award - Best Supporting Actor in a Play - Philip Riccio (Won)",
      "2012 Toronto Theatre Critics Award - Special Citation - Eric Peterson"
    ],
    reviews: [
      { quote: "Testing the Boundaries", source: "Carly Maga, Torontoist" },
      { quote: "A worthy test for theatregoers", source: "Richard Ouzounian, Toronto Star" },
      { quote: "Acted with unfailing commitment by the Company Theatre", source: "Christopher Hoile, Stage Door" },
      { quote: "A Masterpiece", source: "The National Post" },
      { quote: "This is one Test that passes with flying colours", source: "Jon Kaplan, NOW Magazine" },
      { quote: "It may be the most scarifying of all, and it feels like a masterpiece", source: "Robert Cushman" }
    ],
    status: "past"
  },
  {
    id: "through-the-leaves",
    title: "Through the Leaves",
    playwright: "Franz Xaver Kroetz",
    director: "Philip Riccio",
    dates: "September 10 – October 3, 2010",
    year: 2010,
    venue: "Tarragon Theatre Extra Space, Toronto",
    synopsis: "Through the Leaves by German playwright Franz Xaver Kroetz was a landmark production for The Company Theatre, earning four Dora Mavor Moore Awards. The powerful two-hander explored the complex relationship between Martha, a butcher, and Otto, a labourer, in a raw and unflinching portrayal of loneliness and human connection. A moving performance in a bleak, cold, dark play that examines the difficulty of intimacy between two wounded souls.",
    cast: [
      { role: "Otto", actor: "Nicholas Campbell", headshot: "/images/cast/nicholas-campbell.jpg" },
      { role: "Martha", actor: "Maria Vacratsis", headshot: "/images/cast/maria-vacratsis.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Lighting, Set and Costume Design", name: "John Thompson" },
      { role: "Sound Design", name: "Michael Laird" }
    ],
    images: ["/images/through-the-leaves-hero.jpg", "/images/through-the-leaves-production-1.jpg"],
    awards: [
      "2011 Dora Mavor Moore Award - Outstanding Production (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Performance (Male) - Nicholas Campbell (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Performance (Female) - Maria Vacratsis (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Scenic Design - John Thompson (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Direction - Philip Riccio (Nominated)"
    ],
    reviews: [
      { quote: "A moving performance in a bleak, cold, dark play", source: "Robert Crew, Toronto Star" },
      { quote: "Maria Vacratsis's Martha is utterly convincing... simply wonderful, and left alone and lonely at the end, she is very moving", source: "Robert Crew, Toronto Star" },
      { quote: "Quiet, centred and detailed, Vacratsis's work is simply wonderful", source: "Robert Crew, Toronto Star" }
    ],
    status: "past"
  },
  {
    id: "festen",
    title: "Festen",
    playwright: "David Eldridge",
    director: "Jason Byrne",
    dates: "November 17 – December 13, 2008",
    year: 2008,
    venue: "Berkeley Street Theatre, Toronto",
    synopsis: "Festen was The Company Theatre's largest ensemble production until Domesticated in 2015. Based on the acclaimed Dogme 95 film by Thomas Vinterberg, Mogens Rukov and Bo Hr. Hansen, this powerful drama unfolds at a family celebration where dark secrets are revealed, shattering the facade of a respected Danish family. A searing examination of family, truth, and the cost of silence.",
    cast: [
      { role: "Helge", actor: "Eric Peterson", headshot: "/images/cast/eric-peterson.jpg" },
      { role: "Christian", actor: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Michael", actor: "Allan Hawco", headshot: "/images/cast/allan-hawco.jpg" },
      { role: "Elsa", actor: "Rosemary Dunsmore", headshot: "/images/cast/rosemary-dunsmore.jpg" },
      { role: "Helene", actor: "Tara Rosling", headshot: "/images/cast/tara-rosling.jpg" },
      { role: "Mette", actor: "Caroline Cave", headshot: "/images/cast/caroline-cave.jpg" },
      { role: "Helmut", actor: "Richard Clarkin", headshot: "/images/cast/richard-clarkin.jpg" },
      { role: "Lars", actor: "Earl Pastko", headshot: "/images/cast/earl-pastko.jpg" },
      { role: "Gbatokai", actor: "Milton Barnes", headshot: "/images/cast/milton-barnes.jpg" },
      { role: "Kim", actor: "Gray Powell", headshot: "/images/cast/gray-powell.jpg" },
      { role: "Pia", actor: "Alex Paxton-Beesley", headshot: "/images/cast/alex-paxton-beesley.jpg" },
      { role: "Grandfather", actor: "Gary Reineke", headshot: "/images/cast/gary-reineke.jpg" },
      { role: "Poul", actor: "Nicholas Campbell", headshot: "/images/cast/nicholas-campbell.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Based on the film and play by", name: "Thomas Vinterberg, Mogens Rukov and Bo Hr. Hansen" },
      { role: "Stage Manager", name: "Robert Harding" },
      { role: "Set and Costume Design", name: "John Thompson" },
      { role: "Lighting Design", name: "Andrea Lundy" },
      { role: "Sound Design", name: "Michael Laird" }
    ],
    images: [
      "/images/festen-1.jpg",
      "/images/festen-2.jpg",
      "/images/galleries/festen/festen-01.jpg",
      "/images/galleries/festen/festen-02.jpg"
    ],
    reviews: [
      { quote: "An absolutely shattering experience... The ensemble acting under director Jason Byrne is so truthful, so vivid, it is simply breathtaking", source: "Eye Weekly" },
      { quote: "Festen is one film-to-stage adaptation that works brilliantly", source: "John Coulbourn, Toronto Sun" },
      { quote: "Eric Peterson is magnificent - he seems to generate an aura of evil about him", source: "Christopher Hoile" },
      { quote: "If you thought that a play with the force of classic tragedy could not be written in the modern age, this powerful production of Festen will change your mind", source: "Christopher Hoile" }
    ],
    status: "past"
  },
  {
    id: "a-whistle-in-the-dark",
    title: "A Whistle in the Dark",
    playwright: "Tom Murphy",
    director: "Jason Byrne",
    dates: "January 13 – February 5, 2005",
    year: 2005,
    venue: "Berkeley Street Theatre, Toronto",
    synopsis: "A Whistle in the Dark was The Company Theatre's debut production. Described by the National Post as 'one of the best things ever seen in Canada,' this powerful Irish drama by Tom Murphy announced The Company Theatre's arrival on Toronto's theatre scene. Settled in Coventry with his new wife Betty, Michael Carney Jr. is attempting to lead a new life. But leaving Ireland couldn't set him free, and once the Carney brothers descend, there's no way out. The production was nominated for the Dora Mavor Moore Award for Outstanding Production and was remounted in 2007 at LSPU Hall in Newfoundland and Toronto's Young Centre for the Performing Arts.",
    cast: [
      { role: "Michael Carney Sr.", actor: "Joseph Ziegler", headshot: "/images/cast/joseph-ziegler.jpg" },
      { role: "Michael Carney Jr.", actor: "Jonathan Goad", headshot: "/images/cast/jonathan-goad.jpg" },
      { role: "Harry", actor: "Allan Hawco", headshot: "/images/cast/allan-hawco.jpg" },
      { role: "Des", actor: "Philip Riccio", headshot: "/images/cast/philip-riccio.jpg" },
      { role: "Betty", actor: "Sarah Dodd", headshot: "/images/cast/sarah-dodd.jpg" },
      { role: "Iggy (2005)", actor: "Oliver Becker", headshot: "/images/cast/oliver-becker.jpg" },
      { role: "Iggy (2007)", actor: "Richard Clarkin", headshot: "/images/cast/richard-clarkin.jpg" },
      { role: "Hugo", actor: "Aaron Poole", headshot: "/images/cast/aaron-poole.jpg" },
      { role: "Mush (2005)", actor: "David Jansen", headshot: "/images/cast/david-jansen.jpg" },
      { role: "Mush (2007)", actor: "Dylan Roberts", headshot: "/images/cast/dylan-roberts.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Stage Manager", name: "Robert Harding" },
      { role: "Assistant Stage Manager", name: "Kinnon Elliott" },
      { role: "Set and Costume Design", name: "John Thompson" },
      { role: "Lighting Design", name: "Andrea Lundy" }
    ],
    images: [
      "/images/a-whistle-in-the-dark-1.jpg",
      "/images/a-whistle-in-the-dark-2.jpg",
      "/images/galleries/whistle/whistle-01.jpg",
      "/images/galleries/whistle/whistle-02.jpg",
      "/images/galleries/whistle/whistle-03.jpg",
      "/images/galleries/whistle/whistle-04.jpg",
      "/images/galleries/whistle/whistle-05.jpg",
      "/images/galleries/whistle/whistle-06.jpg",
      "/images/galleries/whistle/whistle-07.jpg",
      "/images/galleries/whistle/whistle-08.jpg",
      "/images/galleries/whistle/whistle-09.jpg",
      "/images/galleries/whistle/whistle-10.jpg",
      "/images/galleries/whistle/whistle-11.jpg",
      "/images/galleries/whistle/whistle-12.jpg",
      "/images/galleries/whistle/whistle-13.jpg"
    ],
    awards: [
      "2005 Dora Mavor Moore Award - Outstanding Production (Nominated)"
    ],
    reviews: [
      { quote: "One of the best things ever seen in Toronto", source: "The National Post" },
      { quote: "NEW COMPANY SCORES WITH BARE-KNUCKLED KNOCK-OUT DEBUT", source: "Robert Cushman" },
      { quote: "Whistle is a disturbing, white-knuckle night at the theatre", source: "Glenn Sumi, NOW Magazine" },
      { quote: "The most muscular piece of theatre we've seen in Toronto in some time", source: "Richard Ouzounian, Toronto Star" }
    ],
    status: "past"
  }
];

// Current/upcoming production (placeholder for March 2027)
export const currentProduction: Production = {
  id: "jackpot-twins",
  title: "Jackpot Twins",
  playwright: "Sarah Chen",
  director: "James Morrison",
  dates: "March 12 – April 18, 2027",
  venue: "CAA Theatre — 651 Yonge St",
  synopsis: "When estranged siblings Mia and Lucas inherit their grandmother's struggling casino, they must confront their shared past while fighting to save the family legacy. A darkly comic thriller about luck, family, and the hands we're dealt.",
  cast: [
    { role: "Mia", actor: "TBD" },
    { role: "Lucas", actor: "TBD" }
  ],
  crew: [
    { role: "Director", name: "James Morrison" },
    { role: "Playwright", name: "Sarah Chen" }
  ],
  images: [],
  status: "current"
};

// Historical productions for reference
export const historicalProductions = [
  { id: "the-test", title: "The Test", playwright: "Lukas Bärfuss", year: 2011, notes: "Toronto Theatre Critics Award for Philip Riccio" },
  { id: "through-the-leaves", title: "Through the Leaves", playwright: "Franz Xaver Kroetz", year: 2010, notes: "4 Dora Awards including Outstanding Production" },
  { id: "festen", title: "Festen", playwright: "Thomas Vinterberg et al.", year: 2008 },
  { id: "a-whistle-in-the-dark", title: "A Whistle in the Dark", playwright: "Tom Murphy", year: 2005, notes: "Debut production" }
];

export function getProductionById(id: string): Production | undefined {
  if (id === currentProduction.id) return currentProduction;
  return productions.find(p => p.id === id);
}

export function getAllProductions(): Production[] {
  return [currentProduction, ...productions];
}
