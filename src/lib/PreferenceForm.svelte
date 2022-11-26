<script>
  let humanitiesValue = 1,
    engineeringValue = 1,
    sciencesValue = 1,
    healthValue = 1;
</script>

<div>
  <form>
    <h3 class="text-center fw-bold mb-2">Tus Preferencias</h3>
    <hr />
    <div class="mb-3">
      <label for="humanities-preference" class="form-label"
        >Humanidades <span class="badge bg-secondary">{humanitiesValue}</span
        ></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="humanities-preference"
        bind:value={humanitiesValue}
      />
    </div>
    <div class="mb-3">
      <label for="engineering-preference" class="form-label"
        >Ingenieria <span class="badge bg-secondary">{engineeringValue}</span
        ></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="engineering-preference"
        bind:value={engineeringValue}
      />
    </div>
    <div class="mb-3">
      <label for="sciences-preference" class="form-label"
        >Ciencias <span class="badge bg-secondary">{sciencesValue}</span></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="sciences-preference"
        bind:value={sciencesValue}
      />
    </div>
    <div class="mb-3">
      <label for="health-preference" class="form-label"
        >Salud <span class="badge bg-secondary">{healthValue}</span></label
      >
      <input
        type="range"
        class="form-range"
        min="1"
        max="10"
        id="health-preference"
        bind:value={healthValue}
      />
    </div>
  </form>
</div>
