import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Router from './router/router'

const queryClient=new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </div>
  )
}

export default App
