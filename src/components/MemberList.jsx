import MemberCard from "./MemberCard"

function MemberList({members, deleteMember}){
    return(
        <div className="row">
            {/* map() pour parcourir le tableau des membres, pour chaque element on cree un MemberCard */}
            {members.map((member) => (
                <MemberCard key={member.id} member={member} deleteMember={deleteMember} />
            ))}
        </div>
    );
}
export default MemberList;
