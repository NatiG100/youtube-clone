import { AccessTimeOutlined, KeyboardArrowDownOutlined,KeyboardArrowUpOutlined, ExploreOutlined, HistoryOutlined, Home, Notifications, SlideshowOutlined, Subscriptions, SubscriptionsOutlined, ThumbUpOutlined, VideoLibraryOutlined, SportsEsportsOutlined, PodcastsOutlined, LocalFloristOutlined, LightbulbOutlined, EmojiEventsOutlined, SettingsOutlined, FlagOutlined, HelpOutlineOutlined, FeedbackOutlined } from "@mui/icons-material";
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const categoryMenu = [
    {
        name:"Home",
        icon:<Home/>,
        selected:true,
        id:1,
        onClick:()=>{},
    },
    {
        name:"Explore",
        icon:<ExploreOutlined/>,
        selected:false,
        id:2,
        onClick:()=>{},
    },
    {
        name:"Subscriptions",
        icon:<SubscriptionsOutlined/>,
        selected:false,
        id:3,
        onClick:()=>{},
    },

]

const filterMenu = [
    {
        name:"Library",
        icon:<VideoLibraryOutlined/>,
        selected:false,
        id:1,
        onClick:()=>{},
    },
    {
        name:"History",
        icon:<HistoryOutlined/>,
        selected:false,
        id:2,
        onClick:()=>{},
    },
    {
        name:"Your videos",
        icon:<SlideshowOutlined/>,
        selected:false,
        id:3,
        onClick:()=>{},
    },
    {
        name:"Watch Later",
        icon:<AccessTimeOutlined/>,
        selected:false,
        id:4,
        onClick:()=>{},
    },
    {
        name:"Liked Videos",
        icon:<ThumbUpOutlined/>,
        selected:false,
        id:5,
        onClick:()=>{},
    },
]

