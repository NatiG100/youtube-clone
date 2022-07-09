import { Box, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Filter from '../Components/Filter'
import VideoThumb from '../Components/VideoThumb'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box
        width="100%"  
        display="grid" 
        gridTemplateRows={"max-content 1fr"}
        sx={{
          backgroundColor:"#181818",
        }}
        pt="56px"
    >
      <Filter/>
      
        <Grid container spacing={"2%"} width="100%" p={3}>
          
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
            <VideoThumb
              channelAvatar={"https://source.unsplash.com/random"}
              channelName="Polite Leader"
              duration={"5:02"}
              thumb="https://source.unsplash.com/random"
              title={"New York Times Targets Jeff Durbin!"}
              views="4K"
              when={"2 days ago"}
            />
        </Grid>
    </Box>
  )
}
