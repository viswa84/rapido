import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@/store/storage";
import { resetAndNavigate } from "@/utils/Helpers";
import { logout } from "./authService";

export const appAxios = axios.create({
    baseURL:BASE_URL
});

export const refresh_tokens = async ()=>{
    try {

        const  refreshToken = tokenStorage.getString("refresh_token");
        const response = await axios.post(`${BASE_URL}/auth/refresh-token`,{
            refresh_token:refreshToken
        });

        const new_access_token = response.data.access_token;
        const new_refresh_token = response.data.refresh_token;


        tokenStorage.set("access_token",new_access_token);
        tokenStorage.set("refresh_token",new_refresh_token)
               return new_refresh_token
        
    } catch (error) {
       console.log("REFRESH TOCKEN ERROR");
       tokenStorage.clearAll();
       logout()
    }
}

appAxios.interceptors.request.use(
    response => response,
    async error => {
        if(error.response && error.response.status === 401){
            try {
                const  newAccessToken = await refresh_tokens();
                if(newAccessToken){
                    error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axios(error.config)
                }
                
            } catch (error) {
                console.log("error refreshing token:")
            }
        }
        return Promise.reject(error)
    }
)