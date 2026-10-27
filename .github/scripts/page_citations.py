"""Set one publication's citation count in the page source without touching any other text."""
import re


def citation_pattern(title: str) -> re.Pattern:
    """Match one publication from its title to its citation count. Group 1 is the text before the count."""
    return re.compile(rf'(title: "{re.escape(title)}",[^}}]*citations: )(?:null|\d+)')


def set_citations(content: str, title: str, citations: int) -> str:
    """Return the content with that publication's citation count set. Every other character stays."""
    return citation_pattern(title).sub(rf"\g<1>{citations}", content)
