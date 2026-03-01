// Production data from scraped manifest

export const theatreInfo = {
  name: "The Company Theatre",
  tagline: "Radically Live Theatre",
  heroBlurb: "Twenty years of fearless theatre. World-class actors. Stories that stay with you.",
  description: "Provocative international plays with Canada's finest actors.",
  founded: 2005,
  location: "Toronto, Canada",
  logo: "/images/logo-main.png",
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
    whoWeAre: "Since 2005, The Company Theatre has been bringing bold, uncompromising stories to Toronto stages. We hunt down the most electrifying plays from around the world and put them in the hands of Canada's finest actors.",
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
  lastUpdated?: string;
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
      { role: "Bob", actor: "Tom McCamus", headshot: "/images/cast/cast-055-tom-mccamus.jpg" },
      { role: "Fran", actor: "Seana McKenna", headshot: "/images/cast/cast-051-seana-mckenna.jpg" },
      { role: "Rosie", actor: "Alanna Bale", headshot: "/images/cast/cast-003-alanna-bale.jpg" },
      { role: "Mia", actor: "Michael Derworiz", headshot: "/images/cast/cast-036-michael-derworiz.jpg" },
      { role: "Pip", actor: "Christine Horne", headshot: "/images/cast/cast-009-christine-horne.jpg" },
      { role: "Ben", actor: "Daniel Maslany", headshot: "/images/cast/cast-013-daniel-maslany.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Set Design", name: "Shannon Lea Doyle" },
      { role: "Costume Design", name: "Ming Wong" },
      { role: "Sound Design", name: "Deanna H. Choi" },
      { role: "Lighting Design", name: "Nick Blais" },
      { role: "Stage Manager", name: "Robert Harding" },
      { role: "Assistant Stage Manager", name: "Alysse Szatkowski" }
    ],
    images: [
      "/images/show-tiktbt-002.jpg",
      "/images/show-tiktbt-004.jpg",
      "/images/show-tiktbt-005.jpg",
      "/images/show-tiktbt-006.jpg",
      "/images/show-tiktbt-007.jpg",
      "/images/show-tiktbt-008.jpg",
      "/images/show-tiktbt-009.jpg",
      "/images/show-tiktbt-010.jpg",
      "/images/show-tiktbt-011.jpg",
      "/images/show-tiktbt-012.jpg",
      "/images/show-tiktbt-013.jpg",
      "/images/show-tiktbt-014.jpg",
      "/images/show-tiktbt-015.jpg",
      "/images/show-tiktbt-016.jpg",
      "/images/show-tiktbt-017.jpg",
      "/images/show-tiktbt-018.jpg",
      "/images/show-tiktbt-019.jpg",
      "/images/show-tiktbt-020.jpg",
      "/images/show-tiktbt-021.jpg"
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
      { role: "Johnny 'Rooster' Byron", actor: "Kim Coates", headshot: "/images/cast/cast-030-kim-coates.jpg" },
      { role: "Ginger", actor: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Tanya", actor: "Brenna Coates", headshot: "/images/cast/cast-007-brenna-coates.jpg" },
      { role: "Dawn", actor: "Diana Donnelly", headshot: "/images/cast/cast-015-diana-donnelly.jpg" },
      { role: "Lee", actor: "Christo Graham", headshot: "/images/cast/cast-010-christo-graham.jpg" },
      { role: "Pea", actor: "Katelyn McCulloch", headshot: "/images/cast/cast-027-katelyn-mcculloch.jpg" },
      { role: "Mr. Parsons", actor: "Michael Spencer-Davis", headshot: "/images/cast/cast-037-michael-spencer-davis.jpg" },
      { role: "Troy Whitworth", actor: "Jason Cadieux", headshot: "/images/cast/cast-024-jason-cadieux.jpg" },
      { role: "The Professor", actor: "Nicholas Campbell", headshot: "/images/cast/cast-040-nicholas-campbell.jpg" },
      { role: "Phaedra", actor: "Shakura Dickson", headshot: "/images/cast/cast-061-shakura-dickson.jpg" },
      { role: "Davey", actor: "Peter Fernandes", headshot: "/images/cast/cast-045-peter-fernandes.jpg" },
      { role: "Wesley", actor: "Daniel Kash", headshot: "/images/cast/cast-012-daniel-kash.jpg" },
      { role: "Ms. Fawcett", actor: "Kieran Sequoia", headshot: "/images/cast/cast-029-kieran-sequoia.jpg" }
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
      "/images/show-jerusalem-001.jpg",
      "/images/show-jerusalem-002.jpg",
      "/images/show-jerusalem-003.jpg",
      "/images/show-jerusalem-004.jpg",
      "/images/show-jerusalem-005.jpg",
      "/images/show-jerusalem-006.jpg",
      "/images/show-jerusalem-007.jpg",
      "/images/show-jerusalem-008.jpg",
      "/images/show-jerusalem-009.jpg",
      "/images/show-jerusalem-010.jpg",
      "/images/show-jerusalem-011.jpg",
      "/images/show-jerusalem-012.jpg",
      "/images/show-jerusalem-013.jpg",
      "/images/show-jerusalem-014.jpg",
      "/images/show-jerusalem-015.jpg",
      "/images/show-jerusalem-016.jpg",
      "/images/show-jerusalem-017.jpg",
      "/images/show-jerusalem-018.jpg",
      "/images/show-jerusalem-019.jpg",
      "/images/show-jerusalem-020.jpg",
      "/images/show-jerusalem-021.jpg",
      "/images/show-jerusalem-022.jpg",
      "/images/show-jerusalem-023.jpg",
      "/images/show-jerusalem-024.jpg",
      "/images/show-jerusalem-025.jpg",
      "/images/show-jerusalem-026.jpg",
      "/images/show-jerusalem-027.jpg",
      "/images/show-jerusalem-028.jpg",
      "/images/show-jerusalem-029.jpg",
      "/images/show-jerusalem-030.jpg",
      "/images/show-jerusalem-031.jpg",
      "/images/show-jerusalem-032.jpg",
      "/images/show-jerusalem-033.jpg",
      "/images/show-jerusalem-034.jpg",
      "/images/show-jerusalem-035.jpg",
      "/images/show-jerusalem-036.jpg",
      "/images/show-jerusalem-037.jpg"
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
      { actor: "Nancy Beatty", headshot: "/images/cast/cast-039-nancy-beatty.jpg" },
      { actor: "Nora McLellan", headshot: "/images/cast/cast-042-nora-mclellan.jpg" },
      { actor: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { actor: "Loretta Yu", headshot: "/images/cast/cast-032-loretta-yu.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jonathan Goad" },
      { role: "Set Design", name: "Shannon Lea Doyle" }
    ],
    images: [
      "/images/show-john-033.jpg",
      "/images/show-john-035.jpg",
      "/images/show-john-001.jpg",
      "/images/show-john-003.jpg",
      "/images/show-john-004.jpg",
      "/images/show-john-005.jpg",
      "/images/show-john-006.jpg",
      "/images/show-john-007.jpg",
      "/images/show-john-008.jpg",
      "/images/show-john-009.jpg",
      "/images/show-john-010.jpg",
      "/images/show-john-011.jpg",
      "/images/show-john-012.jpg",
      "/images/show-john-013.jpg",
      "/images/show-john-014.jpg",
      "/images/show-john-015.jpg",
      "/images/show-john-016.jpg",
      "/images/show-john-017.jpg",
      "/images/show-john-018.jpg",
      "/images/show-john-019.jpg",
      "/images/show-john-020.jpg",
      "/images/show-john-021.jpg",
      "/images/show-john-022.jpg",
      "/images/show-john-023.jpg",
      "/images/show-john-024.jpg",
      "/images/show-john-025.jpg",
      "/images/show-john-026.jpg",
      "/images/show-john-027.jpg",
      "/images/show-john-028.jpg",
      "/images/show-john-029.jpg",
      "/images/show-john-030.jpg",
      "/images/show-john-031.jpg",
      "/images/show-john-032.jpg",
      "/images/show-john-034.jpg",
      "/images/show-john-036.jpg"
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
      { role: "Bill Pulver", actor: "Paul Gross", headshot: "/images/cast/cast-044-paul-gross.jpg" },
      { role: "Judy Pulver", actor: "Martha Burns", headshot: "/images/cast/cast-035-martha-burns.jpg" },
      { role: "Bobbie", actor: "Torri Higginson", headshot: "/images/cast/cast-058-torri-higginson.jpg" },
      { role: "Casey", actor: "Kelly McNamee", headshot: "/images/cast/cast-028-kelly-mcnamee.jpg" },
      { role: "Jackie", actor: "Sarah Dodd", headshot: "/images/cast/cast-050-sarah-dodd.jpg" },
      { role: "Becky", actor: "Vanessa Smythe", headshot: "/images/cast/cast-059-vanessa-smythe.jpg" },
      { actor: "Nicola Lipman", headshot: "/images/cast/cast-041-nicola-lipman.jpg" },
      { actor: "Maria Vacratsis", headshot: "/images/cast/cast-033-maria-vacratsis.jpg" },
      { actor: "Akosua Amo-Adem", headshot: "/images/cast/cast-002-akosua-amo-adem.jpg" },
      { actor: "Salvatore Antonio", headshot: "/images/cast/cast-049-salvatore-antonio.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Set Design", name: "Nick Blais" },
      { role: "Costume Design", name: "Ming Wong" },
      { role: "Lighting Design", name: "Kevin Lamotte" },
      { role: "Sound Design", name: "Thomas Ryder Payne" },
      { role: "Projection Design", name: "Cameron Davis" }
    ],
    images: [
      "/images/show-domesticated-001.jpg",
      "/images/show-domesticated-002.jpg",
      "/images/show-domesticated-003.jpg",
      "/images/show-domesticated-004.jpg",
      "/images/show-domesticated-005.jpg",
      "/images/show-domesticated-006.jpg",
      "/images/show-domesticated-007.jpg",
      "/images/show-domesticated-008.jpg",
      "/images/show-domesticated-009.jpg",
      "/images/show-domesticated-010.jpg",
      "/images/show-domesticated-011.jpg",
      "/images/show-domesticated-012.jpg",
      "/images/show-domesticated-013.jpg",
      "/images/show-domesticated-014.jpg",
      "/images/show-domesticated-015.jpg",
      "/images/show-domesticated-016.jpg",
      "/images/show-domesticated-017.jpg",
      "/images/show-domesticated-018.jpg",
      "/images/show-domesticated-019.jpg",
      "/images/show-domesticated-020.jpg",
      "/images/show-domesticated-021.jpg",
      "/images/show-domesticated-022.jpg",
      "/images/show-domesticated-023.jpg"
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
      { role: "Arkadina", actor: "Yanna McIntosh", headshot: "/images/cast/cast-060-yanna-mcintosh.jpg" },
      { role: "Konstantin", actor: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Sorin", actor: "Eric Peterson", headshot: "/images/cast/cast-018-eric-peterson.jpg" },
      { role: "Nina", actor: "Christine Horne", headshot: "/images/cast/cast-009-christine-horne.jpg" },
      { role: "Polina", actor: "Tara Nicodemo", headshot: "/images/cast/cast-053-tara-nicodemo.jpg" },
      { role: "Shamrayev", actor: "Tony Nappo", headshot: "/images/cast/cast-057-tony-nappo.jpg" },
      { role: "Masha", actor: "Bahia Watson", headshot: "/images/cast/cast-006-bahia-watson.jpg" },
      { role: "Trigorin", actor: "Tom Rooney", headshot: "/images/cast/cast-056-tom-rooney.jpg" },
      { role: "Dorn", actor: "Tom McCamus", headshot: "/images/cast/cast-055-tom-mccamus.jpg" },
      { role: "Medvedenko", actor: "Gregory Prest", headshot: "/images/cast/cast-022-gregory-prest.jpg" },
      { role: "Yakov", actor: "Marcus Jamin" }
    ],
    crew: [
      { role: "Director", name: "Chris Abraham" },
      { role: "Set & Costume Design", name: "Julie Fox" },
      { role: "Lighting Design", name: "Kimberly Purtell" },
      { role: "Sound Design", name: "Thomas Ryder Payne" }
    ],
    images: [
      "/images/show-seagull-005.jpg",
      "/images/show-seagull-003.jpg",
      "/images/show-seagull-004.jpg",
      "/images/show-seagull-006.jpg",
      "/images/show-seagull-007.jpg",
      "/images/show-seagull-008.jpg"
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
      { role: "Zack", actor: "Allan Hawco", headshot: "/images/cast/cast-005-allan-hawco.jpg" },
      { role: "Abby", actor: "Christine Horne", headshot: "/images/cast/cast-009-christine-horne.jpg" },
      { role: "Alioune", actor: "Dalmar Abuzeid", headshot: "/images/cast/cast-011-dalmar-abuzeid.jpg" },
      { role: "Amina", actor: "Marsha Regis", headshot: "/images/cast/cast-034-marsha-regis.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Set & Costume Design", name: "Yannik Larivée" },
      { role: "Lighting Design", name: "Kevin Lamotte" },
      { role: "Sound Design", name: "Richard Feren" }
    ],
    images: [
      "/images/show-belleville-001.jpg",
      "/images/show-belleville-002.jpg",
      "/images/show-belleville-003.jpg",
      "/images/show-belleville-004.jpg",
      "/images/show-belleville-005.jpg",
      "/images/show-belleville-006.jpg",
      "/images/show-belleville-007.jpg"
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
      { role: "Pete/Neil/John", actor: "Richard Clarkin", headshot: "/images/cast/cast-047-richard-clarkin.jpg" },
      { role: "Leon/Nick", actor: "Jonathan Goad", headshot: "/images/cast/cast-025-jonathan-goad.jpg" },
      { role: "Jane/Sarah", actor: "Hélène Joy", headshot: "/images/cast/cast-023-helene-joy.jpg" },
      { role: "Sonja/Valerie", actor: "Yanna McIntosh", headshot: "/images/cast/cast-060-yanna-mcintosh.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Assistant Director", name: "Jillian Harper" },
      { role: "Stage Manager", name: "Michael Sinclair" },
      { role: "Assistant Stage Manager", name: "Laura Baxter" },
      { role: "Set, Costume & Lighting Design", name: "John Thompson" },
      { role: "Sound Design", name: "Michael Laird" },
      { role: "Choreographer", name: "Kate Hilliard" },
      { role: "Fight Director", name: "John Stead" }
    ],
    images: [
      "/images/show-speaking-in-tongues-003.jpg",
      "/images/show-speaking-in-tongues-007.jpg",
      "/images/show-speaking-in-tongues-004.jpg",
      "/images/show-speaking-in-tongues-005.jpg",
      "/images/show-speaking-in-tongues-006.jpg",
      "/images/show-speaking-in-tongues-008.jpg",
      "/images/show-speaking-in-tongues-009.jpg"
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
      { role: "Simon", actor: "Eric Peterson", headshot: "/images/cast/cast-018-eric-peterson.jpg" },
      { role: "Helle", actor: "Sonja Smits", headshot: "/images/cast/cast-052-sonja-smits.jpg" },
      { role: "Peter", actor: "Gord Rand", headshot: "/images/cast/cast-020-gord-rand.jpg" },
      { role: "Agnes", actor: "Liisa Repo-Martell", headshot: "/images/cast/cast-031-liisa-repo-martell.jpg" },
      { role: "Franzeck", actor: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Translation", name: "Birgit Schreyer Duarte" },
      { role: "Lighting, Set and Costume Design", name: "John Thompson" },
      { role: "Sound Design", name: "Richard Feren" }
    ],
    images: [
      "/images/show-test-001.jpg",
      "/images/show-test-002.jpg",
      "/images/show-test-003.jpg",
      "/images/show-test-004.jpg",
      "/images/show-test-005.jpg"
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
      { role: "Otto", actor: "Nicholas Campbell", headshot: "/images/cast/cast-040-nicholas-campbell.jpg" },
      { role: "Martha", actor: "Maria Vacratsis", headshot: "/images/cast/cast-033-maria-vacratsis.jpg" }
    ],
    crew: [
      { role: "Director", name: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Lighting, Set and Costume Design", name: "John Thompson" },
      { role: "Sound Design", name: "Michael Laird" }
    ],
    images: ["/images/show-through-the-leaves-002.jpg", "/images/show-through-the-leaves-003.jpg"],
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
      { role: "Helge", actor: "Eric Peterson", headshot: "/images/cast/cast-018-eric-peterson.jpg" },
      { role: "Christian", actor: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Michael", actor: "Allan Hawco", headshot: "/images/cast/cast-005-allan-hawco.jpg" },
      { role: "Elsa", actor: "Rosemary Dunsmore", headshot: "/images/cast/cast-048-rosemary-dunsmore.jpg" },
      { role: "Helene", actor: "Tara Rosling", headshot: "/images/cast/cast-054-tara-rosling.jpg" },
      { role: "Mette", actor: "Caroline Cave", headshot: "/images/cast/cast-008-caroline-cave.jpg" },
      { role: "Helmut", actor: "Richard Clarkin", headshot: "/images/cast/cast-047-richard-clarkin.jpg" },
      { role: "Lars", actor: "Earl Pastko", headshot: "/images/cast/cast-017-earl-pastko.jpg" },
      { role: "Gbatokai", actor: "Milton Barnes", headshot: "/images/cast/cast-038-milton-barnes.jpg" },
      { role: "Kim", actor: "Gray Powell", headshot: "/images/cast/cast-021-gray-powell.jpg" },
      { role: "Pia", actor: "Alex Paxton-Beesley", headshot: "/images/cast/cast-004-alex-paxton-beesley.jpg" },
      { role: "Grandfather", actor: "Gary Reineke", headshot: "/images/cast/cast-019-gary-reineke.jpg" },
      { role: "Poul", actor: "Nicholas Campbell", headshot: "/images/cast/cast-040-nicholas-campbell.jpg" }
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
      "/images/show-festen-001.jpg",
      "/images/show-festen-002.jpg",
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
      { role: "Michael Carney Sr.", actor: "Joseph Ziegler", headshot: "/images/cast/cast-026-joseph-ziegler.jpg" },
      { role: "Michael Carney Jr.", actor: "Jonathan Goad", headshot: "/images/cast/cast-025-jonathan-goad.jpg" },
      { role: "Harry", actor: "Allan Hawco", headshot: "/images/cast/cast-005-allan-hawco.jpg" },
      { role: "Des", actor: "Philip Riccio", headshot: "/images/cast/cast-046-philip-riccio.jpg" },
      { role: "Betty", actor: "Sarah Dodd", headshot: "/images/cast/cast-050-sarah-dodd.jpg" },
      { role: "Iggy (2005)", actor: "Oliver Becker", headshot: "/images/cast/cast-043-oliver-becker.jpg" },
      { role: "Iggy (2007)", actor: "Richard Clarkin", headshot: "/images/cast/cast-047-richard-clarkin.jpg" },
      { role: "Hugo", actor: "Aaron Poole", headshot: "/images/cast/cast-001-aaron-poole.jpg" },
      { role: "Mush (2005)", actor: "David Jansen", headshot: "/images/cast/cast-014-david-jansen.jpg" },
      { role: "Mush (2007)", actor: "Dylan Roberts", headshot: "/images/cast/cast-016-dylan-roberts.jpg" }
    ],
    crew: [
      { role: "Director", name: "Jason Byrne" },
      { role: "Stage Manager", name: "Robert Harding" },
      { role: "Assistant Stage Manager", name: "Kinnon Elliott" },
      { role: "Set and Costume Design", name: "John Thompson" },
      { role: "Lighting Design", name: "Andrea Lundy" }
    ],
    images: [
      "/images/show-whistle-001.jpg",
      "/images/show-whistle-002.jpg",
      "/images/show-whistle-003.jpg",
      "/images/show-whistle-004.jpg",
      "/images/show-whistle-005.jpg",
      "/images/show-whistle-006.jpg",
      "/images/show-whistle-007.jpg",
      "/images/show-whistle-008.jpg",
      "/images/show-whistle-009.jpg",
      "/images/show-whistle-010.jpg",
      "/images/show-whistle-011.jpg",
      "/images/show-whistle-012.jpg",
      "/images/show-whistle-013.jpg",
      "/images/show-whistle-014.jpg",
      "/images/show-whistle-015.jpg"
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
  status: "current",
  lastUpdated: "2026-03-01"
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
