import type { Language, LanguageProps } from "../types/types";



export const LanguageCard: React.FC<LanguageProps> = ({ languages }) => {

    return (

        <div className="container">

            <div className="language-grid">

                {languages.map((language: Language) =>


                    <div key={language.id} className="card-language">


                        <img
                            src={`/image/${language.image}`}
                            alt={`Logo de ${language.title}`}
                            className="language-icon"
                            loading="lazy"
                        />

                        <h5>
                            {language.title}
                        </h5>

                        <h5>
                            {language.level}
                        </h5>


                        <a
                            href={language.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Credentials
                        </a>



                    </div>

                )}

            </div>


        </div>

    );

}