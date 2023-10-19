import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      Welcome to Matthew Greci&apos;s Paige Challenge!
      <Link href="/product-list">View our products</Link>
    </main>
  )
}
