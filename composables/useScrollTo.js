// Composable function for smooth scrolling to page sections
export const useScrollTo = () => {
  // Scroll to element by ID, optionally close a menu
  const scrollTo = (id, closeMenuRef = null) => {
    // Close menu if provided
    if (closeMenuRef) {
      closeMenuRef.value = false
    }

    // Find the element and scroll to it smoothly
    const el = document.querySelector(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // adjust for fixed header height
        behavior: 'smooth'
      })

      // Update URL without page reload
      history.pushState(null, null, id)
    }
  }

  return { scrollTo }
}
