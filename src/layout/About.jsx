import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import AboutCard from '../components/AboutCard'
import Professionals from '../assets/about-1.png'
import Experience from '../assets/about-2.png'
import Fund from '../assets/about-3.png'
import { FaStar } from "react-icons/fa6";


const About = () => {
    return (
        <section >
            <Container>
                <div className='shadow-2xl rounded-xl px-[50px] my-[100px]'>
                    <Flex className='items-center justify-between pt-[50px] pb-10 border-b'>
                        <div>
                            <h5 className='font-raleway font-bold text-sm text-accent pb-4'>Who we are?</h5>
                            <Heading calssName='w-[750px]' text="More than 5,000 users around the world are already using STDEV actively" />
                        </div>
                        <div>
                            <Flex className='flex flex-col justify-center items-center w-[177px] h-[186px] bg-[#CFDDDB] rounded-md'>
                                <h2 className='font-inter font-bold text-[50px] text-heading'>4.8</h2>
                                <ul className='flex text-lg text-[#FF7282] gap-x-1 pt-1 pb-2'>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                                <SubHeading className="text-[#495E6C]" text="35 Reviews" />
                            </Flex>
                        </div>
                    </Flex>
                    <Flex className='justify-between pt-6 pb-10 items-center'>
                        <AboutCard src={Professionals} num="70+" about="Professionals"/>
                        <AboutCard src={Experience} num="22 Years" about="Year of experience"/>
                        <AboutCard src={Fund} num="$40+M" about="Fundraised by customers"/>

                    </Flex>
                </div>

            </Container>
        </section>
    )
}

export default About