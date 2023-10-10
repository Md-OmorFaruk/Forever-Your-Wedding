import { Link } from "react-router-dom";

const DataEvent = ({ data }) => {
      const {id, image, title, description, price, button} = data;
      return (
                        <div className="card w-full bg-base-100 shadow-xl mt-5 mb-24 h-[600px]">
            <figure className="">
            <img src={image} alt="Shoes" className="rounded-xl h-60 object-cover w-full transition duration-300 ease-in-out transform hover:scale-105" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title font-fon2 text-2xl">{title}</h2>
                        <p>{description}</p>
            <div className="card-actions">
                              <button className="btn btn-primary bg-sky-500 border-none font-bold text-white">price  {price}</button>
                             <button className="btn btn-primary bg-sky-500 border-none font-bold text-white">{button}</button>
            </div>
            </div>
            </div>
      );
};

export default DataEvent;