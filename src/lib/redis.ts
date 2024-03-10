import { Redis } from "@upstash/redis";

// function getRedisURL():any{
//     if(process.env.REDIS_URL){
//         return process.env.REDIS_URL
//     }

//     return  new Error('REDIS_URL is not defined')
// }

// export const redis = new Redis({
//     url: process.env.REDIS_URL,
//     token: process.env.UPSTASH_REDIS_REST_TOKEN,
//   })

export const redis = new Redis({
  url: "rediss://default:45de49d14d38401ebae5491c488cbac3@eu1-chief-griffon-39868.upstash.io:39868",
  token:
    "AZu8ASQgMjkxYWUzZjctYzU4Yy00MDEwLWJjNmUtZDA3Y2E3OGZhNTQ3NDVkZTQ5ZDE0ZDM4NDAxZWJhZTU0OTFjNDg4Y2JhYzM=",
});
