import { createClient } from "redis";

export const RedisClient = createClient({
  password: "427XarUI2eQoNLvRxsYprmvaZI8VtTzG",
  socket: {
    host: "redis-11495.c241.us-east-1-4.ec2.redns.redis-cloud.com",
    port: 11495,
  },
});
