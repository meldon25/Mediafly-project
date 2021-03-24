import React, { Link } from 'react'
import Data from '../data.json'
// import Header from '../Shared/Header'
// import Navbar from '../Shared/Navbar'
// import Footer from '../Shared/Footer'


const HomePage = () => {
  let data = Data.response.items;
  console.log(data)

  return (
    <>
    {data.map((item, index) => {
      return (
      <div key={index}>
      <div>
        <h1>{"Folder Name: " + item.metadata["title"]}</h1>
        <h2>{"File Count: " + item.fileCount}</h2>
        <h2>{"url" + item.thumbnail.importUrl}</h2>
      </div>
      <Link to={`/folder/${index + 1}`}>FOLDER</Link>
    </div>
    )
  })} 
    </>
  )
}

export default HomePage;