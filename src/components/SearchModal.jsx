import React, { useState } from "react";
import "./SearchModal.css";

const SearchModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Lógica de búsqueda aquí (puedes agregarla según sea necesario)
    console.log("Searching for:", searchTerm);
    // Luego, puedes agregar más lógica según tus necesidades
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        <input
        className="input-modal"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <button className="modal-button" onClick={handleSearch}>Search </button>
      </div>
    </div>
  );
};

export default SearchModal;
