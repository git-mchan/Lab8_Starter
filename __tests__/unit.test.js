// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// phne number
test('is a valid phone number', () => {
    expect(functions.isPhoneNumber('666-666-6666')).toBe(true);
})
test('is a valid phone number', () => {
    expect(functions.isPhoneNumber('444-444-4444')).toBe(true);
})
test('is not a valid phone number', () => {
    expect(functions.isPhoneNumber('999-999-999')).toBe(false);
})
test('is not a valid phone number', () => {
    expect(functions.isPhoneNumber('911-911-911')).toBe(false);
})

// emails
test('is a valid email', () => {
    expect(functions.isEmail('itsmellslikeCS@ucsd.com')).toBe(true);
})
test('is a valid email', () => {
    expect(functions.isEmail('graduationisascam@ucsd.com')).toBe(true);
})
test('is not a valid email', () => {
    expect(functions.isEmail('i can afford school')).toBe(false);
})
test('is not a valid email', () => {
    expect(functions.isEmail('peopleflippinghousestomakeaprofitisgood@bussness')).toBe(false);
})

// password
test('is a strong password', () => {
    expect(functions.isStrongPassword('IamnotStrong')).toBe(true);
})
test('is a strong password', () => {
    expect(functions.isStrongPassword('DesperateToGrad')).toBe(true);
})
test('is not a strong password', () => {
    expect(functions.isStrongPassword('succeeding is for winners')).toBe(false);
})
test('is not a strong password', () => {
    expect(functions.isStrongPassword('911')).toBe(false);
})

// date
test('is a date', () => {
    expect(functions.isDate('11/11/1111')).toBe(true);
})
test('is a date', () => {
    expect(functions.isDate('12/21/2012')).toBe(true);
})
test('is a invalid date', () => {
    expect(functions.isDate('11/11/1')).toBe(false);
})
test('is a invalid date', () => {
    expect(functions.isDate('44/1111')).toBe(false);
})

// hexcolor
test('is a hexcolor', () => {
    expect(functions.isHexColor('#666')).toBe(true);
})
test('is a hexcolor', () => {
    expect(functions.isHexColor('444')).toBe(true);
})
test('is not a hexcolor', () => {
    expect(functions.isHexColor('911Emergency')).toBe(false);
})
test('is not a hexcolor', () => {
    expect(functions.isHexColor('720p')).toBe(false);
})
