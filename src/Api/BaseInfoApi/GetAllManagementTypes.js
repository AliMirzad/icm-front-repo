import axios from "axios";
export const GetAllMangementType=async ()=>{
let url="http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypes"
let response=await axios.get(url);
try{
    return response
}catch(error){
    console.log(error);
    
}
}