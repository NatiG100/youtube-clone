import { SearchOutlined } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import {  useRef,  } from "react";
import useCheckFocus from "../hooks/useCheckFocus";

const Search = ()=>{
    const inputRef = useRef();
    const {focused,handleBlur,handleFocus} = useCheckFocus({ref:inputRef});
    return(
        <Box 
            border="1px solid #393939" 
            maxWidth="600px" 
            width="80%" 
            display="grid" 
            alignItems={"center"} 
            gridTemplateColumns={`${focused?"max-content ":""}1fr max-content`} 
            borderRadius={"2px"}
        >
            <Box px={1} pr={0} sx={{backgroundColor:"#151515"}} height="100%" display={focused?"flex":"none"} alignItems={"center"} justifyContent="center">
                <SearchOutlined sx={{strokeWidth:"1px"}}/>
            </Box>
            <InputBase sx={{fontSize:"17px",backgroundColor:"#151515",px:1,py:"2px"}} onFocus={handleFocus} onBlur={handleBlur} ref={inputRef} placeholder="Search"/>
            <Box px={2} sx={{backgroundColor:"#393939"}} height="100%" display="flex" alignItems={"center"} justifyContent="center">
                <SearchOutlined/>
            </Box>
        </Box>
    );
}
export default Search;