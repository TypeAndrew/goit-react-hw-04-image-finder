
import { Component } from "react";
import PropTypes from "prop-types";

export class Searchbar extends Component { 

    state = {
        search: ''
    }

    onInputChange = (evt) => {
        this.setState({ search: evt.target.value });
    }

                   onSubmit = (evt) =>{
        
        evt.preventDefault();
        const { search } = this.state;
        const { onSearchLoad } = this.props;
        onSearchLoad(search);
        //this.setState({ name: '' , number: ''});
    }

    render() {
    
    const { search } = this.state;
        
    return (<header className="Searchbar">
            <form className="SearchForm" onSubmit={this.onSubmit}>
                <button type="submit" className="SearchForm-button" >
                <span className="button-label">Search</span>
                </button>

                <input 
                onChange={this.onInputChange}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                name="search"
                value={search }
                placeholder="Search images and photos"
                />
            </form>
            </header>)
    }
  
}

Searchbar.propTypes = {
    search: PropTypes.string,
   
}