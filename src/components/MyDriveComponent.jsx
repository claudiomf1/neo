import { useGoogleApi } from "react-gapi";

export function MyDriveComponent() {
  const gapi = useGoogleApi({
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    apiKey: "AIzaSyDs11gmvAQb2xdRL_fWVvhrTRKyz4NoZ5w",
    origin: "http://localhost:5174",
  });

  if (!gapi) {
    return <div>Some loading screen</div>;
  }

  // access the Drive API per gapi.client.drive
}
