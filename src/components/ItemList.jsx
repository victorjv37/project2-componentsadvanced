import { useEffect, useState } from "react";
import Paragraph from "./Paragraph";
import Image from "./Image";

const ItemList = () => {
  const charactersMock = [];
  const [characterList, setCharacterList] = useState(charactersMock);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character`).then(
        (res) => res.json()
      );
      setCharacterList(data.results);
    })();
  }, []);

  return (
    characterList.map((character) =>
        <li className="card" key={character.id} id={character.id}>
            <>
              <Image charImageUrl={character.image} />
              <Paragraph charName={character.name} charStatus={character.status}/>
            </>
        </li>
    )
  );
};

export default ItemList;
