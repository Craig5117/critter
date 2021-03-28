import React, { useState, useEffect } from 'react';
// import ProfileImage from '../components/ProfileImage';
import PetCard from '../components/PetCard';
import TailList from '../components/TailList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PETS_BASIC, QUERY_TAILS } from '../utils/queries';
import { useSelector } from 'react-redux';
// import Container from 'react-bootstrap/esm/Container';

import './pages.css';

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
    
    
  return (
    
    <div>
      <div className="subtitle text-center">
        Tails and Furrends
      </div>
      <Row className="container-generic">
      <Col className="tails-container" xs={11} md={6}>
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
                key={pet._id}
               />
            )) 
          }
      </Col>
      </Row>
    </div>
    
  );
}

export default Home;
