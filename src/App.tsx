import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TasksDisplay } from './components/TasksDisplay'
import { useState } from 'react'

interface Task {
  id: number
  text: string
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (text: string) => {
    if (!text.trim()) return
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTasks([...tasks, newTask])
  } 

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

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