import React from 'react'
import Signin from '../components/Signin'

export default function Start() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Test sul cambiamento climatico: quante ne sai?</h1>
      <div style={{fontSize: 24, textAlign: 'center', paddingTop: '30px', paddingLeft: '100px', paddingRight: '100px'}}>
        Partecipa al nostro quiz per vedere quanto ne sai sull'ambiente e sul cambiamento climatico.
        <br/><br/>
        Alla fine riceverai un punteggio da 0 a 10 da poter condividere con i tuoi amici sui social! 
      </div>
      <Signin/>
    </>
  )
}
