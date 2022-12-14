const mongoose = require('mongoose');
const Product = require('../models/product_model');

// Utils
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNewDateWithHourDiff(date, hourDiff) {
  if (hourDiff <= 0) {
    return date;
  }

  const intHourDiff = Math.floor(hourDiff);
  const intMinuteDiff = Math.floor(60 * (hourDiff - intHourDiff));

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDay(),
    date.getHours() + intHourDiff,
    date.getMinutes() + intMinuteDiff
  );
}

// Connect to DB
const db_name = 'HackaTUM_TEST';
mongoose
  .connect('mongodb://localhost:27017/' + db_name)
  .then(() => {
    console.log('SEED: Successfully connected to', db_name, 'Mongo Database via Mongoose.');
  })
  .catch((err) => {
    console.log('SEED: Could not connect to', db_name, 'due to the following error: ');
    console.log(err);
  });
const collectionName = 'products';

// Delete documents from collection before adding new ones
// mongoose.connection.collections[collectionName].deleteMany({});   safer UPDATE methods that don't duplicate entries
console.log('DELETED previous documents in', collectionName + '.');

// Generate fake seed product data - Random generation options

const currentdate = new Date();

const nameFirstOptions = ['Super', 'Awesome', 'Fantastic', 'Regular', 'Classic'];
const nameAdjOptions = ['Red', 'Blue', 'Green', 'Black', 'Brand New'];
const nameNounOptions = [
  'Nutcracker',
  'Candles',
  'Couch',
  'Pillow',
  'Pan',
  'Final Fantasy 14',
  'Phone Charger',
  'Headphones'
];

const categoryOptions = ['CategoryA', 'CategoryB', 'CategoryC'];
const randomStartPriceLowerBound = 5.0;
const randomStartPriceUpperBound = 25.5;

const deadlineMinHourDiff = 5;
const deadlineMaxHourDiff = 48;
const locationOptions = [
  // Note that longitude comes first in a GeoJSON coordinate array, NOT latitude.
  {
    type: 'Point',
    coordinates: [11.576124, 48.137154] // Munich
  },
  {
    type: 'Point',
    coordinates: [10.894446, 48.366512] // Augsburg
  },
  {
    type: 'Point',
    coordinates: [8.682127, 50.110924] // Frankfurt
  }
];
const locationStrOptions = ['Munich, Germany', 'Augsburg, Germany', 'Frankfurt am Main, Germany'];

// Generate fake seed product data - Seed script (200 permutations)

var successCount = 0;
const promises = [];

for (firstWord of nameFirstOptions) {
  for (adjWord of nameAdjOptions) {
    for (nounWord of nameNounOptions) {
      const locationIndex = getRandomInt(0, locationOptions.length - 1);
      const p = new Product({
        name: `${firstWord} ${adjWord} ${nounWord}`,
        category: categoryOptions[getRandomInt(0, categoryOptions.length - 1)],
        description_summ: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description_full:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        startingPrice:
          Math.round(
            getRandomArbitrary(randomStartPriceLowerBound, randomStartPriceUpperBound) * 100
          ) / 100,
        priceArr: [0.0, 0.0, 0.0], // TODO
        image: 'link/to/image/',
        available: true,
        deadline: createNewDateWithHourDiff(
          currentdate,
          getRandomArbitrary(deadlineMinHourDiff, deadlineMaxHourDiff)
        ),
        location: locationOptions[locationIndex],
        locationStr: locationStrOptions[locationIndex]
      });
      promises.push(
        p
          .save()
          .then((p) => {
            successCount++;
          })
          .catch((e) => {
            console.log('Error in saving in seed product', p.name + ': ', e);
          })
      );
    }
  }
}

Promise.all(promises).then(() => {
  console.log('Successfully created', successCount, 'products!');
});
