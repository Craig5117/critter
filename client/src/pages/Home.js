import React, { useState, useEffect } from 'react';
// import ProfileImage from '../components/ProfileImage';
import PetCard from '../components/PetCard';
import TailList from '../components/TailList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PETS_BASIC, QUERY_TAILS } from '../utils/queries';

function Home() {
    const { loadingPets, data: pets } = useQuery(QUERY_PETS_BASIC)
    const { loadingTails, data: tails } = useQuery(QUERY_TAILS)
    const [dbTails, setDbTails] = useState([])
    const [dbPets, setDbPets] = useState([])
    // tails setter
    useEffect(() => {
        if (tails) {
            setDbTails(tails)
            console.log(tails)
        }
    }, [tails, setDbTails])

    // pets setter
    useEffect(() => {
        if(pets) {
            setDbPets(pets)
            console.log(pets)
        }
    }, [pets, setDbPets ])
    
//   const dbPets = [
//     {
//         username:  "FluffyEars99",
//         petType: "Dog",
//         age: 3,
//         sex: "male",
//         relationshipStatus: "In a committed relationship with my human.",
//         image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
//         bio: "Friendly Cocker Spaniel who enjoys long walks in the park with my human, Emily.", 
    
//     },
// ];
//   const dbTails = [
//     {
//       tailText: 'Slept on the couch all day. My human keeps running the vacuum. Humans are so weird.',
//       image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
//       createdAt: 'Mar 13th, 2021 at 3:20 am',
//       username: 'FluffyEars99',
//       commentCount: 34
//     },
//     {
//       tailText: 'Chased the mailman again today. He fell over the garbage can, lol.',
//       image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
//       createdAt: 'Mar 12th, 2021 at 8:00 am',
//       username: 'BigDog64',
//       commentCount: 56
//     },
//     {
//       tailText: 'Swam around my tank and stared out at the world around me.',
//       image: "https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg",
//       createdAt: 'Mar 13th, 2021 at 9:20 pm',
//       username: 'Jaws345',
//       commentCount: 34
//     },
//   ];

// if (!tails.length) {
//     return <h2>LOADING...</h2>;
//   } 

  return (
    <div>
      <div>
        This is the Home Page. Maybe we should put the latest Posts here?
      </div>
      <Row>
      <Col xs={11} md={6}>
          {!dbTails.tails ? (
              <div>Loading...</div>
          ) : 
            dbTails.tails.map((tail, i) => (
                <TailList 
                tail={tail}
                i={i}
                key={i}/> 
            ))
          }
      </Col>
      
      <Col xs={11} md={6} className="d-flex flex-wrap petCard-container">
          {!dbPets.pets ? (
              <div>Loading...</div>
          ) :
            dbPets.pets.map((pet, i) => (
                <PetCard 
                pet={pet}
                i={i}
                key={i}/>
            )) 
          }
      </Col>
      </Row>
    </div>
  );
}

export default Home;
