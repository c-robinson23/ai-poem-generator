function displayPoem(response) {
  // console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8955aec3fa84eee934db0tdod70f6d28";
  let context =
    "You are a African American poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML an separate each line with a <br />. Make sure to follow the user instructions.  Sign the poem with <em> element '-SheCode AI' at the end of the peom never in the beginning. Never include a title to the poem.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // console.log("Generating poem");
  // console.log(`Context: ${context}`);
  // console.log(`Prompt: ${prompt}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
