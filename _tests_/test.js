const { format_date } = require('../utils/helper');
test('format_date() returns a date string', () => {
    const date = new Date('2021-10-31 16:12:03');
    expect(format_date(date)).toBe('10/31/2021');
});