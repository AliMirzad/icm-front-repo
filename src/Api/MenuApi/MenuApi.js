import axios from "axios";

export const getMenuItem=async()=>{
    const url="http://5.34.206.81:8080/icm/menu/v1/getUserPanelMenus"
    const response=await axios.get(url)
    try{
       return response.data
        
    }catch(errr){
        console.log(errr);
        
    }
}
