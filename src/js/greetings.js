export const greetingsFatArrow = (name, age, years) => {
    console.log(`Serwus! Nazywam się ${name} i mam ${age} ${years}`);
    console.log(
      "Powyższą wiadomość wygenerowała funkcja zapisana w formacie strzałkowym"
    );
  };
  
export  function greetingsRegular(name, age, years) {
    console.log(`Czołem! Nazywam się ${name} i mam ${age} ${years}.`);
    console.log("Powyższą wiadomość wygenerowała zwykła funkcja");
  }
  
//I don't know how to export the below - there is an error that "age" is not defined

export const autor = {
    name: "Filip",
    surname: "Rybczyński",
    heightInMeters: 1.76,
    age: 26,
    greetings: () => {
        console.log(
          `Siemaneczko! Moje imię to ${autor.name}, lat mam ${autor.age}, a mówię teraz do Ciebie za pomocą funkcji z wnętrza obiektu`
        );
      },

  };

  console.log("To ja, plik greetings.js. Działam!");