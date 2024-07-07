import prisma from "@/lib/prisma";

const newUser = await prisma.user.create({
  data: {
    name: "John Doe",
    email: "john@doe.com",
  },
});

export const user = await prisma.user.findMany();
