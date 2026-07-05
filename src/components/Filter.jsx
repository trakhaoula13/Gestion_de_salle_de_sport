function Filter({filter, setFilter}){
    return(
        <div className="mb-4">
            <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)} >
                <option value="tous">Tous les abonnements</option>
                <option value="Trimistriel">Trimistriel</option>
                <option value="Mensuel">Mensuel</option>
                <option value="Annuel">Annuel</option>
            </select>
        </div>
    )
}
export default Filter;
