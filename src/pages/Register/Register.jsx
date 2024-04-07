// import { useContext } from 'react';
import { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
// import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    // const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.value;
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo_URL');
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => console.log(error.message));

    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-3xl'>Please Register</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-xl flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo_URL" type="text" placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
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
                        <p className="text-center"> Already have an account? <Link to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;