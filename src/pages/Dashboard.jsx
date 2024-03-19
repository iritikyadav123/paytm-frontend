import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios";
export default function Dashboard() {
    const[balance,setBalance] = useState(0);
    const[userData,setuserdata] = useState("");
    useEffect(()=>{
          axios.get("https://53783226-afd9-464e-b0cd-e26165dbc44a-00-3ok8fjfh90x9y.spock.replit.dev:3001/api/v1/account/balance",{
            headers : {
                Authorization :  "Bearer " + localStorage.getItem("token")
            }
        }).then( res => {
            let a = res.data;
            setBalance(a.balance)
        })  
    },[])

    useEffect(()=>{
        axios.get("https://53783226-afd9-464e-b0cd-e26165dbc44a-00-3ok8fjfh90x9y.spock.replit.dev:3001/api/v1/user/user",{
          headers : {
              Authorization :  "Bearer " + localStorage.getItem("token")
          }
      }).then( res => {
          setuserdata(res.data.firstName)
      })  
  },[])
    return (
        <div className="">
            <Appbar props={userData}/>
            <Balance props={balance} />
            <Users />
        </div>
    )
}