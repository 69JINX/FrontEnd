export async function GET() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 to 100
    return Response.json(randomNumber);
}
