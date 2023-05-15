import React, { useState, useEffect } from "react";
import HistGraph from "../Graph/HistGraph";
import "./Histogram.css"

function Histogram() {
    const [data, setData] = useState([])
    const [histogramData, setHistogramData] = useState([]);




    const generateHistogramData = async () => {
        const response = await fetch("https://www.terriblytinytales.com/test.txt");
        const text = await response.text();
        const wordFrequencies = text
            .toLowerCase()
            .split(/\s+/)
            .reduce((freq, word) => {
                freq[word] = (freq[word] || 0) + 1;
                return freq;
            }, {});

        setData(wordFrequencies)
        const histogramData = Object.entries(wordFrequencies)
            .sort((a, b) => b[1] - a[1])

        setHistogramData(histogramData);
    };



    useEffect(() => {
        generateHistogramData();
    }, [])


    return (
        <div className="mainhist">
            <h1> Terribly Tiny Tales </h1>

            <div >
                <HistGraph data={histogramData} />
            </div>
            <div className="expbtn">

                <button onClick={() => downloadCsv(histogramData)}>Export</button>
            </div>

            <div className="tablewords">
                <h3>List of words and count</h3>
                <table>
                    <th>Words</th>
                    <th>Count</th>

                    {histogramData.map((item) => <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                    </tr>)}

                </table>
            </div>


        </div>
    )
}
function downloadCsv(data) {
    console.log(data)
    const csv = [
        ["Word", "Count"],
        ...data.map((item) => [item[0], item[1]])
    ]
        .map((row) => row.join(","))
        .slice(0,21)
        .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "histogram.csv";
    link.click();
}
export default Histogram;