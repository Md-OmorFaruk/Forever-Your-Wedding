import backgroundImage from '../images/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony.jpg'

import exampleImage from '../images/luxury-wedding-groom-bride_624325-1770.jpg'
import image1 from '../images/moments_beach-1024x681.jpg'
import image3 from '../images/moments_city-1024x683.jpg'
import image4 from '../images/moments_couple-1024x641.jpg'
import image5 from '../images/moments_croatia-1024x683.jpg'
import image6 from '../images/moments_love-1024x683.jpg'
import image7 from '../images/moments_newhouse-1024x683.jpg'
import image8 from '../images/moments_norway-1024x577.jpg'
import image10 from '../images/moments_thailand-1024x683.jpg'
import image11 from '../images/moments_switzerland-1024x683.jpg'

import divider from '../images/divider.png'
import { useEffect, useState } from 'react'
import DataEvent from '../DataEvent/DataEvent'
import { Link } from 'react-router-dom'

const Home = () => {
      const [data, setData] = useState([]);
      useEffect(() => {
            fetch('EventData.json')
                  .then(res => res.json())
                  .then(data => setData(data))
      },[])
      
      return (
            <div>
                  <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
                  <h1 className="mb-5 text-5xl font-bold text-white">How To Plan Your Wedding</h1>
                  <p className="mb-5 text-white">Marriage: where the love is unconditional, the ties are unbreakable, and the arguments are, sometimes, unavoidable. In the journey of marriage, every moment becomes beautiful when shared together.</p>
                  <button className="btn bg-sky-400 hover:bg-sky-500 border-none text-white">Get Started</button>
            </div>
            </div>
            </div>
            <div className="hero min-h-screen ">
                  <div className="hero-content flex-col-reverse text-center lg:text-left lg:flex-row gap-5 lg:gap-16 xl:gap-40 justify-between ">
                  <img src={exampleImage}  alt="Couple" className="max-w-xl min-h-[85vh] rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105" />
                              <div className='max-w-xl'>
                                    <p className='font-fon1 text-4xl'>About Us</p>
                        <h1 className="text-5xl font-bold">Unrivaled Scenery. Unforgettable Experience.</h1>
                        <p className="py-6">In the heart's silent corners, I discovered a love that felt like destiny. With each stolen glance and gentle touch, we wove a tale of affection, painted in the colors of our shared dreams. Amidst laughter and quiet conversations, we found solace in each other's presence, transforming ordinary days into extraordinary moments. In the warmth of our embrace, 'I do' echoed through our souls, marking the beginning of a lifelong adventure, where every sunrise promises a new chapter of love, written in the pages of our shared story.</p>
                        <button className="btn bg-sky-400 text-white hover:bg-sky-500">Get Started</button>
                  </div>
                  </div>
                  </div>
                  <div className='text-center max-w-lg mx-auto mt-10'>
                        <h1 className='text-6xl font-fon1 mb-3 text-sky-600' >Wedding Events</h1>
                        <img src={divider} alt="" className='w-40 max-w-fit mx-auto mb-3' />
                        <p className=''>It would mean a lot for us to have you on all the wedding events.Below you can see the location of each event separately.</p>
                  </div>
                   <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                              {
                              data.map(data=><Link key={data.id} to={`data/${data.id}`}><DataEvent key={data.id} data={data}></DataEvent></Link>)
                        }
                        </div>
                       
                  </div>



                  <div className='text-center max-w-lg mx-auto'>
                        <h1 className='text-6xl font-fon1 mb-3 text-sky-600' >Happy Moment</h1>
                        <p className='mb-3'>Photos captured from our best moments in our relationship.</p>
                        <img src={divider} alt="" className='w-40 max-w-fit mx-auto mb-3' />
                        
                  </div>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-fit gap-5 mt-16 mb-16 mx-auto'>
                            <img className='h-44 w-72 object-cover transition duration-300 ease-in-out transform hover:scale-105'src={image1} alt="" /><img className='h-44 transition duration-300 ease-in-out transform hover:scale-105 object-cover w-72' src={image3}  alt=""  /><img className='object-cover transition duration-300 ease-in-out transform hover:scale-105 h-44  w-72' src={image4}  alt="" /><img className='object-cover h-44 transition duration-300 ease-in-out transform hover:scale-105 w-72' src={image5}  alt="" /><img className='h-44 transition duration-300 ease-in-out transform hover:scale-105 object-cover w-72' src={image3}  alt="" /><img className='h-44 object-cover transition duration-300 ease-in-out transform hover:scale-105 w-72' src={image6} alt="" /><img className='h-44 transition duration-300 ease-in-out transform hover:scale-105 object-cover w-72' src={image7} alt="" /><img className='h-44 object-cover transition duration-300 ease-in-out transform hover:scale-105 w-72' src={image8} alt="" /><img className='h-44  w-72 object-cover transition duration-300 ease-in-out transform hover:scale-105' src={image10}  alt="" /><img className='h-44 object-cover transition duration-300 ease-in-out transform hover:scale-105 w-72' src={image11} alt="" />
                  </div>
                  
            </div>
      );
};

export default Home;