import { useEffect, useState } from 'react'
import { Card } from './Card/Card';

import classes from './ComplexList.module.css';

const { container, card__container } = classes;

export const ComplexList = () => {

  const [complexRenderList, setComplexRenderList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/complejo').then(res=>res.json()).then(data=>setComplexRenderList(data))
  }, [])
  

  console.log(complexRenderList);

  return (
    <div className={container}>
        <div className={card__container}>
            {
              complexRenderList?.map(complex=><Card complex={complex} key={complex.usuario}/>)
            }
        </div>
      
    </div>
  )
}