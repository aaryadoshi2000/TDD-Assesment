
import { add } from './StringCalculator';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return the number for a single number string', () => {
        expect(add('1')).toBe(1);
    });

    it('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

});
