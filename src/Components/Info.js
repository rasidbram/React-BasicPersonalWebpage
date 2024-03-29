import React from 'react';
import '../styles/info.css'

const headTag = {
    textAlign: 'center',
    fontFamily: "Lucida Sans",
    color: '#6fff84',
    textDecoration: 'underline'
};


const Info = (props) => {
    return (
        <div style={{width:'80%',margin:'auto'}}>
            <div>
                <h3 style={headTag}>{props.title}</h3>
                <div className="row">
                    <div  className="col-lg-6">
                    <div className="card" >
                        <img src={props.image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>
                    <div  className="col-lg-6">
                    <div className="card" >
                        <img src={props.image2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>
                   
                    
                </div>
                <hr/>
            </div>
            
        </div>
    );
};

export default Info;
export {headTag};