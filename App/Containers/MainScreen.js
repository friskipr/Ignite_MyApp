import React from 'react'
import { Text } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import InventoryScreen from './Inventory'

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'items',
        }
    }

    changeTab (selectedTab) {
        this.setState({selectedTab})
    }

    render() {
        const { selectedTab } = this.state
        return (
            <Tabs>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'items'}
                    title={selectedTab === 'items' ? 'ITEMS' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='assignment' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='assignment' size={30} />}
                    onPress={() => this.changeTab('items')}>
                    <InventoryScreen />
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'profile'}
                    title={selectedTab === 'profile' ? 'PROFILE' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                    onPress={() => this.changeTab('profile')}>
                    <Text>Account</Text>
                </Tab>
            </Tabs>
        )
    }
}