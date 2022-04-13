import React from 'react'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  )
}

export default Home