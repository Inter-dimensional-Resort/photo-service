require('dotenv').config();
const PORT = 8529;
const { Database, aql } = require('arangojs');

const { DB_HOST, DB_USER, DB_PASS } = process.env;

const db = new Database({
  url: `http://${DB_USER}:${DB_PASS}@${DB_HOST}:${PORT}`,
  databaseName: "listings"
});

const collection = db.collection('listingInfo');

const getPhotos = (id, callback) => {
  collection.document(`${id}`)
    .then(
        doc => {callback(null, doc)},
        err => console.error('Failed to fetch document:', err.message) 
    );
}

module.exports = {
    getPhotos
};

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true, useCreateIndex: true });
// // mongoose.connect('mongodb://172.17.0.3/photos', { useNewUrlParser: true, useCreateIndex: true });

// // Schema
// const listingSchema = mongoose.Schema({
//   listingID: { type: Number, unique: true },
//   listingDesc: String,
//   isSaved: Boolean,
//   listingPhotos: [{ url: String, desc: String, isVerified: Boolean }],
// });

// // Listing model
// const Listing = mongoose.model('Listing', listingSchema);

// // Get photos from DB.
// const getPhotos = (targetID, callback) => {
//   Listing.find({ listingID: targetID }, (err, photos) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, photos);
//     }
//   });
// };

// module.exports = {
//   Listing,
//   getPhotos,
// };
