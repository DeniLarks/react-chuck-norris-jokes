import React from 'react';
import { useDispatch } from 'react-redux';
import { sagaActionFetchRandomFact } from '../redux/actions/actionsFacts';

interface IBtncategoryProps {
  title: string
}

export const BtnCategory:React.FC<IBtncategoryProps> = ({title}) => {
  const dispatch = useDispatch()

  const clickBtn = (category: string) => {
    dispatch(sagaActionFetchRandomFact(category))
  }

  return(
    <>
      <button onClick={clickBtn.bind(null, title)}>{title}</button>
    </>
  )
}