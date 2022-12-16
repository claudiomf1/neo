import { useGoogleApi } from 'react-gapi'
import { useState } from 'react'
import { Loader, Panel, Checkbox } from 'rsuite'
// export function MyAuthComponent() {
//   const gapi = useGoogleApi({
//     scopes: ['profile']
//   })

//   try {
//     const auth = gapi?.auth2.getAuthInstance()

//     return (
//       <div>
//         {!auth ? (
//           <span>Loading...</span>
//         ) : auth?.isSignedIn.get() ? (
//           `Logged in as "${auth.currentUser.get().getBasicProfile().getName()}"`
//         ) : (
//           <button onClick={() => auth.signIn()}>Login</button>
//         )}
//       </div>
//     )
//   } catch (e) {
//     console.log('e :>> ', e)
//   }
// }

export async function MyAuthComponent() {
  const gapi = useGoogleApi({
    scopes: ['profile']
  })
  try {
    const auth = gapi?.auth2.getAuthInstance()
    const [isLoading, setIsLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [saving, setSaving] = useState(false)

    return (
      <>
        {isLoading ? (
          <Loader active />
        ) : (
          <Panel label={isEditing ? 'Open' : 'Not open'}>
            <a>{isEditing ? 'Close now' : 'Start now'}</a>
            <Checkbox onClick={!saving ? setSaving(saving => !saving) : null} />
          </Panel>
        )}
      </>
    )
  } catch (e) {
    console.log('e :>> ', e)
  }
}
