

export default function FirstLetter({cssProp,props}) {

     const firstletter = props.charAt(0).toUpperCase(); 
    return (
        
        <div className={cssProp}>{firstletter}</div>
        )
}