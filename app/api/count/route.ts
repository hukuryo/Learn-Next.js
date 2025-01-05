export async function GET() {
  return Response.json(Math.floor(Math.random() * 100) + 1);
}
