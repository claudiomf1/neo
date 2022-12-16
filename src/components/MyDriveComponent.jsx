import { useGoogleApi } from 'react-gapi'

// export function MyDriveComponent() {
//   const gapi = useGoogleApi({
//     discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//     scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//     apiKey: 'AIzaSyDs11gmvAQb2xdRL_fWVvhrTRKyz4NoZ5w',
//     origin: 'http://localhost:5173'
//   })

//   if (!gapi) {
//     return <div>Some loading screen</div>
//   }
// }

export async function MyDriveComponent() {
  const gapi = useGoogleApi({
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    apiKey: 'AIzaSyDs11gmvAQb2xdRL_fWVvhrTRKyz4NoZ5w',
    origin: 'http://localhost:5173'
  })
  if (!gapi) {
    return <div>Some loading screen</div>
  }
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1sH9G1D9aYiZg0WZ8zrZwIbZn0n0Q2W8r8a2ZQz9Z9qk',
    range: 'A1:B5'
  })
  console.log(response.result)
}
