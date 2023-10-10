import { Link } from "react-router-dom";

const Login = () => {
      return (
                        <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                              <p className="py-6">Step into a world of love and elegance, where dreams meet reality. Sign in and let us transform your vision into a perfect wedding tale, woven with love, laughter, and lifelong memories. Your journey begins here.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form className="card-body bg-gradient-to-b from-cyan-500 to-white pb-3">
                              <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Email</span>
                              </label>
                              <input type="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Password</span>
                              </label>
                              <input type="password" placeholder="password" className="input input-bordered" required />
                              <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                              </div>
                              <div className="form-control mt-6">
                              <button className="btn btn-primary text-white">Login</button>
                              </div>
                              </form>
                              <p className="text-center pb-3">New Here ? <Link className="text-blue-800 font-bold" to="/register">Register Here</Link></p>
                        </div>
                        </div>
                        </div>
      );
};

export default Login;