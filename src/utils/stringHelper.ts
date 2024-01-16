import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";

export const titleCase = (str: string) => startCase(lowerCase(str))