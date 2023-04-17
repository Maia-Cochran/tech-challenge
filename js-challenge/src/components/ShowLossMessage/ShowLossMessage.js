// import React, { useState, useEffect } from 'react';
// // import ShowLossMessage from '../LossMessage/LossMessage'
// // import RandomizeNumber from '../RandomizeNumber/RandomizeNumber'
// const ShowLossMessage = (props) => {
//     const hasClickedPlay = props.hasClickedPlay;
//     if (hasClickedPlay) {
//         useEffect(() => {
//         const [returnResponse, setReturnResponse] = useState(false);
//         const timer = setTimeout(() => {
//             console.log('This will run after 5 seconds!')
//             setReturnResponse(true)
//         }, 5);
//         return () => clearTimeout(timer);
//     }, []);
// }
// <ShowLossMessage hasClickedPlay={false} />;
// }
 
// export default ShowLossMessage;