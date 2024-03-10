import { headers } from "next/headers";
export async function POST() {
  const headersList = headers();
  const query = headersList.get("token");
  console.log(query);
  return Response.json({ query });
}
