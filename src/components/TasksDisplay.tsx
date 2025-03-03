export function TasksDisplay() {
    return (
        <section className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center justify-baseline">
                    <p className="text-blue font-bold">Tarefas criadas</p>
                    <span className="text-gray-200 font-bold bg-gray-400 rounded-full py-0.5 px-2.5 text-sm">{}</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <p className="text-purple font-bold">Tarefas concluídas</p>
                    <span className="text-gray-200 font-bold bg-gray-400 rounded-full py-0.5 px-2.5 text-sm">{}</span>
                </div>
            </div>

            <div className="border-t border-gray-400">
                
            </div>
        </section>
    )
}