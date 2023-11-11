import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

function CardsList({ deck }) {
  const { deckId } = useParams();
  const [loading] = useState(false);
  const history= useHistory();

  const handleCardDelete = async (cardId) => {
    const confirm = window.confirm("Delete this card? You will not be able to recover it.");
    if (confirm) {
      try {
        await deleteCard(cardId);
        history.push("/");
      } catch (error) {
        console.error("Error deleting card:", error);
      }
    }
  }

  return (
    <div className="container">
      <h2>Cards</h2>
      <div className="card-list">
        {deck.cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-body">
              <div className="container">
                <div className="row justify-content-start my-2">
                  <div className="col-6">
                    {card.front}
                  </div>
                  <div className="col-6">
                    {card.back}
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 pt-2 pb-1">
                    <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                      <button className="btn btn-secondary mr-1">
                        <i className="bi bi-pencil mr-1"></i>Edit
                      </button>
                    </Link>
                    <button
                    onClick={() => handleCardDelete(card.id)}
                    value={card.id}
                    className="btn btn-danger"
                    disabled={loading}
                    >
                      {loading ? (
                      <span className="spinner-border spinner-border-sm" 
                      role="status" 
                      aria-hidden="true">

                      </span>
                      ) : (
                      <>
                      <i className="bi bi-trash"></i>
                      Delete
                      </>
                      )}
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsList;