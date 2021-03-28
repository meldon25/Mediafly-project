import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Data from './data.json'
import './Style/App.css'
import Navbar from './Shared/Navbar'


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
    <div className="nav-flex">
      {/* <div className="nav">
        <Navbar />
      </div> */}
      <div className="folder-container" id="background">
        {folders.map((folder, index) => {
          return (
            <div key={index}>
              <div className="single-folder">
                <h1 className="folder-header">{folder.metadata["title"]}</h1>
                <Link to={`/folder/${index + 1}`}><img className="folder-img" src={folder.thumbnail.url} /></Link>
                <div className="item-count-and-folder">
                  <p className="item-count">{"Item Count: " + folder.fileCount}</p>
                  <button className="folder-button"><Link to={`/folder/${index + 1}`} className="folder-button-text">Open Folder</Link></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
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
    <div className="file-page-container" id="background">
      <Link to="/">Back to Homepage</Link>
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
                  <td><Link to={`/folder/${folderId}/items/${index}`}>VIEW FILE</Link></td>
                </tr>
              </table>
            </div>
            </>
      )
    })}
            <Link to="/">Back to Homepage</Link>
          </div>

        )


      };

const ItemPage = ({ match }) => {
  const {
        params: { folderId, itemId},
  } = match;

  let data = Data.response.items;
  let file = data[folderId].items[itemId];

      return (
      <div>
        {console.log(file)}
        <h1 className="item-header">{file.metadata['title']}</h1>
        <div className="file-container">
        <img className="file-img" src={file.thumbnail['url']} width={file.assetImages['width']} height={file.assetImages['height']} ng-if="option=='image'"></img> 
        <div className="file-data-container">
        <p className="file-data">{"Created Date: " + file.created}</p>
        <p className="file-data">{"Modified Date: " + file.modified}</p>
        <p className="file-data">{"Modified By: " + file.modifiedBy}</p>
        </div>
        </div>
        <div className="media-container">
        {/* <img className="file-img" src={file.thumbnail['url']} width={file.assetImages['width']} height={file.assetImages['height']} ng-if="option=='image'"></img>  */}
        <video width="68%" height="auto" className="item-video" controls> <source src={file.asset.url} type="video/mp4" poster={file.previewUrl} ng-if="option=='video'"></source></video>
        </div>


        <Link to={`/folder/${folderId}`}>Back To Folder</Link>
        <Link to="/">Back to Homepage</Link>
      </div>
      )
  }
