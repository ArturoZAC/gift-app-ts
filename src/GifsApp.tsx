import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {

  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

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
