import pino, { Logger, LoggerOptions } from 'pino';

const loggerOptions: LoggerOptions = {
    level: 'warn',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    base: {
        customAttribute: 'customValue',
    },
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
    formatters: {
        level(label: string, number: number): { level: string } {
            return { level: label };
        },
        bindings(bindings: { pid: number; hostname: string }): { pid: number; hostname: string } {
            return { pid: bindings.pid, hostname: bindings.hostname };
        },
    } as any,
};

const logger = pino(loggerOptions);

export default logger;

