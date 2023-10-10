import { Link, useLoaderData, useParams } from "react-router-dom";

const EventMore = () => {
      const data = useLoaderData()
      const { id } = useParams();
      const idInt = parseInt(id);
   
      const dataAll = data.find(dataAll => dataAll.id === idInt);
      return (
            <div>
                  <img className="w-full h-[70vh] object-cover" src={dataAll.image} alt="" />
                  <p className="text-5xl font-fon1 mt-3 mb-3 text-sky-500"> {dataAll.title}</p>
                  <p className="text-2xl font-font mt-3 mb-3">{dataAll.description}{dataAll.description}{dataAll.description}{dataAll.description}{dataAll.description}{dataAll.description}</p>
                  <Link to='/'><button className="btn btn-primary bg-sky-500 text-white border-none mt-4 mb-10">Back to Home</button></Link>

            </div>
      );
};

export default EventMore;