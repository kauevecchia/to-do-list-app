import { Header } from './components/Header'
import { AddTask } from './components/AddTask'

export function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-600'>
      <Header />

      
      <main className='bg-gray-600 min-h-screen flex flex-col items-center max-w-3xl w-full'>
        <AddTask />

      </main>
      
    </div>
  )
}