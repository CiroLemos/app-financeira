import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const [message, setMessage] = useState('Loading')
  const [participantes, setParticipantes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3333/").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.nome)
        setParticipantes(data.participantes)
      }
    )
  }, [])

  return (
    <div className="flex flex-col justify-center items-center text-4xl h-screen">
      <span>{message}</span>
      {
        participantes.map((participantes, i) => (
          <div className="text-base" key={i}>{participantes}</div>
        ))
      }
    </div>
  );
}
  