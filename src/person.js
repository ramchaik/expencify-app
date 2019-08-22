export const isAdult = x => x >= 18;

const canDrink = x => x >= 25;

const isSeniorCitizen = x => x >= 65;

export { canDrink, isSeniorCitizen as default };

// export default (x) => x >= 65;
