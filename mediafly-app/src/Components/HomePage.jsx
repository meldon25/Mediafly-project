import React, { Link } from 'react'
import Data from '../data.json'
// // import Header from '../Shared/Header'
// // import Navbar from '../Shared/Navbar'
// // import Footer from '../Shared/Footer'

// export default function HomePage = ({ children }) => {
//     let folders = Data.response.items;
  
//     return (
//       <>
//         <div className="folder-container" id="background">
//           {folders.map((folder, index) => {
//             return (
//               <div key={index}>
//                   <div>{children}</div>
//                 <div className="single-folder">
//                   <h1 className="folder-header">{folder.metadata["title"]}</h1>
//                   <Link to={`/folder/${index + 1}`}><img className="folder-img" src={folder.thumbnail.url} /></Link>
//                   <div className="item-count-and-folder">
//                     <p className="item-count">{"Item Count: " + folder.fileCount}</p>
//                     <button className="folder-button"><Link to={`/folder/${index + 1}`} className="folder-button-text">Open Folder</Link></button>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </>
//     )
//   }


