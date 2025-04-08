export async function POST(request) {
    try {
        const body = await request.json();

        // Fake "saving" the data
        console.log("Received application:", body);

        // Respond with a fake success message
        return Response.json({
            message: '✅ Application received successfully (fake)',
            data: body,
        }, { status: 200 });

    } catch (error) {
        console.error('❌ Error handling application:', error);

        return Response.json({
            message: '❌ Failed to receive application',
        }, { status: 500 });
    }
}
