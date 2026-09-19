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

Create exactly one note containing:

- A concise summary
- The key findings
- The source titles and URLs

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