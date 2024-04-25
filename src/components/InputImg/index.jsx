import { PiUploadSimple } from 'react-icons/pi'

import { Container } from './styles'

export function InputImg({ title, ...rest}) {
  return(
    <Container {...rest}>
      <label htmlFor="imageDish">
        <PiUploadSimple/>
        {title}
        <input 
          id="imageDish"
          type="file"
          title={title}
        />
      </label>
    </Container>
  )
}