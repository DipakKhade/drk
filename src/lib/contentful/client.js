// import {contentful} from 'contentful'
import { createClient } from "contentful";

console.log(process.env.CONTENTFUL_SPACE_ID);
export const client = createClient({
  space: "4eslqvwm6k7a",
  accessToken: "TRFgKOAaQ0GMrh9eYnPuTxyfU7XqF0daVGPa8-T3SQA",

  // space:process.env.CONTENTFUL_SPACE_ID,
  // accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
});
