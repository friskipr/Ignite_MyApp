import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class DataFormScreen extends React.Component {    
    focusNextField(nextField){
        this.refs[nextField].focus(nextField);
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={[{flex: 1}]}>
                <ScrollView>
                    <FormLabel>Name</FormLabel>
                    <FormInput 
                        ref='name'
                        textInputRef='name'
                        returnKeyType='next'
                        onSubmitEditing={() => this.focusNextField('description')}
                        blurOnSubmit={false}
                    />                    

                    <FormLabel>Description</FormLabel>
                    <FormInput 
                        ref='description'
                        textInputRef='description'
                        returnKeyType='next'
                        onSubmitEditing={() => this.focusNextField('quantity')}
                        blurOnSubmit={false}
                    />

                    <FormLabel>Quantity</FormLabel>
                    <FormInput 
                        ref='quantity'
                        textInputRef='quantity'
                        returnKeyType='next'
                        onSubmitEditing={() => this.focusNextField('price')}
                        blurOnSubmit={false}
                        keyboardType='numeric'
                    />

                    <FormLabel>Price</FormLabel>
                    <FormInput 
                        ref='price'
                        textInputRef='price'
                        returnKeyType='next'
                        onSubmitEditing={() => this.refs.sku.focus()}
                        onSubmitEditing={() => this.focusNextField('sku')}
                        blurOnSubmit={false}
                        keyboardType='numeric'
                    />

                    <FormLabel>SKU</FormLabel>
                    <FormInput 
                        ref='sku'
                        textInputRef='sku'
                        returnKeyType='next'
                    />
                                    
                    <Button     
                        raised  
                        buttonStyle={{'marginTop': 30}}
                        backgroundColor='black'
                        icon={{name: 'add'}}
                        title='SAVE NEW ITEM'
                    />
                    
                </ScrollView>
            </View>
        )
    }
}