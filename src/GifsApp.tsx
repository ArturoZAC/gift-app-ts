import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/getGifsByQuery.action";
import { type Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  
  
  const handleTermClicked = (term: string) => {
    console.log({term});
  };

  const handleSearch = async(query: string = '') => {

    query = query.trim().toLowerCase();

    if( query.length === 0) return;

    if( previousTerms.includes(query) ) return;
    
    setPreviousTerms( previousTerms => [query, ...previousTerms].splice(0,8));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);

  };  

  return (
    <>
      <CustomHeader 
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBar 
        placeHolder = "Busca lo que quieras"
        onQuery={handleSearch}
      />

      <PreviousSearches 
        searches={previousTerms}
        onLabelCliked={ handleTermClicked }
      />

      <GifList gifs={gifs}/>
    </>
  );
};
