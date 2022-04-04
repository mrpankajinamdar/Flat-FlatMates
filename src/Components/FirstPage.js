
import AddPropertyForm from "./AddPropertyForm";
import pic from "./images/housing2.jpg";
import Register from "./Register2";
import ShowProperties from "./ShowProperties";


function FirstPage(){
    return (
    <div> <span class="w3-display-container w3-content w3-wide" style={{maxWidth:"1500px"}} id="home">
   <h1 class="center mb-2"><span><b>Your Search ends here...</b></span></h1>
    <img class="center" src={pic} alt="Flats" style={{width:"90%" , height:"500px"}}/>
   </span>
   <ShowProperties/> <p/>
   <AddPropertyForm/>
       </div>

    )
}
export default FirstPage;