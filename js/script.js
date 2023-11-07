const ourTeam = [
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

// for (let i = 0; i < ourTeam.length; i++) {
//     const currMember = ourTeam[i];
//     for(let key in currMember){
//         console.log(key, currMember[key]);
//     }
// }

drawTeam();

document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    const member = createNewTeamMember();
    ourTeam.push(member);
    drawTeam();
})




// FUNZIONI

/**
 * Funzione che sfoglia l'array di oggetti
 * @returns {any}
 */
function drawTeam(){
    let members = "";
    for (let i = 0; i < ourTeam.length; i++) {
        const currMember = ourTeam[i];
        members += drawTeamMember(currMember);
    }
    document.querySelector(".row").innerHTML = members;
}


/**
 * Funzione che preleva dati da un form e creo un nuovo oggetto
 * @returns {object}
 */
function createNewTeamMember(){
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;

    return {
        name: name,
        profession: role,
        photo: image
    };
}


/**
 * Crea elemento HTML per un membro del team
 * @param {any} teamMember
 * @returns {string}
 */
function drawTeamMember(teamMember){
    return `
        <div class="col">
            <div class="card">
                <img src="./img/${teamMember.photo}" class="card-img-top" alt="Photo of ${teamMember.name}">
                <div class="card-body">
                <h3>${teamMember.name}</h3>
                <p class="card-text">${teamMember.profession}</p>
                </div>
            </div>
        </div>
    `;
}