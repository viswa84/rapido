import { useCaptionStore } from "@/store/CaptionStore";
import { tokenStorage } from "@/store/storage";
import { useUserStore } from "@/store/userStore"
import { resetAndNavigate } from "@/utils/Helpers";
import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "./config";


export const signin = async (payload:{
    role:"customer" | "caption",
    phone:string
})=>{

    const {setUser}=useUserStore.getState();
    const {setUser:setCaptiionUser}=useCaptionStore.getState();
     
    try {
        const res = await axios.post(`${BASE_URL}/auth/signin`,payload);
        if(res.data.user.role === "customer"){
            setUser(res.data.user);
        } else {
            setCaptiionUser(res.data.user)
        }
        tokenStorage.set("access_token",res.data.access_token)
        tokenStorage.set("refresh_token",res.data.refresh_token);
        if(res.data.user.role === "customer"){
            resetAndNavigate("/customer/home");
            
        } else {

             resetAndNavigate("/caption/home");
         }
    } catch (error:any) {
        Alert.alert("Oh! Dang  there there was an error");
        console.log("Error",error?.response?.data?.msg || "Error singnin")
    }
}




 export const logout = async ()=>{
    const {clearData}=useUserStore.getState();
    const {clearCaptionData}=useCaptionStore.getState();

    tokenStorage.clearAll();
    clearCaptionData();
    clearData();
    resetAndNavigate("/role")
}