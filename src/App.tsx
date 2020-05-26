import React, { useEffect, useState, useCallback } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActionFetchRandomFact, sagaActionFetchCategories } from './redux/actions/actionsFacts';
import { IFact, IState } from './interfaces';
import { BtnCategory } from './components/BtnCategory';
import { categoryLabels } from './const';
import { BtnLoader } from './components/BtnLoader';
import { Intro } from './components/Intro';


function App() {
  const dispatch = useDispatch()
  const randomFact: IFact | null = useSelector((state: IState) => state.facts.randomFact)
  const categories: string[] = useSelector((state: IState) => state.facts.categories)
  const [isViewIntro, setIsViewIntro] = useState(true) 
  const closePopup = useCallback(() => setIsViewIntro(false), [setIsViewIntro])
  const isLoad: boolean = useSelector((state: IState) => state.app.loadFact)

  useEffect(() => {
    dispatch(sagaActionFetchRandomFact(''))
    dispatch(sagaActionFetchCategories())
  }, [dispatch])

  const factTextClasses: string[] = ['fact__text']
  if(isLoad) factTextClasses.push('load-active')

  return (  
    <>
      {isViewIntro && <Intro close={closePopup} />}

      <div className="container">
        
        <div className="fact">
        <div className={factTextClasses.join(' ')}>
          {randomFact && 
            <>
              <p className="fact__eng">{randomFact.value}</p>
              <p className="fact__rus">{randomFact.translateValue}</p>
              <div className="fact__link-translate">
                Переведено сервисом &nbsp;
                <a href="http://translate.yandex.ru" target="blank">«Яндекс.Переводчик»</a>
              </div>
              
            </>
          }
          <BtnLoader isLoad={isLoad}/>
          </div>
        </div>

        <div className="categories">
          {categories && categories.map(cat => {
            const title: string = categoryLabels[cat]
                                    ? categoryLabels[cat]
                                    : cat
            return(<BtnCategory key={cat} query={cat} title={title}/>)
          })}
        </div>
      </div>
    </>
  );
}

export default App;
