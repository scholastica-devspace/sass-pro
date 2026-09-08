import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import Logo from '../assets/logo.png'


const NavBar = () => {
  return (
    <nav className='bg-background py-6'>
      <Container>
        <Flex className='justify-between items-center'>
          <Image src={Logo} alt="Logo" />

          <Flex className='items-center gap-x-[34px]'>
            <ul className='flex gap-x-[30px]'>
              <ListItem text="Home" type="true" />
              <ListItem text="Pages" type="true" />
              <ListItem text="About Us" />
              <ListItem text="Services" />
              <ListItem text="Blog" />
              <ListItem text="Contact" />
            </ul>
            <Button className='bg-transparent border-white hover:text-background hover:border-transparent' text="Let's Talk" />
          </Flex>

        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar