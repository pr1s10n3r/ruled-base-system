<script>
  import { values } from "./stores/values";
  import { Engine } from "json-rules-engine";
  import { ProfessionCalculator } from "./profession";

  let result = "";

  const engine = new Engine();
  const professionCalc = new ProfessionCalculator();

  let highestPreferenceSubject = null;

  // If the student does well in everything, he should study the career of your highest preference.
  engine.addRule({
    conditions: {
      all: [
        {
          fact: "mathScore",
          operator: "greaterThanInclusive",
          value: 60,
        },
        {
          fact: "writtingScore",
          operator: "greaterThanInclusive",
          value: 60,
        },
        {
          fact: "naturalScore",
          operator: "greaterThanInclusive",
          value: 60,
        },
        {
          fact: "languageScore",
          operator: "greaterThanInclusive",
          value: 60,
        },
        {
          fact: "socialScore",
          operator: "greaterThanInclusive",
          value: 60,
        },
      ],
    },
    event: {
      type: "studyHighestPreference",
      params: {
        result: "Parece que eres bueno en todo, ¡Estudia lo que más te guste!.",
      },
    },
  });

  engine.addRule({
    conditions: {
      all: [
        { fact: "mathScore", operator: "greaterThanInclusive", value: 60 },
        { fact: "naturalScore", operator: "greaterThanInclusive", value: 60 },
      ],
    },
    event: {
      type: "studyEngineeringOrScience",
      params: {
        result:
          "Parece que eres bueno en matemáticas y ciencias naturales. Deberías estudiar ingeniería o ciencias.",
      },
    },
  });

  values.subscribe((value) => {
    result = "";

    highestPreferenceSubject = professionCalc.getHighestPreference(
      value.preferences
    );

    let facts = {
      mathScore: value.results.math,
      writtingScore: value.results.writting,
      naturalScore: value.results.natural,
      languageScore: value.results.language,
      socialScore: value.results.social,
    };

    engine.run(facts).then(({ events }) => {
      events.map((event) => console.log(event.params.result));
    });
  });
</script>

<div>
  <form>
    <h3 class="text-center fw-bold mb-2">Deberías estudiar...</h3>
    <hr />

    <p>{result}</p>
  </form>
</div>
