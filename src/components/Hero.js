import React from 'react'

export default function Hero({children,hero}) {
    hero = hero===undefined?"defaultHero":hero;
  return (
    <header className={hero}>
      {children}
    </header>
  )
}
