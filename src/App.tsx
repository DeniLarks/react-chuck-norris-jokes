import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActionFetchRandomFact, sagaActionFetchCategories } from './redux/actions/actionsFacts';
import { IFact, IState } from './interfaces';

function App() {
  const dispatch = useDispatch()
  const randomFact: IFact | null = useSelector((state: IState) => state.facts.randomFact)
  const categories: string[] = useSelector((state: IState) => state.facts.categories)

  useEffect(() => {
    dispatch(sagaActionFetchRandomFact())
    dispatch(sagaActionFetchCategories())
  }, [dispatch])

  return (
    <div>
      {randomFact && 
        <>
          <p>{randomFact.value}</p>
          <p>{randomFact.translateValue}</p>
        </>
      }
      {categories && categories.map(cat => <p key={cat}>{cat}</p>)}
    </div>
  );
}

export default App;
