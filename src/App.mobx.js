import React, { Component } from 'react';

import {observer} from 'mobx-react'
import * as mobx from 'mobx'

import './App.css';

//components
import {QueryForm} from './components/QueryForm'
import {ResultView} from './components/ResultView'

import {mobxStore, getData} from './stores/MobxStore'

export default observer(
  class App extends Component {

    handleChangeQuery(query){
      if(query.length > 3){
        getData(query)
      }
    }

    render() {
      const handleChangeQuery = this.handleChangeQuery.bind(this)
      const {data, count} = mobxStore
      // mobx.trace(true)

      return (
        <div className="App">
          <header className="App-header">
            <QueryForm handleChangeQuery={handleChangeQuery} count={count}/>
          </header>
        
        {
          data?
              <ResultView data={data} />
            :null
        }
        </div>
      );
    }
  }
)

