import React from 'react';

const List = ({ people }) => {
  
  function HandleClick(event){
    console.log(event.target.value);
    return(people.filter(event.taget.value!==people.id)
    );
   

    
    
  }

  
  return (
    <>
    
    {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
          
            <img src={image} alt={name} />
            <button id="remove" onClick={HandleClick} value={id}>remove</button>
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
