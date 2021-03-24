import React, {useState, useEffect, Link} from 'react'
import Data from "../data.json"
// import Header from '../Shared/Header'
// import Navbar from '../Shared/Navbar'
// import Footer from '../Shared/Footer'
// import Folders from './Folders'


const FolderPage = ({ match }) => {
  const {
    params: { folderId },
  } = match;
  
  let data = Data.response.items;


  return (
    <>
      <h1>{"Folder id:   " + folderId}</h1>
      <h2>{"File count: " + data[folderId].fileCount}</h2>

      <Link to="/">Back to Homepage</Link>
    </>

  )

    
};

  export default FolderPage;