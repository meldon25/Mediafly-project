import React, { Link } from 'react'
import Data from '../data.json'


// export default function ItemPage({ match }) {
//     const {
//         params: { folderId, itemId },
//     } = match;
  
//     let data = Data.response.items;
//     let file = data[folderId].items[itemId];
  
//         return (
//             <>
//             {console.log(file)}
//             <h3>{"Item: " + file.metadata['title']}</h3>
//             <object data={file.thumbnail['url']} className="item-img"></object>
//             <p>{"Created Date:" + file.created}</p>
//             <p>{"Modified Date:" + file.modified}</p>
//             <p>{"Modified By:" + file.modifiedBy}</p>
  
  
//             <Link to={`/folder/${folderId}`}>Back To Folder</Link>
//             <Link to="/">Back to Homepage</Link>
//             </>
//         )
//     }
