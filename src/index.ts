import { PrismaClient } from '@prisma/client'
import app from './app'

// port
const port = process.env.PORT || 3003
// prisma
const prisma = new PrismaClient()

async function main() {
  app.listen(port, () => {
    console.log(`Server running at ${port}`)
  })
}

main()
