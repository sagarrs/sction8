import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleEmail = (email) => {
        this.setState(() => ({
            email: email
        }))
    }

    handlePassword = (pwd) => {
        this.setState(() => ({
            password: pwd
        }))
    }

    handleConfirmPassword = (changePwd) => {
        this.setState(() => ({
            confirmPassword: changePwd
        }))
    }

    handleSubmit = () => {
        const formData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        console.log(formData)
    }

    render(){
        return(
            <View>
                <ImageBackground source={{uri: 'data:image/jpeg;base64,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'}} style={{width: '100%', height: '100%'}}>
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Login</Text>
                        <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor="#000" onChangeText={this.handleEmail}/>
                        <TextInput style={styles.textInput} placeholder="password" placeholderTextColor="#000" onChangeText={this.handlePassword}/>
                        <TextInput style={styles.textInput} placeholder="confirm password" placeholderTextColor="#000" onChangeText={this.handleConfirmPassword}/>
                        <Button title="submit" onPress={this.handleSubmit}/>
                    </View>
                </ImageBackground>     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    headerText: {
        left: 20,
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff"
    },
    textInput: {
        borderBottomColor: 'gray', 
        borderWidth: 1,
        margin: 10,
        backgroundColor: "#fff"
    }
})

export default Login