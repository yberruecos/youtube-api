import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Router from './router/router'

const queryClient=new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Router/>
        </Suspense>
      </QueryClientProvider>
    </div>
  )
}

export default App
