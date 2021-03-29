import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Data from './data.json'
import Header from './Shared/Header.jsx'
import './Style/App.css'


export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/folder/:folderId" component={ FolderPage } />
          <Route exact path="/folder/:folderId/items/:itemId" component={ ItemPage } />
          <Route exact path="/" component={ HomePage } />
        </Router>
      </>

    );
  }
}


const HomePage = () => {
  let folders = Data.response.items;

  return (
    <>
    <Header />
      <div className="folder-container" id="background">
        {folders.map((folder, index) => {
          {console.log(folder)}
          return (
            <div key={index}>
              <div className="single-folder">
                <h1 className="folder-header">{folder.metadata["title"]}</h1>
                <Link to={`/folder/${index + 1}`}><img className="folder-img" src={folder.thumbnail.url} /></Link>
                <div className="item-count-and-folder">
                  <p className="item-count">{"Item Count: " + folder.fileCount}</p>
                  <button className="main-button"><Link to={`/folder/${index}`} className="main-button-text">Open Folder</Link></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
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
    <Header />
    <div className="file-page-container" id="background">
      <div className="file-page-header">
      <h1>Item Folder</h1>
      <Link className="homepage-link" to="/">Back to Homepage</Link>
      </div>
      {folderItems.map((file, index) => {
        return (
          <>
            <div key={index}>
              {console.log("Hello look for me", file.asset)}
              <table id="file-table">
                <tr>
                  <td>Title</td>
                  <td>Created Date</td>
                  <td>Modified Date</td>
                  <td>Modified By</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{file.asset.filename}</td>
                  <td>{file.created}</td>
                  <td>{file.modified}</td>
                  <td>{file.modifiedBy}</td>
                  <td><Link to={`/folder/${folderId}/items/${index}`}>View File</Link></td>
                </tr>
              </table>
            </div>
            </>
      )
    })}
          </div>
          </>

        )


      };

const ItemPage = ({ match }) => {
  const {
        params: { folderId, itemId},
  } = match;

  let data = Data.response.items;
  let file = data[folderId].items[itemId];

      return (
      <div id="background">
        <div className="item-button-logo-container">
        <button className="main-button" id="item-buttons"><Link className="main-button-text" to={`/folder/${folderId}`}>Back To Folder</Link></button>
        <img className="header-logo" src="/logo-saleskit.png" />
        <button className="main-button" id="item-buttons"><Link className="main-button-text" to="/">Back to Homepage</Link></button>
        </div>
        {console.log(file)}
        <div className="item-page-header">
        <h1 className="item-header">{file.metadata['title']}</h1>
        <div className="item-page-links">
        {/* <button className="main-button"><Link className="main-button-text" to={`/folder/${folderId}`}>Back To Folder</Link></button>
        <button className="main-button"><Link className="main-button-text" to="/">Back to Homepage</Link></button> */}
        </div>
        </div>
        <div className="file-container">
        <img className="file-img" src={file.thumbnail['url']} ng-if="option=='image'"></img> 
        <div className="file-data-container">
        <p className="file-data"><strong>{"Created Date: " + file.created}</strong></p>
        <p><strong>{"Modified Date: " + file.modified}</strong></p>
        <p><strong>{"Modified By: " + file.modifiedBy}</strong></p>
        </div>
        </div>
        <div className="media-container">
        <video className="item-video" controls> <source src={file.asset.url} type="video/mp4" poster={file.previewUrl} ng-if="option=='video'"></source></video>
        </div>
      </div>
      )
  }
