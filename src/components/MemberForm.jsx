//useState est un hook utilise pour permettre de cree des variable dynamique
import {useState} from "react";
// reception des props : le component va reçevoir prop appelee addMember de l'element parent (AddMember.jsx)

function MemberForm({addMember}){
    const [member, setMember] = useState({
        id: Date.now(),
        firstName:"",
        lastName:"",
        age:"",
        subscription:"",
        date:"",
        image:""
    })

    //fct appele pour mettre a jour les champ du formulaire
    const handleChange = (e) => {
        setMember({
            ...member, //conserver les anciens valeur
            [e.target.name]: e.target.value, //mettre a jour uniquement les champ modifier
        });
    }

    //fct appelee quand on choisit un fichier image
    //on lit le fichier avec FileReader et on le convertit en base64
    //pour pouvoir le stocker directement dans le state (et donc dans le tableau membres)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setMember({
                ...member,
                image: reader.result, // chaine base64, utilisable directement dans <img src="">
            });
        };
        reader.readAsDataURL(file);
    }

    //cette fonction est appelee lorsqu'on clique sur le btn de type submit
    const handleSubmit = (e) => {
        // e.preventDefault : empeche le rechargement de page
        e.preventDefault();
        if (
            member.firstName === "" ||
            member.lastName === "" ||
            member.age === "" ||
            member.subscription === "" ||
            member.date === ""
        ) {
            alert("Remplir tous les champs");
            return;
        }
        // ajouter un nouvel abonnes
        addMember(member);
        //reinitialiser du formulaire
        setMember({
            id: Date.now(),
            firstName:"",
            lastName:"",
            age:"",
            subscription:"",
            date:"",
            image:"",
        })
    }

    return (
        <div className="card shadow p-4">
            <h2 className="text-center mb-4">
                Ajouter un abonnée
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"> Prénom </label>
                    <input type="text" name="firstName" className="form-control" value={member.firstName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Nom </label>
                    <input type="text" name="lastName" className="form-control" value={member.lastName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Age </label>
                    <input type="number" name="age" className="form-control" value={member.age} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Subscription </label>
                    <select name="subscription" className="form-control" value={member.subscription} onChange={handleChange} >
                        <option value=""></option>
                        <option value="Trimistriel">Trimistriel</option>
                        <option value="Mensuel">Mensuel</option>
                        <option value="Annuel">Annuel</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Date d'inscription </label>
                    <input type="date" name="date" className="form-control" value={member.date} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Photo </label>
                    <input type="file" name="image" accept="image/*" className="form-control" onChange={handleImageChange} />
                    {/* apercu de l'image choisie avant validation du formulaire */}
                    {member.image && (
                        <img
                            src={member.image}
                            alt="Aperçu"
                            className="mt-2 rounded"
                            style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                    )}
                </div>
                <button type="submit" className="btn btn-primary w-100" >
                    Ajouter
                </button>
            </form>
        </div>
    );
}
export default MemberForm;
