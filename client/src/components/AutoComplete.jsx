import React, { useState } from "react";

const Autocomplete = ({ suggestions }) => {
  const [state, setState] = useState({
    // The active selection's index
    activeSuggestion: 0,
    // The suggestions that match the user's input
    filteredSuggestions: [],
    // Whether or not the suggestion list is shown
    showSuggestions: false,
    // What the user has entered
    userInput: "",
  });

  // Event fired when the input value is changed
  function onChange(e) {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  }

  // Event fired when the user clicks on a suggestion
  function onClick(e) {
    // Update the user input and reset the rest of the state
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  }

  // Event fired when the user presses a key down
  function onKeyDown(e) {
    const { activeSuggestion, filteredSuggestions } = state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      setState((prevState) => ({
        ...prevState,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      }));
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState((prevState) => ({
        ...prevState,
        activeSuggestion: activeSuggestion - 1,
      }));
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      console.log("keydown");
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setState((prevState) => ({
        ...prevState,
        activeSuggestion: activeSuggestion + 1,
      }));
    }
  }

  let suggestionsListComponent;

  if (state.showSuggestions && state.userInput) {
    if (state.filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {state.filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === state.activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div class="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={state.userInput}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
