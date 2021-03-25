import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import ProfileImage from '../../components/ProfileImage';


function PetProfile() {
    const userParam = undefined;
    return(
        <div>
            <Col className="profile-image">
            {userParam ? (<Image></Image>) : ( <ProfileImage />)}
            
            </Col>
        </div>
    )
}

export default PetProfile;