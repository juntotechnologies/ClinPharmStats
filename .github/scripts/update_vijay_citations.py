#!/usr/bin/env python3
"""
Script to update citation counts for Vijay Chauhan's publications from PubMed.
This script searches for publications in PubMed and updates the citation counts
in the app/scholarship/page.tsx file.
"""

import json
import re
import requests
import time
from typing import Dict, List, Optional, Any

# PubMed API endpoints
PUBMED_SEARCH_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi"
PUBMED_SUMMARY_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi"
PUBMED_CITATION_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi"

# API key (optional, but recommended for higher rate limits)
# If you have an API key, uncomment the line below and add your key
# API_KEY = "your_api_key_here"
API_KEY = None

# List of DOIs and titles for Vijay Chauhan's publications
PUBLICATIONS = [
    {
        "title": "A drug‐drug interaction study of ibrutinib with moderate/strong CYP3A inhibitors in patients with B‐cell malignancy",
        "doi": "10.1080/10428194.2018.1460474",
        "authors": "de Jong, J., Hellemans, P., De Wilde, S., Patriciac, D., Masterson, T., Manikhas, G., Myasnikove, A., Osmanov, D., Córdoba, R., Panizo, C., de Zwart, L., Snoeys, J., Chauhan, V., Jiao, J., Sukbuntherng, J., & Ouellet, D."
    },
    {
        "title": "Evaluation of the pharmacokinetics and food effect of oral ibrutinib in healthy subjects and chronic lymphocytic leukemia patient",
        "doi": None,
        "authors": "de Jong, J., Sukbuntherng, J., Skee, D., Murphy, J., O'Brien, S., Byrd, J. C., James, D., Hellemans, P., Jiao, J., Chauhan, V., Poggesi, I., & Mannaert, E."
    },
    {
        "title": "A drug‐drug interaction (DDI) study of ibrutinib with moderate/strong CYP3A inhibitors in patients with B‐cell malignancy",
        "doi": None,
        "authors": "de Jong, J., Hellemans, P., Masterson, T., Skee, D., Manikhas, G., Myasnikov, A., Osmanov, D., Córdoba, R., Panizo, C., de Zwart, L., Snoeys, J., Chauhan, V., Jiao, J., Ouellet, D., & Sukbuntherng, J."
    },
    {
        "title": "Phase 1b study of ARN-509 with abiraterone acetate and prednisone in patients with metastatic castration-resistant prostate cancer",
        "doi": None,
        "authors": "Posadas, E. M., Chi, K. N., de Wit, R., de Jonge, M. J. A., Attard, G., Friedlander, T., Yu, M. K., Hellemans, P., Chien, C., Abrams, C., Gonzalez, M., Trudel, G. C., Chauhan, V., Jiao, J., & Saad, F."
    },
    {
        "title": "Integration of studies for incorporating different discordance rates: A case study",
        "doi": None,
        "authors": "Chauhan, V., Liu, G., & Rao, S."
    },
    {
        "title": "Dose adjustments and time in therapeutic range in an anticoagulation clinic population with venous thromboembolism treated with warfarin",
        "doi": None,
        "authors": "Gultseth, M., Bookhart, B. K., Chauhan, V., LaMori, J., Damaraju, C. V., Schein, J. R., Fields, L., Olson, W. H., & Amin, A."
    },
    {
        "title": "Outcomes in an anticoagulation clinic population with venous thromboembolism and comorbid atrial fibrillation treated with warfarin",
        "doi": None,
        "authors": "Chauhan, V., Gultseth, M., Bookhart, B. K., LaMori, J., Damaraju, C. V., Schein, J. R., Fields, L., Olson, W. H., & Amin, A."
    },
    {
        "title": "A new approach for evaluating benefit-risk in anticoagulation studies: A case study",
        "doi": None,
        "authors": "Chauhan, V."
    },
    {
        "title": "A statistical methodology for adjustment of stroke event rates for CHADS2 score for indirect comparison across trials: A case study",
        "doi": None,
        "authors": "Chauhan, V."
    },
    {
        "title": "Effects of a new hormone therapy with antihypertensive properties drospirenone and 17β-estradiol in postmenopausal women with hypertension",
        "doi": "10.1161/01.HYP.0000232179.60442.84",
        "authors": "White, W. B., Hanes, V., Chauhan, V., & Pitt, B."
    },
    {
        "title": "Modeling LOCF analysis of continuous endpoints in clinical trials",
        "doi": None,
        "authors": "Chauhan, V."
    },
    {
        "title": "Adjustment for center effects in clinical trials data analysis",
        "doi": None,
        "authors": "Chauhan, V."
    }
]

def search_pubmed(query: str) -> List[str]:
    """Search PubMed for a query and return a list of PMIDs."""
    params = {
        "db": "pubmed",
        "term": query,
        "retmode": "json",
        "retmax": 5  # Limit to 5 results
    }
    
    if API_KEY:
        params["api_key"] = API_KEY
    
    try:
        response = requests.get(PUBMED_SEARCH_URL, params=params)
        response.raise_for_status()  # Raise exception for HTTP errors
        data = response.json()
        
        if "esearchresult" in data and "idlist" in data["esearchresult"]:
            return data["esearchresult"]["idlist"]
    except (requests.RequestException, json.JSONDecodeError) as e:
        print(f"  Error searching PubMed: {e}")
    
    return []

