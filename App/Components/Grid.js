import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './Styles/SearchBarStyles'
import { Colors, Metrics } from '../Themes/'
import {Grid, Col, Row} from 'react-native-elements';
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class SimpleGrid extends React.Component {
  static propTypes = {
    headers: PropTypes.array,
    content: PropTypes.array
  }

  constructor(props) {
    super(props)
    const { headers, content } = this.props
    this.state = {
      gridHeaders: [],
      gridData: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (! _.isEqual(this.props.headers, nextProps.headers))
      this.setState({ gridHeaders: nextProps.headers })

    if (! _.isEqual(this.props.content, nextProps.content)) {
      let content = []
      
      for (let arr of nextProps.content) {
        let val = []
        _.forIn(arr, (value, key) => val.push(value))
        content.push(val)
      }
    
      this.setState({ gridData: content })      
    }
  }

  _generateRow() {
    return (
              this.state.gridData
                  .map((rowText, j) => (
                    <View key={j} style={[{flex:1, flexDirection:'row'}]}>
                      { this._generateRowContent(rowText) }                      
                    </View>
                    ))
           )
  }

  _generateRowContent(row) {
    return (
              row
                .map((content, k) => (
                  <View key={k} style={[{flex:1, borderWidth: .5, borderColor: '#000'}]}>
                    <Text>
                      {content.toString()}
                    </Text>
                  </View>
                ))
          )
  }

  _generateHeader() {
    return (
              this.state.gridHeaders
                  .map((hText, i) => (
                    <View key={i} style={[{flex:1, borderWidth: .5, borderColor: '#000'}]}>
                      <Text>
                        {hText}
                      </Text>
                    </View>
                  ))
          )
  }

  render () {    
    return (
              <View style={[{flex:1}]}>
                <View style={[{flexDirection: 'row', height: 30, backgroundColor: 'grey'}]}>
                  { this._generateHeader() }
                </View>
                <View style={[{flex:1}]}>
                  <ScrollView>
                    { this._generateRow() }
                  </ScrollView>
                </View>
              </View>
           )
  }
}