const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};

const item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];

const [coffee,,price] = item;
 
console.log(`A medium ${coffee} costs ${price}`);
