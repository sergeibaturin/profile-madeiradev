const API_URL = import.meta.env.VITE_API_URL

export interface GetTutorialSuccess {
  success: true
  data: { pdfSlug: string; message: string }
}

export interface GetTutorialError {
  success: false
  error: string
}

export type GetTutorialResponse = GetTutorialSuccess | GetTutorialError

export const postGetTutorial = async (email: string): Promise<GetTutorialResponse> => {
  const response = await fetch(`${API_URL}/get-tutorial`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  const data: GetTutorialResponse = await response.json()
  return data
}