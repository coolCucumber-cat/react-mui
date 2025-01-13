export enum AnimalKind {
	Giraffe,
	Zebra,
	Wolf,
	Panda,
	Lion,
	Cheetah,
	Elephant,
	Tiger,
	Bear,
	Kangaroo,
	Ant,
}

export interface Animal {
	name: string;
	price: string;
	kind: AnimalKind;
	birthday: Date | undefined;
}
