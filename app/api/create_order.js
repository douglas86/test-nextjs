import prisma from "@/lib/prisma";

export const createUser = async (req, res) => {
  await prisma.User.create({
    name: req.body.name,
  });
};
