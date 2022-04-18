import React, {useEffect} from 'react'

import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import {RecoilRoot} from 'recoil';
const App: React.FC = () => {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>


    </>
  )
}

export default App