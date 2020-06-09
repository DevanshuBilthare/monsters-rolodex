import React from "react"

const Styles = {
border: "none",
outline : "none",
padding: '10px',
width:'150px',
lineHeight: '30px',
marginBottom: '30px'
}

export const SearchBox = ({ placeholder,handleChange }) => (
    <input
            style = {Styles}
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
)