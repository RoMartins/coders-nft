import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className='h-full w-screen bg-[#1d1f2b] px-24'>
      <Head>
        <title>Coders NFT</title>
      </Head>

      <div className=' pt-24 flex justify-between items-center'>
        <h2 className='text-5xl font-bold  text-white'>
          Discover
        </h2>

        <input placeholder='Search item'  className='h-12 w-64 p-4 rounded-xl'/>
      </div>

      <hr className='w-full border-[#242634] mt-12'/>

      <div className='flex-col items-start gap-7  mt-12'>
        <h2 className="text-5xl font-bold">
          Popular Bid
        </h2>

        <div className='flex flex-wrap items-start gap-7 mt-7 min-h-[50%]'>
        </div>
      </div>

    </div>
    </>
  )
}
