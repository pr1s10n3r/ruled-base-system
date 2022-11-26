<script>
  import TopicForm from "./lib/TopicForm.svelte";
  import PreferenceForm from "./lib/PreferenceForm.svelte";
  import Calculator from "./lib/Calculator.svelte";
</script>

<main class="app">
  <div class="container">
    <h1 class="app-title text-center text-light mb-5">
      ¿Qué debería estudiar?
    </h1>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <TopicForm />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <PreferenceForm />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .app {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #1c1c1c;
  }

  .app-title {
    font-family: "Pacifico", cursive;
  }
</style>
