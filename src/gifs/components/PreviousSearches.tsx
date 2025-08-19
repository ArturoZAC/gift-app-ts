import type { FC } from "react";

interface Props {
  searches: string[];

  onLabelCliked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelCliked }) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {
          searches.map( ( term ) => (
            <li 
              key={term}
              onClick={ () => onLabelCliked(term) }
            >
                {term}
            </li>
          ))
        }
      </ul>
    </div>
  )
};
