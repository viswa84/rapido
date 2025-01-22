import {create} from "zustand";
import {createJSONStorage,persist} from "zustand/middleware";
import {mmkvStorage} from "./storage"
type CustomLoaction = {
    latitude:number;
    longitude:number;
    address:string;
    heading:number;
} | null;

interface CaptionStoreProps {
    user:any;
    location:CustomLoaction;
    onDuty:boolean;
    setUser:(data:any)=>void;
    setOnDuty:(data:boolean)=>void;
    setLoaction:(data:CustomLoaction)=>void;
    clearCaptionData:()=>void;

};

export const useCaptionStore = create<CaptionStoreProps>()(
     persist(
        (set)=>({
            user:null,
            location:null,
            onDuty:false,
            setUser:(data)=>set({user:data}),
            setLoaction:(data)=>set({location:data}),
            setOnDuty:(data)=> set({onDuty:data}),
            clearCaptionData:()=>set({user:null,location:null,onDuty:false}),
        }),
        {name:"caption-store",
            partialize:(state)=>({
                user:state.user
            }),
            storage:createJSONStorage(()=>mmkvStorage)
        },

     )
)