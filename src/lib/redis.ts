import { url } from 'inspector';
import { createClient } from 'redis';


export async function main(){
  const client = await createClient({
    url:'http://localhost:6379'
  })
  .on('error', err => console.log('Redis Client Error', err))
  .connect();
} 