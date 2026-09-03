import React from 'react'
import { FaAngleDown } from "react-icons/fa6";


const ListItem = ({text, type}) => {
    return (
        <li className='font-inter font-medium text-base text-primary cursor-pointer'>{text}
        {
            type && <FaAngleDown className='inline ml-1'/>
        }
        </li>
    )
}

export default ListItem