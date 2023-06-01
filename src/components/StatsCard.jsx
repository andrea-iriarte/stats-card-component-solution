import React from 'react'
import { statistics } from '../data/data'

const Statistic = ({ category, statistic }) => {
    return (
        <div className='stats-card'>
            <h2 className='statistic'>{statistic}</h2>
            <p className='category'>{category}</p>
        </div>
    )
}

const StatsCard = () => {
  return (
    <div className='card-container'>
        <div className='card'>

            <div className='card-header'>
                <h1 className='title'>Get <span className='accent'>insights</span> that help your business grow.</h1>
                <p className='subtext'>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                </p>
            </div>
            <div className='stats-list'>
                {statistics.map((item) => (
                    <Statistic key={item.category} {...item}/>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default StatsCard