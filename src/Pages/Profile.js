import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';

class Profile extends Component{
    render(){
        return(
                <div className="container-fluid">
                    <Navbar />
                    <div className="container-fluid">
                    <div className="card-columns">
                        <div className="card">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1564088418107-05a97997c93b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card Title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        
                        </div>

                        

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Card 2</h4>
                            <p className="card-text">Text for this card.</p>
                            </div>
                        </div>

                        <div className="card">
                        <div className="card-header">Card 3</div>
                            <div className="card-body">
                                <p className="card-text">Text for this card.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">Card 4</div>
                            <div className="card-body">
                                <p className="card-text">Text for this card.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title">Card 5</h4>
                                <p className="card-text">Text for this card.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">Card 6</div>
                            <div className="card-body">
                                <p className="card-text">Text for this card.</p>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            

        );
    }
}

export default Profile;