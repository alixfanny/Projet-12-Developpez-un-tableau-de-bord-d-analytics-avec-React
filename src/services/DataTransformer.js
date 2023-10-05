const kindMapping = {
    cardio: 'cardio',
    energy: 'énergie',
    endurance: 'endurance',
    strength: 'force',
    speed: 'vitesse',
    intensity: 'intensité',
};

function MappingData(data){
    const firstName = data.firstName;
    const score = data.score ?? data.todayScore;
    const calories = data.keyData.calorieCount;
    const proteines = data.keyData.proteinCount;
    const glucides = data.keyData.carbohydrateCount;
    const lipides = data.keyData.lipidCount;

    return {
        firstName,
        score, 
        calories,
        proteines,
        glucides,
        lipides
    };
}

function MappingDay(daymapping){
    const daysmapping = ["L", "M", "M", "J", "V", "S", "D"];

  switch (daymapping) {
    case 1:
      return daysmapping[0];
    case 2:
      return daysmapping[1];
    case 3:
      return daysmapping[2];
    case 4:
      return daysmapping[3];
    case 5:
      return daysmapping[4];
    case 6:
      return daysmapping[5];
    case 7:
      return daysmapping[6];
    default:
      return "";
  }
}

export  {MappingDay, MappingData, kindMapping}
