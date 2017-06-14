import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import DataScreen from './DataScreen'
import DataFormScreen from './DataFormScreen'

export default class MainScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedTab: 'table'
        }
    }

    _changeTab(tab) {
        this.setState({tab})
    }

    render() {
        return (
            <View>
                <Tabs>
                    <Tab
                        selected={this.state.selectedTab === 'table'}
                        title={this.state.selectedTab === 'table' ? 'TABLE' : null}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
                        onPress={() => this.changeTab('table')}>
                    >
                        <View />
                    </Tab>
                </Tabs>
            </View>
        )
    }
}

/*

<Tabs>
                <Tab
                    selected={this.state.selectedTab === 'table'}
                    title={this.state.selectedTab === 'table' ? 'TABLE' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
                    onPress={() => this.changeTab('table')}>
                >
                    <DataScreen />
                </Tab>
                <Tab
                    selected={this.state.selectedTab === 'form'}
                    title={this.state.selectedTab === 'form' ? 'CREATE' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                    onPress={() => this.changeTab('form')}>
                >
                    <DataFormScreen />
                </Tab>
            </Tabs>


            */