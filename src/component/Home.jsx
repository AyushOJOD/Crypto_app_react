import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BtcSrc from "../assets/btc .png"
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}> 

      <motion.div style={{
        height:'80vh',
      }}
      animate={{
        translateY: "20px"
      }} 
      transition={{
        duration:2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      >
      <Image w={'full'} h={'full'} objectFit={'contain'} src={BtcSrc} filter={'grayscale(1)'}/>
      </motion.div>
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} mt={'-20'} color={'white'} >Crypt Crypto</Text>

    </Box>
  )
}

export default Home
