import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [contact, setContact] = useState({
    description: "",
    amount: "",
    date: "",
  });

  const [expenses, setExpenses] = useState([]); // Stockage des dépenses

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.description && contact.amount && contact.date) {// Vérification que les trois champs sont remplis
      
      const newExpense = { ...contact, timestamp: Date.now() }; // Ajout d'un timestamp comme ID
      setExpenses((prevExpenses) => {
        const updatedExpenses = [...prevExpenses, newExpense];
        console.log("Données stockées :", updatedExpenses); // Affichage des données dans la console
        return updatedExpenses;
      });
      setContact({ description: "", amount: "", date: "" }); // On remet à jour
    } else {
      alert("Veuillez remplir tous les champs."); // Message d'erreur si un champ est vide
    }
  };

  // Fonction de suppression
  const handleDelete = (timestamp) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.timestamp !== timestamp)
    );
  };

  return (
    <div className='max-w-2xl mx-auto p-4 bg-white shadow-md rounded py-8'>
      <Form
        handleSubmit={handleSubmit}
        contactState={contact}
        changeContactState={setContact}
      />
      <div className='mt-6'>
        {expenses.length === 0 ? (
          <p className='text-center text-gray-500'>
            Aucune dépenses à afficher
          </p>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.timestamp} // Utilisation du timestamp comme clé
              className='border p-4 mb-4 rounded shadow-sm bg-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center'>
              <div className='text-left'>
                <h3 className='font-bold text-blue-500 text-lg break-words'>
                  {expense.description}
                </h3>
                <p className='text-sm sm:text-base'>
                  Montant : {expense.amount} €
                </p>
                <p className='text-sm sm:text-base'>Date : {expense.date}</p>
              </div>
              <div className='flex space-x-2 mt-2 sm:mt-0 sm:ml-4'>
              
                {/* Bouton Modifier */}
                <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                  Modifier
                </button>

                {/* Bouton Supprimer */}
                <button
                  className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                  onClick={() => handleDelete(expense.timestamp)}>
                  {" "}
                  {/* Suppression basée sur le timestamp */}
                  Supprimer
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
