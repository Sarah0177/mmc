import 'dotenv/config'
import { PrismaClient } from './generated/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const messageData = [
  {
    name: 'Alice-test',
    email: 'alice@prisma.io',
    phone: "192002",
    message: "111"
  },
  {
    name: 'Nilu-test',
    email: 'nilu@prisma.io',
    phone: "180303",
    message: "222"
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of messageData) {
    const message = await prisma.message.create({
      data: u,
    })
    console.log(`Created message with id: ${message.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })