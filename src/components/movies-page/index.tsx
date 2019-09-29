import React from 'react'
import axios from 'axios'
import MovieSearch from '../search'
import MoviesList from '../movies-list'
import Loader from '../loader'

export default class MoviesPage extends React.Component<any, any> {
    constructor(props:any) {
        super(props)

        this.state = { 
        movies: [],
        loading: false
   
        
    }
    
}

    getMoviesByName: any = (searchValue: any) => {
        this.setState({loading: true})
        axios.get(`http://www.omdbapi.com/?apikey=8036fcb6&s=${searchValue}`).then((response: any)=>{
            console.log("from the aba>>>>", searchValue)   
            
            this.setState({movies:  response.data.Search, loading: false})
            console.log("movies=>", this.state.movies)
        })
        
    }
    
    
    render() {
        
        if (this.state.loading) return <Loader/>
        
        
        return (
            <div>
            <MovieSearch getMoviesByName={this.getMoviesByName} />
            <MoviesList movies={this.state.movies}/>
            
            </div>
        )
    }

}

// this is working more specipic
// componentDidMount() {
//     axios.get("http://www.omdbapi.com/?t=terminator&apikey=8036fcb6").then((response: any)=>{
//      console.log(response)   
//     })
// }