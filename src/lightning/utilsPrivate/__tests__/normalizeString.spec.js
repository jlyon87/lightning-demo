import { normalizeString as normalize } from 'lightning/utilsPrivate';

it('Passes through lowercased values when configuration undefined', () => {
    expect(normalize('foo')).toBe('foo');
});

it('Passes through lowercased values when configuration empty', () => {
    expect(normalize('foo', {})).toBe('foo');
});

it('Lowercases values by default', () => {
    expect(normalize('FOO')).toBe('foo');
});

it('Returns empty string when invalid value (fallbackValue is undefined and validValues is empty)', () => {
    expect(
        normalize('foo', {
            validValues: [],
        })
    ).toBe('');
});

it('Returns empty string when invalid value (fallbackValue is undefined and validValues is not empty)', () => {
    expect(
        normalize('foo', {
            validValues: ['bar'],
        })
    ).toBe('');
});

it('Returns default when invalid value (validValues is empty)', () => {
    expect(
        normalize('foo', {
            fallbackValue: 'bar',
            validValues: [],
        })
    ).toBe('bar');
});

it('Returns default when invalid value (validValues does not match)', () => {
    expect(
        normalize('foo', {
            fallbackValue: 'bar',
            validValues: ['baz'],
        })
    ).toBe('bar');
});
