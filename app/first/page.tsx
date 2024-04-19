import Link from 'next/link'
import { Button } from '@/components/ui/button'
import './style.css'

export default function page() {
  return (
    <section className='relative'>
      <div className='absolute right-20 top-2 h-0 w-0'>
        <Link href='/'>
          <Button>Home</Button>
        </Link>
      </div>
      <div className='box-1'>
        <div className='box-1-1'></div>
      </div>
      <br /> <br />
      <div className='box-2'>
        <div className='box-2-1'></div>
      </div>
    </section>
  )
}
