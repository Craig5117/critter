const db = require('./connection');
const { Pet, Tail, petType} = require('../models');

db.once('open', async () => {
    await petType.deleteMany();

    const types = await petType.insertMany([
        {name: 'Dog'},
        {name: 'Cat'},
        {name: 'Fish'},
        {name: 'Lizard'},
        {name: 'Snake'},
        {name: 'Cow'},
        {name: 'Pig'},
        {name: 'Sheep'},
        {name: 'Horse'},
        {name: 'Chicken'}
    ]);

    console.log('petTypes seeded');

    await Pet.deleteMany();

    const pets = await Pet.insertMany([
        // Dogs
        {
            username: 'Fido',
            email: 'bonelover@gmail.com',
            password: 'test12345',
            petType: 'Dog',
            age: '5',
            sex: 'male',
            bio: 'I love bones!',
            relationshipStatus: 'taken'
        
        },
        {
            username: 'Tipper',
            email: 'tipper91@aol.com',
            password: 'test12345',
            petType: 'Dog',
            sex: 'female',
            bio: 'I look like a dog, but act like a cat',
            relationshipStatus: 'taken'
        
        },
        {
            username: 'Barley',
            email: 'barbar@yahoo.com',
            password: 'test12345',
            petType: 'Dog',
            age: '2',
            sex: 'male',
            bio: 'I look scarey, but I love people!',
            relationshipStatus: 'adoptable'
        
        },
        // Cat
        {
            username: 'Snowball',
            email: 'snowy88@yahoo.com',
            password: 'test12345',
            petType: 'Cat',
            sex: 'female',
            bio: "I'm not like other cats, I'm a cool cat",
            relationshipStatus: 'adoptable'
        
        },
        {
            username: 'Buckeye',
            email: 'buck612@aol.com',
            password: 'test12345',
            petType: 'Cat',
            age: '6',
            sex: 'male',
            bio: 'I love to party!..... by myself!',
            relationshipStatus: 'taken'
        
        },
        {
            username: 'RumTumTugger',
            email: 'rumtug2@gmail.com',
            password: 'test12345',
            petType: 'Cat',
            age: '1',
            sex: 'male',
            bio: "If you offer me pheasant I'd rather have grouse, If you put me in a house I would much prefer a flat, If you put me in a flat then I'd rather have a house, If you set me on a mouse then I only want a rat, If you set me on a rat then I'd rather chase a mouse",
            relationshipStatus: 'adoptable'
        
        },

        // Fish
        {
            username: 'Goldie',
            email: 'goldenfin@aol.com',
            password: 'test12345',
            petType: 'Fish',
            sex: 'female',
            bio: 'just keep swimming, just keep swimming...',
            relationshipStatus: 'taken'
        
        },
        // Lizard
        {
            username: 'Zuko',
            email: 'fireking@msn.com',
            password: 'test12345',
            petType: 'Lizard',
            age: '2',
            sex: 'male',
            bio: 'lookings for the Avator, or bugs, whichever comes first',
            relationshipStatus: 'taken'
        
        },
        {
            username: 'Iroh',
            email: 'teatime11@yahoo.com',
            password: 'test12345',
            petType: 'Lizard',
            sex: 'male',
            bio: 'There is nothing wrong with a life of peace and prosperity',
            relationshipStatus: 'adoptable'
        
        },
        // Snake
        {
            username: 'Kah',
            email: 'trust_me@gmail.com',
            password: 'test12345',
            petType: 'Snake',
            age: '20',
            sex: 'male',
            bio: "Trust in me, I wouldn't lie to you!",
            relationshipStatus: 'taken'
        
        },
        // Cow
        {
            username: 'Clara',
            email: 'beautybell22@gmail.com',
            password: 'test12345',
            petType: 'Cow',
            age: '10',
            sex: 'female',
            bio: "Eat, pray, and eat some more!",
            relationshipStatus: 'taken'
        
        },
        {
            username: 'Barb',
            email: 'barbiegurl@yahoo.com',
            password: 'test12345',
            petType: 'Cow',
            age: '3',
            sex: 'female',
            bio: "Just a barbie girl, trapped in a cow's body",
            relationshipStatus: 'adoptable'
        
        },
        // Pig
        {
            username: 'Piglet',
            email: 'ears44@yahoo.com',
            password: 'test12345',
            petType: 'Pig',
            age: '2',
            sex: 'female',
            bio: "oh d.... ddddd.... dear dear!",
            relationshipStatus: 'adoptable'
        
        },
        // Sheep
        {
            username: 'Bert',
            email: 'bert22@msn.com',
            password: 'test12345',
            petType: 'Sheep',
            age: '3',
            sex: 'male',
            bio: "wake up, sheeple!",
            relationshipStatus: 'adoptable'
        
        },
        {
            username: 'Ernie',
            email: 'ernie44@msn.com',
            password: 'test12345',
            petType: 'Sheep',
            age: '3',
            sex: 'male',
            bio: "1 sheep, 2 sheep, 3 sheep, 4 sheep, 5 sheep...",
            relationshipStatus: 'taken'
        
        },
        // Horse
        {
            username: 'GallopGal',
            email: 'gallopinggirl@yahoo.com',
            password: 'test12345',
            petType: 'Horse',
            age: '7',
            sex: 'female',
            bio: "come ride with me!",
            relationshipStatus: 'adoptable'
        
        },
        // Chicken
        {
            username: 'Eggbert',
            email: 'egghead45@yahoo.com',
            password: 'test12345',
            petType: 'Chicken',
            age: '2',
            sex: 'male',
            bio: "cluck cluck",
            relationshipStatus: 'adoptable'
        },
        {
            username: 'Olga',
            email: 'egglayer@yahoo.com',
            password: 'test12345',
            petType: 'Chicken',
            sex: 'female',
            bio: "I like eggs",
            relationshipStatus: 'taken'
        },
    ]);

    console.log('pets seeded');


    process.exit();

});