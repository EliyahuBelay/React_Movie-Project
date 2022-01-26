import CustomInput from "../Custom-Input/CustomInput";

function AddMovie(){
    let arrayOfMovie = [
        {nameHeadline : "movie name",nameInput : "movie",typeInput:"text"},
        {nameHeadline : "movie category",nameInput : "cayegory",typeInput:"text"},
        {nameHeadline : "year",nameInput : "movie year",typeInput:"number"},
        {nameHeadline : "movie rating",nameInput : "rating",typeInput:"number"}
    ];
    return(
        <div>
            <h1>the form</h1>
            <form>
                {
                    arrayOfMovie.map(inputItem => 
                        <CustomInput labelText={inputItem.nameHeadline} inputName={inputItem.nameInput} typeOf={inputItem.typeInput}/>)
                }
            </form>
        </div>
    )
}
export default AddMovie;