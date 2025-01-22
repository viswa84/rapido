import {create} from "zustand";
import {createJSONStorage,persist} from "zustand/middleware";
import {mmkvStorage} from "./storage"
type CustomLoaction = {
    latitude:number;
    longitude:number;
    address:string;
} | null;

interface UserStoreProps {
    user:any;
    location:CustomLoaction;
    outOfRange:boolean;
    setUser:(data:any)=>void;
    setOutOfRange:(data:boolean)=>void;
    setLoaction:(data:CustomLoaction)=>void;
    clearData:()=>void;

};

export const useUserStore = create<UserStoreProps>()(
     persist(
        (set)=>({
            user:null,
            location:null,
            outOfRange:false,
            setUser:(data)=>set({user:data}),
            setLoaction:(data)=>set({location:data}),
            setOutOfRange:(data)=> set({outOfRange:data}),
            clearData:()=>set({user:null,location:null,outOfRange:false}),
        }),
        {name:"user-store",
            partialize:(state)=>({
                user:state.user
            }),
            storage:createJSONStorage(()=>mmkvStorage)
        },

     )
)