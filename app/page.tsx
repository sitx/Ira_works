import Link from 'next/link'
import { Button } from '@/components/ui/button'

const routes = [
  { url: '/', name: 'Home' },
  { url: '/first', name: 'First' }
]

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='mb-2 text-3xl font-bold'>Приветствую на страничке</div>
        <div className='mb-5'>
          <p>тут будут выкладываться мой прогресс в html/css и возможно js</p>
        </div>
        <div>
          {routes.map((route, i) => {
            if (i === 0) return
            return (
              <Link href={route.url} key={i}>
                {' '}
                <Button>{route.name}</Button>{' '}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
