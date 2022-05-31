import React from 'react'

export const Skeleton = () => {
    return (
        <tr className="text-gray-600 animate-pulse">
            <td className="px-4 py-3 text-ms font-semibold border">
            <div className="h-4 bg-gray-400 rounded"></div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">
            <div className="h-4 bg-gray-400 rounded"></div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">
            <div className="h-4 bg-gray-400 rounded"></div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">
            <div className="h-4 bg-gray-400 rounded"></div>
            </td>
        </tr>
    )
}
