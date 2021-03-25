import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import ProfileImage from '../../components/ProfileImage';


function PetProfile() {
    return(
        <div>
            <Col className="profile-image">
            
             <ProfileImage />
            </Col>
        </div>
    )
}

export default PetProfile;