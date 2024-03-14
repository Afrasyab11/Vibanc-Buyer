
export const convertNumberToSuffix = (value, bolean, maxValue) => {
    let suffix = 'x';
    if (bolean && value === maxValue) {
      suffix += '+';
    }
    if (!isNaN(value) && value !== '') {
      return `${value}${suffix}`;
    } else {
      return `${maxValue}${suffix}`;;
    }
  };