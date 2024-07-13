'use client';
import { supabase } from "@/lib/supabase";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function SignUp() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [usernameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isUsernameValid = await validateUserName(formData.username);
        const isPasswordValid = await validatePassword(formData.password);

        if (isUsernameValid && isPasswordValid) {
            createUser(formData);
        }
    };

    const validateUserName = async (item) => {
        // Check if username is empty or only contains spaces
        if (!item.trim()) {
            setUserNameError("Username field is required");
            return false;
        } 
        // Check if username length is more than 10 characters
        else if (item.length > 10) {
            setUserNameError("Username length must be less than 10");
            return false;
        } 
        // Check if username length is less than 4 characters
        else if (item.length < 4) {
            setUserNameError("Username length must be at least 4");
            return false;
        } 
        // Check if username contains numbers
        else if (/\d/.test(item)) {
            setUserNameError("Username cannot contain numbers");
            return false;
        } 
        // Check if username contains spaces
        else if (/\s/.test(item)) {
            setUserNameError("Username cannot contain spaces");
            return false;
        } 
        // Check if username contains only letters
        else if (!/^[a-zA-Z]+$/.test(item)) {
            setUserNameError("Username can only contain letters");
            return false;
        } 
        else {
            // Check if username already exists in the database
            const { data } = await supabase
                .from("users")
                .select("*")
                .eq("username", item);

            if (data && data.length > 0) {
                setUserNameError("Username already exists!");
                return false;
            } else {
                setUserNameError("");
                return true;
            }
        }
    };

    const validatePassword = async (password) => {
        // Check if password is empty or only contains spaces
        if (!password.trim()) {
            setPasswordError("Password field is required");
            return false;
        } 
        // Check if password length is less than 8 characters
        else if (password.length < 8) {
            setPasswordError("Password length must be at least 8 characters");
            return false;
        } 
        // Check if password contains at least one uppercase letter
        else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter");
            return false;
        } 
        // Check if password contains at least one lowercase letter
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter");
            return false;
        } 
        // // Check if password contains at least one number
        // else if (!/\d/.test(password)) {
        //     setPasswordError("Password must contain at least one number");
        //     return false;
        // } 
        // // Check if password contains at least one special character
        // else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        //     setPasswordError("Password must contain at least one special character");
        //     return false;
        // } 
        else {
            setPasswordError("");
            return true;
        }
    };

    const hashPassword = async (password) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };

    const createUser = async ({ username, password }) => {
        const hashedPassword = await hashPassword(password);
        const { data, error } = await supabase
            .from("users")
            .insert({
                username: username,
                password: hashedPassword
            })
            .select();

        if (error) {
            console.log(error);
            return null;
        }
        console.log(data);
        signIn(null, { callbackUrl: '/' });
    };

    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <div className="border rounded-md p-2 w-96">
                <h1 className="text-lg flex justify-center text-green-400">
                    Create a New Account
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex justify-center items-center p-2">
                        <label className="mr-4">
                            Username
                        </label>
                        <input type="text"
                            name="username"
                            className="mr-4 py-1 px-2 border border-gray-400 rounded-lg text-sm bg-black text-white"
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={(e) => {
                                setFormData((prevItem) => ({
                                    ...prevItem,
                                    [e.target.name]: e.target.value
                                }));
                            }}
                        ></input>
                    </div>
                    <div className="flex justify-center items-center p-2 relative">
                        <label className="mr-4">
                            Password
                        </label>
                        <input type={showPassword ? "text" : "password"}
                            name="password"
                            className="mr-4 py-1 px-2 border border-gray-400 rounded-lg text-sm bg-black text-white"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={(e) => {
                                setFormData((prevItem) => ({
                                    ...prevItem,
                                    [e.target.name]: e.target.value
                                }))
                            }}>
                        </input>
                        <div className="absolute right-10 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {((usernameError) || (passwordError)) && <p className="text-sm text-red-500">{
                            usernameError || passwordError
                        }</p>}
                    </div>
                    <div className="flex justify-center items-center p-2 mt-2">
                        <button type="submit" className="py-1 px-2 border border-gray-400 rounded-md text-sm bg-black text-white">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="flex justify-center items-center mt-2">
                    <label className="text-sm mr-2">Already have an account? </label>
                    <button className="text-sm bg-black text-blue-400"
                        onClick={signIn}
                    >Sign In</button>
                </div>
            </div>
            {/* <div className="mt-4">
                <button className="text-sm text-blue-400" onClick={}>
                Continue as Guest
                </button>
            </div> */}
        </div>
    );
}

export default SignUp;
