import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';


function PetProfile() {
    return(
        <div>
            <Col className="profile-image">
            <Image
            className="w-25"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
              roundedCircle
            />
            </Col>
        </div>
    )
}

export default PetProfile;