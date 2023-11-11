import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Common/Home";
import NewDeck from "./Decks/NewDeck";
import EditDeck from "./Decks/EditDeck";
import StudyDeck from "./Decks/StudyDeck";
import Deck from "./Decks/Deck"
import EditCard from "./Cards/EditCard";
import NewCard from "./Cards/NewCard";
import StudyCard from "./Cards/StudyCard";
import NotFound from "./NotFound";


function Layout() {

  return (
    <div>
      <Header />
      <div className="container">
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/decks/new">
          <NewDeck />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/study">
          <StudyCard />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <NewCard />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <StudyDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  </div>
  );
}

export default Layout;
