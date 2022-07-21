import React, { useState } from 'react';
import data from '../helpers/data.js';
import Card from './Card';
import Navbar from './Navbar';

const List = () => {
  const [people, setPeople] = useState(data);
  
  return (
    <>
      <div className='listDiv'>
        <Navbar />
        {people.map((item, index) => {
          return <Card veri={item} />;
        })}
        <div className='buttonDiv'>
          <button className='clearAll' onClick={() => setPeople([])}>
            Clear All
          </button>
          <button className='getBack' onClick={() => setPeople(data)}>
            Get Back
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
