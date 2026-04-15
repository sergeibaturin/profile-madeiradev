const API_URL = import.meta.env.VITE_API_URL

export const postGetTutorial = async (email: string): Promise<void> => {
  const response = await fetch(`${API_URL}/get-tutorial`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
}