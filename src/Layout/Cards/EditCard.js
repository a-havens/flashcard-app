import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";
import BreadCrumb from "../Common/BreadCrumb";
import { readDeck, readCard, updateCard, deleteCard } from "../../utils/api/index";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDeckAndCard() {
      try {
        setDeck(await readDeck(deckId));
        setCard(await readCard(cardId));
      } finally {
        setLoading(false);
      }
    }
    loadDeckAndCard();
  }, [deckId, cardId]);

  const handleChange = ({ target }) => {
    setCard({ ...card, [target.name]: target.value });
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (confirmDelete) {
      try {
        await deleteCard(cardId);
        history.push(`/decks/${deckId}`);
      } catch (error) {
        console.error("Error deleting card:", error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      await updateCard(card);
      history.push(`/decks/${deckId}`);
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <BreadCrumb link={`/decks/${deckId}`} linkName={`Deck ${deck.name}`} pageName={`Edit Card ${cardId}`} />
      <div className="row w-100">
        <CardForm formData={card} handleChange={handleChange} />
      </div>
      <div className="row w-100">
        <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-1">
          Cancel
        </Link>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditCard;