import React, { useState, useEffect } from 'react';
import './intro.scss';
import { CSSTransition } from 'react-transition-group';

export const Intro: React.FC = () => {
  const [isView, setIsView] = useState(false)

  useEffect(() => {
    setIsView(true)
  }, [])

  const handleClick = (event: React.MouseEvent) => {
    if(event.target === event.currentTarget) {
      setIsView(false)
    }
  }

  return(
    <CSSTransition
      in={isView}
      timeout={1000}
      classNames={'intro'}
      mountOnEnter
      unmountOnExit  
    >
      <div className="intro" onClick={handleClick}>
        <div className="intro__container">
          <p>
            Это React-приложение через API <a href="https://api.chucknorris.io/" target="blank">https://api.chucknorris.io/</a> получает шуточные, фейковые факты о Чаке Норрисе. Это приложение (как и шутки, получаемые от <a href="https://api.chucknorris.io/" target="blank">https://api.chucknorris.io/</a>) разработано только для развлекательных целей и не претендует на правдивость.
          </p>
          
          <button 
            className="btn"
            onClick={() => setIsView(false)}
          >OK</button>
        </div>
      </div>
    </CSSTransition>
  )
}