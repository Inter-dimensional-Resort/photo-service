
// const mongoose = require('mongoose');
// const generateListings = require('./generateListings');
// const { Listing } = require('./index');

// // Drop collection if exist.
// Listing.collection.drop(() => {});

// // Create the array of 100 listings.
// const listingsArray = generateListings();

// // Seed MongoDB.
// Listing.insertMany(listingsArray, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     console.log('Successfully seeded database!');
//   }
// });

// listingID,listingDesc,isSaved,listingPhotos

// data = {
//   listingID: 100,
//   listingDesc: "Numquam tempora quia doloremque mollitia eos occaecati sit.", 
//   isSaved: true, 
//   listingPhotos: [
//     {
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/13.jpg ",
//       desc: "Rem consequatur commodi perspiciatis alias voluptatem qui consequatur et.", 
//       isVerified: true 
//     },
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/45.jpg ", 
//       desc: "Et iusto sed tempore sit hic consequatur quos eaque.", 
//       isVerified: true 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/59.jpg ", 
//       desc: "Sint occaecati consequatur minus amet reprehenderit blanditiis a maxime omnis.", 
//       isVerified: true 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/11.jpg ", 
//       desc: "Est exercitationem distinctio porro.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/18.jpg ", 
//       desc: "Et velit dolores temporibus aliquam.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/40.jpg ", 
//       desc: "Est et ullam veritatis provident eligendi illo esse consequatur.", 
//       isVerified: true 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/55.jpg ", 
//       desc: "Aut beatae dicta unde soluta sequi voluptatem.", 
//       isVerified: true 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/14.jpg ", 
//       desc: "Sit repellat magnam.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/16.jpg ", 
//       desc: "Fugit alias atque quod et porro similique accusantium.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/43.jpg ", 
//       desc: "Alias ut maiores error in a minima.", 
//       isVerified: true 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/23.jpg ", 
//       desc: "Suscipit cupiditate laudantium qui debitis.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/19.jpg ", 
//       desc: "Reiciendis et eos sapiente et tenetur minus eius omnis est.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/51.jpg ", 
//       desc: "Dolor vitae aut corrupti.", 
//       isVerified: true 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/27.jpg ", 
//       desc: "Tempora atque temporibus aut odio mollitia accusantium.", 
//       isVerified: false 
//     }, 
//     { 
//       url: "https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/5.jpg ", 
//       desc: "Maiores explicabo vitae cum modi ut.", 
//       isVerified: false 
//     } 
//   ]
// }