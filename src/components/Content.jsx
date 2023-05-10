import React, { Children } from 'react'
import Line from './Line';

const Content = ({ children }) => {
    const arrayChildren = Children.toArray(children);
    return (
        <div className='main-container'>
            {arrayChildren.map((child, i) => {
                if (i != arrayChildren.length - 1)
                    return <div key={`Section ${i}`}>
                        {child}
                        <Line />
                    </div>
                else {
                    return child
                }
            })}
        </div>
    )
}

export default Content