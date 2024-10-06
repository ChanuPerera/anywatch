import React from 'react'

function DataBlock({ year, population }) {
  return (
    <div className='w-1/3 p-2'>
      <div className='rounded-md border-indigo-500 border-[1px] flex flex-col space-y-2 p-2'>
        <div className='text-lg  text-gray-600 flex flex-row justify-between items-center'>
           <div className='font-bold'> <span></span> Year</div>
           <div> <span>{year}</span> </div>
          </div>
          <div className='text-lg  text-gray-600 flex flex-row justify-between items-center'>
           <div className='font-bold'> <span></span> Population</div>
           <div> <span> {population}</span> </div>
          </div>
      </div>
    </div>
  )
}

export default DataBlock
