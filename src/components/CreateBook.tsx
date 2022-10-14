import React, { useContext } from "react";
import { Alert, KeyboardAvoidingView, Modal, Text, Platform, Pressable, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, TouchableHighlight, ImageBackground } from "react-native";
import useStore from "../hooks/useStore";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CreateBook = ({ modalVisible, setModalVisible }: any) => {
  const [state, dispatch] = useStore()
  const [selectedImage, setSelectedImage] = React.useState<{ localUri: any }>(null as any);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
          <KeyboardAvoidingView style={{
            ...styles.modalView,
          }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={15}
          >
            <TouchableOpacity style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#749F82',
              borderRadius: 30,
              position: 'absolute',
              top: 5,
              right: 5
            }}
              onPress={
                () => setModalVisible(!modalVisible)
              }>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10
            }}>Create new Book</Text>
            <View style={{
              flexDirection: 'row',
              width: '100%'
            }}>
              <TouchableOpacity style={{
                width: 100,
                height: 140,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#D8D9CF',
              }} onPress={openImagePickerAsync}>
                {
                  selectedImage ? (
                    <ImageBackground source={{
                      uri: selectedImage.localUri
                    }} resizeMode="cover" style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} imageStyle={{
                      borderRadius: 10
                    }}>
                      <Ionicons name="add" size={60} color="rgba(0,0,0,0.3)" style={{
                        marginLeft: 5,
                        marginTop: 5
                      }} />
                    </ImageBackground>
                  ) : (
                    <Ionicons name="add" size={60} color="rgba(0,0,0,0.3)" style={{
                      marginLeft: 5,
                      marginTop: 5
                    }} />
                  )
                }

              </TouchableOpacity>
              <View style={{
                marginLeft: 15,
                flexGrow: 1,
                width: 1
              }}>
                <View style={{
                  height: 40,
                  borderWidth: 0.3,
                  borderColor: 'rgba(0,0,0,0.3)',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: 'white',
                  padding: 5,
                }}>
                  <TextInput placeholder="Book's name" />
                </View>
                <View style={{
                  height: 40,
                  borderWidth: 0.3,
                  borderColor: 'rgba(0,0,0,0.3)',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: 'white',
                  padding: 5,
                  marginVertical: 10
                }}>
                  <TextInput placeholder="Book's author" />
                </View>
                <View style={{
                  height: 40,
                  borderWidth: 0.3,
                  borderColor: 'rgba(0,0,0,0.3)',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: 'white',
                  padding: 5,
                  marginBottom: 10
                }}>
                  <TextInput keyboardType="numeric" placeholder="Publish year" />
                </View>
              </View>
            </View>
            <TouchableOpacity style={{
              height: 40,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#749F82',
              borderRadius: 10,
              marginBottom: 15
            }}>
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>Save</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default CreateBook