const subscriptions=[
    {
        name:"Tyson James",
        id:1,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"Apologia Studios",
        id:2,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"ReformedWiki2.0",
        id:3,        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:false,
    },
    {
        name:"Fox News",
        id:4,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"Davie504",
        id:5,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:false,
    },
    {
        name:"Ben Shapiro",
        id:6,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"CrashCourse",
        id:7,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"Web Dev Simplified",
        id:8,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:false,
    },
    {
        name:"Polite Leader",
        id:9,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"Charlie Kirk",
        id:10,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"Discovery Science",
        id:11,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"Michael Knowles",
        id:12,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
    {
        name:"PragerU",
        id:13,
        get avatar(){return `https://source.unsplash.com/random?${this.name}`},
        notification:true,
    },
]

const moreFromYoutube = [
    {
        name:"Gaming",
        icon:<SportsEsportsOutlined/>,
        selected:false,
        id:1,
        onClick:()=>{},
    },
    {
        name:"Live",
        icon:<PodcastsOutlined/>,
        selected:false,
        id:2,
        onClick:()=>{},
    },
    {
        name:"Fashion & beauty",
        icon:<LocalFloristOutlined/>,
        selected:false,
        id:3,
        onClick:()=>{},
    },
    {
        name:"Learning",
        icon:<LightbulbOutlined/>,
        selected:false,
        id:4,
        onClick:()=>{},
    },
    {
        name:"Sport",
        icon:<EmojiEventsOutlined/>,
        selected:false,
        id:5,
        onClick:()=>{},
    },
]

const more = [
    {
        name:"Setting",
        icon:<SettingsOutlined/>,
        selected:false,
        id:1,
        onClick:()=>{},
    },
    {
        name:"Report history",
        icon:<FlagOutlined/>,
        selected:false,
        id:2,
        onClick:()=>{},
    },
    {
        name:"Help",
        icon:<HelpOutlineOutlined/>,
        selected:false,
        id:3,
        onClick:()=>{},
    },
    {
        name:"Send feedback",
        icon:<FeedbackOutlined/>,
        selected:false,
        id:4,
        onClick:()=>{},
    },
]
const DrawerMenu = ()=>{
    const [showMoreSubscriptions,setShowMoreSubscriptions] = useState(false);
    const toggleShowMorerSubscriptions = ()=>{
        setShowMoreSubscriptions((state)=>(!state))
    }
    return(
            <List 
            
                sx={{
                    width:"240px",
                    py:"0px",
                    background:"#202020",
                    height:"100%",
                    pt:1.5,
                    "&& .Mui-selected": {
                        bgcolor: "#fff2",
                    },
                    "&& .Mui-selected:hover":{
                        bgcolor: "#ffffff38"
                    },
                    overflow:"auto",
                    postion:"sticky",
                    top:"0px"
                }}
            >
                {categoryMenu.map((menu)=>(
                    <ListItemButton selected={menu.selected} onClick={menu.onClick} sx={{py:"5px"}} key={menu.id}>    
                        <ListItemIcon sx={{mr:"-9px"}}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight="500" fontSize="13px" color="white">{menu.name}</Typography>} />
                    </ListItemButton>
                ))}
                <Divider sx={{my:1}}/>
                {filterMenu.map((menu)=>(
                    <ListItemButton selected={menu.selected} onClick={menu.onClick} sx={{py:"5px"}} key={menu.id}>    
                        <ListItemIcon sx={{mr:"-9px"}}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight="500" fontSize="13px" color="white">{menu.name}</Typography>} />
                    </ListItemButton>
                ))}
                <Divider sx={{my:1}}/>
                <ListItem>
                    <Typography fontSize="13px" fontWeight="600" color="#808080">SUBSCRIPTIONS</Typography>
                </ListItem>
                {
                    subscriptions.slice(0,showMoreSubscriptions?subscriptions?.length-1:6).map((subscription)=>(
                        <ListItemButton key={subscription.id} sx={{py:"5px"}}>
                            <ListItemAvatar sx={{mr:"-9px"}}>
                                <Avatar sx={{width:"22px",height:"22px"}} src={subscription.avatar}/>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography fontWeight="500" fontSize="13px" color="white">{subscription.name}</Typography>}/>
                            {subscription?.notification&&<Box height="4px" borderRadius="5px" width="4px" sx={{backgroundColor:"#4567ef"}}></Box>}
                        </ListItemButton>
                    ))
                }
                <ListItemButton selected={false} onClick={toggleShowMorerSubscriptions} sx={{py:"5px"}}>    
                    <ListItemIcon sx={{mr:"-9px"}}>
                        {showMoreSubscriptions?<KeyboardArrowUpOutlined/>:<KeyboardArrowDownOutlined/>}
                    </ListItemIcon>
                    <ListItemText primary={<Typography fontWeight="500" fontSize="13px" color="white">{showMoreSubscriptions?"Show fewet":`Show ${6} more`}</Typography>} />
                </ListItemButton>
                <Divider sx={{my:1}}/>
                <ListItem>
                    <Typography fontSize="13px" fontWeight="600" color="#808080">MORE FROM YOUTUBE</Typography>
                </ListItem>
                {moreFromYoutube.map((menu)=>(
                    <ListItemButton selected={menu.selected} onClick={menu.onClick} sx={{py:"5px"}} key={menu.id}>    
                        <ListItemIcon sx={{mr:"-9px"}}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight="500" fontSize="13px" color="white">{menu.name}</Typography>} />
                    </ListItemButton>
                ))}

                <Divider sx={{my:1}}/>
                {more.map((menu)=>(
                    <ListItemButton selected={menu.selected} onClick={menu.onClick} sx={{py:"5px"}} key={menu.id}>    
                        <ListItemIcon sx={{mr:"-9px"}}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight="500" fontSize="13px" color="white">{menu.name}</Typography>} />
                    </ListItemButton>
                ))}
            </List>
    );
}

export default DrawerMenu;