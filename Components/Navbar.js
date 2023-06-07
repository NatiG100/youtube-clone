import { AppsOutlined, Menu, NotificationsOutlined, VideoCallOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton, TextField } from "@mui/material";
import Search from "./Search";

const Navbar = ({sx})=>{
    return(
        <AppBar sx={{...sx,boxShadow:"none"}} position="static" >
            <Box display="flex" justifyContent={"space-between"} alignItems="center" py={"8px"} pl={"10px"} pr={"3%"} sx={{backgroundColor:"#202020"}}>

            <Box display="flex" justifyContent={"center"} alignItems="center" gap="5%">
                <IconButton>
                    <Menu/>
                </IconButton>
                <img src="icons/Youtube.PNG" alt="yt icon"/>
            </Box>
            <Search/>
            <Box display="flex" justifyContern="space-between" alignItems="center" gap="5px">
                <IconButton>
                    <VideoCallOutlined fontSize="medium"/>
                </IconButton>
                <IconButton>
                    <AppsOutlined fontSize="medium"/>
                </IconButton>
                <IconButton>
                    <NotificationsOutlined fontSize="medium"/>
                </IconButton>
                <Avatar/>
            </Box>
            </Box>

        </AppBar>
    );
}
export default Navbar;