import React from 'react';

// Style Sheet
import "../static/css/Post.css";

// Image
import img_post_1 from '../static/img/Post/post_1.png';
import img_post_2 from '../static/img/Post/post_2.png';
import img_post_3 from '../static/img/Post/post_3.png';
import img_post_4 from '../static/img/Post/post_4.png';
import img_post_5 from '../static/img/Post/post_5.png';
import img_post_6 from '../static/img/Post/post_6.png';

export default function Post() {
    return (
        <div className="postSection">
            <div className="innerSection">
                <div>
                    <img src={img_post_1} alt="" ></img>
                </div>
                <div>
                    <img src={img_post_2} alt="" ></img>
                </div>
                <div>
                    <img src={img_post_3} alt="" ></img>
                </div>
                <div>
                    <img src={img_post_4} alt="" ></img>
                </div>
                <div>
                    <img src={img_post_5} alt="" ></img>
                </div>
                <div>
                    <img src={img_post_6} alt="" ></img>
                </div>
            </div>
        </div>
    )
}
