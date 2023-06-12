import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authporviders";
import { BsGoogle } from 'react-icons/bs';
const Login = () => {
    const { logIn, signInwithGoogle } = useContext(AuthContext)

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
            })
            .catch(error => console.log(error.message))

    };

    const handleGoogleSignin = () => {
        signInwithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold m-4">Login now!</h1>

                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} className="input input-bordered" />
                                    {errors.password && <span>This field is required</span>}
                                    <label className="label">

                                        <Link to="/signup" className="label-text-alt link link-hover">New here? Sign Up</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" value="Log in" type="submit" />
                                </div>
                            </form>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleGoogleSignin}
                                    className="btn   btn-outline  btn-error"><BsGoogle></BsGoogle></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;