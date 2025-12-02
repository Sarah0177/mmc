import { getClientIP } from '../util'
import { prisma } from "../../libs/prisma"
export default defineEventHandler(async (event) => {
  const ip = getClientIP(event)
  const body = await readBody(event)

  console.log('body======', body)
  const { email, name, phone, message } = body
  // 插入数据库
  try {
    await prisma.message.create({
      data: {
        name,
        email,
        phone,
        message
      }
    })
    console.log('插入数据库成功')
    return {
      received: true,
      data: "submit successfully",
      ip
    }
    
  } catch (err) {
    return {
      error: true,
      message: "sorry, something is wrong",
    }
  }

})