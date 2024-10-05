type User = {
	id: number;
	name: string;
};

type MakeReadonly<T, K extends keyof T> = {
	readonly [P in K]: T[P];
} & {
	[P in Exclude<keyof T, K>]: T[P];
};

// utilisation pour rendre 'id' readonly
type RegisteredUser = MakeReadonly<User, "id">;

const user: RegisteredUser = {
	id: 1,
	name: "Alice",
};
user.name = "Bob"; // OK
user.id = 2; // Erreur : Cannot assign to 'id' because it is a read-only property.
