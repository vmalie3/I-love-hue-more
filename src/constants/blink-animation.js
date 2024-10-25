import { keyframes } from 'styled-components'

const blinkAnimation = keyframes`
  0% {
    transform: scale(1); /* Original size */
  }
  50% {
    transform: scale(1.5); /* Grow slightly */
  }
  100% {
    transform: scale(1); /* Return to original size */
  }
`

export default blinkAnimation