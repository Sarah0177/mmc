import { H3Event } from 'h3'

/**
 * 获取客户端IP地址
 * @param event H3事件对象
 * @returns 客户端IP地址
 */
export function getClientIP(event: H3Event): string {
  const headers = getHeaders(event)

  let forwardedIP = ''
  let ip = ''

  // 检查常见的代理头
  const forwardedFor = headers['x-forwarded-for']
  if (forwardedFor) {
    // x-forwarded-for 可能包含多个IP，取第一个
    forwardedIP = forwardedFor.split(',')[0].trim()
  }

  // 如果没有代理头，使用原始连接IP
  const remoteAddr = event.node.req.socket?.remoteAddress
  
  ip = forwardedIP || headers['x-real-ip'] || headers['x-client-ip'] || headers['cf-connecting-ip'] || remoteAddr || 'unknown'

  // 处理IPv6 localhost (::1 -> 127.0.0.1)
  return ip === '::1' ? '127.0.0.1' : ip.replace(/^::ffff:/, '')

}