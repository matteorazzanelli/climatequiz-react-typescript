import React, { useState } from 'react'
import Question from '../components/Question'
import { useNavigate } from 'react-router-dom';

export default function Test() {

  const navigate = useNavigate();

  const [testItems, setItems] = useState([
    {
      question: 'Qual è la principale causa del riscaldamento globale?',
      answers: [
        'La deforestazione',
        'L\'inquinamento dell\'acqua',
        'L\'uso eccessivo di fertilizzanti',
        'L\'emissione di gas serra'
      ],
      correctIndex: 3,
      checked: -1
    },
    {
      question: 'Che cos\'è l\'effetto serra?',
      answers: [
        'Un tipo di inquinamento atmosferico',
        'Il riscaldamento della superficie terrestre causato dai gas serra',
        'Un fenomeno che causa il raffreddamento globale',
        'La riduzione dello strato di ozono',
      ],
      correctIndex: 1,
      checked: -1
    },
    {
      question: 'Quale gas serra contribuisce maggiormente al cambiamento climatico?',
      answers: [
        'Ossigeno',
        'Azoto',
        'Andride carbonica',
        'Idrogeno',
      ],
      correctIndex: 2,
      checked: -1
    },
    {
      question: 'Cosa si intende per \'impronta di carbonio\'?',
      answers: [
        'La quantità di carbonio presente nel suolo',
        'Il segno lasciato dai combustibili fossili',
        'La quantità totale di gas serra emessi da un individuo, organizzazione o prodotto',
        'Una misura della biodiversità forestale',
      ],
      correctIndex: 2,
      checked: -1
    },
    {
      question: 'Quale tra questi è un effetto del cambiamento climatico?',
      answers: [
        'Aumento delle precipitazioni nevose',
        'Diminuzione del livello del mare',
        'Riduzione della biodiversità',
        'Miglioramento della qualità dell\'aria',
      ],
      correctIndex: 2,
      checked: -1
    },
    {
      question: 'Come possono gli alberi aiutare a combattere il cambiamento climatico?',
      answers: [
        'Assorbendo anidride carbonica',
        'Rilasciando ossigeno durante la notte',
        'Fornendo ombra alle città',
        'Creando pioggia artificiale',
      ],
      correctIndex: 0,
      checked: -1
    },
    {
      question: 'Che cos\'è l\'Accordo di Parigi sul clima?',
      answers: [
        'Un trattato per proteggere le specie in via di estinzione',
        'Un accordo internazionale per ridurre l\'uso di plastica',
        'Un patto globale per limitare l\'aumento della temperatura media mondiale',
        'Una conferenza annuale sul turismo sostenibile',
      ],
      correctIndex: 2,
      checked: -1
    },
    {
      question: 'Qual è uno dei modi più efficaci per ridurre la propria impronta di carbonio?',
      answers: [
        'Viaggiare di più in aereo',
        'Aumentare il consumo di carne',
        'Utilizzare energie rinnovabili',
        'Comprare più prodotti in plastica',
      ],
      correctIndex: 2,
      checked: -1
    },
    {
      question: 'Cosa significa sostenibilità?',
      answers: [
        'Sviluppare in modo che soddisfi le esigenze del presente senza compromettere la capacità delle generazioni future di soddisfare le proprie',
        'Aumentare la produzione industriale',
        'Costruire più infrastrutture urbane',
        'Ridurre il numero di specie protette',
      ],
      correctIndex: 0,
      checked: -1
    },
    {
      question: 'Quale tecnologia è considerata una soluzione rinnovabile per l\'energia?',
      answers: [
        'Il carbone',
        'L\'energia solare',
        'Il petrolio',
        'Il gas naturale',
      ],
      correctIndex: 1,
      checked: -1
    },
  ])
  const [error, setError] = useState('');

  const handleChange = (question: number, answer: number) => {
    console.log(question, answer)
    setItems(testItems.map((item, index)=>{
      return (
        index===question ? {...item, checked: answer} : item
      )
    }))
  }

  const handleSubmit = () => {
    const correctAnswers: number[] = testItems.map((it)=>it.correctIndex)
    const givenAnswers: number[] = testItems.map((it)=>it.checked)
    const tmpError: string = givenAnswers.includes(-1) ? 'Answer all questions first' : '';
    setError(tmpError);
    if(!tmpError){
      navigate('/result', {
        state: {
          correctAnswers: correctAnswers,
          givenAnswers: givenAnswers
        }
      });
    }
  }

  return (
    <>
      <h1>Test</h1>
      {testItems.map((item,index)=>{
        return (
          <Question 
            key={index} 
            data={
              {
                id: index,
                question: item.question,
                answers: item.answers.map((it,idx)=>{
                  return {id: idx, description: it, checked: item.checked===idx}
                }),
                correctIndex: item.correctIndex
              }
            }
            handleChange={(question: number, answer: number)=>handleChange(question, answer)}
          />
        )
      })}
      {
        error && 
        <span className='error-msg'>{error}</span>
      }
      <button className='submit-btn' onClick={handleSubmit}>MOSTRA RISULTATI</button>
    </>
  )
}