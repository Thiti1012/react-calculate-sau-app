import React from 'react'
import bmi from './../assets/bmi.png'
export default function CardMenu({imgShow, stitleShow , titleShow}) {
  return (
    <div>
        <div className='border-1 border-gray-200 p-10 rounded-2xl shadow-2xl flex flex-col items-center'>
            <img src={imgShow} alt="bmi" className='w35' />
            <p className='mt-4 font-kanit text-xl font-bold'>{titleShow}</p>
            <p className='mt-4 font-itim text-lg text-gray-500'>{stitleShow}</p>
        </div>
    </div>
  )
}
