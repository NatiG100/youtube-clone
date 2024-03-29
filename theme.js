import { createTheme } from "@mui/material";
export const darkTheme = createTheme({
    palette:{
        mode:'dark',
        background:{
            paper:"#202020"
        }
    },
    components:{
        MuiListItemIcon:{
            defaultProps:{
                sx:{
                    mr:"-9px",
                }
            }
        }
    },
});