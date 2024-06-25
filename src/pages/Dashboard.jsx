import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios";
export default function Dashboard() {
    const[balance,setBalance] = useState(0);
    const[userData,setuserdata] = useState("");
    useEffect(()=>{
          axios.get("https://paytm-backend-one.vercel.app/api/v1/account/balance",{
            headers : {
                Authorization :  "Bearer " + localStorage.getItem("token")
            }
        }).then( res => {
            let a = res.data;
            setBalance(a.balance)
        })  
    },[])

    useEffect(()=>{
        axios.get("https://paytm-backend-one.vercel.app/api/v1/user/user",{
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