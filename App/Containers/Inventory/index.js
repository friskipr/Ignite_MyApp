import React from 'react'
import { StackNavigator } from "react-navigation";
import Table from './TableScreen'
import Form from './DataFormScreen'

export default InventoryScreen = StackNavigator({
    Table: { screen: Table},
    Form: { screen: Form}
}, {
    headerMode: 'none'
})