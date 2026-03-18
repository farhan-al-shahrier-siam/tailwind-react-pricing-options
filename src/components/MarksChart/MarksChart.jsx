import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDatares = use(marksPromise)
    const marksData = marksDatares.data

    // data is not as we needed for chart so we need to process it 
    const marksChartsData = marksData.map(studentData=>{
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            biology: studentData.marks.biology,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.biology + student.math)/4
        student.avg = avg
        return student;
    })
    


    return (
        <div>
            <BarChart width={1200} height={400} data={marksChartsData}>
                <XAxis dataKey={"name"} interval={0}></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"avg"} fill='blueviolet'></Bar>
                <Bar dataKey={"biology"} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;