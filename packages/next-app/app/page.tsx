import Demo from '../src/components/Demo'
import { testFunctionA } from 'module-a'
import { MyCounter } from 'react-module'

export default async function View (props: any) {
  return (
    <div>
      <h1>Page ({ testFunctionA() })</h1>
      <Demo />
      <hr />
      <MyCounter />
    </div>
  )
}