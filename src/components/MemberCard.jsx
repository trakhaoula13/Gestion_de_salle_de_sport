function MemberCard({member, deleteMember}){
    return(
        <div className="col-md-4 mb-3">
            <div className="card shadow h-100">
                {/*img de l'abonnes*/}
                <img src={member.image || "https://via.placeholder.com/300x250"} className="card-img-top" alt={member.firstName}/>
                <div className="card-body">
                    <h5 className="card-title">{member.firstName} {member.lastName}</h5>
                    <p className="card-text"> Age : {member.age}</p>
                    <p className="card-text"> Abonnement : {member.subscription}</p>
                    <p className="card-text"> Date : {member.date}</p>
                    {/* TODO: la fonction editMember n'existe pas encore, ce bouton ne fait rien pour l'instant */}
                    <button className="btn btn-warning me-2">Modifier</button>
                    <button className="btn btn-danger" onClick={() => deleteMember(member.id)}>Supprimer</button>
                </div>
            </div>
        </div>
    );
}
export default MemberCard;
