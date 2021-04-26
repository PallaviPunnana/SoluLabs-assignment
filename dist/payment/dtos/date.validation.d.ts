import { ValidatorConstraintInterface } from 'class-validator';
export declare class DateValidator implements ValidatorConstraintInterface {
    validate(value: string): boolean;
}
