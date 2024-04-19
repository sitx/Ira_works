import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='mb-2 text-3xl font-bold'>Приветствую на страничке</div>
        <div className='mb-5'>
          <p>тут будут выкладываться мой прогресс в html/css и возможно js</p>
        </div>
        <div>
          <Link href='/first'> - Первая</Link>
        </div>
      </div>
    </section>
  )
}
