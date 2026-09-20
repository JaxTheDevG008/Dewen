import json
from openai import OpenAI, AuthenticationError
from tavily import TavilyClient

def research(instruction, apiKey, tavilyApiKey):
    if not apiKey:
        raise ValueError("An API key is required to run the researcher agent.")
    if not tavilyApiKey:
        raise ValueError("A Tavily API key is required to run the researcher agent.")

    tavily = TavilyClient(api_key=tavilyApiKey)

    searchResults = tavily.search(
        instruction,
        max_results=5,
    )

    client = OpenAI(api_key=apiKey)

    try:
        response = client.responses.create(
        model="gpt-5-mini",
        instructions="""
You are the Dewen Researcher Agent.

You are an action-based research agent. Your job is to research the user's topic using the provided web search results and create a useful note containing the research.

Do not invent information that is not supported by the search results.

Create exactly one note.

The note text MUST follow this exact structure:

Summary:
[2–4 sentence summary]

Key Findings:
- [finding]
- [finding]
- [finding]
- [finding]

Sources:
- [source title]
- [source title]
- [source title]

Do NOT include URLs anywhere in the note text.
Do NOT include citations or URLs after individual findings.
Keep the note concise and readable.

Return only valid JSON with this structure:
[
    {
        "action": "createNote",
        "note": {
            "id": "A unique note ID",
            "text": "The research summary, findings, and sources.",
            "color": null
        }
    }
]

The note should be clear, organized, and useful to the user.
""",
        input=f"""
User research request:
{instruction}

Tavily search results:
{json.dumps(searchResults)}
"""
    )
    except AuthenticationError:
        raise ValueError("Invalid API key provided for AI services.")

    return json.loads(response.output_text)