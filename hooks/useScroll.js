import { useCallback, useEffect, useState } from "react";

const useScroll = ({ref=null,amount=100})=>{
    const [start,setStart] = useState(false);
    const [end,setEnd] = useState(false);
    const updateSliderState=useCallback(()=>{
        if(ref.current.scrollLeft===0){
            console.log("start");
            setStart(true);
            setEnd(false);
        }else if(Math.ceil(ref.current.scrollLeft)===ref.current.scrollWidth-ref.current.clientWidth){
            console.log("end");
            setEnd(true);
            setStart(false);
        }else{
            console.log("neither")
            setEnd(false);
            setStart(false);
        }
    },[ref]);
    
    const listenForScrollChange = useCallback(()=>{
        updateSliderState();
    },[updateSliderState])
    useEffect(()=>{
        ref.current.addEventListener('scroll',listenForScrollChange)
        updateSliderState();
        return ()=>{ref.current.removeEventListener('scroll',listenForScrollChange)}
    },[updateSliderState,listenForScrollChange,ref])
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