import ChartBar from './ChartBar';
import './Chart.css';

const Chart =  (props) => {

    //values itu object diubah ke number
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    
    //dataPointValues berupa array number, kita pull out each element dengan spread operator
    const totalValueMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {
                props.dataPoints.map( datapoint => 
                    <ChartBar 
                        key={datapoint.label}
                        value={datapoint.value}
                        maxValue={totalValueMaximum}
                        label={datapoint.label}
                    />
                )
            }
        </div>
    );
};

export default Chart;