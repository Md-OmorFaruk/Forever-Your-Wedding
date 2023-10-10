import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
      return (
            <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row gap-16">
                        <div className="text-center lg:text-center max-w-xl">
                              <h1 className="text-5xl font-bold">Register now!</h1>
                              <p className="py-6">Ready to create memories? Register now and embark on your wedding adventure. Let's capture your love story and turn it into a beautiful, unforgettable celebration. Your perfect day starts with a simple registration</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form className="card-body bg-gradient-to-b from-indigo-500  pb-3">
                                    <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Name</span>
                              </label>
                              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
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
                              <button className="btn btn-primary text-white">Login</button>
                                    </div>
                              </form>
                              <div className="flex items-center text-center gap-6 max-w-fit mx-auto pb-4">
                                    <div>
                                           <p className=" pb-3 font-bold">Login with </p>
                                    </div>
                                    <div>
                                           <button className="btn normal-case max-w-fit mx-auto">
                                    <FcGoogle></FcGoogle>Google</button>
                                    </div>
                                    </div>

                              
                              <p className="text-center pb-3">Already register ? <Link className="text-blue-800 font-bold" to="/login">Login Here</Link></p>
                        </div>
                        </div>
                        </div>
      );
};

export default Register;