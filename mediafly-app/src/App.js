import React from 'react'
import { Link, BrowserRouter as Router, Route} from 'react-router-dom'
import Data from './data.json'
import './App.css'


export default class App extends React.Component {
  render() {
    return (
      <>
      <Router>
          <Route exact path="/folder/:folderId" component={FolderPage} />
          <Route exact path="/folder/:folderId/items/:itemId" component={ItemPage} />
          <Route exact path="/" component={HomePage} />
        </Router>
      </>
        
    );
  }
}

const HomePage = () => {
  let folders = Data.response.items;

  return (
    <div className="folder-container" id="background">
    {folders.map((folder, index) => {
      return (
      <div key={index}>
      <div className="single-folder">
        <h1 className="folder-header">{"Folder: " + folder.metadata["title"]}</h1>
        <Link to={`/folder/${index + 1}`}><img className="folder-img" src={folder.thumbnail.url}/></Link>
        <h2>{"Item Count: " + folder.fileCount}</h2>
        <Link to={`/folder/${index + 1}`}>OPEN FOLDER</Link>
      </div>
    </div>
    )
  })} 
    </div>
  )
}

const FolderPage = ({ match }) => {
  const {
    params: { folderId },
  } = match;
  
  let data = Data.response.items;
  let folderItems = data[folderId].items;


  return (
    <>
    <Link to="/">Back to Homepage</Link>
    {folderItems.map((file, index) => {
      return (
        <div key={index}>
          {console.log("Hello look for me", file.asset)}
          <table id="file-table">
            <tr>
              <td>Thumbnail</td>
              <td>Title</td>
              <td>Description</td>
              <td>Created Date</td>
              <td>Modified Date</td>
              <td>Modified By</td>
              <td>View</td>
            </tr>
            <tr>
              <td><iframe src={file.asset.url} className="file-photo"/></td>
              <td>{file.asset.filename}</td>
              <td>Empty for now</td>
              <td>{file.asset.created}</td>
              <td>Empty for now</td>
              <td>Empty for now</td>
              <td><Link to={`/folder/${folderId}/items/${index}`}>VIEW FILE</Link></td>
            </tr>
          </table>
          </div>
      )
    })}
      <Link to="/">Back to Homepage</Link>
    </>

  )

    
};

const ItemPage = ({ match }) => {
  const {
      params: { folderId, itemId },
  } = match;

  let data = Data.response.items;
  let file = data[folderId].items[itemId];

      return (
          <>
          {console.log(file)}
          <h1>Individual Item Page</h1>
          <h1>{"Item Name: " + file.asset.filename}</h1>
          {/* <a href={file.asset.importUrl}></a> */}
          {/* <h1>{"Folder id: " + folderId}</h1>
      <img src={data[folderId - 1].thumbnail["url"]} />
      <p>{"Created Date: " + data[folderId - 1].created}</p>
      <p>{"Modified Date: " + data[folderId - 1].modified}</p>
      <p>{"Modified By: " + data[folderId - 1].modifiedBy}</p> */}
      {/* <div>{data[folderId].items}</div> */}
      {/* <p>{data[folderId - 1]}</p> */}

          <Link to={`/folder/${folderId}`}>Back To Folder</Link>
          <Link to="/">Back to Homepage</Link>
          </>
      )
  }



