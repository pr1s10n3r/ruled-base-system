<script>
  import { values } from "./stores/values";

  let results = { math: 0, writting: 0, natural: 0, language: 0, social: 0 };

  function handleResultChange(evt) {
    const type = evt.target.id;

    switch (type) {
      case "math-input":
        values.update((n) => {
          n.results.math = results.math;
          return n;
        });
        break;
      case "written-expression-input":
        values.update((n) => {
          n.results.writting = results.writting;
          return n;
        });
        break;
      case "natural-sciences-input":
        values.update((n) => {
          n.results.natural = results.natural;
          return n;
        });
        break;
      case "foreign-language-input":
        values.update((n) => {
          n.results.language = results.language;
          return n;
        });
        break;
      case "social-science-input":
        values.update((n) => {
          n.results.social = results.social;
          return n;
        });
        break;
    }
  }
</script>

<div>
  <form>
    <h3 class="text-center fw-bold mb-2">Puntaje en las Pruebas Saber</h3>
    <hr />
    <div class="mb-3">
      <label for="math-input" class="form-label"
        >Puntaje Obtenido en Matemáticas</label
      >
      <input
        type="number"
        min="0"
        max="100"
        class="form-control"
        id="math-input"
        bind:value={results.math}
        on:change={handleResultChange}
      />
    </div>
    <div class="mb-3">
      <label for="written-expression-input" class="form-label"
        >Puntaje Obtenido en Expresión Escrita <i
          class="bi bi-question-circle"
          data-bs-toggle="tooltip"
          data-bs-title="Default tooltip"
        /></label
      >
      <input
        type="number"
        min="0"
        max="100"
        class="form-control"
        id="written-expression-input"
        bind:value={results.writting}
        on:change={handleResultChange}
      />
    </div>
    <div class="mb-3">
      <label for="natural-sciences-input" class="form-label"
        >Puntaje Obtenido en Ciencias Naturales</label
      >
      <input
        type="number"
        min="0"
        max="100"
        class="form-control"
        id="natural-sciences-input"
        bind:value={results.natural}
        on:change={handleResultChange}
      />
    </div>
    <div class="mb-3">
      <label for="foreign-language-input" class="form-label"
        >Puntaje Obtenido en Lengua Extranjera</label
      >
      <input
        type="number"
        min="0"
        max="100"
        class="form-control"
        id="foreign-language-input"
        bind:value={results.language}
        on:change={handleResultChange}
      />
    </div>
    <div class="mb-3">
      <label for="social-science-input" class="form-label"
        >Puntaje Obtenido en Ciencias Sociales</label
      >
      <input
        type="number"
        min="0"
        max="100"
        class="form-control"
        id="social-science-input"
        bind:value={results.social}
        on:change={handleResultChange}
      />
    </div>
  </form>
</div>
