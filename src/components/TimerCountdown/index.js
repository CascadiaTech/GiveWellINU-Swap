import React, { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`10/01/${year}`) - +new Date()

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 800 * 240 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <div style={{ color: 'white' }}>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Presale is Active! Only Whitelisted wallets can purchase an NFT</span>
      )}{' '}
      Left till Presale is Open
    </div>
  )
}
