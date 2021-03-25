import React from 'react';
// import ProfileImage from '../components/ProfileImage';
import PetCard from '../components/PetCard';
import TailList from '../components/TailList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {
  const dbPets = [
    {
        username:  "FluffyEars99",
        petType: "Dog",
        age: 3,
        sex: "male",
        relationshipStatus: "In a committed relationship with my human.",
        image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
        bio: "Friendly Cocker Spaniel who enjoys long walks in the park with my human, Emily.",
        tails: [
            {
            tailText: 'Slept on the couch all day. My human keeps running the vacuum. Humans are so weird.',
            image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
            createdAt: 'Mar 13th, 2021 at 3:20 am',
            username: 'FluffyEars99',
            commentCount: 34
            }
        ],
        friends: [],
        friendCount: 0
        
    
    },
    {
        username:  "Jaws345",
        petType: "Dog",
        age: 3,
        sex: "male",
        relationshipStatus: "In a committed relationship with my human.",
        image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
        bio: "Friendly Cocker Spaniel who enjoys long walks in the park with my human, Emily.",
        tails: [
            {
                tailText: 'Swam around my tank and stared out at the world around me.',
                image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
                createdAt: 'Mar 13th, 2021 at 9:20 pm',
                username: 'Jaws345',
                commentCount: 34
            },
        ],
        friends: [],
        friendCount: 0
        
    
    },
    {
        username:  "BigDog64",
        petType: "Dog",
        age: 3,
        sex: "male",
        relationshipStatus: "In a committed relationship with my human.",
        image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
        bio: "Friendly Cocker Spaniel who enjoys long walks in the park with my human, Emily.",
        tails: [
            {
                tailText: 'Chased the mailman again today. He fell over the garbage can, lol.',
                image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
                createdAt: 'Mar 12th, 2021 at 8:00 am',
                username: 'BigDog64',
                commentCount: 56
            }
        ],
        friends: [],
        friendCount: 0
        
    
    },
];
  const dbTails = [
    {
      tailText: 'Slept on the couch all day. My human keeps running the vacuum. Humans are so weird.',
      image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
      createdAt: 'Mar 13th, 2021 at 3:20 am',
      username: 'FluffyEars99',
      commentCount: 34
    },
    {
      tailText: 'Chased the mailman again today. He fell over the garbage can, lol.',
      image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
      createdAt: 'Mar 12th, 2021 at 8:00 am',
      username: 'BigDog64',
      commentCount: 56
    },
    {
      tailText: 'Swam around my tank and stared out at the world around me.',
      image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
      createdAt: 'Mar 13th, 2021 at 9:20 pm',
      username: 'Jaws345',
      commentCount: 34
    },
  ];

  return (
    <div>
      <div>
        This is the Home Page. Maybe we should put the latest Posts here?
      </div>
      <Row>
      <Col xs={11} md={6}>
      {dbTails.map((tail, i) => (
          <TailList 
          tail={tail}
          i={i}
          key={i}/> 
      ))}
      </Col>
      <Col xs={11} md={6}>
          <PetCard />
      </Col>
      </Row>
    </div>
  );
}

export default Home;
