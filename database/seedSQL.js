const faker = require('faker');
const generateListingPhotos = require('./generatePhotos');
const fs = require('fs');
const { Readable } = require('stream');

const wstream1 = fs.createWriteStream('info.csv');
const wstream2 = fs.createWriteStream('photos.csv');

class listingStream extends Readable {
  constructor(options) {
    super(options);

    this.count = 0;
    this.csv = '';
  }
  _read() {
    if (this.count === 10000000) {
      return;
    }
    let listingObj = {
      listingID: this.count,
      listingDesc: faker.lorem.sentence(),
      isSaved: faker.random.boolean(),
    }
    this.csv += `${this.count},"${faker.lorem.sentence()}",${faker.random.boolean()}\n`;
    this.push(this.csv);
    this.csv = '';
    this.count++;
  }
}

class photoStream extends Readable {
    constructor(options) {
        super(options);
    
        this.count = 0;
        this.csv = '';
    }
    _read() {
        if (this.count === 10000000) {
        return;
        }

        let photosList = generateListingPhotos();

        photosList.forEach((object) => {
            object.listingID = this.count;
            this.csv += `${object.listingID},"${object.url}","${object.desc}",${object.isVerified}\n`;
        });
        // write csv to file
        // csv will then equal an empty string
        // do it again
        this.push(this.csv);
        this.csv = '';
        this.count++;
    }
}

const listingInfo = new listingStream();
listingInfo.pipe(wstream1);

const listingPhotos = new photoStream();
listingPhotos.pipe(wstream2);