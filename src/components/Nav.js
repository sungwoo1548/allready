import React from 'react';
import { Link } from 'react-router-dom';
import "../static/css/Nav.css";

import img_logo from '../static/img/Nav/logo.png';
import img_new_recipe from '../static/img/Nav/new_recipe.png';
import img_like from '../static/img/Nav/like.png'
import img_bell from '../static/img/Nav/bell.png'
import img_chef from '../static/img/Nav/chef.png'
import img_three from '../static/img/Nav/three-line.png'

export default function Nav() {
    return (
        <nav className="navigation">
            <Link>
                <img className="img_logo" src={img_logo} alt="" />
            </Link>

            <section>
                <div className="btn_img">
                    <Link >
                        <img className="img_new_recipe" src={img_new_recipe} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img className="img_btn" src={img_like} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img className="img_btn" src={img_bell} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img className="img_btn_more" src={img_chef} alt="" />
                    </Link>
                </div>
                <div className="btn_img">
                    <Link>
                        <img className="img_btn" src={img_three} alt="" />
                    </Link>
                </div>
            </section>
        </nav>
    )
};