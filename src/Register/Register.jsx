import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {
      // const {success, setSuccess} = useState(null)
     
      const {createUser} = useContext(AuthContext)
        const handleRegister = e => {
            e.preventDefault();
            
            const form = new FormData(e.currentTarget);
              
           const email = form.get('email')
              const password = form.get('password');
              const name = form.get('name')
              const photoURL = form.get('PhotoURL')
            console.log(name, photoURL, email, password);

              createUser(email, password)
                    .then(result => {
                          console.log(result.user);
                          
                          //setSuccess('Your register successfully');
                    })
                    .catch(error => {
                          console.log(error.message);
                    })
              
      }
      return (
            <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row gap-16">
                        <div className="text-center lg:text-center max-w-xl">
                              <h1 className="text-5xl font-bold">Register now!</h1>
                              <p className="py-6">Ready to create memories? Register now and embark on your wedding adventure. Let's capture your love story and turn it into a beautiful, unforgettable celebration. Your perfect day starts with a simple registration</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={ handleRegister} className="card-body bg-gradient-to-b from-indigo-500  pb-3">
                                    <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Name</span>
                              </label>
                              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Photo URL</span>
                              </label>
                              <input type="text" placeholder="Photo URL" name="PhotoURL" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Email</span>
                              </label>
                              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Password</span>
                              </label>
                              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                              </div>
                              <div className="form-control mt-6">
                              <button  className="btn btn-primary text-white">Register</button>
                                    </div>
                              </form>

                              <p className="text-center pb-3 pt-3">Already have account ? <Link className="text-blue-800 font-bold" to="/login">Login Here</Link></p>
                        </div>
                  
                        </div>
                        </div>
      );
};

export default Register;