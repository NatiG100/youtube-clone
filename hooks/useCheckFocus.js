import { useEffect, useState } from "react";

const useCheckFocus = ({ref=null})=>{
    const [focused,setFocused] = useState(false);
    
    useEffect(()=>{
        if(ref===document.activeElement){
            setFocused(true);
        }
    },[ref])
    function handleFocus(){
        setFocused(true);
    }
    function handleBlur(){
        setFocused(false);
    }
    return{
        focused,
        handleFocus,
        handleBlur,
    }
}
export default useCheckFocus;