import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

const Filter= ()=>{
    const divRef = useRef();
    const {start,end,moveLeft,moveRight} = useScroll({ref:divRef,amount:160});
    const filters=[
        "All",
        "Mixes",
        "David Wood",
        "Music",
        "Debates",
        "Thoughts",
        "JavaScript",
        "Electrical Engineering",
        "Live",
        "Bass Guitar",
        "Public speaking event",
        "Keyboards",
        "Acoustic drum kit",
        "Chords",
        "Computer",
        "Sketch",
        "Contemporary worship music",
        "Harps",
        "Recently uploaded",
        "Watched",
        "New to you",
    ]
    return(
        <Box  width="100%" position="relative" height="max-content" overflow="hidden" >
            {!start&&<Slider direction="left" onClick={moveRight}/>}
            <Box ref={divRef}   className="hide-scroll" width={"100%"} display="flex" overflow={"auto"} gap="1%" py={2}  px={4} borderTop="1px solid #393939" borderBottom={"1px solid #393939"} sx={{backgroundColor:"#202020",scrollbarWidth:"none"}}>
                {filters.map((item,index)=>(
                    <Chip key={index} label={item} onClick={()=>{}}  sx={{border:"1px solid #555555",fontSize:"14px",fontWeight:"600",color:"#dadada",backgroundColor:"#323232"}}/>
                ))}
                
            </Box>
            {!end&&<Slider direction="right" onClick={moveLeft}/>}
        </Box>
    );
}
export default Filter;

const Slider = ({direction="left",onClick=()=>{}})=>{
    return(
        <Box  my={"1px"} zIndex={"1000"} position={"absolute"} left={direction==="left"?"0px":""} right={direction!=="left"?"0px":""} top="0px"display="flex" justifyContent="center" alignItems="center" height="100%" px={3} sx={{
            backgroundImage: `linear-gradient(${direction==="left"?"to right":"to left"},#202020 70%, #0000)`,
        }}>
            <IconButton onClick={onClick}>
                {direction==="left"?<ChevronLeft/>:<ChevronRight/>}
            </IconButton>
        </Box>
    );
}