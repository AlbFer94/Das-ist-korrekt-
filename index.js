const savedCards = JSON.parse(localStorage.getItem("flashCards"));
const flashcard=document.getElementById("flashcard");
const flipBtn = document.getElementById("flip");
const prevBtn = document.getElementById("prev");

let flashCards=savedCards||[
  {
    german: "verblüffend",
    italian: "sorprendente / stupefacente",
    esempio: "Das Ergebnis war verblüffend klar. → Il risultato era sorprendentemente chiaro."
  },
  {
    german: "nachhaltig",
    italian: "sostenibile",
    esempio: "Wir müssen nachhaltiger leben. → Dobbiamo vivere in modo più sostenibile."
  },
  {
    german: "bewältigen",
    italian: "affrontare / superare",
    esempio: "Er konnte die Krise gut bewältigen. → Ha saputo affrontare bene la crisi."
  },
  {
    german: "umfassend",
    italian: "completo / approfondito",
    esempio: "Sie hat eine umfassende Ausbildung erhalten. → Ha ricevuto una formazione completa."
  },
  {
    german: "anspruchsvoll",
    italian: "impegnativo / esigente",
    esempio: "Das ist eine anspruchsvolle Aufgabe. → È un compito impegnativo."
  },
  {
    german: "vermeintlich",
    italian: "presunto / supposto",
    esempio: "Der vermeintliche Täter war unschuldig. → Il presunto colpevole era innocente."
  },
  {
    german: "Voraussetzung",
    italian: "requisito / condizione",
    esempio: "Deutschkenntnisse sind eine Voraussetzung. → La conoscenza del tedesco è un requisito."
  },
  {
    german: "sich lohnen",
    italian: "valere la pena",
    esempio: "Es lohnt sich, früh aufzustehen. → Vale la pena alzarsi presto."
  },
  {
    german: "Umsetzung",
    italian: "realizzazione / attuazione",
    esempio: "Die Umsetzung des Plans dauert länger. → L’attuazione del piano richiede più tempo."
  },
  {
    german: "Auswirkung",
    italian: "effetto / conseguenza",
    esempio: "Die Auswirkung des Klimawandels ist deutlich. → L’effetto del cambiamento climatico è evidente."
  },
  {
    german: "ermöglichen",
    italian: "rendere possibile / permettere",
    esempio: "Das Internet ermöglicht neue Formen der Arbeit. → Internet rende possibili nuove forme di lavoro."
  },
  {
    german: "überzeugend",
    italian: "convincente",
    esempio: "Sie hat ein überzeugendes Argument vorgebracht. → Ha presentato un argomento convincente."
  },
  {
    german: "Herausforderung",
    italian: "sfida",
    esempio: "Eine neue Sprache zu lernen ist eine Herausforderung. → Imparare una nuova lingua è una sfida."
  },
  {
    german: "ausgeprägt",
    italian: "marcato / spiccato",
    esempio: "Er hat ein ausgeprägtes Verantwortungsgefühl. → Ha un marcato senso di responsabilità."
  },
  {
    german: "Vereinbarkeit",
    italian: "compatibilità / conciliazione",
    esempio: "Die Vereinbarkeit von Beruf und Familie ist wichtig. → La conciliazione tra lavoro e famiglia è importante."
  },
  {
    german: "Fortschritt",
    italian: "progresso",
    esempio: "Technologischer Fortschritt verändert die Welt. → Il progresso tecnologico cambia il mondo."
  },
  {
    german: "einschätzen",
    italian: "valutare / stimare",
    esempio: "Ich kann seine Fähigkeiten schwer einschätzen. → Mi è difficile valutare le sue capacità."
  },
  {
    german: "nachweisen",
    italian: "dimostrare / provare",
    esempio: "Er konnte seine Unschuld nachweisen. → Ha potuto dimostrare la sua innocenza."
  },
  {
    german: "Zustimmung",
    italian: "approvazione / consenso",
    esempio: "Sie erhielt die Zustimmung des Parlaments. → Ha ricevuto l’approvazione del parlamento."
  },
  {
    german: "Verhältnis",
    italian: "rapporto / relazione",
    esempio: "Ihr Verhältnis ist sehr freundschaftlich. → Il loro rapporto è molto amichevole."
  }
];

flipBtn.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

document.querySelector("#prev").addEventListener("click",function(){
  index=(index-1 + flashCards.length)%flashCards.length;
  updateCard();
});

document.querySelector(".next").addEventListener("click",function(){
    index=(index + 1)%flashCards.length;
    updateCard();
});

document.querySelector("#add").addEventListener("click", function () {
  const german = prompt("✏️ Inserisci la parola in tedesco:");
  if (!german) return;

  const italian = prompt("🇮🇹 Inserisci la traduzione in italiano:");
  if (!italian) return;

  const esempio = prompt("💬 Scrivi un esempio:");
  if (!esempio) return;

 
  const newFlash = {
    german: german.trim(),
    italian: italian.trim(),
    esempio: esempio.trim()
  };

  flashCards.push(newFlash);

  index = flashCards.length - 1; 
  localStorage.setItem("flashCards", JSON.stringify(flashCards));
  updateCard();
  alert("✅ Nuova Flashcard creata con successo!");
});


const editBtn = document.getElementById("edit");

editBtn.addEventListener("click", () => {
  const currentCard = flashCards[index];


  const newGerman = prompt("🇩🇪 Modifica parola tedesca:", currentCard.german);
  const newItalian = prompt("🇮🇹 Modifica traduzione italiana:", currentCard.italian);
  const newExample = prompt("✍️ Modifica esempio:", currentCard.esempio);

  
  if (newGerman === null || newItalian === null || newExample === null) {
    return;
  }

  
  flashCards[index] = {
    german: newGerman.trim(),
    italian: newItalian.trim(),
    esempio: newExample.trim()
  };

  localStorage.setItem("flashCards", JSON.stringify(flashCards));
  updateCard();

  alert("✅ Flashcard aggiornata con successo!");
});


let index=0 

function updateCard(){
var translation = flashCards[index].italian;
  var example = flashCards[index].esempio;
  var frontCard=flashCards[index].german;

  document.querySelector(".front").textContent = frontCard;
  document.querySelector(".back").innerHTML = `
    ${translation}<br><br>
    <strong>Esempio:</strong> ${example}`;
}


