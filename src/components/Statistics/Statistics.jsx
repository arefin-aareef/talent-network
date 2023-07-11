import React from 'react';
import './Statistics.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const marksArray = [
        {
            name: "Assignment-1",
            marks: 60
        },
        {
            name: "Assignment-2",
            marks: 58
        },
        {
            name: "Assignment-3",
            marks: 60
        },
        {
            name: "Assignment-4",
            marks: 60
        },
        {
            name: "Assignment-5",
            marks: 45
        },
        {
            name: "Assignment-6",
            marks: 56
        },
        {
            name: "Assignment-7",
            marks: 59
        },
        {
            name: "Assignment-8",
            marks: 60
        }
    ]

    return (
        <div className='statistics'>
            <h2 className='statistics-header'>Assignment Marks Statistics</h2>
            <div className='area-chart'>
                <AreaChart
                    width={1100}
                    height={400}
                    data={marksArray}
                >
                    <Area dataKey="marks"></Area>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;