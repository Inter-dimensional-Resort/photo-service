require('dotenv').config();
const PORT = 8529;
const faker = require('faker');
const generateListingPhotos = require('./generatePhotos');
const fs = require('fs');
const { Readable } = require('stream');
const { Database, aql } = require('arangojs');

const { DB_HOST, DB_USER, DB_PASS } = process.env;

const total = 10000000;

const db = new Database({
  url: `http://${DB_USER}:${DB_PASS}@${DB_HOST}:${PORT}`,
  databaseName: "listings"
});

const collection = db.collection('listingInfo');

if (collection.exists()) {
  collection.truncate();
} else {
  collection.create()
    .then(
      () => console.log('Collection successfully created'),
      err => console.error('Failed to create collection:', err)
    );
}

const wstream = fs.createWriteStream('theBigBadBuckaroos.jsonl');

const countCheck = (count) => {
  if (count !== 0) {
    if (count % (total * 0.1) === 0) {
      console.log(`Reached ${count} entries`);
    } 
  }

  if (count === total) {
    console.log(`Stream Complete`);
  }
}

class listingsStream extends Readable {
  constructor(options) {
    super(options);

    this.count = 0;
  }
  _read() {
    countCheck(this.count);
    if (this.count === total) {
      return;
    }
    let listingObj = {
      _key: JSON.stringify(this.count),
      listingDesc: faker.lorem.sentence(),
      isSaved: faker.random.boolean(),
      listingPhotos: generateListingPhotos(),
    }
    this.push(JSON.stringify(listingObj) + '\n');
    this.count++;
  }
}

console.log('Initializing listing stream');
const listings = new listingsStream();
listings.pipe(wstream);

// const data = fs.readFileSync('./theBigBadBuckaroos.json');

// collection.import(data, 'auto')
//   .then(
//     result => {console.log('Import Complete ', result); collection.save()}
//   )
//   .catch(
//     err => console.log('Import failed: ', err)
//   );

// wstream.write(JSON.stringify(listingObj) + '\n');

// const generateListings = () => {
//   // const listingsArray = [];
//   for (let i = 0; i < 100; i += 1) {
//     let listingObj = {
//       listingID: i + 1,
//       listingDesc: faker.lorem.sentence(),
//       isSaved: faker.random.boolean(),
//       listingPhotos: generateListingPhotos(),
//     };
//     // listingsArray.push(listingObj);
//     wstream.write(JSON.stringify(listingObj) + '\n');
//   }
//   // return listingsArray;
// }
