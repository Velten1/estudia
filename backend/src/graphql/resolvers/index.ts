export const resolvers = {
  Query: {
    users: (parent: any, args: { role?: string }, context: any) => {
      const lista = [
        { id: "1", name: "Ada Lovelace", email: "ada@estudia.dev", role: "student" },
        { id: "2", name: "Linus Torvalds", email: "linus@estudia.dev", role: "admin" },
      ];

      if (args.role) {
        return lista.filter((user) => user.role === args.role);
      }
      return lista;
    },
    tasks: () => [
      { id: "2", title: "write a book", done: true },
      { id: "1", title: "fix cellphone", done: false },
    ],
  },
};
