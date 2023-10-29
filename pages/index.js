import { About } from "@/components/About"
import { Header } from "@/components/Header"
import Navbar from "@/components/Navbar"
import { Proejcts } from "@/components/Proejcts"
import { Skill } from "@/components/Skill"
import Head from "next/head"



export default function Home() {
  return (
    <div>
      <Head>
        <title>Faisal Ardhani | Backend Web Depeloper</title>
        <meta name="Faisal Ardhani" content="My Portofolio 1.1" />
        <link rel="icon" type="image" href="/assets/fa.png" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Proejcts />

    </div>
  )
}
