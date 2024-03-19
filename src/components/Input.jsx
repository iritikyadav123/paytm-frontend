



export default function Input({labelCss,inputCss, Label, CssProp, Placeholder,Type, onChange}) {
    return (
        <div>
            <label className={labelCss}>{Label}</label><br></br>
            <input onChange={onChange} className={inputCss} type={Type} placeholder={Placeholder} />
        </div>
    )
}