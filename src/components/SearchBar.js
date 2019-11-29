import React from 'react';
import { Link } from 'react-router-dom'

import "../static/css/SearchBar.css";

export default function SearchBar() {
    return (
        <div className="searchBar">
            <input placeholder="재료입력" />
            <div className="select_1"></div>
            <div className="select_2"></div>
            <Link className="btn_go_search">검색</Link>
        </div>
    )
}
