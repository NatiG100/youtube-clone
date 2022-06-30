const { Box } = require("@mui/material");

const Layout = ({searchQuery="",setSearchQuery=()=>{},children})=>{
    return(
        <Box display="Grid" gridTemplateRows={"max-content 1fr"} height="100vh" width="100%" boxSizing={"border-box"}>
            <Box  width="100%" sx={{backgroundColor:"green"}}>
                    asdfasf <br/>asdfasdfd<br/>
            </Box>
            <Box display="grid" gridTemplateColumns={"max-content 1fr"} gridTemplateRows="1fr" width="100%" height="100%" sx={{backgroundColor:"blue"}}>
                <Box height="100%" sx={{backgroundColor:"yellow"}} >
                    asddfasdf
                </Box>
                <Box height="100%" width="100%" sx={{backgroundColor:"#ff000055"}} >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default Layout;