import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class CardValidator implements ValidatorConstraintInterface {
    validate(value: string, validationArguments: ValidationArguments): boolean;
}
