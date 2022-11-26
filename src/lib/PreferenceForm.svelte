<script>
  import { values } from "./stores/values";

  let preferences = {
    humanities: 1,
    engineering: 1,
    sciences: 1,
    health: 1,
  };

  function handlePreferenceChange(evt) {
    const type = evt.target.id;

    switch (type) {
      case "humanities-preference":
        values.update((n) => {
          n.preferences.humanities = preferences.humanities;
          return n;
        });
        break;
      case "engineering-preference":
        values.update((n) => {
          n.preferences.engineering = preferences.engineering;
          return n;
        });
        break;
      case "sciences-preference":
        values.update((n) => {
          n.preferences.sciences = preferences.sciences;
          return n;
        });
        break;
      case "health-preference":
        values.update((n) => {
          n.preferences.health = preferences.health;
          return n;
        });
        break;
    }
  }
</script>

<div>
  <form>
    <h3 class="text-center fw-bold mb-2">Tus Preferencias</h3>
    <hr />
    <div class="mb-3">
      <label for="humanities-preference" class="form-label"
        >Humanidades <span class="badge bg-secondary"
          >{preferences.humanities}</span
        ></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="humanities-preference"
        bind:value={preferences.humanities}
        on:change={handlePreferenceChange}
      />
    </div>
    <div class="mb-3">
      <label for="engineering-preference" class="form-label"
        >Ingenieria <span class="badge bg-secondary"
          >{preferences.engineering}</span
        ></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="engineering-preference"
        bind:value={preferences.engineering}
        on:change={handlePreferenceChange}
      />
    </div>
    <div class="mb-3">
      <label for="sciences-preference" class="form-label"
        >Ciencias <span class="badge bg-secondary">{preferences.sciences}</span
        ></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="sciences-preference"
        bind:value={preferences.sciences}
        on:change={handlePreferenceChange}
      />
    </div>
    <div class="mb-3">
      <label for="health-preference" class="form-label"
        >Salud <span class="badge bg-secondary">{preferences.health}</span
        ></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="health-preference"
        bind:value={preferences.health}
        on:change={handlePreferenceChange}
      />
    </div>
  </form>
</div>
