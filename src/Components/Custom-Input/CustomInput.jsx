
function CustomInput(props) {
    const { labelText, inputName, typeOf } = props;//creating props that eventually will be altributes in input element
    return (
        <div>
            <label>{labelText}</label>
            <input name={inputName} type={typeOf}/>
            the component return 
        </div>
    )
}
export default CustomInput;