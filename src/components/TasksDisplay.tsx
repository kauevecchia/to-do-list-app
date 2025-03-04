import empty from '../assets/empty.svg'
import checkedIcon from '../assets/checked-default.svg'
import uncheckedIcon from '../assets/unchecked-default.svg'
import trashDefault from '../assets/delete-default.svg'
import trashHover from '../assets/delete-hover.svg'
import { useState } from 'react'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksDisplayProps {
    tasks: Task[]
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
}

export function TasksDisplay({ tasks, toggleTask, deleteTask }: TasksDisplayProps) {
    const [hoveredTask, setHoveredTask] = useState<number | null>(null)

    return (
        <section className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center justify-baseline">
                    <p className="text-blue font-bold">Tarefas criadas</p>
                    <span className="text-gray-200 font-bold bg-gray-400 rounded-full py-0.5 px-2.5 text-sm">{tasks.length}</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <p className="text-purple font-bold">Tarefas concluídas</p>
                    <span className="text-gray-200 font-bold bg-gray-400 rounded-full py-0.5 px-2.5 text-sm">{`${tasks.filter(task => task.completed).length} de ${tasks.length}`}</span>
                </div>
            </div>

            <div className="border-t border-gray-400">
                {tasks.length < 1 ?
                    <div className='flex flex-col items-center justify-center gap-4 mt-16'>
                        <img src={empty} alt=""/>
                        <div>
                            <p className='text-gray-300 font-bold'>Você ainda não tem tarefas cadastradas</p>
                            <p className='text-gray-300'>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                    :
                    
                }
            </div>
        </section>
    )
}