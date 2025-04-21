export async function GET() {
  const names = [
    "リョーヘイ",
    "山田",
    "佐藤",
    "大塚",
    "斎藤",
    "須藤",
    "島澤",
    "山口",
  ];
  const name = names[Math.floor(Math.random() * names.length)];
  return new Response(JSON.stringify(name), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
