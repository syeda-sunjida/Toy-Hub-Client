

import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import toysData from '/Projects/Milestone 11 Mongodb/Toy-hub-client/public/toysData.json';




const CardSection = () => {
    const toyTypes = ['Action Figure', 'Stuffed Animal', 'Pretend Play'];
    const [toysData, setToysData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setToysData(data));
    }, [])

    return (
      <div className="container mx-auto my-8">
        {toyTypes.map((toyType) => (
          <div key={toyType} className="my-6">
            <h2 className="text-xl font-bold">{toyType}</h2>
            <div className="grid grid-cols-2 gap-4">
            {toysData
  .filter((toy) => toy.toyType === toyType)
  .map(({ _id, toyName, price, pictureUrl }) => (
    <div key={_id} className="p-4 border">
      <img
        src={pictureUrl}
        alt={toyName}
        className="w-full h-auto mb-2"
      />
      <h3 className="text-lg font-bold">{toyName}</h3>
      <p>Price: ${price}</p>
     
        <button className="btn btn-error">View Details</button>
      
    </div>
  ))}

            </div>
          </div>
        ))}
      </div>
    );
};

export default CardSection;