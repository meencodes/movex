import React from 'react'
import { Switch , Route } from 'react-router-dom'

import Home from '../pages/Home'
import AtmBit from '../pages/AtmBit'
import Watch from '../pages/Watch'
import Card from '../pages/Card'
import Cryptomap from '../pages/Cryptomap'

const routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/atmbitcoin' component={AtmBit} />
        <Route path='/watch' component={Watch} />
        <Route path='/card' component={Card} />
        <Route path='/cryptomap' component={Cryptomap} />
    </Switch>
)

export default routes