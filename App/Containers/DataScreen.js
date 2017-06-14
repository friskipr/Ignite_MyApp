import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import SimpleGrid from '../Components/Grid'
import api from '../Services/DataApi'
import _ from 'lodash'
import styles from './Styles/DataScreenStyles'
import { Icon, Text } from 'react-native-elements'

export default class DataScreen extends React.Component {
    constructor(props) {    
        super(props)                
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        api.getData
           .then( x => this.setState({ data: x.data.d }) )
           .catch( e => alert(e) )
    }

    _getHeaders() {
        let header = []
        let valid = this.state.data && this.state.data.length
        
        if (valid)
            _.forIn(this.state.data[0], (value, key) => header.push(key))

        return header
    }

    render () {
        const { navigate } = this.props.navigation

        return (
            <View style={{flex:1}}>
                <Text h2
                    style={styles.tableHeading}>Inventory Table</Text>

                <SimpleGrid
                    headers={this._getHeaders()}
                    content={this.state.data}
                />

                <Icon
                    name='add-box' 
                    onPress={() => navigate('DataFormScreen')}
                />
            </View>
        )
    }
}