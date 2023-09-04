import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} bgColor={'blackAlpha.900'} shadow={'base'}>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/'>HOME</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/exchanges'>EXCHANGE</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/coins'>COINS</Link>
      </Button>
    </HStack>
  )
}

export default Header
