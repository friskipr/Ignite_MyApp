import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import SimpleGrid from '../../Components/Grid'
import api from '../../Services/DataApi'
import _ from 'lodash'
import styles from './Styles/DataScreenStyles'
import { Icon, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import Form from './DataFormScreen'
import InventoryActions from '../../Redux/InventoryRedux'
import { GenericTablePage as Table } from 'react-native-generic-table-page'

class TableScreen extends React.Component {
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
            _.forIn(this.props.inventories, (value, key) => content.push(value))
        
        console.log(content)
        return content
    }

    getColumnsName() {
        return [
            {
                key: 'name',
                width: 20,
                title: 'Name',
                sortable: true
            },
            {
                key: 'quantity',
                width: 15,
                title: 'Q',
                sortable: true
            },
            {
                key: 'price',
                width: 15,
                title: 'Rp',
                sortable: true
            },
            {
                key: 'description',
                width: 30,
                title: 'Description'                
            },
            {
                key: 'sku',
                width: 20,
                title: 'SKU',
                sortable: true
            }
        ]
    }
    
    handleRowPress = (data) => {
        const { navigate } = this.props.navigation
        navigate('Form', { guid: data })        
    }

    render () {
        const { navigate } = this.props.navigation

        /*return (
            <View >
                <Text h2
                    style={styles.tableHeading}>Inventory Table</Text>
                <View >
                   <Table
                        columns={this.getColumnsName()}
                        data={this.getContent()}
                    />
                </View>
                <Icon
                    name='add-box' 
                    onPress={() => navigate('Form')}
                />
            </View>
        )*/

        return (
            <View>
            <Table
                columns={this.getColumnsName()}
                data={this.getContent()}
                topRoute={true}
                dataTableStyles={
                    {
                        dataTable: {backgroundColor: 'yellow', flex: 1, zIndex: 1}
                    }
                }
            />
            </View>
        )
    }
}
/*
<SimpleGrid
                    keyName='ID'
                    content={this.getContent()}
                    onRowPress={this.handleRowPress}

                    dataTableStyles={{dataTable: {backgroundColor:'red'}}}
                />

                 
*/

const mapStateToProps = (state) => {
  return {
    inventories: state.inventory.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    default: () => dispatch(InventoryActions.getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableScreen)