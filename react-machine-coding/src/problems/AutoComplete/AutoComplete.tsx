import React, { useState, useEffect } from "react";
import { words as wordList } from "./words";
import { Trie } from "./trie";
import "./AutoComplete.styles.css";

const AutoComplete = () => {
  const [trie, setTrie] = useState<Trie | null>(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const newTrie = new Trie();
    wordList.forEach((word) => newTrie.insert(word));
    setTrie(newTrie);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value && trie) {
      setSuggestions(trie.autoComplete(value).slice(0, 10));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
    }
  };

  const handleFocus = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const getHighlighted = (suggestion, idx) => {
    const parts = suggestion.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) => {
      return query?.toLowerCase() === part.toLowerCase() ? (
        <strong key={idx + index}>{part}</strong>
      ) : (
        <span key={idx + index}>{part}</span>
      );
    });
  };

  return (
    <div className="container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="input"
        onBlur={handleFocus}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, idx) => (
            <li
              key={idx}
              className="suggestion-item"
              onClick={() => {
                setQuery(item);
                setSuggestions([]);
              }}
            >
              {getHighlighted(item, idx)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
