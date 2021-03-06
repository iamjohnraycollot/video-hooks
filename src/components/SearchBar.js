import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input className="input-form" type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
