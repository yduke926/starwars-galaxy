import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
        return (
            <div className='mv4'>
                <input className='pa3 ba b--green bg-lightest-blue'
                    type='search' 
                    placeholder='search' 
                    onChange = {searchChange}
                />
            </div>
        );
}


export default SearchBox;