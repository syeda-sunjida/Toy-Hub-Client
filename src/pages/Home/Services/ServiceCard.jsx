import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, toyName, pictureUrl, price, toyType } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
            
                <h2 className="card-title">{toyName}</h2>
                <p className="text-xl text-error">Toy Type: {toyType}</p>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                {/* <div className="card-actions">
                    <Link to={`/book/${id}`}>
                        <button className="btn btn-error">Buy Now</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceCard;