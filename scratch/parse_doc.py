import bs4

with open(r'C:\Users\Raihan\.gemini\antigravity-ide\brain\a47111e3-9f77-4ada-b753-dff1b1270673\.system_generated\steps\9\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
body = soup.find('body')

for child in body.children:
    if child.name is None:
        continue
    text = child.get_text().strip()
    if not text and not child.find_all('img'):
        continue
    classes = child.get('class', [])
    if child.find('img'):
        print(f'[IMG] in <{child.name}>: {text[:40]}')
    elif child.name.startswith('h'):
        print(f'<{child.name} class={classes}> {text}')
    elif child.name == 'table':
        print(f'<TABLE> rows={len(child.find_all("tr"))} text={text[:60]}')
    elif child.name == 'ul':
        print(f'<UL> items={len(child.find_all("li"))}')
        for li in child.find_all('li'):
            print(f'   * {li.get_text().strip()}')
    else:
        print(f'<{child.name} class={classes}> {text[:80]}')
