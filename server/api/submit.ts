import { getClientIP } from '../util'
export default defineEventHandler(async (event) => {
  const ip = getClientIP(event)
  const body = await readBody(event)

  console.log('body======', body)
  return {
    received: true,
    data: "submit successfully",
    ip
  }
})