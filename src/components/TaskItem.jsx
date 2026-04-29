import { faCheck, faClose, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask, deleteTask } from '../redux/tasksSlice'

const TaskItem = ({ task }) => {

    const dispatch = useDispatch()

    const [isEdited, setIsEdited] = useState(false)
    const [editTitle, setEditTitle] = useState(task.title)
    const [editPriority, setEditPriority] = useState(task.priority)

    const handleSave = () => {
        const trimmed = editTitle.trim()
        if (!trimmed) return
        dispatch(editTask({ id: task.id, title: trimmed, priority: editPriority }))
        setIsEdited(false)
    }

    const handleCancel = () => {
        setEditTitle(task.title)
        setEditPriority(task.priority)
        setIsEdited(false)
    }

    return (

        <>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-5 p-3 mx-1 sm:mx-2 mb-2 border border-transparent transition-colors duration-200 hover:border-gray-300 rounded-lg">

                {!isEdited ? (

                    <>

                        <div className="flex items-center gap-2 flex-1 min-w-0">

                            <div className="input shrink-0">

                                <input
                                    type="checkbox"
                                    name="taskCompleted"
                                    id={`taskCompleted-${task.id}`}
                                    checked={task.completed}
                                    onChange={() => dispatch(toggleTask(task.id))}
                                />

                            </div>

                            <label className='cursor-pointer min-w-0' htmlFor={`taskCompleted-${task.id}`}>

                                <h3 className={`text-[15px] sm:text-[16px] font-bold text-gray-700 mb-1 sm:mb-2 break-words ${task.completed ? 'line-through font-semibold' : ''}`}>
                                    {task.title}
                                </h3>

                                <span className={`border-dashed border border-gray-400 font-bold text-[12px] sm:text-[14px] uppercase ${task.priority === 'high' && 'bg-red-100 text-red-600'} ${task.priority === 'medium' && 'bg-yellow-100 text-yellow-600'} ${task.priority === 'low' && 'bg-green-100 text-green-600'} px-2 py-1 rounded-md`}>
                                    {task.priority}
                                </span>

                            </label>

                        </div>

                        <div className="flex items-center gap-3 sm:gap-2 self-end sm:self-auto">

                            <button className='cursor-pointer p-1' onClick={() => setIsEdited(true)}>
                                <FontAwesomeIcon icon={faPen} className='text-cyan-600' />
                            </button>

                            <button className='cursor-pointer p-1' onClick={() => dispatch(deleteTask(task.id))}>
                                <FontAwesomeIcon icon={faTrashCan} className='text-red-400' />
                            </button>

                        </div>

                    </>

                ) : (

                    <>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1">

                            <div className="input w-full sm:flex-1">

                                <input
                                    type="text"
                                    className='block w-full border-2 border-gray-400 rounded-lg py-1.5 px-3 mt-2 focus:outline-none transition-colors duration-200 focus:border-blue-900'
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    name='taskName'
                                    id={`editName-${task.id}`}
                                />

                            </div>

                            <div className="priority w-full sm:w-auto">

                                <select
                                    className='border-2 w-full border-gray-400 rounded-lg py-1.5 px-3 mt-2 focus:outline-none transition-colors duration-200 focus:border-blue-900'
                                    name="priority"
                                    id={`editPriority-${task.id}`}
                                    value={editPriority}
                                    onChange={(e) => setEditPriority(e.target.value)}
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 sm:gap-2 self-end sm:self-auto mt-1 sm:mt-0">

                            <button className='cursor-pointer p-1' onClick={handleSave}>
                                <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                            </button>

                            <button className='cursor-pointer p-1' onClick={handleCancel}>
                                <FontAwesomeIcon icon={faClose} className='text-red-600' />
                            </button>

                        </div>

                    </>

                )}

            </div>

        </>

    )

}

export default TaskItem
