const db = require('./connection');
const { Pet, Tail, PetType} = require('../models');


db.once('open', async () => {
    await PetType.deleteMany();

    const types = await PetType.insertMany([
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

    const pets = await Pet.create([
        // Dogs
        {
            username: 'Fido',
            email: 'bonelover@gmail.com',
            password: 'test12345',
            petType: 'Dog',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616988931/critter/gp7zr1gqpwf8vuovn9ls.jpg',
            age: 5,
            sex: 'male',
            bio: 'I love bones!',
            relationshipStatus: 'Love my human!'
        
        },
        {
            username: 'Tipper',
            email: 'tipper91@aol.com',
            password: 'test12345',
            petType: 'Dog',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989377/critter/bseavrdqw5qqqtpt0rp9.jpg',
            age: 4,
            sex: 'female',
            bio: 'I look like a dog, but act like a cat',
            relationshipStatus: 'Seeking new friends.'
        
        },
        {
            username: 'Barley',
            email: 'barbar@yahoo.com',
            password: 'test12345',
            petType: 'Dog',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616987088/critter/c9eyncncoee1vluworoy.jpg',
            age: 2,
            sex: 'male',
            bio: 'I look scarey, but I love people!',
            relationshipStatus: 'I need a home.'
        
        },
        // Cat
        {
            username: 'Snowball',
            email: 'snowy88@yahoo.com',
            password: 'test12345',
            petType: 'Cat',
            sex: 'female',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616986827/critter/rlse0dlicdovbmsww920.jpg',
            age: 9,
            bio: "I'm not like other cats, I'm a cool cat",
            relationshipStatus: 'I need a home.'
        
        },
        {
            username: 'Buckeye',
            email: 'buck612@aol.com',
            password: 'test12345',
            petType: 'Cat',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989473/critter/gapqfeo3ay21agslxse2.jpg',
            age: 6,
            sex: 'male',
            bio: 'I love to party!..... by myself!',
            relationshipStatus: 'Love my human!'
        
        },
        {
            username: 'RumTumTugger',
            email: 'rumtug2@gmail.com',
            password: 'test12345',
            petType: 'Cat',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989575/critter/hehcpqxkp7pqfzgrmdg3.jpg',
            age: 1,
            sex: 'male',
            bio: "If you offer me pheasant I'd rather have grouse, If you put me in a house I would much prefer a flat, If you put me in a flat then I'd rather have a house, If you set me on a mouse then I only want a rat, If you set me on a rat then I'd rather chase a mouse",
            relationshipStatus: 'I need a home.'
        
        },

        // Fish
        {
            username: 'Goldie',
            email: 'goldenfin@aol.com',
            password: 'test12345',
            petType: 'Fish',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989649/critter/l0nneesf1ebmylop9qzm.jpg',
            age: 10,
            sex: 'female',
            bio: 'just keep swimming, just keep swimming...',
            relationshipStatus: 'Not interested.'
        
        },
        // Lizard
        {
            username: 'Zuko',
            email: 'fireking@msn.com',
            password: 'test12345',
            petType: 'Lizard',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616982642/critter/v7unfwhoycaxhdq0skah.jpg',
            age: 2,
            sex: 'male',
            bio: 'lookings for the Avator, or bugs, whichever comes first',
            relationshipStatus: 'Love my human!'
        
        },
        {
            username: 'Iroh',
            email: 'teatime11@yahoo.com',
            password: 'test12345',
            petType: 'Lizard',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616988840/critter/r81nanxbpoffnk85y4nm.jpg',
            age: 3,
            sex: 'male',
            bio: 'There is nothing wrong with a life of peace and prosperity',
            relationshipStatus: 'I need a home.'
        
        },
        // Snake
        {
            username: 'Kah',
            email: 'trust_me@gmail.com',
            password: 'test12345',
            petType: 'Snake',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989778/critter/lbxcoksygmzj18vbm8b6.jpg',
            age: 20,
            sex: 'male',
            bio: "Trust in me, I wouldn't lie to you!",
            relationshipStatus: 'Seeking new friends.'
        
        },
        // Cow
        {
            username: 'Clara',
            email: 'beautybell22@gmail.com',
            password: 'test12345',
            petType: 'Cow',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989864/critter/hw8mkmojjq2ozhgffqgo.jpg',
            age: 10,
            sex: 'female',
            bio: "Eat, pray, and eat some more!",
            relationshipStatus: 'Not interested.'
        
        },
        {
            username: 'Barb',
            email: 'barbiegurl@yahoo.com',
            password: 'test12345',
            petType: 'Cow',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616640291/critter/kuu0fkof4jfoqjxirmpm.jpg',
            age: 3,
            sex: 'female',
            bio: "Just a barbie girl, trapped in a cow's body",
            relationshipStatus: 'I need a home.'
        
        },
        // Pig
        {
            username: 'Piglet',
            email: 'ears44@yahoo.com',
            password: 'test12345',
            petType: 'Pig',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616989984/critter/lv02umjuoky1yfdndhae.jpg',
            age: 2,
            sex: 'female',
            bio: "oh d.... ddddd.... dear dear!",
            relationshipStatus: 'I need a home.'
        
        },
        // Sheep
        {
            username: 'Bert',
            email: 'bert22@msn.com',
            password: 'test12345',
            petType: 'Sheep',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616990037/critter/grvp84kxyabdf337q6sg.jpg',
            age: 3,
            sex: 'male',
            bio: "wake up, sheeple!",
            relationshipStatus: 'I need a home.'
        
        },
        {
            username: 'Ernie',
            email: 'ernie44@msn.com',
            password: 'test12345',
            petType: 'Sheep',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616990113/critter/qmx109egeyror5mc7tu8.jpg',
            age: 3,
            sex: 'male',
            bio: "1 sheep, 2 sheep, 3 sheep, 4 sheep, 5 sheep...",
            relationshipStatus: 'Love my human!'
        
        },
        // Horse
        {
            username: 'GallopGal',
            email: 'gallopinggirl@yahoo.com',
            password: 'test12345',
            petType: 'Horse',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616990179/critter/b1mgosocucez0qqrkev0.jpg',
            age: 7,
            sex: 'female',
            bio: "come ride with me!",
            relationshipStatus: 'I need a home.'
        
        },
        // Chicken
        {
            username: 'Eggbert',
            email: 'egghead45@yahoo.com',
            password: 'test12345',
            petType: 'Chicken',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616990255/critter/j38egk0ndjl3ddn99oa8.jpg',
            age: 2,
            sex: 'male',
            bio: "cluck cluck",
            relationshipStatus: 'I need a home.'
        },
        {
            username: 'Olga',
            email: 'egglayer@yahoo.com',
            password: 'test12345',
            petType: 'Chicken',
            image: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616990334/critter/k8atvn6i3zg9wtahswqg.jpg',
            age: 4,
            sex: 'female',
            bio: "I like eggs",
            relationshipStatus: 'Seeking new friends.'
        },
    ]);

    console.log('pets seeded');

    await Tail.deleteMany();
    const pet1 = await Pet.findOne({"username": 'Olga'});
    const pet2 = await Pet.findOne({"username": 'Goldie'});

    if (pet1) {
        const tail1 = await Tail.create({ tailText: "Cluck cluck!", postedBy: pet1._id });

        await Pet.findByIdAndUpdate(
          { _id: pet1._id },
          { $push: { tails: tail1._id } },
          { new: true }
        );

        const tail2 = await Tail.create({ tailText: "I love corn!", postedBy: pet1._id });

        await Pet.findByIdAndUpdate(
          { _id: pet1._id },
          { $push: { tails: tail2._id } },
          { new: true }
        );
    }

    if (pet2) {
        const tail3 = await Tail.create({ tailText: "Blub blub!", postedBy: pet2._id });

        await Pet.findByIdAndUpdate(
            { _id: pet2._id },
            { $push: { tails: tail3._id } },
            { new: true }
        );

        const tail4 = await Tail.create({ tailText: "I wish I was a shark.", postedBy: pet2._id });

        await Pet.findByIdAndUpdate(
            { _id: pet2._id },
            { $push: { tails: tail4._id } },
            { new: true }
        );
    }
    // const tail1 = await Tail.create({...args, postedBy: pet1._id})

    process.exit();

});