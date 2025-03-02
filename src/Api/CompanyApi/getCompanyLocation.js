import axios from "axios";

const getCompanyLocation = async() => {

let url="http://5.34.206.81:8080/icm/baseInfo/v1/getAllLocationInfo"
let response=await axios.get(url);
try{
    return response
}catch(error){
    console.log(error);
    
}
}
 
export default getCompanyLocation;