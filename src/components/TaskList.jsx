import { faListCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllTasks, selectFilteredTasks } from '../redux/tasksSlice'
import FilterBar from './FilterBar'
import TaskItem from './TaskItem'

const TaskList = () => {

    const dispatch = useDispatch()
    const filteredTasks = useSelector(selectFilteredTasks)

    return (

        <>

            <div className="w-full max-w-2xl">

                <div className="border border-gray-500 rounded-lg h-full w-full bg-white">

                    <div className="py-2 px-3 sm:px-5 mb-0 border-b border-gray-300 flex items-center justify-between">

                        <div>

                            <FontAwesomeIcon icon={faListCheck} className='text-[18px] sm:text-[20px] text-cyan-500 mr-2' />

                            <h3 className="inline text-[16px] sm:text-[18px] text-transparent bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text font-bold capitalize">
                                task list
                            </h3>

                        </div>

                        <button
                            onClick={() => dispatch(deleteAllTasks())}
                            className="flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold text-red-400 border border-red-200 px-2 sm:px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200 cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faTrashCan} className='text-[11px] sm:text-[12px]' />
                            <span className="hidden xs:inline sm:inline">Delete All</span>
                            <span className="sm:hidden">Del All</span>
                        </button>

                    </div>

                    {/* Filter bar sits directly below the header */}
                    <FilterBar />

                    {filteredTasks.length === 0 ? (

                        <p className="text-center text-gray-400 text-[14px] py-8">
                            No tasks found. Add one above!
                        </p>

                    ) : (

                        <div className="pt-2 pb-1">
                            {filteredTasks.map((task) => (
                                <TaskItem key={task.id} task={task} />
                            ))}
                        </div>

                    )}

                </div>

            </div>

        </>

    )

}

export default TaskList
