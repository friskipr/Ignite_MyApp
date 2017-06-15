import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import SimpleGrid from '../Components/Grid'
import api from '../Services/DataApi'
import _ from 'lodash'
import styles from './Styles/DataScreenStyles'
import { Icon, Text } from 'react-native-elements'
import { connect } from 'react-redux'

class DataScreen extends React.Component {
    constructor(props) {    
        super(props)                
        this.state = {
            data: this.props.inventories
        }
    }

    componentDidMount() {
        api.getData
           .then( x => this.setState({ data: x.data.d }) )
           .catch( e => alert(e) )
    }

    getHeaders() {
        let header = []
        let valid = this.props.inventories && this.props.inventories.length
        
        if (valid)
            _.forIn(this.props.inventories[0].data, (value, key) => header.push(key))

        return header
    }

    getContent() {
        let content = []
        let valid = this.props.inventories && this.props.inventories.length
        
        if (valid)
            _.forIn(this.props.inventories, (value, key) => content.push(value.data))
            
        return content
    }

    render () {
        const { navigate } = this.props.navigation
        
        return (
            <View style={{flex:1}}>
                <Text h2
                    style={styles.tableHeading}>Inventory Table</Text>
                
                <SimpleGrid
                    headers={this.getHeaders()}
                    content={this.getContent()}
                />

                <Icon
                    name='add-box' 
                    onPress={() => navigate('DataFormScreen')}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    inventories: state.inventory.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, {})(DataScreen)