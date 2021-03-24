import React from 'react';
import ProfileImage from '../components/ProfileImage';
import PetCard from '../components/PetCard';
import TailList from '../components/TailList';

function Home() {
  const dbPets = [];
  const dbTails = [
    {
      tailText: 'Slept on the couch all day. My human keeps running the vacuum. Humans are so weird.',
      createdAt: 'Mar 13th, 2021 at 3:20 am',
      petUsername: 'FluffyEars99',
      commentCount: 34
    },
  ];

  return (
    <div>
      <div>
        This is the Home Page. Maybe we should put the latest Posts here?
      </div>
      <ProfileImage />
      <PetCard />
      <TailList />
    </div>
  );
}

export default Home;
