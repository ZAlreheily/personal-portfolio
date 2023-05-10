import React, { Children } from 'react'

// const CardsHolder = ({ children }) => {
//     const arrayChildren = Children.toArray(children);
//     const limit = 3;
//     var counter = 0;
//     const cardsList = [];
//     return (
//         <div >
//             {arrayChildren.map((child, i) => {
//                 if (counter == 0) {
//                     cardsList.length = 0;
//                 }
//                 cardsList.push(child);
//                 counter++;
//                 if (i == arrayChildren.length - 1 || counter == limit) {
//                     counter = 0;
//                     return <div className='cards flex' key={`skills ${i}`}>
//                         {cardsList}
//                     </div>
//                 }
//                 return <div key={i}></div>
//             })}
//         </div>
//     )
// }

const CardsHolder = ({ children }) => {
    return (
        <div className='cards flex' >
            {children}
        </div>
    )
}

export default CardsHolder