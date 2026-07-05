import {Link} from "react-router-dom"


function Home(){
    return(
        <div className="text-centre">
            <h1 className="mb-4">
                Gestion d'une salle de sport
            </h1>
            <p className="lead"> Bienvenue! cette application est dediée pour la gestion de salle de sport </p>
            <Link to="/members" className="btn btn-primary"> voir les abonnées </Link>

        </div>
    )
}
export default Home;