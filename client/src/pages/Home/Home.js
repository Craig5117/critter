import React, { useState, useEffect } from 'react';
import PetCard from '../../components/PetCard';
import TailList from '../../components/TailList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PETS_BASIC, QUERY_TAILS } from '../../utils/queries';
import { useSelector } from 'react-redux';


import './home.css';
import { idbPromise } from '../../utils/helpers';

function Home() {
    const { loading: loadingPets, data: pets } = useQuery(QUERY_PETS_BASIC)
    const [dbPets, setDbPets] = useState([])
    const { loading: loadingTails, data: tails } = useQuery(QUERY_TAILS)
    const [dbTails, setDbTails] = useState([])
    const currentPetType = useSelector(state => state.pets.currentPetType)
    const currentPetName = useSelector(state => state.pets.currentPetName)
    // tails setter
    useEffect(() => {
        if (tails) {
            // console.log('home tails', tails.tails)
            setDbTails(tails.tails)
            tails.tails.forEach(tail => {
               idbPromise('tails', 'put', tail); 
            });
        } else if (!loadingTails) {
            // if there is no data and we aren't loading, we are offline
            // get the data from indexedDB
            idbPromise('tails', 'get').then((idbTails) => {
                // console.log('idbTails: ', idbTails)
                setDbTails(idbTails.reverse());
            })
        }
    }, [tails, loadingTails, setDbTails])

    // pets setter
    useEffect(() => {
        if(pets) {
            setDbPets(pets.pets)
            pets.pets.forEach(pet => {
                idbPromise('pets', 'put', pet);
            });
        } else if (!loadingPets) {
              // if there is no data and we aren't loading, we are offline
            // get the data from indexedDB
            idbPromise('pets', 'get').then((idbPets) => {
                // console.log('idbPets: ', idbPets)
                setDbPets(idbPets);
            })
        }
    }, [pets, loadingPets, setDbPets ])

    function filterTails() {
        if (!currentPetName) {
            return dbTails;
        }
        return dbTails.filter((tail) => tail.postedBy.username === currentPetName)
    }

    function filterPets() {
        if (!currentPetType) {
            return dbPets;
        }
        return dbPets.filter((pet) => pet.petType === currentPetType);
    }
    
    
  return (
    
    <div>
      <div className="subtitle text-center">
        Tails and Furriends
      </div>
      <Row className="container-generic">
      <Col className="tails-container" xs={11} md={6}>
          {!dbTails ? (
              <div>Loading...</div>
          ) : (
            filterTails().map((tail) => (
                <TailList  
                tail={tail}
                key={tail._id}/> 
            ))
          )
          }
      </Col>
      
      <Col xs={11} md={6} className="d-flex flex-wrap petCard-container">
     
          {!dbPets ? (
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
