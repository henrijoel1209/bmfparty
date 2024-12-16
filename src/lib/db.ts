import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function saveTicket(ticketData: {
  firstName: string;
  lastName: string;
  phone: string;
}) {
  return prisma.ticket.create({
    data: ticketData,
  });
}

export async function getTicket(id: string) {
  return prisma.ticket.findUnique({
    where: { id },
  });
}