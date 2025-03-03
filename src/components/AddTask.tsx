import { useState } from 'react'
import plus from '../assets/plus.svg'

interface AddTaskProps {
    addTask: (text: string) => void
}

export function AddTask({ addTask }: AddTaskProps) {
    const [taskText, setTaskText] = useState("")
    const [inputError, setInputError] = useState(false)

    const handleAddTask = () => {
        if (taskText.trim()) {
            setInputError(true)
            return
        }
        addTask(taskText)
        setTaskText("")
    }

    return (
        <div className='flex items-center justify-center gap-4 mt-8 w-full'>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                className={`p-4 bg-gray-500 rounded-md placeholder-gray-300 flex-grow border-2 border-transparent focus:border-sky-600 
                focus:border-2 ${inputError ? "border-red-600" : ""} focus:outline-none transition duration-200 text-white`}
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)} />
            <button className='bg-dark-blue hover:bg-sky-800 cursor-pointer transition duration-300 font-bold rounded-md text-white px-4 py-4 flex items-center justify-center gap-2' onClick={handleAddTask}>
                Criar
                <img src={plus} alt="plus sign"/>
            </button>
        </div>
    )
}