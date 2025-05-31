import requests
from bs4 import BeautifulSoup

def decode_secret_message(url):
    # Fetch the document content
    response = requests.get(url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')

    # Locate the data table
    table = soup.find('table')
    rows = table.find_all('tr')[1:]  # Skip header row

    data = []
    for row in rows:
        cols = row.find_all(['td', 'th'])
        if len(cols) != 3:
            continue
        try:
            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())
            data.append((x, y, char))
        except ValueError:
            continue

    # Get grid dimensions
    max_x = max(x for x, y, c in data)
    max_y = max(y for x, y, c in data)

    # Build and populate the grid
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
    for x, y, c in data:
        grid[y][x] = c

    # Print the message
    for row in grid:
        print("".join(row))

# Run the function
url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
decode_secret_message(url)
