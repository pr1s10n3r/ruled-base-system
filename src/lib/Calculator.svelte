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

  // If the student does well in Mathematics AND Natural Sciences, he can study Engineering or Science
  engine.addRule({
    conditions: {
      all: [
        { fact: "mathScore", operator: "greaterThanInclusive", value: 60 },
        { fact: "naturalScore", operator: "greaterThanInclusive", value: 60 },
        { fact: "writtingScore", operator: "lessThanInclusive", value: 59 },
        { fact: "languageScore", operator: "lessThanInclusive", value: 59 },
        { fact: "socialScore", operator: "lessThanInclusive", value: 59 },
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

  // If the student wants to study Engineering OR Science AND he is doing poorly in mathematics, he can study Humanities OR Health
  engine.addRule({
    conditions: {
      all: [
        {
          any: [
            {
              fact: "engineeringDesire",
              operator: "greaterThanInclusive",
              value: 6,
            },
            {
              fact: "scienceDesire",
              operator: "greaterThanInclusive",
              value: 6,
            },
          ],
        },
        {
          all: [
            { fact: "mathScore", operator: "lessThanInclusive", value: 59 },
          ],
        },
      ],
    },
    event: {
      type: "studyHumanitiesOrHealth",
      params: {
        result:
          "Parece que te gusta la ingeniería y la ciencia pero se te dan mal las matemáticas. Deberías estudiar humanidades o ciencias de la salud",
      },
    },
  });

  // If the student is doing poorly in Natural Sciences AND he wants to study Health, he can study Humanities.
  engine.addRule({
    conditions: {
      all: [
        {
          fact: "naturalScore",
          operator: "lessThanInclusive",
          value: 59,
        },
        {
          fact: "healthDesire",
          operator: "greaterThanInclusive",
          value: 6,
        },
      ],
    },
    event: {
      type: "studyHumanities",
      params: {
        result:
          "Parece que no te va bien en ciencias naturales y quieres estudiar salud. Deberías estudiar humanidades",
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
      engineeringDesire: value.preferences.engineering,
      scienceDesire: value.preferences.sciences,
      healthDesire: value.preferences.health,
      humanitiesDesire: value.preferences.humanities,
    };

    engine.run(facts).then(({ events }) => {
      events.map((event) => (result = event.params.result));
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
