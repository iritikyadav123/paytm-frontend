
import FirstLetter from "./FirstLetter"
export default function Appbar({props}) {
    return(
        <div className="flex border items-start shadow-lg justify-between text-lg mt-5 ml-5 mr-10 sticky p-2">
            <div>Paytm App</div>
            <div className="flex items-center">
                <div>Hello</div>
                 <FirstLetter cssProp={"border border-gray-900 text-2xl font-extrabold flex justify-center items-center ml-2   h-9 w-9 bg-slate-400 rounded-full"} props={props} />
            </div>

        </div>
    )
}