export const NETWORK_TIMEOUT = process.env.SURGIO_NETWORK_TIMEOUT ? Number(process.env.SURGIO_NETWORK_TIMEOUT) : 20000;

export const OBFS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';

export const PROXY_TEST_URL = process.env.SURGIO_PROXY_TEST_URL ?? 'http://www.qualcomm.cn/generate_204';