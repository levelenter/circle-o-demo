import fetch from 'node-fetch'

export async function get() {
  const url = 'https://circle-o.jp/v1/teacher/getTopPageTeachers'
  const response = await fetch(url)
  const body = await response.json()
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}