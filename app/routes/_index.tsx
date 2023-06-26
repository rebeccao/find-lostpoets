// app/routes/_index.tsx
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Layout } from '~/components/layout'
import { SearchPanel } from '~/components/search-panel'
import { getPoets } from '~/utils/poet.server'

// Code run within the loader function is not exposed to the client-side code 
export const loader: LoaderFunction = async ({ request }) => {
  const poets = await getPoets()
  console.log({poets})
  return json({poets})
  //return null
}

export default function Home() {
  return (
    <Layout>
      <div className="h-full flex">
        <SearchPanel />
      </div>
    </Layout>
  )
}



/*}
export default function IndexRoute() {
  return (
    <Layout>
      <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <h2 className="text-yellow-300 font-extrabold text-5xl">Poets Route</h2>
      </div>
    </Layout>
  )
}
*/

  