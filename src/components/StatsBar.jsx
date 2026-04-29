import React from 'react'
import { useSelector } from 'react-redux'
import { selectStats } from '../redux/tasksSlice'

const StatsBar = () => {

    const { total, completed, completionRate, high, medium, low } = useSelector(selectStats)

    return (

        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

            {/* Box 1 — Total Tasks */}
            <div className="border border-gray-300 rounded-lg bg-white p-3 sm:p-4 text-center shadow-sm">

                <p className="text-[11px] sm:text-[13px] text-gray-500 uppercase tracking-wide font-semibold mb-1">Total Tasks</p>

                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">
                    {total}
                </p>

                <p className="text-[11px] sm:text-[12px] text-gray-400 mt-1">{completed} completed</p>

            </div>

            {/* Box 2 — Completion Rate */}
            <div className="border border-gray-300 rounded-lg bg-white p-3 sm:p-4 text-center shadow-sm">

                <p className="text-[11px] sm:text-[13px] text-gray-500 uppercase tracking-wide font-semibold mb-1">Completion</p>

                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">
                    {completionRate}%
                </p>

                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div
                        className="bg-linear-to-r from-cyan-500 to-blue-600 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${completionRate}%` }}
                    />
                </div>

            </div>

            {/* Box 3 — Priority Breakdown */}
            <div className="border border-gray-300 rounded-lg bg-white p-3 sm:p-4 shadow-sm">

                <p className="text-[11px] sm:text-[13px] text-gray-500 uppercase tracking-wide font-semibold mb-2 text-center">By Priority</p>

                <div className="flex flex-col gap-1">

                    <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold text-red-500 uppercase">High</span>
                        <span className="text-[13px] font-bold text-gray-700">{high}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold text-yellow-500 uppercase">Medium</span>
                        <span className="text-[13px] font-bold text-gray-700">{medium}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold text-green-500 uppercase">Low</span>
                        <span className="text-[13px] font-bold text-gray-700">{low}</span>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default StatsBar
