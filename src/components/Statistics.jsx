function Statistics({members}){
    //nbr totale de abo
    const total = members.length;
    //nbr des abo mensuel
    const mensuel = members.filter(member => member.subscription === "Mensuel").length;
    const trimistriel = members.filter(member => member.subscription === "Trimistriel").length;
    const annuel = members.filter(member => member.subscription === "Annuel").length;
    return(
        <div className="row mb-4">
            <div className="col-md-3">
                <div className="alert alert-primary">
                    <h5>Total</h5>
                    <h3>{total}</h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="alert alert-primary">
                    <h5>Mensuel</h5>
                    <h3>{mensuel}</h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="alert alert-primary">
                    <h5>Trimistriel</h5>
                    <h3>{trimistriel}</h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="alert alert-primary">
                    <h5>Annuel</h5>
                    <h3>{annuel}</h3>
                </div>
            </div>
        </div>
    )
}
export default Statistics;
