import React, { useEffect, useMemo } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileImage from '../../components/ProfileImage';
import './petProfile.css'
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_PET } from '../../utils/queries';
import { useParams } from 'react-router-dom';

function PetProfile() {
  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_PET : QUERY_ME, {
    variables: { username: userParam },
  });
  const pet = useMemo(() => {
    if (data?.me) {
      return data.me;
    } else if (data?.pet) {
      return data.pet;
    }
    return {};
  }, [data]);

  useEffect(() => {
    if (pet) {
      console.log(pet);
    }
  }, [pet]);

  function renderSexSymbol() {
    if(pet.sex === 'female') {
        return (
            <i className="fas fa-venus female-profile"></i>
        )
    }
    return (
        <i className="fas fa-mars male-profile"></i>
    )
}

  return (
    <div>
      <Row>
      <Col xs={7} md={3}>
        {userParam ? <div className="profile-image"><Image className="w-100" src={pet.image} roundedCircle></Image></div> : <ProfileImage />}
      </Col>
      <Col>
      <p>{renderSexSymbol()}</p>
      </Col>
      </Row>
      <Row>
        <Col md={4}>
        <span>{pet.username}</span>
        </Col>
        <Col>
        <span>{pet.relationshipStatus}</span>
        </Col>

      </Row>
    </div>
  );
}

export default PetProfile;
