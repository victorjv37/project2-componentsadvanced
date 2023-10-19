import { useEffect, useState } from "react";
 debugger
const ItemList = () => {
  const charactersMock = [];
  const [characterList, setCharacterList] = useState(charactersMock);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );
      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
        {characterList.map((character) => {
            <li key={character.id}>
              <p>{character.name}</p>
              <img src={character.image}></img>
              <p>{character.status}</p>
            </li>
        })}
    </>
  );
};

export default ItemList;
