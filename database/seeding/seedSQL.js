const faker = require('faker');
const generateListingPhotos = require('./generatePhotos');
const fs = require('fs');
const { Readable } = require('stream');

const wstream1 = fs.createWriteStream('info.csv');
const wstream2 = fs.createWriteStream('photos.csv');

const total = 10000000;

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

class listingStream extends Readable {
  constructor(options) {
    super(options);

    this.count = 0;
    this.csv = '';
  }
  _read() {
    countCheck(this.count);
    if (this.count === total) {
      return;
    }
    let listingObj = {
      listingID: this.count,
      listingDesc: faker.lorem.sentence(),
      isSaved: faker.random.boolean(),
    }

    if (this.count === 0) {
      for (let category in listingObj) {
        this.csv += category + ',';
      }
      this.csv += '\n';
    }

    this.csv += `${this.count},"${faker.lorem.sentence()}",${faker.random.boolean()}\n`;
    this.push(this.csv);
    this.csv = '';
    this.count++;
  }
}

let id = 0;

class photoStream extends Readable {
  constructor(options) {
    super(options);

    this.count = 0;
    this.csv = '';
  }
  _read() {
    countCheck(this.count);
    if (this.count === total) {
      return;
    }

    let photosList = generateListingPhotos();

    if (this.count === 0) {
      let keys = Object.keys(photosList[this.count]);
      this.csv += 'id,listingID,';
      keys.forEach((category) => {
        this.csv += category + ',';
      });
      this.csv += '\n';
    }

    photosList.forEach((object) => {
      object.listingID = this.count;
      this.csv += `${id}, ${object.listingID},"${object.photoUrl}","${object.photoDesc}",${object.isVerified}\n`;
      id++;
    });
    this.push(this.csv);
    this.csv = '';
    this.count++;
  }
}

console.log('Initializing Stream 1');
const listingInfo = new listingStream();
listingInfo.pipe(wstream1);

console.log('Initializing Stream 2');
const listingPhotos = new photoStream();
listingPhotos.pipe(wstream2);
