import MemberForm from "../components/MemberForm";

function AddMember({addMember}){
    return (
        <div>
            <MemberForm addMember={addMember} />
        </div>
    );
}
export default AddMember;
