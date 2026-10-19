import type {  Network, NetworkProps } from "../types/types";



export const NetworkCard: React.FC<NetworkProps> = ({ networks }) => {

    return (

        <div className="container">

            <div className="network-grid">

                {networks.map((network: Network) =>

                    <div key={network.order} className="card-network">

                       

                            <img
                                src={network.image}
                                alt={`Logo de ${network.title}`}
                                className="network-icon"
                                loading="lazy"
                            />

                            <h5>
                                {network.title}
                            </h5>


                       


                        <a
                            href={network.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Profile
                        </a>

                    </div>

                )}


             </div>

                    


        </div>

    );

}