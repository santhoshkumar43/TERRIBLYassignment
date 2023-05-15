import React from "react";
import "./HistGraph.css"
import { useRef } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarController } from 'chart.js';
import { useState, useEffect } from "react";
import { Chart, BarElement, ArcElement, registerables } from 'chart.js'
Chart.register(BarElement);
ChartJS.register(

    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

function HistGraph({ data }) {
    const [wet, setwet] = useState([]);
    const [tim, settim] = useState([]);

    const [del, setdel] = useState([]);
    const [timdel, settimdel] = useState([]);
    const [chartdata, setChartdata] = useState({
        labels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        datasets: [
            {
                label: "word count",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            }

        ]

    });
    useEffect(() => {
        setdel(data.slice(0, 20));
    }, [data])

    useEffect(() => {
        const labels = del.map(i => i[0]);
        setChartdata({
            labels,
            datasets: [
                {
                    label: "Word Frequency",
                    data: del.map(i => i[1]),
                    borderwidth: 1,
                    barPercentage: 1,
                    categoryPercentage: 1,
                    backgroundColor: labels.map((label, index) =>
                        index % 2 === 0 ? '#EDC126' : '#E5D68A',)

                }


            ],



        });
    }, [del])

    const options = {
        maintainAspectRatio: false,
        plugins: {

            legend: {
                align: 'end',
                position: 'top',
                labels: {
                    usePointStyle: true,
                }
            }
        },

        spanGaps: true,

        scales: {
            x: {
                beginAtZero: true,
                maxBarThickness: 50,
            },
            y: {
                beginAtZero: true,
            },
        },
    }


    return (
        <div className="maingrp">
            

            <div className="grphist">
                <Bar data={chartdata} options={options}></Bar>
            </div>



        </div>
    )
}
export default HistGraph;