import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
      format.colorize(), // 색상 추가
      format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' }), // 날짜 및 시간 형식 설정
      format.printf(({ timestamp, level, message }) => {
        return `${timestamp} - ${level}: ${message}`;
      })
  ),
  transports: [
    new transports.Console()
  ]
});

export default logger
