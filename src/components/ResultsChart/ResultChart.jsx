import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
    { id: "S101", name: "Arafat Hossain", physics: 78, chemistry: 82, math: 88, biology: 75 },
    { id: "S102", name: "Nusrat Jahan", physics: 65, chemistry: 70, math: 72, biology: 68 },
    { id: "S103", name: "Tanvir Ahmed", physics: 90, chemistry: 85, math: 92, biology: 89 },
    { id: "S104", name: "Farhana Rahman", physics: 55, chemistry: 60, math: 58, biology: 62 },
    { id: "S105", name: "Mahmudul Hasan", physics: 83, chemistry: 78, math: 80, biology: 77 },
    { id: "S106", name: "Sadia Akter", physics: 71, chemistry: 75, math: 69, biology: 73 },
    { id: "S107", name: "Rafiul Islam", physics: 88, chemistry: 91, math: 87, biology: 90 },
    { id: "S108", name: "Mim Khatun", physics: 60, chemistry: 64, math: 67, biology: 63 },
    { id: "S109", name: "Sabbir Hossain", physics: 77, chemistry: 79, math: 81, biology: 76 },
    { id: "S110", name: "Jannatul Ferdous", physics: 69, chemistry: 72, math: 74, biology: 70 },
];

const ResultChart = () => {
    return (
        <div>
            <LineChart height={500} width={1540} data={resultData}>
                <XAxis dataKey={'name'} interval={0}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="math"></Line>
                <Line dataKey="biology" stroke="violet"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;
