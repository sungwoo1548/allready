import React, { useState } from 'react';
import "../static/css/Header.css";

import img_intro from '../static/img/Header/intro.png';

import img_left_arrow from '../static/img/Header/left-arrow.png';
import img_right_arrow from '../static/img/Header/right-arrow.png';


export default function Header() {
    const tags = [
        { id: 1, tag: "미카엘 아쉬노프" },
        { id: 2, tag: "샘킴" },
        { id: 3, tag: "1인분 요리" },
        { id: 4, tag: "조리시간 10분" },
        { id: 5, tag: "냉장고를 부탁해" },
        { id: 6, tag: "술안주" },
        { id: 7, tag: "퓨전 요리" },
        { id: 8, tag: "파티 요리" },
        { id: 9, tag: "손님 접대" },
    ];

    const [tagSelect, setTagSelect] = useState(null)

    const TagSlider = ({ tags }) => (
        tags.map((data, ix) => (
            <div className={tagSelect === ix ? "slider_item_selected" : "slider_item"}
                onClick={() => { setTagSelect(ix) }}>
                <span >{data.tag}</span>
            </div>
        ))
    );

    return (
        <header className="headerSection">
            <div className="slider">
                <TagSlider tags={tags} />
                <img className="slider_left btn" src={img_left_arrow} />
                <img className="slider_right btn" src={img_right_arrow} />
            </div>
            <div>
                <img className="intro" src={img_intro} />
            </div>
        </header>
    )
}
