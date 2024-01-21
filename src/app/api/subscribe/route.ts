export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Data received:", data);

    console.log("Sending data to an imaginary endpoint...");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const externalServiceResponse = {
      success: true,
      message: "External service received data.",
    };
    console.log("Response from imaginary endpoint:", externalServiceResponse);

    return new Response(
      JSON.stringify({ message: "Data received and processed successfully!" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Server error", { status: 500 });
  }
}
