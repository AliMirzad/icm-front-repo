import axios from "axios";

const getCompanyLocation = async() => {

let url="http://5.34.206.81:8080/icm/user/v1/getAllUser"
let response=await axios.get(url);
try{
    return response
}catch(error){
    console.log(error);
    
}
}
 
export default getCompanyLocation;