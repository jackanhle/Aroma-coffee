const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Drinks' },
        { name: 'Cold Drinks' }
    ]);
    console.log('categories seeded');

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
        {
            name: 'Cappuccino',
            description: 'A cappuccino is an espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam ',
            image: 'capuchino.jpg',
            category: categories[0]._id,
            price: 5.50,
            quantity: 10
        },
        {
            name: 'Machiatto',
            description: 'A cappuccino is an espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam ',
            image: 'machiato.jpg',
            category: categories[0]._id,
            price: 5.50,
            quantity: 10
        },
        {
            name: 'Latte',
            description: 'Caffè latte often shortened to just lattein English, is a coffee beverage of Italian origin made with espresso and steamed milk.',
            image: 'latte.jpg',
            category: categories[0]._id,
            price: 5.50,
            quantity: 10
        },
        {
            name: 'Espresso',
            description: 'Espresso is a coffee-brewing method of Italian origin,[1] in which a small amount of nearly boiling water (about 90 °C or 190 °F) is forced under 9–10 bars of pressure through finely-ground coffee beans. ',
            image: 'espresso.jpg',
            category: categories[0]._id,
            price: 4.00,
            quantity: 10
        },
        {
            name: 'Mocha',
            description: 'Like café latte, caffè mocha is based on espresso and hot milk but with added chocolate flavouring and sweetener, typically in the form of cocoa powder and sugar.',
            image: 'mocha.jpg',
            category: categories[0]._id,
            price: 5.50,
            quantity: 10
        },
        {
            name: 'Frappuchino',
            description: 'Frappe is a blended iced drink often served with whipped cream and other toppings and made of coffee.',
            image: 'frappuchino.jpg',
            category: categories[1]._id,
            price: 6.50,
            quantity: 10
        },
        {
            name: 'Ice espresso',
            description: 'An iced, blended beverage that may contain coffee.',
            image: 'iceespresso.jpg',
            category: categories[1]._id,
            price: 4.50,
            quantity: 10
        },
        {
            name: 'Mazagran',
            description: 'Mazagran (also called café mazagran, formerly spelled masagran) is a cold, sweetened coffee drink that originated in Algeria.',
            image: 'mazagran.jpg',
            category: categories[1]._id,
            price: 6.50,
            quantity: 10
        },
        {
            name: 'Hotchocolate',
            description: 'Hot chocolate, also known as hot cocoa or drinking chocolate, is heated chocolate milk',
            image: 'chocolate.jpg',
            category: categories[0]._id,
            price: 4.50,
            quantity: 10
        },
        {
            name: 'Iced latte',
            description: 'Is a drink with espressom mild and optional sweetener',
            image: 'icelt.jpg',
            category: categories[1]._id,
            price: 6.00,
            quantity: 10
        },
        {
            name: 'Ice Mocha',
            description: 'An iced mocha is a combination of brewed coffee, milk, chocolate sauce, and whipped cream.',
            image: 'icemo.jpg',
            category: categories[1]._id,
            price: 6.00,
            quantity: 10
        },
        {
            name: 'Baby Chino',
            description: 'Babychino is simply warm milk with cinnamon or cocoa powder, without coffee.',
            image: 'chino.jpg',
            category: categories[0]._id,
            price: 3.00,
            quantity: 10
        },
        
    ]);

    console.log('drinks seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
           { 
            drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
           }
        ]
    });
    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });
    console.log('users seeded');
    
    process.exit()
});