import bs4, re

with open(r'C:\Users\Raihan\.gemini\antigravity-ide\brain\a47111e3-9f77-4ada-b753-dff1b1270673\.system_generated\steps\9\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
style_text = soup.find('style').get_text()

classes_to_check = ['c63', 'c62', 'c38', 'c35', 'c61', 'c60', 'c19', 'c68', 'c44', 'c12', 'c21', 'c65', 'c15', 'c23', 'c57', 'c48', 'c37', 'c67', 'c47', 'c49', 'c2', 'c32', 'c36', 'c3', 'c11', 'c24', 'c64', 'c8']

for cls in classes_to_check:
    match = re.search(r'\.' + cls + r'\{([^}]+)\}', style_text)
    if match:
        print(f'.{cls}: {match.group(1)}')
