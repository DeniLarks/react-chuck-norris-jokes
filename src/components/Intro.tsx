import React from 'react';
import './intro.scss';

interface IntroProps {
  close: () => void
}

export const Intro: React.FC<IntroProps> = ({close}) => {

  const handleClick = (event: React.MouseEvent) => {
    if(event.target === event.currentTarget) {
      close()
    }
  }

  return(
    <div className="intro" onClick={handleClick}>
      <div className="intro__container">
        <p>
          Это React-приложение через API <a href="https://api.chucknorris.io/" target="blank">https://api.chucknorris.io/</a> получает шуточные, фейковые факты о Чаке Норрисе. Это приложение (как и шутки, получаемые от <a href="https://api.chucknorris.io/" target="blank">https://api.chucknorris.io/</a>) разработано только для развлекательных целей и не претендует на правдивость.
        </p>
        
        <button className="btn" onClick={close}>OK</button>
      </div>
    </div>
  )
}