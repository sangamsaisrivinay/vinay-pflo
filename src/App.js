import React, { lazy, Suspense } from 'react';
import { Banner, Schools, Footer, Downloads } from './pages';

const LazyAbout= lazy(()=>import ('./pages/About'))
const LazySkills= lazy(()=>import ('./pages/Skills'))
const LazyProjects= lazy(()=>import ('./pages/Projects'))

const App = () => {
  return (
    <div className="App">
      <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAbout/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazySkills/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyProjects/>
      </Suspense>
      <Schools/>
      <Downloads/>
      <Footer/>
    </div>
  )
}

export default App