def search_publication(pub: Dict[str, Any]) -> List[str]:
    """Search for a publication using multiple strategies."""
    pmids = []
    
    # Strategy 1: Search by DOI if available (most accurate)
    if pub["doi"]:
        print(f"  Searching by DOI: {pub['doi']}")
        pmids = search_pubmed(f"{pub['doi']}[doi]")
    
    # Strategy 2: If no results from DOI or no DOI available, try title and first author
    if not pmids:
        # Clean the title - remove special characters and limit to first 8 words
        title = pub["title"]
        title_words = title.split()[:8]  # Use first 8 words of title
        title_query = " ".join(title_words)
        
        # Extract first author's last name
        first_author = pub["authors"].split(",")[0].split()[-1]
        
        print(f"  Searching by title and author: {title_query} / {first_author}")
        query = f'"{title_query}"[Title] AND {first_author}[Author]'
        pmids = search_pubmed(query)
    
    # Strategy 3: If still no results, try just the title
    if not pmids:
        print(f"  Searching by title only")
        title_words = pub["title"].split()[:10]  # Use first 10 words of title
        title_query = " ".join(title_words)
        query = f'"{title_query}"[Title]'
        pmids = search_pubmed(query)
    
    return pmids

def get_citation_count(pmid: str) -> int:
    """Get the citation count for a PubMed ID."""
    params = {
        "dbfrom": "pubmed",
        "db": "pmc",
        "id": pmid,
        "linkname": "pubmed_pmc_refs",
        "retmode": "json"
    }
    
    if API_KEY:
        params["api_key"] = API_KEY
    
    response = requests.get(PUBMED_CITATION_URL, params=params)
    data = response.json()
    
    try:
        # Extract citation count from the response
        if "linksets" in data and len(data["linksets"]) > 0:
            linkset = data["linksets"][0]
            if "linksetdbs" in linkset and len(linkset["linksetdbs"]) > 0:
                return len(linkset["linksetdbs"][0]["links"])
    except (KeyError, IndexError):
        pass
    
    return 0

def update_tsx_file(citation_data: Dict[str, int]) -> None:
    """Update the citation counts in the page.tsx file."""
    print("\nUpdating page.tsx file with citation counts...")
    
    # Read the current file
    file_path = 'app/scholarship/page.tsx'
    with open(file_path, 'r') as file:
        content = file.read()
    
    updated_count = 0
    
    # Update citation counts for each publication
    for title, citations in citation_data.items():
        # Escape special characters in the title for regex
        escaped_title = re.escape(title)
        
        # Find the publication in the file and update its citation count
        pattern = rf'title: "{escaped_title}",[^}}]*citations: (null|\d+)'
        
        if re.search(pattern, content):
            # Replace the citation count
            replacement = f'citations: {citations}'
            modified_content = re.sub(
                pattern, 
                lambda m: m.group(0).replace(m.group(1), str(citations)), 
                content
            )
            
            if modified_content != content:
                content = modified_content
                updated_count += 1
                print(f"  ✓ Updated citation count for: {title[:50]}... ({citations} citations)")
            else:
                print(f"  ℹ No change needed for: {title[:50]}...")
        else:
            print(f"  ✗ Could not find publication in file: {title[:50]}...")
    
    # Write the updated content back to the file
    with open(file_path, 'w') as file:
        file.write(content)
    
    print(f"\nUpdated citation counts for {updated_count} publications in {file_path}")

def main() -> None:
    """Main function."""
    try:
        print("Starting citation update for Vijay Chauhan's publications...")
        citation_data = {}
        processed_count = 0
        success_count = 0
        
        for pub in PUBLICATIONS:
            processed_count += 1
            print(f"\nProcessing [{processed_count}/{len(PUBLICATIONS)}]: {pub['title'][:50]}...")
            
            try:
                # Search for publication
                pmids = search_publication(pub)
                
                if pmids:
                    # Get the first PMID (most relevant)
                    pmid = pmids[0]
                    
                    # Get citation count
                    citations = get_citation_count(pmid)
                    citation_data[pub["title"]] = citations
                    success_count += 1
                    
                    print(f"  ✓ Found PMID: {pmid}, Citations: {citations}")
                else:
                    print(f"  ✗ No PubMed record found")
                
                # Respect API rate limits
                time.sleep(1)
            except Exception as e:
                print(f"  ✗ Error processing publication: {e}")
        
        print(f"\nProcessed {processed_count} publications, found {success_count} in PubMed")
        
        if citation_data:
            update_tsx_file(citation_data)
            print(f"Successfully updated citation counts for {len(citation_data)} publications!")
        else:
            print("No citation data found to update")
            
    except Exception as e:
        print(f"Error updating citation counts: {e}")
        raise

if __name__ == "__main__":
    main() 