export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const getTechColor = (tech) => {
  const colors = {
    'Nuxt 3': 'bg-blue-100 text-blue-800',
    'Vue 3': 'bg-green-100 text-green-800',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
    'Stripe': 'bg-purple-100 text-purple-800'
  }
  return colors[tech] || 'bg-gray-100 text-gray-800'
}