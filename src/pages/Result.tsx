import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const [result, setResult] = useState(0);
  const [judgment, setJudgment] = useState('');

  useEffect(()=>{
    const correctAnswers: number[] = location.state.correctAnswers;
    const givenAnswers: number[] = location.state.givenAnswers
    const tmp: number = correctAnswers.reduce((acc, el, idx)=>givenAnswers[idx]===el ? 1+acc : acc, 0)
    setResult(tmp);
    if(tmp>=0 && tmp <= 3)
        setJudgment('BASE: Hai iniziato il tuo viaggio per comprendere meglio il cambiamento climatico. Continua a informarti e presto vedrai miglioramenti!');
    if(tmp>=4 && tmp<=7)
        setJudgment('INTERMEDIO: Hai una conoscenza di base sul cambiamento climatico, ma c\'è ancora spazio per approfondire. Continua a esplorare e imparare!');
    if(tmp==8 || tmp==9)
        setJudgment('ESPERTO/A: Hai una buona comprensione delle questioni relative al cambiamento climatico. Sei sulla strada giusta per diventare un esperto!');
    if(tmp===10)
        setJudgment('MAESTRO/A: Complimenti! Hai una conoscenza eccellente sul cambiamento climatico. Il tuo impegno per l\'ambiente è evidente e ispiratore!');
  }, [])

  const handleRerun = () => {
    navigate('/')
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        Il tuo risultato è {result}
      </h1>
      <p style={{textAlign: 'center', fontSize: '24px'}}>{judgment}</p>
      <button className='submit-btn' onClick={handleRerun}>RICOMINCIA</button>
    </>
  )
}
