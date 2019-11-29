import React from 'react';
import { Link } from 'react-router-dom';
import "../static/css/Nav.css";

import img_logo from '../static/img/logo.png';
import img_plus from '../static/img/plus_circle.png';
import img_like from '../static/img/like.png'
import img_bell from '../static/img/bell.png'
import img_chef from '../static/img/chef.png'
import img_three from '../static/img/three-line.png'

export default function Nav() {
    return (
        <nav className="navigation">
            <img src={img_logo} alt="" />

            <section>
                <div className="btn_newRecipe">
                    <Link >
                        <img src={img_plus} alt="" />
                        새 레시피
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img src={img_like} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img src={img_bell} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img src={img_chef} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img src={img_three} alt="" />
                    </Link>
                </div>
            </section>
        </nav>
    )
};