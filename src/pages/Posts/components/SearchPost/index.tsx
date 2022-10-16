import { useContext } from "react";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { UserContext } from "../../../../contexts/UserContext";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormPros {
  fetchIssues: (query?: string) => Promise<void>;
}

export function SearchForm({ fetchIssues }: SearchFormPros) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchIssues(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}