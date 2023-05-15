import React from "react";
import "./HistGraph.css"
import { useRef } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarController } from 'chart.js';
import { useState, useEffect } from "react";
import { Chart,BarElement, ArcElement, registerables } from 'chart.js'
Chart.register( BarElement);
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
        labels:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        datasets: [
            {
                label:"word count",
                data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                borderColor: '#E9A0A0',
                tension: 0.4,
                pointBackgroundColor: '#E9A0A0',
                showLine: true
            }

        ]

    });
    useEffect(()=>{
        setdel(data.slice(0,20))
    },[data])

    



    useEffect(() => {
        setChartdata({
            labels: del.map(i=> i[0]),
            datasets: [
                {
                    label: "jhbrbhh",
                    data: del.map(i=> i[1]),
                    borderColor: '#E9A0A0',
                    tension: 0.4,
                    pointBackgroundColor: '#E9A0A0',
                    showLine: true
                }


            ]

        });
    }, [data])
    
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
                grid: {
                    display: false
                },

            }
        }
    }


    return (
        <div>
            <h1>Terribly Tiny Tales</h1>
           <div>
           <Bar data={chartdata} options={options}></Bar>
           </div>
           
            
            
        </div>
    )
}
export default HistGraph;