import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TasksDisplay } from './components/TasksDisplay'

export function App() {
  return (
    <div className='flex flex-col items-center justify-center font-inter min-h-screen bg-gray-600'>
      <Header />

      
      <main className='bg-gray-600 min-h-screen flex flex-col items-center gap-16 max-w-3xl w-full'>
        <AddTask />

        <TasksDisplay />
      </main>
      
    </div>
  )
}