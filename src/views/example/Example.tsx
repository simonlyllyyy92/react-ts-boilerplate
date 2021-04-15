import { useState } from 'react'
import { useActions } from './hooks/useAction'
import { useTypedSelector } from './hooks/useTypeSelector'

/**
 * @Component Example
 * @returns JSX Form for....
 */

const Example: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, error, loading } = useTypedSelector((state) => state.example)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name: string) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default Example
