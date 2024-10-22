import { FormEvent, useState } from 'react'
import { FormContainer, Input, Button } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas: React.FC<Props> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  )
}

export default FormVagas
