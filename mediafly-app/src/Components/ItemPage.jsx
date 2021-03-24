import React, { Link } from 'react'
import Data from '../data.json'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const ItemPage = ({ match }) => {
    const {
        params: { folderId },
    } = match;

    console.log(folderId);

    let data = Data.response.items;

        return (
            <>
            <h1>{"folder id:    " + folderId}</h1>
            <h2>{"File Count: " + data[folderId].fileCount}</h2>

            <Link to="/">Back to homepage</Link>
            </>
        )
    }
export default ItemPage;