import React from 'react'

export default function Hero({children,hero,bcg}) {
    hero = hero===undefined?"defaultHero":hero;
    // bcg = bcg===undefined?"defaultHero":bcg;
    console.log(bcg);
    
    if(!bcg){
      console.log("bcg is undeined");
      
      return (
        <header className={hero}>
          {children}
        </header>
      )
    }else{
      console.log("bcg is defined");
  return (
    <header className={hero} style={{backgroundImage:bcg}}>
      {children}
    </header>
  )
    }
}
