import React from "react";
import { View, Text, Alert, StyleSheet, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const handleLogin = () => {
    const EMAIL_ADDRESS = "sanjuan.jl06@gmail.com";
    const PASSWORD = '12345'

    if (email === EMAIL_ADDRESS && password == PASSWORD){
      return Alert.alert(
        "Hirap neto", 
        "BWAHAHAHAHA"
        );
    }

    Alert.alert(
      "Error",
      "Wrong Username & Password"
    );

  }
  
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#35F0ED',
        justifyContent: 'center',
        paddingHorizontal: 20
      }}
    >
      <View style={{
        flex: 1,
      }}>
        <LottieView
          source={require('../assets/lottie/93385-login.json')}
          autoPlay={true}
          loop={true}
          style={{
            flex: 1,
          }}
        />
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 0
        }}>
          <Text>
            Email
          </Text>
          <TextInput
        style={styles.input}
        keyboardType={"email-address"}
        onChangeText={(value: string) => {
          setEmail(value);
        }}
        value={email}
      />
        </View>

        <View style={{
          flex: 0,
          marginBottom: 10
        }}>
          <Text>
            Password
          </Text>
          <TextInput
        style={styles.input}
        keyboardType={"visible-password"}
        onChangeText={(value: string) => {
          setPassword(value);
        }}
        value={password}
        secureTextEntry={true}
      />
        </View>
        <Text style={{
          fontWeight: '300',
          fontSize: 15,
          textAlign: 'center',
          textDecorationLine: 'underline',
          marginBottom: 140
        }}>
          Didn't have an account?
        </Text>
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <Button
              title="Log-in"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
                borderRadius: 20,
              }}
              onPress={ () => {
                handleLogin
              }}
              icon={<AntDesign 
                name="rightcircleo" 
                size={24} 
                color="black"
                style={{
                  marginHorizontal: 10
                }}
              />}
              iconRight

            />
          </View>
        </View>

      </View>
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 20
      }}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});