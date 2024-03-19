import { Link } from "react-router-dom";


export default function Warning({label, buttonText,to}) {
    return (
        <div  className="flex justify-center"> 
            <b>{label}</b>
            <Link to={to} path={to}>
               {buttonText}
            </Link>
        </div>
    )
}