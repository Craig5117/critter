import React from 'react';
import ProfileImage from '../components/ProfileImage';
import PetCard from '../components/PetCard'

function Home () {
    const dbPets = [
        
    ]

    return (
        <div>
            <div>This is the Home Page. Maybe we should put the latest Posts here?</div>
            <ProfileImage />
            <PetCard />
        </div>
        
    )
}

export default Home;