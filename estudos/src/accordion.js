import './style.css'
import {useState} from 'react'

export const Accordion = () => {

  const [select, setSelected] = useState(null)


  // O toggle vai receber o valor do index, então se o select for igual ao index
  // ele vai recerber valor nulo atraves do set. Se não, o select recebe o valor
  // do index passado pelo props. 
  const toggleAnswer = (i) => {
    if (select === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return(
    <div className='wrapper'>
      <div className='accordion'>

        {data.map((item, index) => (
          <div className='item'>
            <div className='tittle' onClick={() => toggleAnswer(index)}>
              <h2>{item.question}</h2>
              <span>{select === index ? '-': '+'}</span>
            </div>
            <div className={select === index ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}

      </div>
    </div>
  )
}

const data = [
  {
    question: 'Question 1',
    answer: 
    `Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna. Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna.`
  },
  {
    question: 'Question 2',
    answer: 
    `Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna. Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna`
  },
  {
    question: 'Question 3',
    answer: 
    `Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna. Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna`
  },
  {
    question: 'Question 4',
    answer: 
    `Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna. Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna`
  },
  {
    question: 'Question 5',
    answer: 
    `Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna. Lorem ipsun dolor sit amet, consectetur adipiscing elit. Cras
    orci purus, aliquan in posuere necm futrum at tortor. Mauris
    ligula ipsum, conseqyat ud yrna eu, sikkucutydun laoreet
    tellus. Vestibulum in porsuere magna`
  },
]