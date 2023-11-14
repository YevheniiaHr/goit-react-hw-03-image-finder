import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchBarHeader,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    searchItem: '',
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target);
    const searchQuery = e.target.elements.searchItem.value.trim();
    this.props.onSubmit(searchQuery);
    // console.log(searchQuery);
    e.target.reset();
  };
  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <BsSearch />
          </SearchButton>
          <SearchInput
            name="searchItem"
            type="text"
            id="search"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
