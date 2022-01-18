import Link from 'next/link'
import React from 'react'


const highscores = () => {
    return (
        <div>
           
            <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
                <h1 className='text-3xl font-bold mb-5'>Highscores</h1>
                <p>1.</p>
                <p>1.</p>
                <div className='mt-3'>
                <Link href='/'>
                <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2 mr-2'> Go back</button>
                </Link>
                <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2 ml-2'> Clear Highscores</button>
                </div>
            </div>

        </div>
    )
}

export default highscores
