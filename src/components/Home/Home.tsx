import Image from 'next/image'
import './Home.css'

export const Home = () => {
  return (
    <div className='flex py-8 home-height mx-auto'>
      <div className='flex flex-col h-full justify-center w-1/2'>
        <h1 className='text-6xl font-medium'>{`Hello!`}</h1>
        <h1 className='text-8xl font-bold mb-6'>{`I'm Dang Lam`}</h1>
        <p className='text-2xl font-medium'>{`Web Developer | Freelancer`}</p>
      </div>
      <div className='w-1/2 flex justify-center border-slate-900'>
        <Image
          src='/images/Subject.png'
          width={400}
          height={250}
          alt=''
          className='h-full w-auto'
        />
      </div>
    </div>
  )
}
