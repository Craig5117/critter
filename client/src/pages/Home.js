import React, { useState, useEffect } from 'react';
// import ProfileImage from '../components/ProfileImage';
import PetCard from '../components/PetCard';
import TailList from '../components/TailList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PETS_BASIC, QUERY_TAILS } from '../utils/queries';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';

function Home() {
    const { data: pets } = useQuery(QUERY_PETS_BASIC)
    const [dbPets, setDbPets] = useState([])
    const { data: tails } = useQuery(QUERY_TAILS)
    const [dbTails, setDbTails] = useState([])
    const currentPetType = useSelector(state => state.pets.currentPetType)
    // tails setter
    useEffect(() => {
        if (tails) {
            setDbTails(tails)
        }
    }, [tails, setDbTails])

    // pets setter
    useEffect(() => {
        if(pets) {
            setDbPets(pets)
        }
    }, [pets, setDbPets ])

    function filterPets() {
        if(!currentPetType) {
            return dbPets.pets;
        }
        return dbPets.pets.filter((pet) => pet.petType === currentPetType);
    }
    
    
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
            filterPets().map((pet) => (
                <PetCard 
                pet={pet}
                key={pet._id}/>
            )) 
          }
      </Col>
      </Row>
    </div>
    
  );
}

export default Home;
