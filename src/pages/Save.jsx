
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import FirstLetter from "../components/FirstLetter";

import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



export default function Save() {
    const [ammount, setAmmount] = useState(0);
    const [searchParms] = useSearchParams();
    const id = searchParms.get("id");
    const name = searchParms.get("name");
    const navigation = useNavigate();
    return (
        <div className="flex justify-center   bg-slate-600 items-center h-[100vh] overflow-hidden">
            <div className="flex flex-col rounded bg-white gap-2 shadow-2xl md:h-[50%] md:w-[20%] h-[50%] w-[65%]" >
                <div>
                    <div><Heading cssProp={"text-black-500 font-bold pt-4 text-center text-4xl"} title="Send Money" /></div>
                </div>
                <div className="mt-9">
                    <div className="flex gap-2 justify-start items-center">
                        <FirstLetter cssProp={"border text-2xl font-extrabold flex justify-center items-center ml-2   h-9 w-9 bg-slate-400 rounded-full"} props={name} />
                        <div className="text-2xl font-bold">{name}</div>
                    </div>
                    <div className="ml-4 mt-6">
                        <Input onChange={(e) => {
                            setAmmount(parseInt(e.target.value))
                        }} labelCss={"text-black font-medium"} inputCss={"border border-black font-normal pl-1 mt-1.5 rounded outline-none"} Label={"Ammount (in Rs.)"} Placeholder={"Enter Ammount"} Type={"text"} />
                    </div>
                    <div className="mt-10">
                        <Button onClick={async() => {
                          const a = await axios.post('https://paytm-backend-one.vercel.app/api/v1/account/transfer', {
                                to: id,
                                ammount: ammount
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            }
                            )
                            navigation('/dashboard')
                        }} label={"initiate Transfer"} />
                    </div>
                </div>

            </div>
        </div>
    )
}