import React, { Component } from 'react';
import { SearchbarHeader, Form, Input, SearchButton } from './Searchbar.styled';

export class Searchbar extends Component {
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
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="searchItem"
            type="text"
            id="search"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <SearchButton></SearchButton>
        </Form>
      </SearchbarHeader>
    );
  }
}
