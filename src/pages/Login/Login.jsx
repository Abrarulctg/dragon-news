import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";


const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form)
        console.log(form.get('email'))
        console.log(form.get('password'))

    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">Please Login</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                {/* <button className="btn btn-primary">Login</button> */}
                            </div>
                        </form>
                        <p className="text-center">Do not have an account? <Link to="/register">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;