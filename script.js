const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 4;
        break;
      case 'saturday':
        return 3;
        break;
      case 'sunday':
        return 2;
        break;
      default:
        return 'Day Value Error, please enter a day of the week';
    }  
  };
  
  const getActualSleepHours = () =>
  getSleepHours('monday')+getSleepHours('tuesday') +getSleepHours('wednesday') + getSleepHours('thursday') +
  getSleepHours('friday') +getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleephours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
    console.log('You got exactly the right amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than you needed!');
    } else {
        console.log('Get some rest');
    }
  };
