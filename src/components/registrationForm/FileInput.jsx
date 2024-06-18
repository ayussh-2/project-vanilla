import { useState } from 'react'
import {
  Container,
  HiddenInput,
  FileName,
  ImageButton,
  Input,
  InputContainer,
  Label,
  ErrorMessage
} from './FileInput.styles'
import { imageBtn } from '../../config/content/registrationForm/Registration'
import propTypes from 'prop-types'

FileInput.propTypes = {
  input: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
  }).isRequired,
  handleFormData: propTypes.func.isRequired,
  error: propTypes.string
}

export default function FileInput({
  input: { id, label, type, placeholder },
  handleFormData,
  error
}) {
  const [fileName, setFileName] = useState(placeholder)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFileName(file ? file.name : placeholder)
    handleFormData(id, file)
  }

  const handleClick = () => {
    document.getElementById(id).click()
  }

  return (
    <Container>
      <HiddenInput type={type} id={id} onChange={handleFileChange} />
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input onClick={handleClick}>
          <label htmlFor={id}>
            <ImageButton src={imageBtn} alt="upload" />
          </label>
          <FileName>{fileName}</FileName>
        </Input>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}
