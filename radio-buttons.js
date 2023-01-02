//This code block executes after the DOM has loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = Array.from(document.getElementsByName("movie-selector-item"));
    // Adding event listeners on all radio buttons in the navbar.
    radioButtons.forEach((button) => {
        button.addEventListener("change", handleOnChangeEvent);
    })
});


// This function is passed in the navbar radio buttons event listener.
const handleOnChangeEvent = function(event) {
    switch (event.target.id) {
        case "radio-1":
            addMoviesToDom(filterMoviesByYear());
            break;
        case "radio-2":
            const avengersMoviesList = filterMoviesByTitle("Avengers");
            addMoviesToDom(avengersMoviesList);
            break;
        case "radio-3":
            const xMenMoviesList = filterMoviesByTitle("X-Men");
            addMoviesToDom (xMenMoviesList);
            break;
        case "radio-4":
            const princessMoviesList = filterMoviesByTitle("Princess");
            addMoviesToDom(princessMoviesList);
            break;
        case "radio-5":
            const batmanMoviesList = filterMoviesByTitle("Batman");
            addMoviesToDom(batmanMoviesList);
            break;
        default:
            console.log("No radio button selected");
            break;
    }
}

const handleInputSubmit = function(event) {
    event.preventDefault();
    // Gets the value from the search text area
    let title = document.getElementById("movie-title-input").value;
    // Converts the title to lowercase and then capitalises the first letter
    title = title.toLowerCase().slice(0, 1).toUpperCase() + title.slice(1);
    // Calls the addMoviesToDom function in movies.js
    const filteredMovies = filterMoviesByTitle(title);
    addMoviesToDom(filteredMovies);
    // Unchecks possibly cselected radio buttn.
    const radioButtons = Array.from(document.getElementsByName("movie-selector-item"));
    radioButtons.forEach( button => button.checked = false);
    
}

document.getElementById("movie-title-form").addEventListener("submit", handleInputSubmit);
