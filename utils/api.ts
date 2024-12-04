export async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return response.json()
}
