import { getClientIP } from '../util'

export default defineEventHandler((event) => {
  const ip = getClientIP(event)
  console.log(`[${new Date().toLocaleTimeString()}] New request: ${getRequestURL(event)}`)
  console.log('[ip]', ip)
})