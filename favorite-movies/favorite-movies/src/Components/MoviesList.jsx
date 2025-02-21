import { useState } from 'react';
import './movie-styles.css'

const MoviesList = () => {
    // Initialize state with a list of movies
    const [movies, setMovies] = useState(
        [{name: 'Avengers: End Game', showDetails: false, details: "The Avengers assemble once more and do whatever it takes to restore the universe and bring those they lost back.", genre: "Action"},
        {name: 'Shawshank Redeption', showDetails: false, details: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict", genre: "Drama"},
        {name: 'The Godfather', showDetails: false, details: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son", genre: "Drama"},
        {name: 'Jurassic Park', showDetails: false, details: "Jurassic Park is a story about a theme park of cloned dinosaurs that goes awry", genre: "Action"},
        {name: "Schindler's List", showDetails: false, details: "The story of a German industrialist who saved Jewish refugees during the Holocaust", genre: "Drama"}]);
    
    // Implement required functionalities here:
    // Function to remove movies when the 'Remove' button is clicked
    const RemoveMovie = (index) => {
        setMovies(movies.filter((movie, i) => i !== index));
    };

    // Function to toggle details on and off, so when the user clicks on a title, a short synopsis of the movie displays
    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    // Function to show only drama movies
    const [showDramaGenre, setShowDramaGenre] = useState(true);
    const toggleDramaFilter = () => {
       setShowDramaGenre(!showDramaGenre);
    }

    const filteredMovies = showDramaGenre ? movies : movies.filter(movie => movie.genre === 'Drama');
    return (
        <div>
            {/* button to toggle between showing the drama movies and all movies */}
            {<button onClick={toggleDramaFilter}>{showDramaGenre? 'Show Only Dramas': 'Show All Movies'}
            </button>}

            <ul>
                {/* Map through the movies and display them */}
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>{movie.name} </span>
                        <button onClick={() => RemoveMovie(index)}>Remove</button>

                        {movie.showDetails && <p className="movie-details">{movie.details}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;

