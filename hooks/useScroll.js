import { useCallback, useEffect, useState } from "react";

const useScroll = ({ref=null,amount=100})=>{
    const [start,setStart] = useState(false);
    const [end,setEnd] = useState(false);
    const updateSliderState=useCallback(()=>{
        if(ref.current.scrollLeft===0){
            setStart(true);
            setEnd(false);
        }else if(ref.current.scrollLeft===ref.current.scrollWidth-ref.current.clientWidth){
            setEnd(true);
            setStart(false);
        }else{
            setEnd(false);
            setStart(false);
        }
    },[ref]);
    
    useEffect(()=>{
        updateSliderState();
    },[updateSliderState])
    function moveRight(){
        ref.current.scrollLeft -= amount;
        updateSliderState();
    }
    function moveLeft(){
        ref.current.scrollLeft += amount;
        updateSliderState();
    }
    return{
        start,
        end,
        moveLeft,
        moveRight,
    }
}
export default useScroll;