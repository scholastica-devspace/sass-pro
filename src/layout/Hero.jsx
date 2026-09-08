import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Heroimage from '../assets/hero-image.png'

const Hero = () => {
    return (
        <>
            <section className='bg-background pt-40 pb-[200px] relative'>
                <Container>
                    <Flex>
                        <div className='w-1/2'>
                            <h5 className='font-raleway font-bold text-lg text-white'>Business & Technologies</h5>
                            <h2 className='font-raleway font-bold text-[52px] text-white pt-3 pb-11'>We help tech companies deliver great software</h2>
                            <SubHeading className="w-[552px]" text="Since 1999. For millions of users. We transform businesses with powerful and"/>
                            <SubHeading text="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."/>
                            <div className='w-[552px] relative mt-11'>
                                <input className='w-full p-4 rounded-lg' type="text" />
                                <button className='font-raleway font-semibold text-base text-white bg-accent absolute top-1/2 -translate-y-1/2 right-0 h-full px-6 rounded-lg rounded-s-none
                                transition-all duration-300 ease-in-out'>Request for Demo</button>
                            </div>
                            
                        </div>
                        <div className='absolute top-1/2 -translate-y-1/2 right-0 w-1/2'>
                            <Image src={Heroimage} alt="hero Image"/>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Hero