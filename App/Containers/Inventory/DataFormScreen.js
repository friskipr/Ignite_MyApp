import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import InventoryActions from '../../Redux/InventoryRedux'
import { connect } from 'react-redux'

class DataFormScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {            
            name: '',
            description: '',
            quantity: '',
            price: '',
            sku: ''
        }
        
        this.mode = 'new'
    }

    componentDidMount() {
        const params = this.props.navigation.state.params
        if (params) {
            this.ID = params.guid
            const data = this.props.default.find(x => x.ID === this.ID)
            this.setState({ ...data })
            this.mode = 'update'
        }
    }

    focusNextField(nextField){
        this.refs[nextField].focus(nextField);
    }

    handleSave() {
        if (this.mode === 'new') {
            this.props.add(this.state)
        } else {
            this.props.update(this.ID, this.state)
        }

        this.props.navigation.goBack()
    }

    getIcon() {
        let name = (this.mode === 'new') ? 'add' : 'archive'
        let icon = {name: name}
        
        return icon
    }

    render() {
        window.me = this.props
        const { name, description, quantity, price, sku } = this.state

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
                        value={name}
                        onChangeText={e => this.setState({ name: e })}
                    />                    

                    <FormLabel>Description</FormLabel>
                    <FormInput 
                        ref='description'
                        textInputRef='description'
                        returnKeyType='next'
                        onSubmitEditing={() => this.focusNextField('quantity')}
                        blurOnSubmit={false}
                        value={description}
                        onChangeText={e => this.setState({ description: e })}
                    />

                    <FormLabel>Quantity</FormLabel>
                    <FormInput 
                        ref='quantity'
                        textInputRef='quantity'
                        returnKeyType='next'
                        onSubmitEditing={() => this.focusNextField('price')}
                        blurOnSubmit={false}
                        keyboardType='numeric'
                        value={quantity}
                        onChangeText={e => this.setState({ quantity: e })}
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
                        value={price}
                        onChangeText={e => this.setState({ price: e })}
                    />

                    <FormLabel>SKU</FormLabel>
                    <FormInput 
                        ref='sku'
                        textInputRef='sku'
                        returnKeyType='next'
                        value={sku}
                        onChangeText={e => this.setState({ sku: e.toUpperCase() })}
                    />
                                    
                    <Button     
                        raised  
                        buttonStyle={{'marginTop': 30}}
                        backgroundColor='black'
                        icon={this.getIcon()}
                        title={(this.mode === 'new') ? 'CREATE NEW ITEM' : 'UPDATE ITEM'}
                        onPress={() => this.handleSave()}
                    />
                    
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    default: state.inventory.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => dispatch(InventoryActions.add(data)),
    update: (id, data) => dispatch(InventoryActions.update(id, {
        ID: data.ID,
        name: data.name,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
        sku: data.sku
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataFormScreen)
