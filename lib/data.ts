// Production data from scraped manifest
export const theatreInfo = {
  name: "The Company Theatre",
  tagline: "Radically Live Theatre",
  description: "The Company Theatre produces provocative international plays with Canada's best actors.",
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
    whoWeAre: "Theatre can be so many different things. Ultimately, theatre strives to be something magical. Some do this with literal magic, others with song and dance, and some with contortion or clowns. At The Company Theatre, we strive to create theatre magic with nothing more than authentic text-based performances: Creating an experience that is truly live.",
    mission: "We combine hard-hitting, contemporary texts from around the world with some of Canada's best performers, using our unique working process to create memorable, magical theatre experiences.",
    approach: "We choose stories that don't shy away from the gritty, challenging elements of the human condition: picture an HBO drama, but live and onstage.",
    process: "The Company Theatre's productions bring you the drama in real time, allowing both artists and audiences to live in the moment, discovering the story as it unfolds in front of them. Every performance, every night is its own authentic and entirely unique retelling of the story. There's no repetitive choices or oppressive choreography: just humans making discoveries right before your eyes.",
    venue: "We do not have our own venue. We rent or partner with other theatres. We mostly produce in Toronto, but have taken select productions across the country."
  }
};

export interface CastMember {
  role?: string;
  actor: string;
  bio?: string;
}

