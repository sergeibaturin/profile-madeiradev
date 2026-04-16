// const API_URL = import.meta.env.VITE_API_URL

export interface GetTutorialSuccess {
  success: true
  data: { url: string; message: string }
  meta: {}
}

export interface GetTutorialError {
  success: false
  error: string
}

export type GetTutorialResponse = GetTutorialSuccess | GetTutorialError

export const postGetTutorial = async (email: string, pdf: string): Promise<GetTutorialResponse> => {
  // const response = await fetch(`${API_URL}/get-tutorial`, {
  const response = await fetch(
    `https://luravoqnf8.execute-api.us-west-1.amazonaws.com/v1/get-tutorial`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, pdf: pdf }),
    }
  )

  return (await response.json()) as GetTutorialResponse
}
