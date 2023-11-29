import { useState } from 'react'
import React from 'react'
import globalStyle from './globalStyle.module.css'
import MapContainer from './components/MapContainer/MapContainer.jsx'

function App() {
  return (
    <div className={globalStyle.mapContainerWrapper}>
      <MapContainer />
    </div>
  )
}

export default App;
