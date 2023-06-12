import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authporviders";

const Signin = () => {
    const { signUpWithEmail } = useContext(AuthContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signUpWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
            })
            .catch(error => console.log(error.message))
    };


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold p-8">Sign Up now!</h1>

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

                                        <Link to="/login" className="label-text-alt link link-hover">Already have an account?? Login please</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input

                                        className="btn btn-primary" value="Sign Up" type="submit" />
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;