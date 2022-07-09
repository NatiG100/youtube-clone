import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Filter from '../Components/Filter'
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
      <Box >
        <Typography >This is the home page</Typography>
      </Box>
    </Box>
  )
}
