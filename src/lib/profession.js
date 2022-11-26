export class ProfessionCalculator {
  getHighestPreference(preferences) {
    const keys = Object.keys(preferences);
    if (keys.length == 0) {
      return null;
    }

    let max = preferences[keys[0]];
    let name = "";

    for (let i = 0; i < keys.length; i++) {
      const value = preferences[keys[i]];
      if (value > max) {
        name = keys[i];
        max = value;
      }
    }

    return { max, name };
  }

  getTranslatedResult(result) {
    let translation = "";

    switch (result) {
      case "engineering":
        translation = "ingeniería";
        break;
      case "humanities":
        translation = "humanidades";
        break;
      case "sciences":
        translation = "ciencias";
        break;
      case "health":
        translation = "salud";
        break;
    }

    return translation;
  }
}
