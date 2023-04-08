import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard')
  }, [])
  return (
    <>
      <h1>This is the IQAC APP🌚</h1>
    </>
  )
}
