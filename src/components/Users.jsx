import { useEffect, useState } from "react"
import Input from "./Input"
import UserList from "./UserList"
import axios from "axios";


export default function Users() {
const[userData, setUserData]   =  useState([]);
const[filter, setFilter] = useState([]);

  useEffect(() => {
    axios.get("https://53783226-afd9-464e-b0cd-e26165dbc44a-00-3ok8fjfh90x9y.spock.replit.dev:3001/api/v1/user/bulk?filter=" + filter)
    .then(response => {
        setUserData(response.data.user)
    })
  },[filter])


    return(
        <div className="pt-4">
            <div className="pl-5 font-bold text-xl">Users</div>
            <div className="w-full">
                <Input onChange={(e)=>{setFilter(e.target.value)}} labelCss={""}inputCss={"border w-[97%] border-black font-normal mr-5 ml-5 rounded outline-none"} Label={""}  Placeholder={"Searching ..."} Type={"text"} />
            </div>
            <div className="">
                 {
                         userData.map((item) => (
                            <div key={item.username}><UserList user={item}/> </div>
                         ))
                 }
                  
            </div>
        </div>
    )
}