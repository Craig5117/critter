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
    {
      tailText: 'Chased the mailman again today. He fell over the garbage can, lol.',
      createdAt: 'Mar 12th, 2021 at 8:00 am',
      petUsername: 'BigDog64',
      commentCount: 56
    },
    {
      tailText: 'Swam around my tank and stared out at the world around me.',
      createdAt: 'Mar 13th, 2021 at 9:20 pm',
      petUsername: 'Jaws345',
      commentCount: 34
    },
  ];

  return (
    <div>
      <div>
        This is the Home Page. Maybe we should put the latest Posts here?
      </div>
      {dbTails.map((tail, i) => (
          <TailList 
          tail={tail}
          i={i}
          key={i}/> 
      ))}
      
    </div>
  );
}

export default Home;
