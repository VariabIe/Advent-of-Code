'use strict';

// region Imports
// External dependencies

const { expect } = require('chai'); 

// Internal dependencies

const { calculateFuelRequirement } = require('./part1');
// endregion

// Module

describe('Day 1: The Tyranny of the Rocket Equation, part 1', () => {
    it('For a mass of 12, the fuel requirement is 2', () => {
        expect(calculateFuelRequirement(12)).to.equal(2);  
    });

    it('For a mass of 14, the fuel requirement is 2', () => {
        expect(calculateFuelRequirement(14)).to.equal(2);
    });

    it('For a mass of 1969, the fuel requirement is 654', () => {
        expect(calculateFuelRequirement(1969)).to.equal(654);
    });

    it('For a mass of 100756, the fuel requirement is 33583', () => {
        expect(calculateFuelRequirement(100756)).to.equal(33583);
    });
});
