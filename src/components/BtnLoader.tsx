import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sagaActionFetchRandomFact } from '../redux/actions/actionsFacts';
import './btnLoader.scss';

interface IBtnLoaderProps {
  isLoad: boolean
}

export const BtnLoader: React.FC<IBtnLoaderProps> = ({isLoad}) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => dispatch(sagaActionFetchRandomFact('')), [dispatch])

  const classes: string[] = ['btn-loader']
  if(isLoad) classes.push('active-load')
 
  return(

    <button 
      className={classes.join(' ')}
      disabled={isLoad}
      onClick={handleClick}
    >
      <svg
        width="150"
        height="150"
        viewBox="0 0 40 40"
      >
        <g
          id="layer1"
          style={{
            display: 'inline'
          }}
          transform="translate(0,-257.31248)"
        >
          <path
            id="path1021-9"
            style={{
              display: "inline",
              opacity: 1,
              fillOpacity :1,
              stroke: 'none',
              strokeWidth: 1.01514232,
              strokeMiterlimit: 4, 
              strokeDasharray: 'none',
              strokeOpacity: 1
            }}
            d="m 2.3491692,274.27894 1.1745851,3.50398 1.1745852,3.50399 H 2.3491692 0 l 1.1745847,-3.50399 z m -0.7724372,7.00797 a 18.701764,18.49911 0 0 0 14.308344,14.14119 v -2.53038 A 16.208196,16.032562 0 0 1 4.1415371,281.28691 Z m 15.140806,13.38936 3.542373,-1.16186 3.542374,-1.16185 v 2.32371 2.32371 l -3.542374,-1.16186 z m 7.084747,0.76407 a 18.701763,18.49911 0 0 0 14.296111,-14.1533 h -2.558103 a 16.208195,16.032563 0 0 1 -11.738008,11.61629 z m 13.536048,-14.97674 -1.174586,-3.50399 -1.174583,-3.50399 h 2.349169 2.349167 l -1.174584,3.50399 z m 0.772435,-7.00798 A 18.701764,18.49911 0 0 0 23.802413,259.31443 v 2.53039 a 16.208196,16.032562 0 0 1 11.743551,11.6108 z m -14.705918,-13.81943 -3.542373,1.16186 -3.542374,1.16185 v -2.32371 -2.32371 l 3.542374,1.16185 z m -7.084747,-0.76407 A 18.701763,18.49911 0 0 0 2.0240011,273.02542 H 4.5821043 A 16.208195,16.032562 0 0 1 16.320103,261.40914 Z"
          />
        </g>
      </svg>     
    </button>
  )
}