// Object destructuring
const book = {
  title: 'Rich Dad Poor Dad',
  author: 'someone',
  publisher: {
    // name: "Penguin"
  }
};
const {
  publisher: { name: publisherName = 'Self-Published' }
} = book;
console.log(publisherName);

// Array destructuring
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumCost] = item;
console.log(`A medium ${coffee} costs ${mediumCost}`);
