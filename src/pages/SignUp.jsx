
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Input from "../components/Input";
import Button from "../components/Button";
import Warning from "../components/Warning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function  Signup() {
    const navigation = useNavigate();
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    return (
        <div className="flex justify-center bg-slate-600 items-center h-[100vh] overflow-hidden">
             <div className="flex flex-col rounded bg-white gap-2 shadow-2xl md:h-[70%] md:w-[20%] h-[70%] w-[65%]">
                <Heading cssProp={"text-black-500 font-bold pt-4 text-center text-4xl"} title="SignUp"/>
                <SubHeading data="Enter your infromation to create an account" cssProps="text-center text-base ml-5 mr-5 pt-3 text-gray-500" />
                <div className="flex flex-col pt-4 pb-4  pl-4 gap-2 md:ml-5">
                    <Input onChange={(e) => setFirstName(e.target.value)} labelCss={"text-black font-medium"}inputCss={"border border-black font-normal pl-1 mt-1.5 rounded outline-none"} Label={"FirstName"}  Placeholder={"Ritik"} Type={"text"} />
                    <Input onChange={(e) => setLastName(e.target.value)} labelCss={"text-black font-medium"}inputCss={"border border-black font-normal pl-1 mt-1.5 rounded outline-none"} Label={"lastName"}  Placeholder={"yadav"} Type={"text"} />
                    <Input onChange={(e) => setUsername(e.target.value)} labelCss={"text-black font-medium"}inputCss={"border border-black font-normal pl-1 mt-1.5 rounded outline-none"} Label={"Email"}  Placeholder={"ritik@gmail.com"} Type={"email"} />
                    <Input onChange={(e) => setPassword(e.target.value)} labelCss={"text-black font-medium"}inputCss={"border border-black font-normal pl-1 mt-1.5 rounded outline-none"} Label={"Password"}  Placeholder={"1234"} Type={"password"} />
                </div>
                 <Button onClick={async()=> {
                      const response = await  axios.post("https://paytm-backend-one.vercel.app/api/v1/user/signUp", {
                        firstName,
                        lastName,
                        username,
                        password
                      });
                      localStorage.setItem("token", response.data.token)
                      navigation('/Dashboard')
                 }}  label={"SignUp"}/>
                 <Warning label={"Already have an account?"} buttonText={"Sign In"} to={"/SignIn"} />
             </div>
        </div>
    )
}