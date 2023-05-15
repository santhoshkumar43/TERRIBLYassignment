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
            <div>
                <HistGraph data={histogramData} />
            </div>

            <div className="tablewords">
                <table>
                    <th>new one</th>
                    <th>hello</th>

                    {histogramData.map((item) => <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                    </tr>)}

                </table>
            </div>


        </div>
    )
}
export default Histogram;