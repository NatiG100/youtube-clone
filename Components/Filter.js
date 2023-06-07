import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

const Filter= ({borders=true})=>{
    const divRef = useRef();
    const {start,end,moveLeft,moveRight} = useScroll({ref:divRef,amount:160});
    const filters=[
        {text:"All",selected:true},
        {text:"Mixes",selected:false},
        {text:"David Wood",selected:false},
        {text:"Music",selected:false},
        {text:"Debates",selected:false},
        {text:"Thoughts",selected:false},
        {text:"JavaScript",selected:false},
        {text:"Electrical Engineering",selected:false},
        {text:"Live",selected:false},
        {text:"Bass Guitar",selected:false},
        {text:"Public speaking event",selected:false},
        {text:"Keyboards",selected:false},
        {text:"Acoustic drum kit",selected:false},
        {text:"Chords",selected:false},
        {text:"Computer",selected:false},
        {text:"Sketch",selected:false},
        {text:"Contemporary worship music",selected:false},
        {text:"Harps",selected:false},
        {text:"Recently uploaded",selected:false},
        {text:"Watched",selected:false},
        {text:"New to you",selected:false},
    ]
    return(
        <Box  
            width="100%" 
            position="sticky" 
            top="0" 
            zIndex="1" 
            right="0" 
            left="0" 
            height="max-content" 
            overflow="hidden" 
            boxShadow="0px 0px 8px rgba(0,0,0,1)"
        >
            {!start&&<Slider direction="left" onClick={moveRight}/>}
            <Box 
                ref={divRef}   
                className="hide-scroll" 
                width={"100%"} 
                display="flex" 
                overflow={"auto"} 
                gap="1%" 
                py={"10px"}  
                px={4} 
                borderTop={borders&&"1px solid #393939"} 
                borderBottom={borders&&"1px solid #393939"} 
                sx={{
                    backgroundColor:"#202020",
                    scrollbarWidth:"none"
                }}
            >
                {filters.map((item,index)=>(
                    <Chip 
                        key={index} 
                        label={item?.text} 
                        onClick={()=>{}}  
                        sx={{
                            border:item?.selected?"#fafafa":"1px solid #555555",
                            fontSize:"14px",
                            fontWeight:"600",
                            color:item?.selected?"#323232":"#fafafa",
                            backgroundColor:item?.selected?"#fafafa":"#323232"
                        }
                    }/>
                ))}
                
            </Box>
            {!end&&<Slider direction="right" onClick={moveLeft}/>}
        </Box>
    );
}
export default Filter;

const Slider = ({direction="left",onClick=()=>{}})=>{
    return(
        <Box  
            my={"1px"} 
            zIndex={"1000"} 
            position={"absolute"} 
            left={direction==="left"?"0px":""} 
            right={direction!=="left"?"0px":""} 
            top="0px"
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="95%" 
            px={3} 
            sx={{
                backgroundImage: `linear-gradient(${direction==="left"?"to right":"to left"},#202020 70%, #0000)`,
            }}
        >
            <IconButton onClick={onClick} size="small">
                {direction==="left"?<ChevronLeft/>:<ChevronRight/>}
            </IconButton>
        </Box>
    );
}