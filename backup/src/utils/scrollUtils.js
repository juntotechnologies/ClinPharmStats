/**
 * Scrolls to a specific section of the page smoothly
 * 
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for header height)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}; 