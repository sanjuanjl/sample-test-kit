import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
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
          <View style={{
            height: 50,
            width: '100%',
            marginBottom: 10,
            borderWidth: 2,
            borderRadius: 20
          }}>

          </View>
        </View>

        <View style={{
          flex: 0,
          marginBottom: 10
        }}>
          <Text>
            Password
          </Text>
          <View style={{
            height: 50,
            width: '100%',
            borderWidth: 2,
            borderRadius: 20
          }}>

          </View>
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
            <View style={{
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#315CFA'
            }}>
              <Text style={{
                fontSize: 18,
                color: '#fff',
                justifyContent: 'center'
              }}>
                Log in
              </Text>
            </View>
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