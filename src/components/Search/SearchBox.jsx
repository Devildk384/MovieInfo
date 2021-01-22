import React,{useState} from 'react';
import {APIKEY} from '../../config';
import SearchBoxResult from './SearchBoxResult';
import './SearchBox.scss';

function SearchBox() {
    
    const [results, setResults] = useState([]);
    const [keywords, setKeywords] = useState('');

    
    const onSubmit = e => e.preventDefault();
    
    const onSearchChange = event => {
        setKeywords(event.target.value);
        if (event.target.value === '')
          return null;
      };

    
    const  clearSuggestions = () => {
        document.getElementById("form").reset();

          
    
     };

  
    const  performSearch = async () => {
        
        let val = keywords;
        console.log(val);
    
        if (val === '') {
          clearSuggestions();
        }
    
        await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${val}&page=1&include_adult=false`
        )
          .then(response => {
            if (response.status !== 200) {
              console.log('Error: ' + response.status);
              return;
            }
    
            response.json().then(data => {
              const results = data.results;
              setResults(results);
            });
          })
    
          .catch(err => {
            console.log('Fetch Error :-S', err);
          });
      };


      return (
        <div className='searchbox-container'>
          <form onSubmit={onSubmit} id='form'>
            <input
              type='text'
              onKeyUp={performSearch}
              onChange={onSearchChange}
              id='searchInput'
              className='searchBar'
              placeholder='Search a movie...'
              required
            />
            
  
            <SearchBoxResult results={results} />
          </form>
        </div>
      );
}

export default SearchBox
