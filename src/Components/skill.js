import React from 'react';
import { headTag } from './Info';


//   console.log(carousel) 

const skill = (props) => {
    console.log(props)
    return (
        <div>
            <h3 style={headTag}>{props.title}</h3>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="d-block w-30 m-auto" src={props.carousel} style={{ height: '280px' }} alt="" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>

    );
};

export default skill;