import type { LanguageProps } from "../types/types";



export const LanguageCard: React.FC<LanguageProps> = ({ languages }) => {

    return (

        <div className="card" key={languages.id}>
            <h2>{languages.name}</h2>
            <p>{languages.level}</p>
        </div>
    
    );

}