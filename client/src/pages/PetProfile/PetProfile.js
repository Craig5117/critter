import React, { useEffect, useMemo, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileImage from '../../components/ProfileImage';
import TailList from '../../components/TailList';
import TailForm from '../../components/TailForm';
import './petProfile.css'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME, QUERY_PET, QUERY_TAILS } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';

function PetProfile() {
  const { _id: idParam } = useParams();
  const [dbTails, setDbTails] = useState([])
  const { data: tails } = useQuery(QUERY_TAILS, {
    variables: { postedBy: idParam ? idParam : Auth.getProfile().data._id },
    fetchPolicy: 'cache-and-network'
  })
  // tails setter
  useEffect(() => {
    if (tails) {
        setDbTails(tails.tails)
        console.log(dbTails)
    }
}, [tails, dbTails, setDbTails])


  
  const { data } = useQuery(idParam ? QUERY_PET : QUERY_ME, {
    variables: { _id: idParam },
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
console.log(idParam)
  return (
    <div>
      <Row>
      <Col xs={7} md={3}>
        {idParam ? <div className="profile-image"><Image className="w-100" src={pet.image} roundedCircle></Image></div> : <ProfileImage />}
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
        <i className="heart-profile fas fa-heart"></i>
        <span>{pet.relationshipStatus}</span>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
        <span>{pet.petType}</span>
        </Col>
        <Col>
        <span>{pet.age}</span>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>{pet.bio}</p>
        </Col>
      </Row>
      {!idParam && <Row>
        <Col md={8}>
          <TailForm />
        </Col>
      </Row>}
      <Row>
        <Col md={8}>
        {dbTails && dbTails.map((tail, i) => (
                <TailList 
                tail={tail}
                i={i}
                key={i}/> 
            ))
        }
        </Col>
      </Row>
      
    </div>
  );
}

export default PetProfile;
