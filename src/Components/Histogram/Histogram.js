import React, { useState, useEffect } from "react";

function Histogram() {
    const [data, setData] = useState([])
    const fetchUrl = async () => {

        const res = await fetch("https://www.terriblytinytales.com/test.txt")
        const text = await res.text();
        const words = text.split(" ");



        const all = [];
        // const counts = {};
        // words.forEach((element) => {
        //     if (!counts[element]) {
        //         counts[element] = 1;
        //     } else {
        //         counts[element]++;
        //     }
        // });
        // const result = [];
        // for (const [element, count] of Object.entries(counts)) {
        //     result.push({ element: parseInt(element), count });
        // }

        setData(all)
        // console.log(result)
        // console.log(counts)





    }

    useEffect(() => {
        fetchUrl();
    }, [])

    return (
        <div>
            Hello World!
            {data.map((item) => <p>{item.element}</p>)}
        </div>
    )
}
export default Histogram;