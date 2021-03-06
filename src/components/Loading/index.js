import React from 'react'

import {Spinner} from './styles'

import LoadingIcon from '../../assets/images/loading.svg'

const Loading = () => {
  return (
    <Spinner src={LoadingIcon} alt="Carregando">

    </Spinner>
  )
}

export default Loading;