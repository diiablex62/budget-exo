import React from "react";

export default function Form({
  contactState,
  changeContactState,
  handleSubmit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    changeContactState({
      ...contactState, // Copie de l'état 
      [name]: value, // et mise à jour du champ modifié
    });
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold text-center'>Suivi des Dépenses</h1>

      {/* Champ description */}
      <div>
        <input
          type='text'
          name='description'
          placeholder='Description de la dépense'
          value={contactState.description || ""}
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
      </div>

      {/* Champ montant */}
      <div>
        <input
          type='number'
          name='amount'
          placeholder='Montant (€)'
          value={contactState.amount || ""}
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
      </div>

      {/* Champ date */}
      <div>
        <input
          type='date'
          name='date'
          value={contactState.date || ""}
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
      </div>

      {/* Bouton ajout */}
      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
        Ajouter Dépenses
      </button>
    </form>
  );
}