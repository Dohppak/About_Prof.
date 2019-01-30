import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styles from './index.scss';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data = [{year: 2012, Number: 5, Citation: 5},
              {year: 2013, Number: 12, Citation: 6},
              {year: 2014, Number: 13, Citation: 3},
              {year: 2015, Number: 12, Citation: 2},
              {year: 2016, Number: 11, Citation: 1},
              {year: 2017, Number: 10, Citation: 6}];


function Profinfo({Name, id, Lab, Dept, RI, Web, img}){
    return (
        <div className={styles.Profinfo}>
            <div className = "Prof_row">
                <div className = "Prof__Column">
                    <Profimg img={img} alt={Name}/>
                </div>
                
                <div className = "Prof__Column">
                    <h1>{Name}</h1>
                    <h1>{Dept}</h1>
                    <h1><a href={Web}>{Lab}</a></h1>
                </div>
            </div>

            <div className = "Prof__row">
                <div className="Prof__Column">
                    <h1>{RI}</h1>
                </div>
                <div className="Prof__Column">
                    <h1>Co-Researcher</h1>
                </div>
            </div>
            <div className = "Prof__row">
                <h1>Source</h1>
            </div>
            <div className = "Prof__row">
                <h1>Co-Chart</h1>
            </div>
            <ComposedChart width={350} height={130} data={data}
                margin={{top: 0, right: 0, bottom: 0, left: 0}}>
                <XAxis dataKey="year"/>
                <Legend verticalAlign="bottom" height={15} margin={{top:30}}/>
                <Bar dataKey= 'Number' barSize={10} fill='#FFFFFF' />
                <Line dataKey= 'Citation' type='linear' stroke='#F6C430' />
                <Tooltip cursor={false} />
            </ComposedChart>
        </div>
    )
}

function Profimg({img},{alt}){
    return(
        <img src={img} alt={alt} className="Prof__img"/>
    )
}

Profinfo.propTypes = {
    Name : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    Lab : PropTypes.string.isRequired,
    Dept : PropTypes.string.isRequired,
    RI : PropTypes.string.isRequired,
    Web : PropTypes.string.isRequired
}

Profimg.propTypes = {
    img : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}
export default Profinfo