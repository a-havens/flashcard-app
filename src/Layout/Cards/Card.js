import React from "react";
import { Link } from "react-router-dom";

function Card({ card, handleCardDelete }) {
  const { deckId, id, front, back } = card;

  const handleCardDelete = async () => {
    const confirm = window.confirm("Delete this card You will not be able to recover it.");
    if (confirm) {
      try {
        await deleteCard(id);
        history.push("/");
      } catch (error) {
        console.error("Error deleting card:", error);
      }
    }
  };

  return (
    <div className="card-container">
      <div className="card-row text-center">
        <div className="card">
          <div className="card-body row">
            <p className="card-text col-6">{front}</p>
            <p className="card-text col-6">{back}</p>
          </div>

          <div className="card-row">
            <div>
              <Link to={`/decks/${deckId}/cards/${id}/edit`}>
                <button className="btn btn-secondary mr-1" aria-label="Edit Card">
                  <i className="bi bi-pencil"></i> Edit
                </button>
              </Link>

              {handleCardDelete && (
                <button
                  value={id}
                  className="btn btn-danger"
                  onClick={handleCardDelete}
                  aria-label="Delete Card"
                >
                  <i className="bi bi-trash"></i> 
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
