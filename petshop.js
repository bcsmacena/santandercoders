// Carrega JSON

let json = `[{"nome":"Bob","idade":5,"especie":"Catioro","raca":"Vira Lata","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"xuxu","idade":5,"especie":"Catioro","raca":"Vira Lata","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"Xorão","idade":5,"especie":"Catioro","raca":"Vira Lata","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]}]`

let listaPets = [ 
                {
                nome: "Bob",
                idade: 5,
                especie: "Catioro",
                raca: "Golden",
                dono: "Eurico",
                sexo: "Macho",
                peso: 18.2,
                vacinado: true,
                servicos: ["Banho", "Vacina"]
                },
                {
                nome: "Dylan",
                idade: 10,
                especie: "Catioro",
                raca: "Golden",
                dono: "Eurico",
                sexo: "Femea",
                peso: 30,
                vacinado: true,
                servicos: ["Banho", "Vacina"]
                }
    ]
    
const NOME_SISTEMA = "******** PETSHOP MIAU-AU ********\n"
    
console.log(NOME_SISTEMA);
   
const cadastrarPet = (nome, idade, especie, raca, dono, sexo, peso, vacinado, servicos) => {
    
    let pet = {nome, idade, especie, raca, dono, sexo, peso, vacinado, servicos}
    
    listaPets.push(pet);

}
    
cadastrarPet("Mike", 2, "Demonho", "Siames", "Aroldo", "Macho", 5, true, ["Banho", "Tosa"]);
   
const visualizarPets = () => {
    for(let i = 0; i < listaPets.length; i++){
        console.log("Nome: " + listaPets[i].nome);
        console.log("Espécie: " + listaPets[i].especie)
        console.log("Raça: " + listaPets[i].raca);
        console.log("Dono: " + listaPets[i].dono);
        console.log("Vacinado: ", listaPets[i].vacinado ? "sim": "não");
        console.log("------------------------");
    }
}    
    
const darVacina = pet => {
    if (pet.vacinado){
        console.log("O pet " + pet.nome + " já está vacinado!")
    } else {
        pet.vacinado = true;
        console.log("Vacina aplicada no pet " + pet.nome + "!")
    }
}
    
//visualizarPets();
console.log();

// darVacina({
//             nome: "Dylan",
//             idade: 10,
//             especie: "Doguinho",
//             raca: "Golden",
//             dono: "Eurico",
//             sexo: "Femea",
//             peso: 30,
//             vacinado: false,
//             servicos: ["Banho", "Vacina"]
//         });

console.log();
darVacina(listaPets[0]);




// Nova função para dar entrada através do objeto JSON

// Minha solução

// let darEntrada = objetoJSON => {
//     let novosPets = JSON.parse(objetoJSON);
//     for(i = 0; i < novosPets.length; i++){
//         listaPets.push(novosPets[i]);
//         console.log("Pet " + novosPets[i].nome + " adicionado com sucesso!")
//     }
// }

// Solução do Professor

// const darEntrada = objetoJSON => {
//     let novosPets = JSON.parse(objetoJSON);
//     for(i = 0; i < novosPets.length; i++){
//         let pet = novosPets[i]
//         cadastrarPet(pet.nome, pet.idade, pet.especie, pet.raca, pet.dono, pet.sexo, pet.peso, pet.vacinado, pet.servicos);
//         //console.log("Pet " + pet.nome + " adicionado com sucesso!")
//     }
// }

// Solução Minimalista

// const darEntrada = listaJSON => listaPets = [...listaPets, ...(JSON.parse(listaJSON))]

const darEntrada = (listaJSON, cadastro, servico) => {
     let novosPets = JSON.parse(listaJSON);
     for(i = 0; i < novosPets.length; i++){
         let pet = novosPets[i];
         cadastro(pet.nome, pet.idade, pet.especie, pet.raca, pet.dono, pet.sexo, pet.peso, pet.vacinado, pet.servicos);
         if(pet.servicos.indexOf("Vacina") != -1 ){
             servico(pet);
         }
         
     }
     //visualizarPets();
}


darEntrada(json,cadastrarPet,darVacina);

//console.log(listaPets);

console.log();
//visualizarPets();

let filtraPets = nomePet => listaPets.filter(pet => pet.nome == nomePet)

console.log(filtraPets("Bob"))