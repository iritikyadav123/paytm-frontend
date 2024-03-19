import FirstLetter from "./FirstLetter"
import Button from './Button'
import { useNavigate } from "react-router-dom";


export default function  UserList({user}) {
    const navigate = useNavigate();
       
    return (
        <div className="flex ml-5 mr-5 items-center justify-between mt-2">
            <div className="flex items-center gap-2">
                    <FirstLetter cssProp={"border border-gray-900 text-2xl font-extrabold flex justify-center items-center ml-2   h-9 w-9 bg-slate-400 rounded-full"} props={user.firstName} />
                     {user.firstName} {user.lastName}
                </div>
                <div>
                    <Button onClick={(e) => {
                        navigate('/Save?id=' + user._id+"&name=" + user.firstName)
                    }} label={"Send Money"} />
                </div>
        </div>
    )
}