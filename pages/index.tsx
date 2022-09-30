import Head from 'next/head'
import { NFTCard } from '../components/NFTCard'

export default function Home() {
  return (
    <>
    <div className='h-full w-screen bg-[#1d1f2b] px-24'>
      <Head>
        <title>Coders NFT</title>
      </Head>

      <div className=' pt-20 flex justify-between items-center'>
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
        {nfts.map((nft) => (
          <NFTCard nft={nft} key={nft.id}/>
        ))}
        </div>
      </div>

    </div>
    </>
  )
}


const nfts = [{
  id : '1',
  name:'#4473',
  price: '0.1',
  author:'0xe51B77159',
  image: 'https://images.unsplash.com/photo-1647334360887-89fc70bb6b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  description: 'Descrição NFT',
},

{
  id : '1',
  name:'#4473',
  price: '0.1',
  author:'0xe51B77159',
  image: 'https://images.unsplash.com/photo-1647334360887-89fc70bb6b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  description: 'Descrição NFT',
},

{
  id : '1',
  name:'#4473',
  price: '0.1',
  author:'0xe51B77159',
  image: 'https://images.unsplash.com/photo-1647334360887-89fc70bb6b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  description: 'Descrição NFT',
},

{
  id : '1',
  name:'#4473',
  price: '0.1',
  author:'0xe51B77159',
  image: 'https://images.unsplash.com/photo-1647334360887-89fc70bb6b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  description: 'Descrição NFT',
},
]