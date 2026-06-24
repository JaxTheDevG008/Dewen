import requests

text = "Call Sarah at 4pm on Friday"

res = requests.post(
    "http://localhost:8000/parse",
    data={"text": text, "locale": "en_US"}
)

print(res.json())
