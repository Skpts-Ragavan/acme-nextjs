import { neonConfig } from '@neondatabase/serverless';

console.log('I came here --------------------> <-----------------------------');
// console.log(process.env.POSTGRES_URL);
console.log('I came here --------------------> <-----------------------------');

if (process.env.VERCEL_ENV === 'development') {
  neonConfig.wsProxy = (host) => `${host}:54330/v1`;
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}
 
export * from '@vercel/postgres';