import React from 'react';
import { useDispatch } from 'react-redux';
import { sagaActionFetchRandomFact } from '../redux/actions/actionsFacts';

interface IBtncategoryProps {
  title: string
  query: string
}

export const BtnCategory:React.FC<IBtncategoryProps> = ({title, query}) => {
  const dispatch = useDispatch()

  const clickBtn = (category: string) => {
    dispatch(sagaActionFetchRandomFact(category))
  }

  return(
    <>
      <button className="btn" onClick={clickBtn.bind(null, query)}>{title}</button>
    </>
  )
}