import redirect from "next/navigation";
let arr = [1, 2, 3];
export async function GET(request: Request) {
  console.log(request);
  return Response.json(arr);
}
export async function POST(request: Request) {
//   redirect("/");
    return Response.json(arr);
}
export async function PUT(request: Request) {
  let body = await request.json();

  arr = arr.map((num) => {
    num == body.data ? 1 : num;
  });
  return Response.json(arr);
}
export async function DELETE(request: Request) {
  let body = await request.json();

  arr = arr.filter((num) => {
    num != body.data;
  });
  return Response.json(arr);
}

let products = new Map();
products.set(1, {});
