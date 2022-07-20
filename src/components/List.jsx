import React, { useState } from 'react';
import data from '../helpers/data';
import Card from './Card';
import Navbar from './Navbar';

const List = () => {
  const [people, setPeople] = useState(data)
  return (
    <>
      <div className='listDiv'>
        <Navbar/>
        {
          people.map((item, index) => {

        return(
          <Card veri={item} />
        )})
        }
        
        <div>
          <button className='clearAll'>Clear All</button>
          <button className='getBack'>Get Back</button>
        </div>
      </div>
      
      
    </>
  );
};

export default List;
