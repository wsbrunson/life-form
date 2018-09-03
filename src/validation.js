import { compose, curry, isEmpty, not } from "ramda";
import spected from "spected";

// predicates
const notEmpty = compose(
  not,
  isEmpty
);
const isGreaterThan = curry((len, a) => a > len);

// error messages
const notEmptyMsg = field => `${field} should not be empty.`;
const minimumMsg = (field, len) =>
  `Minimum ${field} length of ${len} is required.`;

// rules

const nameValidationRule = [[notEmpty, notEmptyMsg("Name")]];
const ageValidationRule = [
  [notEmpty, notEmptyMsg("Age")],
  [isGreaterThan(0), minimumMsg("Age", 1)]
];
const weightValidationRule = [
  [notEmpty, notEmptyMsg("Weight")],
  [isGreaterThan(0), minimumMsg("Weight", 1)]
];

const validationRules = {
  name: nameValidationRule,
  age: ageValidationRule,
  weight: weightValidationRule
};

const requiredFields = {
  name: "",
  age: 0,
  weight: 0
};

export default input =>
  spected(validationRules, { ...requiredFields, ...input });
