import React from 'react';

const Card = ({name,email}) => {
return(
	<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='Profile' src={`https://www.robohash.org/${email}?size=150x150&set=set5`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
	);
}


export default Card;