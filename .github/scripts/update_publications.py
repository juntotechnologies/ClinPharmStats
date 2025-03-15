#!/usr/bin/env python3
"""
Script to update publications from Google Scholar.
This script fetches publications from a Google Scholar profile and updates the
publications array in the app/scholarship/page.tsx file.
"""

import json
import re
from scholarly import scholarly

# Google Scholar ID
SCHOLAR_ID = "eR7hro0AAAAJ"
# Your name variations to look for in author lists
YOUR_NAME_VARIATIONS = ["Porwal, S", "Porwal, SP", "Porwal, Shaun", "Porwal S", "Porwal SP", "S Porwal", "SP Porwal", "Shaun Porwal"]

def fetch_publications():
    """Fetch publications from Google Scholar."""
    print("Fetching publications from Google Scholar...")
    
    # Get author by ID
    author = scholarly.search_author_id(SCHOLAR_ID)
    scholarly.fill(author, sections=['publications'])
    
    # Get publications
    publications = []
    
    for pub in author['publications']:
        scholarly.fill(pub)
        
        # Extract data
        title = pub.get('bib', {}).get('title', '')
        authors = pub.get('bib', {}).get('author', '')
        if isinstance(authors, list):
            authors = ', '.join(authors)
        
        journal = pub.get('bib', {}).get('journal', '')
        if not journal:
            journal = pub.get('bib', {}).get('venue', '')
        
        volume = pub.get('bib', {}).get('volume', '')
        pages = pub.get('bib', {}).get('pages', '')
        
        # Format journal info
        journal_info = journal
        if volume:
            journal_info += f" {volume}"
        if pages:
            journal_info += f", {pages}"
        
        year = pub.get('bib', {}).get('pub_year', 0)
        citations = pub.get('num_citations', 0)
        url = f"https://scholar.google.com/citations?view_op=view_citation&hl=en&user={SCHOLAR_ID}&citation_for_view={SCHOLAR_ID}:{pub['author_pub_id']}"
        
        publications.append({
            'title': title,
            'authors': authors,
            'journal': journal_info,
            'year': year,
            'citations': citations,
            'url': url
        })
    
    # Sort by year (newest first) and then by citations (highest first)
    publications.sort(key=lambda x: (-x['year'], -x['citations']))
    
    return publications

def update_tsx_file(publications):
    """Update the publications array in the page.tsx file."""
    print("Updating page.tsx file...")
    
    # Read the current file
    file_path = 'app/scholarship/page.tsx'
    with open(file_path, 'r') as file:
        content = file.read()
    
    # Convert publications to TypeScript format
    publications_ts = []
    for pub in publications:
        pub_ts = f"""    {{
      title: "{pub['title'].replace('"', '\\"')}",
      authors: "{pub['authors'].replace('"', '\\"')}",
      journal: "{pub['journal'].replace('"', '\\"')}",
      year: {pub['year']},
      citations: {pub['citations']},
      url: "{pub['url']}"
    }}"""
        publications_ts.append(pub_ts)
    
    publications_str = ',\n'.join(publications_ts)
    
    # Replace the publications array in the file
    pattern = r'const publications: Publication\[\] = \[([\s\S]*?)\];'
    replacement = f'const publications: Publication[] = [\n{publications_str}\n  ];'
    
    # Update the highlightAuthor function to include all name variations
    highlight_pattern = r'const highlightAuthor = \(authors: string\) => \{[\s\S]*?return authors([\s\S]*?);\s*\};'
    highlight_replacement = """const highlightAuthor = (authors: string) => {
    // Replace variations of Shaun Porwal with bold version
    return authors
      .replace(/SP Porwal/gi, "<strong>SP PORWAL</strong>")
      .replace(/S Porwal/gi, "<strong>S PORWAL</strong>")
      .replace(/Shaun P Porwal/gi, "<strong>SHAUN P PORWAL</strong>")
      .replace(/Shaun Porwal/gi, "<strong>SHAUN PORWAL</strong>")
      .replace(/Porwal S/gi, "<strong>PORWAL S</strong>")
      .replace(/Porwal SP/gi, "<strong>PORWAL SP</strong>")
      .replace(/Porwal, S/gi, "<strong>PORWAL, S</strong>")
      .replace(/Porwal, SP/gi, "<strong>PORWAL, SP</strong>");
  };"""
    
    new_content = re.sub(pattern, replacement, content)
    new_content = re.sub(highlight_pattern, highlight_replacement, new_content)
    
    # Write the updated content back to the file
    with open(file_path, 'w') as file:
        file.write(new_content)
    
    print(f"Updated {len(publications)} publications in {file_path}")

def main():
    """Main function."""
    try:
        publications = fetch_publications()
        update_tsx_file(publications)
        print("Successfully updated publications!")
    except Exception as e:
        print(f"Error updating publications: {e}")
        raise

if __name__ == "__main__":
    main() 