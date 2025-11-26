export default defineEventHandler((event) => {
  return {
    // 存入数据库操作

    
    result: {
      message: 'message has been sent successfully',
      timestamp: new Date().toISOString()
    },
    isException: false,
    header: {
      "agent": "1"
    }
  }
})