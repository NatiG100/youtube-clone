import Filter from "./Filter";
import Navbar from "./Navbar";

const { Box } = require("@mui/material");

const Layout = ({searchQuery="",setSearchQuery=()=>{},children})=>{
    return(
        <Box display="Grid" gridTemplateRows={"max-content 1fr"} height="100vh" width="100%" boxSizing={"border-box"}>
            <Box  width="100%" >
                    <Navbar/>
            </Box>
            <Box display="grid" gridTemplateColumns={"max-content 1fr"} gridTemplateRows="1fr" width="100%" height="100%" sx={{backgroundColor:"blue"}}>
                <Box height="100%" sx={{backgroundColor:"yellow"}} >
                    asddfasdf
                </Box>
                <Box height="100%" width="100%"  display="grid" gridTemplateRows={"max-content 1fr"}>
                    <Filter/>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default Layout;