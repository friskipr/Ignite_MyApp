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
    this.state = {
      gridHeaders: [],
      gridData: [],
      content: [],
      key: this.props.keyName
    }
  }

  getHeader(content) {
    let header = []
    if (content && content.length) {
      _.forIn(content[0], (value, key) => {      
        if (key !== "ID") header.push(key)
      })
    }

    this.setState({ gridHeaders: header })
  }

  getContent(content) {
    this.setState({ gridData: content })
  }

  componentWillReceiveProps(nextProps) {
    if (_.isEqual(this.state.content, nextProps.content)) return

    const content = nextProps.content
    this.setState({ content: content })
    this.getHeader(content)
    this.getContent(content)    
  }

  _generateRow() {
    let key = this.state.key
    return (
              this.state.gridData
                  .map((row, j) => (
                    <Row 
                      key={j} 
                      style={[{flex:1, flexDirection:'row'}]} 
                      onPress={() => this.props.onRowPress(row[key])}
                    >
                      { this._generateRowContent(row) }
                    </Row>
                    ))
           )
  }

  _generateRowContent(row) {
    let component = []

    _.forIn(row, (value, key) => {
      if (key != 'ID') {
        component.push(
          <Col 
            key={key} 
            style={[{flex:1, borderWidth: .5, borderColor: '#000'}]}
          >
            <Text>
              {value.toString()}
            </Text>
          </Col>
        )
      }
    })

    return component
  }

  _generateHeader() {
    return (
              this.state.gridHeaders
                  .map((hText, i) => (
                    <Col 
                      key={i} 
                      style={[{flex:1, borderWidth: .2, borderColor: '#000', alignItems: 'center'}]}
                    >
                      <Text>
                        {hText}
                      </Text>
                    </Col>
                  ))
          )
  }

  render () {
    const component = (
              <View style={[{flex:1}]}>
                <Grid style={[{flexDirection: 'row', height: 30, backgroundColor: 'grey'}]}>
                  { this._generateHeader() }
                </Grid>
                <View style={[{flex:1}]}>
                  <ScrollView>
                    { this._generateRow() }
                  </ScrollView>
                </View>
              </View>
           )
           
     return this.state.gridData.length > 0 ? component : null
  }
}