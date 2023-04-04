import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  // Aca va tu codigo

  const [city, setCity] = useState("");

  let inpChange = (e) => {
    setCity(e.target.value);
  };

  return <form></form>;
}
