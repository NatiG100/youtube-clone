import DrawerMenu from "./DrawerMenu";
import Filter from "./Filter";
import Navbar from "./Navbar";

const { Box } = require("@mui/material");

const Layout = ({searchQuery="",setSearchQuery=()=>{},children})=>{
    return(
        <Box 
            height="100vh" 
            width="100%" 
            display="grid" 
            gridTemplateRows={"max-content 1fr"} 
            sx={{backgroundColor:"#292929"}}
        >
            <Navbar 
                sx={{
                    width:"100%",
                    position:"sticky",
                    top:"0px",
                    left:"0px",
                    zIndex:"10000"
                }}
            />
            <Box
                position="absolute"
                top="0px"
                left="0px" 
                height="100%" 
                display="grid" 
                gridTemplateColumns={"max-content 1fr"} 
                gridTemplateRows={"1fr"} 
                width="100%" 
            >
                <Box height="100%" overflow={"auto"} sx={{paddingTop:"56px"}} className="drawer">
                    <DrawerMenu/>
                </Box>
                {/* <h1>laksjdf</h1> */}
                {children}
            </Box>
        </Box>
    );
}

export default Layout;