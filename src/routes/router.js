import React from 'react'
import { Switch , Route } from 'react-router-dom'

import Home from '../pages/Home'
import AtmBit from '../pages/AtmBit'
import Watch from '../pages/Watch'
import Card from '../pages/Card'
import Cryptomap from '../pages/Cryptomap'
import Blockchain from '../pages/Blockchain'

import NotFound from '../components/NotFound'

const routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/atmbitcoin' component={AtmBit} />
        <Route path='/watch' component={Watch} />
        {/* <Route path='/card' component={Card} />
        <Route path='/cryptomap' component={Cryptomap} />
        <Route path='/blockchain' component={Blockchain} /> */}
        <Route component={NotFound} />
    </Switch>
)

export default routes