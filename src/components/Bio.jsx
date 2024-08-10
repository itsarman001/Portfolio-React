import React from 'react'
import {BIO} from '../constants'

function Bio() {
  return (
    <section id='bio' className='flex max-w-4xl flex-col gap-12 pt-20'>
        <h2 className='text-center text-3xl lg:text-4xl'>Bio</h2>
        <div>
            {BIO.map((bio, index) => (
                <p key={index} className='mb-4 text-lg lg:text-xl'>
                    {bio}
                </p>
            ))}
        </div>
    </section>
  )
}

export default Bio