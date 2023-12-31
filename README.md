#Flashcard App
Project Setup
Installation
Download the Qualified assessment files to your computer.
Navigate to the project directory and run: npm install
Usage
To run the tests, use: npm test

To run the application, use: npm start

This command will start two servers:

API server runs on: http://localhost:5000
React application runs on: http://localhost:3000
Screens and Paths
Home (/): Displays a list of decks with options to create, study, view, or delete a deck.
Study (/decks/:deckId/study): Allows studying the cards from a specific deck.
Create Deck (/decks/new): Used to create a new deck.
Deck (/decks/:deckId): Displays all information about a specified deck.
Edit Deck (/decks/:deckId/edit): Allows modification of an existing deck.
Add Card (/decks/:deckId/cards/new): Allows adding a new card to an existing deck.
Edit Card (/decks/:deckId/cards/:cardId/edit): Allows modification of an existing card.
API
The project has two main datasets: decks and cards. They can be accessed and modified using utility functions from src/utils/api/index.js. These functions allow CRUD operations with the API server.

Data Structures
Decks:
{
  "id": 1,
  "name": "Rendering in React",
  "description": "Quick overview of rendering in React."
}
Cards:
{
  "id": 1,
  "front": "Question?",
  "back": "Answer.",
  "deckId": 1
}
