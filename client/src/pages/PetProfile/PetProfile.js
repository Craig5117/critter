import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileImage from '../../components/ProfileImage';
import TailList from '../../components/TailList';
import TailForm from '../../components/TailForm';
import './petProfile.css';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME, QUERY_PET, QUERY_TAILS } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';

function PetProfile() {
  const loggedIn = Auth.loggedIn();
  // console.log('loggedIn? ', loggedIn)
  const dispatch = useDispatch();
  const { _id: idParam } = useParams();
  let userId = idParam ? idParam : Auth.getProfile().data._id;
  const [dbTails, setDbTails] = useState([]);
  const { loading: loadingTails, data: tails } = useQuery(QUERY_TAILS, {
    variables: { postedBy: userId },
    fetchPolicy: 'cache-and-network',
  });
  const [pet, setPet] = useState({});

  // tails setter
  useEffect(() => {
    if (tails) {
      setDbTails(tails.tails);
      // console.log(dbTails)
    } else if (!loadingTails) {
      idbPromise('tails', 'get').then((idbTails) => {
        setDbTails(
          idbTails.reverse().filter((tail) => tail.postedBy._id === userId)
        );
      });
    }
  }, [tails, loadingTails, userId, setDbTails]);

  const { loading: loadingPet, data } = useQuery(
    idParam ? QUERY_PET : QUERY_ME,
    {
      variables: { _id: idParam },
    }
  );

  useEffect(() => {
    if (data?.me) {
      setPet(data.me);
    } else if (data?.pet) {
      setPet(data.pet);
    } else if (!loadingPet) {
      idbPromise('pets', 'get').then((petData) => {
        const currentPet = petData.filter((pet) => pet._id === userId);
        setPet(currentPet[0]);
      });
    }
  }, [data, loadingPet, userId]);

  // this code has issues with race conditions
  // useEffect works better
  // const pet = useMemo(() => {
  //   if (data?.me) {
  //     return data.me;
  //   } else if (data?.pet) {
  //     return data.pet;
  //   } else if (!loadingPet) {
  //     async function fetchOfflineData() {
  //       const petData = await idbPromise('pets', 'get');
  //       const currentPet = petData.filter((pet) => pet._id === userId);
  //       return currentPet[0];
  //     }
  //     return fetchOfflineData();
  //   }
  //   return {};
  // }, [data, loadingPet, userId]);

  useEffect(() => {
    if (pet && !idParam) {
      dispatch({
        type: 'me/SET_IMAGE',
        payload: pet.image,
      });
      // console.log('imageURL', pet.image);
    }
  }, [pet, idParam, dispatch]);

  function renderSexSymbol() {
    if (pet.sex === 'female') {
      return <i className="fas fa-venus female-profile"></i>;
    }
    return <i className="fas fa-mars male-profile"></i>;
  }
  
if (!idParam && !loggedIn){
      return <Redirect to="/login" />
} 

if (loggedIn && idParam === Auth.getProfile().data._id) {
  return <Redirect to="/profile" />
}

  return (
    <div className="petProfile">
      <Row>
        <Col xs={7} md={3}>
          {idParam ? (
            <div className="profile-image">
              <Image className="w-100" src={pet.image} roundedCircle></Image>
            </div>
          ) : (
            <ProfileImage />
          )}
        </Col>
        <Col>
          <p>{renderSexSymbol()}  Gender </p>
          <i className="heart-profile fas fa-heart"></i>
          <span>{pet.relationshipStatus}</span>
        </Col>
       
      </Row>
      <Row>
        <Col md={4}>
          <span className="petName">{pet.username}</span>
        </Col>
        
      </Row>
      <Row>
        <Col md={4}>
          <span>{pet.petType}</span>
        </Col>
      </Row>
      <Row>
      <Col>
          <span>Age: {pet.age ? pet.age : `???`}</span>
        </Col>
      </Row>
      <Row>
        <Col className="petBio">
          <p>Bio: {pet.bio}</p>
        </Col>
      </Row>
      {!idParam && (
        <Row>
          <Col md={8}>
            <TailForm />
          </Col>
        </Row>
      )}
      <Row>
        <Col md={8}>
          {dbTails &&
            dbTails
              .reverse()
              .map((tail) => <TailList tail={tail} key={tail._id} />)}
        </Col>
      </Row>
    </div>
  );
}

export default PetProfile;
