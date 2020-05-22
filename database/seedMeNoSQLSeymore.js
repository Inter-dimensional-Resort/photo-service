const faker = require('faker');
const generateListingPhotos = require('./generatePhotos');
const fs = require('fs');
const { Readable } = require('stream');

const wstream = fs.createWriteStream('theBigBadBuckaroos.json');
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

class listingsStream extends Readable {
  constructor(options) {
    super(options);

    this.count = 0;
  }
  _read() {
    if (this.count === 10000000) {
      return;
    }
    let listingObj = {
      listingID: this.count,
      listingDesc: faker.lorem.sentence(),
      isSaved: faker.random.boolean(),
      listingPhotos: generateListingPhotos(),
    }
    this.push(JSON.stringify(listingObj) + '\n');
    this.count++;
  }
}

const listings = new listingsStream();
listings.pipe(wstream);
