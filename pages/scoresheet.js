import React from 'react'

import { useRouter } from 'next/router'

const scoresheet = () => {
    const { query } = useRouter();
    const score = query.score

    return (
        <div>
            
            <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
                <h1 className='text-3xl font-bold mb-5'>All Done!</h1>
                <p className='font-medium my-3 text-md'>Your final score is {score}</p>
                <span>        
                    <span className='font-medium my-3 text-md'>Enter initials</span>
                    <input className='mx-2 h-8' autoFocus onChange={(e) => setname(e.target.value)}></input>
                    <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2'> Submit</button>
                </span>
            </div>

        </div>
    )
}

export default scoresheet
