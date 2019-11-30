import React from 'react';

// Style Sheet
import "../static/css/Main.css";

// Image
import img_how_1 from '../static/img/Header/how_1.png';
import img_how_2 from '../static/img/Header/how_2.png';
import img_how_3 from '../static/img/Header/how_3.png';
import img_how_4 from '../static/img/Header/how_4.png';

import img_recomand_1 from '../static/img/Header/recomand_1.png';
import img_recomand_2 from '../static/img/Header/recomand_2.png';

export default function main() {
    return (
        <main className="mainSection">
            <h2>이런 요리 어때요?</h2>
            <div className="how_about">
                <img src={img_how_1} alt="" />
                <img src={img_how_2} alt="" />
                <img src={img_how_3} alt="" />
                <img src={img_how_4} alt="" />
            </div>

            <h2>12월 추천 요리</h2>
            <div className="recomand">
                <img src={img_recomand_1} alt="" />
                <img src={img_recomand_2} alt="" />
            </div>
        </main>
    )
}
