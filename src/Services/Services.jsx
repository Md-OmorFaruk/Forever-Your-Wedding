import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataEvent from "../DataEvent/DataEvent";

import photo from '../images/bride-groom-their-wedding-ceremony_1303-28370.jpg'

const Services = () => {
      const [dataService, setDataService] = useState([]);
      useEffect(() => {
            fetch('EventData.json')
                  .then(res => res.json())
                  .then(data => setDataService(data))
      },[])
      
      return (
            <div>
                    <div className="hero min-h-[30vh] object-cover" style={{ backgroundImage: `url(${photo})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
                  <h1 className="mb-5 text-5xl font-bold text-white">Event Services</h1>
            </div>
            </div>
                  </div>
                  <h1 className="font-fon1 text-5xl font-extrabold my-10">Wedding Events</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                              {
                              dataService.map(data=><Link key={data.id} to={`data/${data.id}`}><DataEvent key={data.id} data={data}></DataEvent></Link>)
                        }
                        </div>
                       
                  </div>
      );
};

export default Services;