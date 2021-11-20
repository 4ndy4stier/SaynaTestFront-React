import React, { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2';
import './pieChart.css';

export default function PieChart({rest, used, info}) {

    const data = useMemo(() => {
        return {
            datasets: [
                {
                    data: [(rest - used), used],
                    backgroundColor: ['#EAEFF8', '#4F5EA4']
                }
            ]
        }
    }, [rest, used])
    return (
        <div className="pieChartContainer">
            <Doughnut height={100} width={100} data={data} className="pieChart"/>
            <div className="pieInfo">
                <div className="pieTitle">{info}</div>
                <div className="pieNumber">
                    <span className="numberUsed">{used}</span> <span className="numberRest"> / {rest} USD </span>
                </div>
            </div>
        </div>
    )
}
