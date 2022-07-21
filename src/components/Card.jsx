import React, { useState } from "react";

const Card = ({ veri }) => {
    const {id,image,name,age,birthday} = veri
    const [visible, setVisible] = useState(true);
    const handleClick = () => {
      setVisible(!visible);
    };
    setTimeout(() => {
      setVisible(true)
    }, 2500);
  
        return (
          <div className='cardDiv' key={id}>
            {visible ? (
              <div className='scenario1'>
                <img onClick={() => handleClick()} src={image} alt='img' />
              </div>
            ) : (
              <div className='cardDiv2'>
                <div>
                  <img onClick={() => handleClick()} src={image} alt='img' />
                </div>
                <div className='nameDiv'>
                  <h2>{name}</h2>
                  <h4>{age}</h4>
                  <h4>{birthday}</h4>
                </div>
              </div>
            )}
            
          </div>
        );
      }
export default Card;
