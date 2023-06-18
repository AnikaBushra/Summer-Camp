import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authporviders";
import { BsGoogle } from 'react-icons/bs';

const Signin = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signUpWithEmail, signInwithGoogle, updateUser } = useContext(AuthContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setError('')
        setSuccess('')
        if (data.password < 6) {
            return setError('password must be 6 characters')
        }
        if (!/(?=.*?[A-Z])/.test(data.password)) {
            return setError('password must have a capital letter')
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(data.password)) {
            return setError('password must have a special character')
        }
        if (data.password !== data.confirmPassword) {
            return setError('password did not match')
        }
        else {

            signUpWithEmail(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    setSuccess('user created successfully')
                    console.log(user);
                    updateUser(data.name, data.photoUrl)
                        .then(
                            console.log('user updated')
                        ).catch(error => console.log(error.message))
                    reset()
                })
                .catch(error => setError(error.message))
        }
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
                        <div className="text-center">
                            <h1 className="text-5xl font-bold p-8">Sign Up now!</h1>

                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text"  {...register("photoUrl", { required: true })} className="input input-bordered" />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword", { required: true })} className="input input-bordered" />
                                    <p className="text-red-500">{error}</p>
                                    {errors.confirmPassword && <span>This field is required</span>}

                                </div>
                                <p className="text-green-600"> {success}</p>
                                <div className="form-control mt-6">
                                    <input

                                        className="btn btn-primary" value="Sign Up" type="submit" />
                                </div>

                            </form>


                            <div className="form-control mt-6">
                                <button
                                    onClick={handleGoogleSignin}
                                    className="btn   btn-outline  btn-error"><BsGoogle></BsGoogle></button>
                            </div>
                            <label className="label">

                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?? Login please</Link>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;