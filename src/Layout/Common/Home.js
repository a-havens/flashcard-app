import React, { useState, useEffect } from "react";
import ListDecks from "../Decks/DeckList";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api/index";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDecks() {
      try {
        const loadedDecks = await listDecks();  // Assuming the correct function is listDecks
        setDecks(loadedDecks);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }

    loadDecks();
    return () => abortController.abort();
  }, []);

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <Link to="/decks/new" className="btn btn-primary">
          <i className="bi bi-plus"></i> Create Deck
        </Link>
      </div>
      {decks.length > 0 ? (
        <ListDecks decks={decks} setDecks={setDecks} />
      ) : (
        <p>No decks available. Create a new deck to get started.</p>
      )}
    </div>
  );
}

export default Home;