export interface CrewMember {
  role: string;
  name: string;
  bio?: string;
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
      { role: "Bob", actor: "Tom McCamus" },
      { role: "Fran", actor: "Seana McKenna" },
      { role: "Rosie", actor: "Alanna Bale" },
      { role: "Mia", actor: "Michael Derworiz" },
      { role: "Pip", actor: "Christine Horne" },
      { role: "Ben", actor: "Daniel Maslany" }
    ],
    crew: [
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
    quotes: [
      { text: "One of the best plays I've ever seen. Remarkable performances. Rush to see it.", source: "Steve Paikin, TVO" },
      { text: "This is must see theatre. A masterclass in acting. You will be blown away.", source: "Rick Mercer" }
    ],
    advisory: "This production contains transphobic language and mature content. Recommended for ages 14+",
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
      { role: "Johnny 'Rooster' Byron", actor: "Kim Coates" },
      { role: "Ginger", actor: "Philip Riccio" },
      { role: "Tanya", actor: "Breanna Coates" },
      { role: "Dawn", actor: "Diana Donnelly" },
      { role: "Lee", actor: "Christo Graham" },
      { role: "Pea", actor: "Katelyn McCulloch" },
      { role: "Mr. Parsons", actor: "Michael Spencer-Davis" },
      { role: "Troy Whitworth", actor: "Jason Cadieux" },
      { role: "The Professor", actor: "Nicholas Campbell" },
      { role: "Phaedra", actor: "Shakura Dickson" },
      { role: "Davey", actor: "Peter Fernandes" },
      { role: "Wesley", actor: "Daniel Kash" },
      { role: "Ms. Fawcett", actor: "Kieran Sequoia" },
      { role: "Marky", actor: "Evan Kearns/Daniel Kohlsmith" }
    ],
    crew: [
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
      "/images/galleries/jerusalem/jerusalem-01.jpg",
      "/images/galleries/jerusalem/jerusalem-02.jpg",
      "/images/galleries/jerusalem/jerusalem-03.jpg",
      "/images/galleries/jerusalem/jerusalem-04.jpg",
      "/images/galleries/jerusalem/jerusalem-05.jpg",
      "/images/galleries/jerusalem/jerusalem-06.jpg",
      "/images/galleries/jerusalem/jerusalem-07.jpg",
      "/images/galleries/jerusalem/jerusalem-08.jpg",
      "/images/galleries/jerusalem/jerusalem-09.jpg",
      "/images/galleries/jerusalem/jerusalem-10.jpg",
      "/images/galleries/jerusalem/jerusalem-11.jpg",
      "/images/galleries/jerusalem/jerusalem-12.jpg",
      "/images/galleries/jerusalem/jerusalem-13.jpg",
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
      "/images/galleries/jerusalem/jerusalem-24.jpg",
      "/images/galleries/jerusalem/jerusalem-25.jpg",
      "/images/galleries/jerusalem/jerusalem-26.jpg",
      "/images/galleries/jerusalem/jerusalem-27.jpg",
      "/images/galleries/jerusalem/jerusalem-28.jpg",
      "/images/galleries/jerusalem/jerusalem-29.jpg",
      "/images/galleries/jerusalem/jerusalem-30.jpg"
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
      { actor: "Nancy Beatty" },
      { actor: "Nora McLellan" },
      { actor: "Philip Riccio" },
      { actor: "Loretta Yu" }
    ],
    crew: [
      { role: "Set Design", name: "Shannon Lea Doyle" }
    ],
    images: [
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
      "/images/galleries/john/john-31.jpg",
      "/images/galleries/john/john-32.jpg",
      "/images/galleries/john/john-33.jpg",
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
      { quote: "An evening very well spent", source: "Rebecca Felgate, Toronto Guardian" }
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
      { role: "Judy Pulver", actor: "Martha Burns" },
      { role: "Bobbie", actor: "Torri Higginson" },
      { role: "Casey", actor: "Kelly McNamee" },
      { role: "Cassidy", actor: "Abigail Pew" },
      { role: "Jackie", actor: "Sarah Dodd" },
      { role: "Becky", actor: "Vanessa Smythe" },
      { actor: "Nicola Lipman" },
      { actor: "Maria Vacratsis" },
      { actor: "Akosua Amo-Adem" },
      { actor: "Salvatore Antonio" }
    ],
    crew: [
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Set Design", name: "Nick Blais" },
      { role: "Costume Design", name: "Ming Wong" },
      { role: "Lighting Design", name: "Kevin Lamotte" },
      { role: "Sound Design", name: "Thomas Ryder Payne" },
      { role: "Projection Design", name: "Cameron Davis" }
    ],
    images: ["/images/domesticated-1.jpg", "/images/domesticated-2.jpg"],
    reviews: [
      { quote: "Domesticated is Paul Gross' best stage work to date", source: "Robert Cushman, National Post" },
      { quote: "This production is energized by the brilliant casting of real-life couple Paul Gross and Martha Burns in the leads", source: "Glenn Sumi, NOW Magazine" },
      { quote: "Full of 'stellar female performances'", source: "NOW Magazine" }
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
      { role: "Arkadina", actor: "Yanna McIntosh" },
      { role: "Konstantin", actor: "Philip Riccio" },
      { role: "Sorin", actor: "Eric Peterson" },
      { role: "Nina", actor: "Christine Horne" },
      { role: "Polina", actor: "Tara Nicodemo" },
      { role: "Shamrayev", actor: "Tony Nappo" },
      { role: "Masha", actor: "Bahia Watson" },
      { role: "Trigorin", actor: "Tom Rooney" },
      { role: "Dorn", actor: "Tom McCamus" },
      { role: "Medvedenko", actor: "Gregory Prest" },
      { role: "Yakov", actor: "Marcus Jamin" }
    ],
    crew: [
      { role: "Set & Costume Design", name: "Julie Fox" },
      { role: "Lighting Design", name: "Kimberly Purtell" },
      { role: "Sound Design", name: "Thomas Ryder Payne" }
    ],
    images: ["/images/seagull-1.jpg", "/images/seagull-2.jpg"],
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
      { role: "Zack", actor: "Allan Hawco" },
      { role: "Abby", actor: "Christine Horne" },
      { role: "Alioune", actor: "Dalmar Abuzeid" },
      { role: "Amina", actor: "Marsha Regis" }
    ],
    crew: [
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Set & Costume Design", name: "Yannik Larivée" },
      { role: "Lighting Design", name: "Kevin Lamotte" },
      { role: "Sound Design", name: "Richard Feren" }
    ],
    images: [
      "/images/belleville-1.jpg",
      "/images/belleville-2.jpg",
      "/images/galleries/belleville/Belleville Show Photo #1.jpg",
      "/images/galleries/belleville/Belleville Show Photo 2.jpg",
      "/images/galleries/belleville/Belleville Show Photo 3 .jpg",
      "/images/galleries/belleville/Belleville Show Photo 4.jpg"
    ],
    reviews: [
      { quote: "It's the women who kill in this thriller", source: "J. Kelly Nestruck, The Globe and Mail" },
      { quote: "The Company Theatre's production of Belleville [combines] simple production techniques, sophisticated acting, and a story that will shake you", source: "Adnan Mohamedbhai, The Arts Guild" },
      { quote: "Belleville is an unusually penetrating melodrama", source: "Robert Kushman, The National Post" },
      { quote: "Company Theatre's Belleville a nail-biting drama", source: "Keith Bennie, blogTO" },
      { quote: "Both action and dialogue feel like they are unfolding for the first time right before your eyes", source: "Evan Andrew Mackay, Streets of Toronto" },
      { quote: "Intense performances and timely themes enrich this powerful look at two Americans in Paris", source: "Glenn Sumi, NOW Magazine" }
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
      { role: "Pete/Neil/John", actor: "Richard Clarkin" },
      { role: "Leon/Nick", actor: "Jonathan Goad" },
      { role: "Jane/Sarah", actor: "Hélène Joy" },
      { role: "Sonja/Valerie", actor: "Yanna McIntosh" }
    ],
    crew: [
      { role: "Assistant Director", name: "Jillian Harper" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Assistant Stage Manager", name: "Laura Baxter" },
      { role: "Set, Costume & Lighting Design", name: "John Thompson" },
      { role: "Sound Design", name: "Michael Laird" },
      { role: "Choreographer", name: "Kate Hilliard" },
      { role: "Fight Director", name: "John Stead" }
    ],
    images: [
      "/images/speaking-in-tongues-1.jpg",
      "/images/speaking-in-tongues-2.jpg",
      "/images/galleries/speaking-in-tongues/Helene Joy and Jonathan Goad in Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/Helene Joy in Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/Jonathan Goad and Helene Joy in Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/Jonathan Goad in Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/Richard Clarkin and Yanna McIntosh in Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/Richard Clarkin in Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/The cast of Speaking in Tongues.jpg",
      "/images/galleries/speaking-in-tongues/Yanna McIntosh and Jonathan Goad in Speaking in Tongues.jpg"
    ],
    reviews: [
      { quote: "Speaking in Tongues is more than just a coincidence", source: "Robert Cushman, National Post" },
      { quote: "Challenging, dynamic, and will make you proud of Toronto theatre", source: "Ryan Kerr, Mooney on Theatre" },
      { quote: "Words, stories and characters overlap", source: "J. Kelly Nestruck, The Globe and Mail" },
      { quote: "An often fascinating daisy chain of a mystery from the lives of troubled couples", source: "Jon Kaplan, NOW Magazine" },
      { quote: "Speaking in Tongues bursts with intrigue", source: "Keith Bennie, blogTO" },
      { quote: "Speaking in Tongues Reveals Love's Layers", source: "Carly Maga, Torontoist" },
      { quote: "Unique. Complex. Brilliant", source: "Adnan Mohamedbhai, The Arts Guild" },
      { quote: "The perfect play for people who like intellectual puzzles", source: "Christopher Hoile, Stage Door" }
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
      { role: "Simon", actor: "Eric Peterson" },
      { role: "Helle", actor: "Sonja Smits" },
      { role: "Peter", actor: "Gord Rand" },
      { role: "Agnes", actor: "Liisa Repo-Martell" },
      { role: "Franzeck", actor: "Philip Riccio" }
    ],
    crew: [
      { role: "Translation", name: "Birgit Schreyer Duarte" },
      { role: "Lighting, Set and Costume Design", name: "John Thompson" },
      { role: "Sound Design", name: "Richard Feren" }
    ],
    images: [
      "/images/the-test-1.jpg",
      "/images/galleries/the-test/test-01.jpg",
      "/images/galleries/the-test/test-02.jpg",
      "/images/galleries/the-test/test-03.jpg",
      "/images/galleries/the-test/test-04.jpg",
      "/images/galleries/the-test/test-05.jpg",
      "/images/galleries/the-test/test-06.jpg",
      "/images/galleries/the-test/test-07.jpg"
    ],
    awards: [
      "2012 Toronto Theatre Critics Award - Best Supporting Actor in a Play - Philip Riccio (Won)",
      "2012 Toronto Theatre Critics Award - Special Citation - Eric Peterson"
    ],
    reviews: [
      { quote: "Testing the Boundaries", source: "Carly Maga, Torontoist" },
      { quote: "A worthy test for theatregoers", source: "Richard Ouzounian, Toronto Star" },
      { quote: "Acted with unfailing commitment by the Company Theatre", source: "Christopher Hoile, Stage Door" }
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
      { role: "Otto", actor: "Nicholas Campbell" },
      { role: "Martha", actor: "Maria Vacratsis" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio" },
      { role: "Lighting, Set and Costume Design", name: "John Thompson" },
      { role: "Sound Design", name: "Michael Laird" }
    ],
    images: ["/images/through-the-leaves-hero.jpg", "/images/through-the-leaves-1.jpg"],
    awards: [
      "2011 Dora Mavor Moore Award - Outstanding Production (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Performance (Male) - Nicholas Campbell (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Performance (Female) - Maria Vacratsis (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Scenic Design - John Thompson (Won)",
      "2011 Dora Mavor Moore Award - Outstanding Direction - Philip Riccio (Nominated)"
    ],
    reviews: [
      { quote: "A moving performance in a bleak, cold, dark play", source: "Robert Crew, Toronto Star" }
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
      { role: "Elsa", actor: "Rosemary Dunsmore" },
      { role: "Poul", actor: "Nicholas Campbell" },
      { role: "Christian", actor: "Philip Riccio" },
      { role: "Michael", actor: "Allan Hawco" },
      { role: "Helene", actor: "Tara Rosling" },
      { role: "Mette", actor: "Caroline Cave" },
      { role: "Helmut", actor: "Richard Clarkin" },
      { role: "Lars", actor: "Earl Pastko" },
      { role: "Gbatokai", actor: "Milton Barnes" },
      { role: "Kim", actor: "Gray Powell" },
      { role: "Pia", actor: "Alex Paxton-Beesley" },
      { role: "Grandfather", actor: "Gary Reineke" },
      { role: "Little Girl", actor: "Isabella Lobo" }
    ],
    crew: [
      { role: "Based on the film and play by", name: "Thomas Vinterberg, Mogens Rukov and Bo Hr. Hansen" },
      { role: "Stage Manager", name: "Robert Harding" },
      { role: "Set and Costume Design", name: "John Thompson" },
      { role: "Lighting Design", name: "Andrea Lundy" },
      { role: "Sound Design", name: "Michael Laird" }
    ],
    images: [
      "/images/festen-1.jpg",
      "/images/galleries/festen/festen-01.jpg",
      "/images/galleries/festen/festen-02.jpg"
    ],
    status: "past"
  },
  {
    id: "marion-bridge",
    title: "Marion Bridge",
    playwright: "Daniel MacIvor",
    director: "Daniel MacIvor",
    dates: "May 4 – May 26, 2007",
    year: 2007,
    venue: "Young Centre for Performing Arts, Toronto",
    synopsis: "Marion Bridge by acclaimed Canadian playwright Daniel MacIvor brought The Company Theatre to the Young Centre in Toronto. The production earned a Dora Mavor Moore Award for Outstanding Performance by a Female. The play follows three estranged sisters who return home to care for their dying mother, confronting the wounds of their shared past.",
    cast: [
      { role: "Teresa", actor: "Sarah Dodd" },
      { role: "Agnes", actor: "Caroline Gillis" },
      { role: "Louise", actor: "Emmy Alcorn" }
    ],
    crew: [
      { role: "Director", name: "Daniel MacIvor" },
      { role: "Set and Costume Design", name: "John Thompson" },
      { role: "Lighting Design", name: "Kimberly Purtell" },
      { role: "Sound Design", name: "Michael Laird" }
    ],
    images: ["/images/marion-bridge-1.jpg"],
    awards: [
      "2007 Dora Mavor Moore Award - Outstanding Performance by a Female - Sarah Dodd (Won)"
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
      { role: "Michael Carney Sr.", actor: "Joseph Ziegler" },
      { role: "Michael Carney Jr.", actor: "Jonathan Goad" },
      { role: "Harry", actor: "Allan Hawco" },
      { role: "Des", actor: "Philip Riccio" },
      { role: "Betty", actor: "Sarah Dodd" },
      { role: "Iggy", actor: "Oliver Becker" },
      { role: "Hugo", actor: "Aaron Poole" },
      { role: "Mush", actor: "David Jensen" }
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
      "/images/galleries/whistle/whistle-01.jpg"
    ],
    awards: [
      "2005 Dora Mavor Moore Award - Outstanding Production (Nominated)"
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
  { id: "marion-bridge", title: "Marion Bridge", playwright: "Daniel MacIvor", year: 2007 },
  { id: "a-whistle-in-the-dark", title: "A Whistle in the Dark", playwright: "Tom Murphy", year: 2005, notes: "Debut production" }
];

export function getProductionById(id: string): Production | undefined {
  if (id === currentProduction.id) return currentProduction;
  return productions.find(p => p.id === id);
}

export function getAllProductions(): Production[] {
  return [currentProduction, ...productions];
}
