import React from 'react';
import { Link } from 'react-router-dom';
import "../static/css/SearchBar.css";

export default function SearchBar() {
    return (
        <div className="searchBar">
            <input placeholder="재료입력" />
            <div className="select_tools">
                <select className="select_menu_tools" name="tools">
                    <option value="">재료 도구</option>
                    <option value="도구_1">도구_1</option>
                    <option value="도구_2">도구_2</option>
                    <option value="도구_3">도구_3</option>
                </select>
            </div>
            <div className="select_people">
                <select className="select_menu_people">
                    <option value="">식사 인원</option>
                    <option value="1인">1인</option>
                    <option value="2_3인">2~3인</option>
                    <option value="4인이상">4인 이상</option>
                </select>
            </div>
            <Link className="btn_go_search">검색</Link>
        </div>
    )
}
