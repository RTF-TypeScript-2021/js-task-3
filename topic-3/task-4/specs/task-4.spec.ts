import { Organaizer } from "..";

test('Создает объект класса Organaizer', () => {
	const organaizer = new Organaizer([], []);
	expect(organaizer.meetings).toStrictEqual([]);
	expect(organaizer.vacations).toStrictEqual([]);
});

test('Метод isDateInVacation работает корректно', () => {
	//@ts-ignore
    expect(() => new Organaizer([12,3],[1,3])).toThrow();
    //@ts-ignore
    expect(() => new Organaizer([],"123")).toThrow();
    //@ts-ignore
    expect(() => new Organaizer([[],[]],[])).toThrow();
});