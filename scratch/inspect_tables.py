import bs4

with open(r'C:\Users\Raihan\.gemini\antigravity-ide\brain\a47111e3-9f77-4ada-b753-dff1b1270673\.system_generated\steps\9\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')

tables = soup.find_all('table')
print(f'Total tables: {len(tables)}')

for idx, table in enumerate(tables):
    print(f'\n================ TABLE {idx} ================')
    rows = table.find_all('tr')
    for r_idx, r in enumerate(rows):
        cells = r.find_all(['td', 'th'])
        cell_texts = []
        for c in cells:
            # check style / bg color / text
            cell_texts.append(f'[{c.get("class")}|style:{c.get("style", "")[:40]}]: {c.get_text().strip()}')
        print(f'Row {r_idx}: ' + ' /// '.join(cell_texts))
