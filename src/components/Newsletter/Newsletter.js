import React from 'react'
import '../Newsletter/Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-main'>
        <div className='w-11/12 mx-auto'>
            <div className='bg-white rounded-lg md:flex items-center md:h-[220px]'>
                <div className='img_news basis-2/5'>
                </div>
                <div className='news-txt basis-3/5 px-4 pb-4 md:pb-0'>
                    <div className='md:w-96 mx-auto'>
                        <h3 className='font-bold text-2xl md:text-3xl mb-4 text-center md:text-start'>Don't miss a great deal</h3>
                        <p className='mb-4 text-center md:text-start'>Stay one step ahead. Find the best value travel with the latest deals, tips and news.</p>
                        <form>
                            <div className='flex items-center'>
                                <input name='' type='email' className='p-2 rounded-s bg-gray-100 basis-4/5' placeholder='Enter email address' required />
                                <input name='' type='submit' className='p-2 rounded-e bg-blue-900 text-white border-0 basis-1/5' value='Subscribe' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter