import React from 'react';

const SearchInput = (props) => {
  <Input action={{ icon: 'search',  onClick: (e) => {props.onClick()}}} placeholder={props.label} onChange={ (e, data) => props.onChange(data)}/>
}

export default SearchInput;