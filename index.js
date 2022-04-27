import mongodb from "mongodb";

const client = new mongodb.MongoClient(
  "mongodb+srv://wadebooth:Password@cluster0.nrzns.mongodb.net?retryWrites=true&w=majority"
);
//Creates new database, URL is from cluster

await client.connect();
//Connects to database
console.log("Connected!");

const db = client.db("IMDB");

const collectionOne = db.collection("TV Shows");
const collectionTwo = db.collection("Characters");
const collectionThree = db.collection("Streaming Platforms");

// await collectionThree.insertOne({
//   Name: "Netflix",
// });

// await collectionThree.insertOne({
//   Name: "Hulu",
// });

// await collectionThree.insertOne({
//   Name: "Amazon Prime",
// });

// await collectionOne.insertOne({
//   title: "Breaking Bad",
//   genre: "Drama",
//   EpisodeAmount: "62",
//   Years: "2008-2015",
//   StreamingPlatformID: "626982c9500c451d1b7584bb",
// });

// await collectionOne.insertOne({
//   title: "Charlie's Angels",
//   genre: "Action",
//   EpisodeAmount: "115",
//   Years: "1976-1981",
//   StreamingPlatformID: "626982c9500c451d1b7584bc",
// });

// await collectionOne.insertOne({
//   title: "Mr. Robot",
//   genre: "Drama",
//   EpisodeAmount: "45",
//   Years: "2015-2019",
//   StreamingPlatformID: "626982c9500c451d1b7584bd",
// });

// await collectionTwo.insertOne({
//   firstName: "Bryan",
//   lastName: "Cranston",
//   ShowID: "626986fe1b19e5b39969cd20",
// });

// await collectionTwo.insertOne({
//   firstName: "Rami",
//   lastName: "Malek",
//   ShowID: "626986fe1b19e5b39969cd22",
// });

// await collectionTwo.insertOne({
//   firstName: "Drew",
//   lastName: "Barrymore",
//   ShowID: "626986fe1b19e5b39969cd21",
// });

const showsOnNetflix = await collectionOne.findOne({
  StreamingPlatformID: "626982c9500c451d1b7584bb",
});

const showsOnHulu = await collectionOne.findOne({
  StreamingPlatformID: "626982c9500c451d1b7584bc",
});

const showsOnPrime = await collectionOne.findOne({
  StreamingPlatformID: "626982c9500c451d1b7584bd",
});

console.log(`Shows on Netflix: ${showsOnNetflix.title}`);
console.log(`Shows on Amazon Prime: ${showsOnPrime.title}`);
console.log(`Shows on Hulu: ${showsOnHulu.title}`);

const CharactersOnBB = await collectionTwo.findOne({
  ShowID: "626986fe1b19e5b39969cd20",
});

const CharactersOnMrRobot = await collectionTwo.findOne({
  ShowID: "626986fe1b19e5b39969cd22",
});

const CharactersOnCharliesAngels = await collectionTwo.findOne({
  ShowID: "626986fe1b19e5b39969cd21",
});

console.log(
  `Stars on Breaking Bad: ${CharactersOnBB.firstName} ${CharactersOnBB.lastName}`
);
console.log(
  `Stars on Charlies Angels: ${CharactersOnCharliesAngels.firstName} ${CharactersOnCharliesAngels.lastName}`
);
console.log(
  `Stars on Mr. Robot: ${CharactersOnMrRobot.firstName} ${CharactersOnMrRobot.lastName}`
);

await client.close();
