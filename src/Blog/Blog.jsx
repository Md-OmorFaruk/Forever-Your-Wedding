import { Link } from 'react-router-dom';
import image from '../images/moments_beach-1024x681.jpg'
import image2 from '../images/moments_city-1024x683.jpg'
const Blog = () => {
      return (
            <div className='grid grid-cols-1 gap-10'>
                  <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img  src={image} alt="Movie"/></figure>
                  <div className="card-body">
                  <h2 className="card-title">Moments on the Beach: A Love Story Written in the Sands</h2>
                  <p>Immerse yourself in the serenity of love as the sun kisses the waves and whispers sweet nothings in the breeze. Moments on the Beach is an exquisite celebration of love against the backdrop of the endless horizon. Let the sands be witnesses to your eternal commitment, as you exchange vows under the canopy of the sky. With the melody of the ocean as your soundtrack, create memories that are as timeless as the tides</p>
                  <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                  </div>
                  </div>
                  </div>
                  <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img src={image2} alt="Movie"/></figure>
                  <div className="card-body">
                  <h2 className="card-title">Moments on the Beach: A Love Story Written in the Sands</h2>
                  <p>Immerse yourself in the serenity of love as the sun kisses the waves and whispers sweet nothings in the breeze. Moments on the Beach is an exquisite celebration of love against the backdrop of the endless horizon. Let the sands be witnesses to your eternal commitment, as you exchange vows under the canopy of the sky. With the melody of the ocean as your soundtrack, create memories that are as timeless as the tides</p>
                  <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                  </div>
                  </div>
                  </div>
                  <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img src={image} alt="Movie"/></figure>
                  <div className="card-body">
                  <h2 className="card-title">Moments on the Beach: A Love Story Written in the Sands</h2>
                  <p>Immerse yourself in the serenity of love as the sun kisses the waves and whispers sweet nothings in the breeze. Moments on the Beach is an exquisite celebration of love against the backdrop of the endless horizon. Let the sands be witnesses to your eternal commitment, as you exchange vows under the canopy of the sky. With the melody of the ocean as your soundtrack, create memories that are as timeless as the tides</p>
                  <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                  </div>
                  </div>
                  </div>
                  <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img src={image2} alt="Movie"/></figure>
                  <div className="card-body">
                  <h2 className="card-title">Moments on the Beach: A Love Story Written in the Sands</h2>
                  <p>Immerse yourself in the serenity of love as the sun kisses the waves and whispers sweet nothings in the breeze. Moments on the Beach is an exquisite celebration of love against the backdrop of the endless horizon. Let the sands be witnesses to your eternal commitment, as you exchange vows under the canopy of the sky. With the melody of the ocean as your soundtrack, create memories that are as timeless as the tides</p>
                  <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                  </div>
                  </div>
                  </div>
                   <Link to='/'><button className="btn btn-primary bg-sky-500 text-white border-none mt-4 mb-10">Back to Home</button></Link>
                              </div>
      );
};

export default Blog;