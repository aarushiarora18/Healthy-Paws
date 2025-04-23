// 
 export async function POST(request) {
  try {
    const { message } = await request.json();

    const apiKey = process.env.HUGGINGFACE_API_KEY;

    const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `You are a friendly and knowledgeable veterinarian who helps people with dog medical advice. Keep answers concise, safe, and warm.\nUser: ${message}\nVet:`,
        parameters: {
          temperature: 0.7,
          max_new_tokens: 200,
        }
      })
    });

    const data = await response.json();
    const botReply = data?.[0]?.generated_text?.split('Vet:')[1]?.trim() || "Sorry, there was an error. 🐾";

    return new Response(JSON.stringify({ reply: botReply }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ reply: "Sorry, there was an error. 🐾" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}