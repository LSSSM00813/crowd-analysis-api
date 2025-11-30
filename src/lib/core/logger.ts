export enum LogLevel {
  INFO,
  WARN,
  ERROR,
  FATAL,
  DEBUG,
}

export const INFO = (message: string) => LOG(LogLevel.INFO, message);
export const WARN = (message: string) => LOG(LogLevel.WARN, message);
export const ERROR = (message: string) => LOG(LogLevel.ERROR, message);
export const FATAL = (message: string) => LOG(LogLevel.FATAL, message);
export const DEBUG = (message: string) => LOG(LogLevel.DEBUG, message);

export const LOG = (level: LogLevel, message: string) => {
  const logLevel = LogLevel[level];
  const logTime = new Date().toISOString();  
  console.log(`${logTime} ${logLevel} :${message}`);
};
