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

for (let i = 0; i < ourTeam.length; i++) {
    const currMember = ourTeam[i];
    for(let key in currMember){
        console.log(key, currMember[key]);
    }
}

let members = "";

for (let i = 0; i < ourTeam.length; i++) {
    const currMember = ourTeam[i];
    
    members +=`
        <div class="col">
            <div class="card">
                <img src="./img/${currMember.photo}" class="card-img-top" alt="Photo of ${currMember.name}">
                <div class="card-body">
                <h3>${currMember.name}</h3>
                <p class="card-text">${currMember.profession}</p>
                </div>
            </div>
        </div>
    `
}

document.querySelector(".row").innerHTML = members;

