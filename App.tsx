import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CreateBook from './src/components/CreateBook';
import Provider from './src/store/provider';
import { ApiService, Book } from './src/store';
import { setBooks } from './src/store/actions';
import useStore from './src/hooks/useStore';
import CBook from './src/components/CBook';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [state, dispatch] = useStore();
  const [books, setBooks] = useState<Book[]>([]);

  const handleModalShow = () => {
    setModalVisible(!modalVisible);
  };

  const handleDissmissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    ApiService.getBooks().then((books: Book[]) => {
      setBooks(books);
    });
  }, []);

  return (
    <Provider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={handleDissmissKeyboard}>
          <>
            <View
              style={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                }}
              >
                Books-App
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <FlatList
                data={books}
                renderItem={({ item }) => <CBook item={item} />}
                keyExtractor={(book: Book, index: number) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <StatusBar style="auto" />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#749F82',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                position: 'absolute',
                right: 40,
                bottom: 40,
                zIndex: 1000,
              }}
              onPress={handleModalShow}
            >
              <Ionicons
                name="add"
                size={35}
                color="white"
                style={{
                  marginLeft: 5,
                }}
              />
            </TouchableOpacity>
            <CreateBook
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Provider>
  );
}
