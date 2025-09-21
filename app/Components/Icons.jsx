import React from 'react'

const Icons = ({ icon: Icon, color: Color, size: Size }) => {
    return (
        <div className='border-[.02rem] flex justify-center items-center border-gray-500 rounded-[.5rem] h-14 w-14'>
            {Icon && <Icon color={Color} size={Size} />}
        </div>
    )
}

export default Icons