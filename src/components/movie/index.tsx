import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Movie extends React.Component<any, any> {


    render() {
        const {Title, Year, imdbID, Type, Poster} = this.props
        return (
      
                
                <div className="card" style={{width: "18rem"}}  >
                    <img src={Poster} className="card-img-top" alt="image not available"/>
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Year: {Year}</li>
                            <li className="list-group-item">Type: {Type}</li>
                            <li className="list-group-item">imdb-ID: {imdbID}</li>
                        </ul>
                </div>

              



                )
            }
        }
