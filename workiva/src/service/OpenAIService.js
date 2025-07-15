export const OpenAIService = {

    generateAIResponse: async (prompt) => {
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful AI assistant.",
                        },
                        {
                            role: "user",
                            content: prompt,
                        },
                    ],
                }),
            })

            // handle status not OK response 
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message}`);
            }

            const data = await response.json();
            
            // check the format of AI data
            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                throw new Error("Invalid response format from OpenAI API");
            }

            // Return valid data
            return data.choices[0].message.content.trim()
        } catch (error) {
            if (error.message.includes("401")) {
                throw new Error("Invalid API key");
            } else if (error.message.includes("429")) {
                throw new Error("Rate limit exceeded. Please try again later.");
            }

            throw new Error("Failed to generate AI response. Please try again.");
        }
    }

}
