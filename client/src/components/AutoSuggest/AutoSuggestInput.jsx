import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import "./autosuggestTheme.css";

const AutoSuggestInput = ({ inputVals }) => {
  const [state, setState] = useState({
    value: "",
    suggestions: [],
  });

  const getSuggestions = (value) => {
    const escapedValue = value.trim();

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp(escapedValue, "i");

    return inputVals.filter((inputVal) => regex.test(inputVal['Fund Name']));
  };

  const getSuggestionValue = (suggestion) => suggestion['Fund Name'];

  const renderSuggestion = (suggestion) => <span>{suggestion['Fund Name']}</span>;

  function onChange(event, { newValue }) {
    setState((prevState) => ({ ...prevState, value: newValue }));
  }

  function onSuggestionsFetchRequested({ value }) {
    setState((prevState) => ({
      ...prevState,
      suggestions: getSuggestions(value),
    }));
  }

  function onSuggestionsClearRequested() {
    setState((prevState) => ({ ...prevState, suggestions: [] }));
  }

  const { value, suggestions } = state;
  const inputProps = {
    placeholder: "Search here",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      id="basic-example"
    />
  );
};

export default AutoSuggestInput;
