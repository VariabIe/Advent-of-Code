'use strict';

// region Imports
// External dependencies

const { expect } = require('chai');

// Internal dependencies

const { calculateFuelRequirement } = require('./part2');
// endregion

// Module

describe('Day 1: The Tyranny of the Rocket Equation, part 2', () => {
    it('For a mass of 14, the fuel requirement is 2', () => {
        expect(calculateFuelRequirement(12)).to.equal(2);
    });

    it('For a mass of 1969, the fuel requirement is 966', () => {
        expect(calculateFuelRequirement(1969)).to.equal(966);
    });

    it('For a mass of 100756, the fuel requirement is 50346', () => {
        expect(calculateFuelRequirement(100756)).to.equal(50346);
    });
});
