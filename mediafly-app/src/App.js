import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Data from './data.json'
// import HomePage from './Components/HomePage'
// import FolderPage from './Components/FolderPage'
// import ItemPage from './Components/ItemPage'

const App = () => {
  return (
    <>
    <Router>
      {/* <Switch> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/folder/:folderId" component={FolderPage} />
        {/* <Route path="/items/:itemsId" component={ItemPage} /> */}
      {/* </Switch> */}
      </Router>
    </>
      
  );
}

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
        <p>{"url" + item.thumbnail.importUrl}</p>
      </div>
      <Link to={`/folder/${index + 1}`}>FOLDER</Link>
    </div>
    )
  })} 
    </>
  )
}

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

export default App;


