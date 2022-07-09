import { Avatar, Box, Grid, Typography } from "@mui/material";

const VideoThumb = ({thumb,channelAvatar,title,channelName,views,when,duration})=>{
    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
                display="grid"
                gridTemplateRows={"1fr max-content"}
                gap="15px"
            >
                <Box
                    position="relative"
                    height="150px"
                >
                    <img
                        src={thumb}
                        style={{
                            position: "absolute",
                            top:"0px",
                            left:"0px",
                            width:"100%",
                            height:"100%",
                            objectFit:"cover"
                        }}
                        alt="Thumb"
                    />
                    <Box
                        p={"px"}
                        px="4px"
                        position="absolute"
                        bottom="4px"
                        right="4px"
                        borderRadius={"2px"}
                        sx={{
                            backgroundColor:"#000b"
                        }}
                    >
                        <Typography color="white" fontSize={14} fontWeight={500}>{duration}</Typography>
                    </Box>
                </Box>
                <Box
                    display="grid"
                    gridTemplateColumns={"max-content 1fr"}
                    gap="15px"
                >
                    <Avatar src={channelAvatar}/>
                    <Box

                    >
                        <Typography color="#eaeaea" fontSize={14} fontWeight="700" mb={1}>{title}</Typography>
                        <Typography color="#9a9a9a" fontSize={13}>{channelName}</Typography>
                        <Box display="flex" justifyContent={"space-between"} alignItems="center" width="max-content" gap="4px">
                            <Typography color="#9a9a9a" fontSize={13}>{views}</Typography>
                            <Box height="3px" width="3px" borderRadius={"20px"} sx={{backgroundColor:"#9a9a9a"}}/>
                            <Typography color="#9a9a9a" fontSize={13}> {when}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
}

export default VideoThumb;