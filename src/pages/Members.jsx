import { useState } from "react";
import MemberList from "../components/MemberList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Statistics from "../components/Statistics";

function Members({members, setMembers}){
    const [search, setSearch] = useState("");
    const [filtre, setFilter] = useState("tous");

    //suppression
    const deleteMember = (id) => {
        const newMember = members.filter(
            member => member.id !== id
        );
        setMembers(newMember);
    }

    // recherche et filtre
    const filterMembers = members.filter((member) => {
        //recherche par nom ou par prenom
        const matchSearch = member.firstName
            .toLowerCase()
            .includes(search.toLowerCase())
        //filtre abon
        const matchFiltre = filtre === "tous"
            || member.subscription === filtre;
        return matchSearch && matchFiltre;
    });

    return(
        <div>
            <h2 className="mb-4"> Liste des abonnées</h2>
            <Statistics members={members} />
            <SearchBar search={search} setSearch={setSearch} />
            <Filter filter={filtre} setFilter={setFilter} />
            <MemberList members={filterMembers} deleteMember={deleteMember}/>
        </div>
    )
}
export default Members;
