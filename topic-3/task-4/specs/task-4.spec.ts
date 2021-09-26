import { Organaizer } from "..";

test('Создает объект класса Organaizer', () => {
	const organaizer = new Organaizer([], []);
	expect(organaizer.meetings).toStrictEqual([]);
	expect(organaizer.vacations).toStrictEqual([]);
});