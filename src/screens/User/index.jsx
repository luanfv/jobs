import React from 'react'
import Header from './../../components/Header'
import InfoUser from './../../components/InfoUser'

export default () => (
    <div>
        <Header />
        <InfoUser user={{nome: 'Luan', idade: 19,}} />
    </div>
) 