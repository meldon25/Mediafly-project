// import React, { Link } from 'react'
// import Data from '../data.json'
// import Navbar from '../Shared/Navbar'
// import Footer from '../Shared/Footer'

// class ItemPage extends React.Component {
//     render() {
//         const {
//             params: { folderId },
//         } = match;
    
//         console.log(folderId);
//     }

//     getData() {
//         fetch('/data.json'
//         ,{
//           headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//            }
//         }
//         )
//           .then(function(res){
//             console.log(res)
//             return res.json();
//           })
//           .then(function(myJson) {
//             console.log(myJson);
//           });
//       }
//       useEffect(()=>{
//         getData()
//       },[])

//         return (
//             <>
//             <h1>{"folder id:    " + folderId}</h1>
//             <h2>{"File Count: " + data[folderId].fileCount}</h2>

//             <Link to="/">Back to homepage</Link>
//             </>
//         )
//     }
// export default ItemPage;