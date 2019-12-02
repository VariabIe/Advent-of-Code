'use strict';

// region Imports
// External dependencies

const { readFile } = require('fs');
// endregion

// Module

/**
 * Individually calculates the fuel needed for a mass of each module (a single line in the input
 * text file). Specifically, to find the fuel required for a module, take its mass, divide by three,
 * round down, and subtract 2.
 * @param {number} mass - The mass of a module
 * @return {number} The fuel required to launch the module
 */
const calculateFuelRequirement = (mass) => {
    return Math.floor(mass / 3) - 2;
};

readFile(`${__dirname }\\input.txt`, (error, data) => {
    if (error) throw error;

    let totalFuel = 0;
    data.toString().split('\r\n').forEach(mass => {
        totalFuel += calculateFuelRequirement(mass);
    });
});

module.exports = {
    calculateFuelRequirement
};
