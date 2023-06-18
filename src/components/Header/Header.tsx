import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex items-center justify-between px-16 py-4 h-16 bg-gray-100 sticky top-0'>
      <div className='max-w-screen-2xl col'>
        <div className='font-bold text-2xl text-gray-800'>{`DL's Portfolio`}</div>
      </div>
      <ul className='flex gap-8'>
        <a href='#'>
          <li>{`About`}</li>
        </a>
        <a href='#'>
          <li>{`Technologies`}</li>
        </a>
        <a href='#'>
          <li>{`Experiences`}</li>
        </a>
        <a href='#'>
          <li>{`Let's talk`}</li>
        </a>
      </ul>
    </div>
  )
}
