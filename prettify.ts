type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

/* 
/ Usage
type Intersected = AdminUser & UserWithPerms & User;
/ With the 'Prettify' helper, the hover overlay
/ shows the actual readout of the types.
type Show = Prettify«Intersected>;
  type Show = {
    name: string; age: number;
    permissions: stringll:
  } 
*/
