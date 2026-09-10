import React from 'react'
import Image from './Image'
import Flex from './Flex'

const AboutCard = ({src,num,about}) => {
    return (
        <Flex className='gap-x-5 items-center'>
            <Image src={src}/>
            <div>
                <h2 className='font-inter font-bold text-[30px] text-accent pb-3'>{num}</h2>
                <p className='font-raleway font-semibold text-base text-[#495E6C]'>{about}</p>
            </div>
        </Flex>
    )
}

export default AboutCard