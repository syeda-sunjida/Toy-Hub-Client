
// import { Link } from "react-router-dom";
// import LazyLoad from "react-lazy-load";
// import { Link } from "react-router-dom";

const CardDetails = ({ toy }) => {
  const {
    _id,
    toyName,
    price,
    toyType,
    pictureUrl,
    
  } = toy;
  return (
    <>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        
            <img className="h-72 w-full object-cover"  src={pictureUrl} alt="Chef" />
          
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>
            Toy Type <span>${toyType}</span>
          </p>
          <p>
            Price: <span>${price}</span>
          </p>

          
        </div>
      </div>
    </>
  );
};

export default CardDetails;
