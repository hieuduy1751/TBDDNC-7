import { View, Image, Text } from 'react-native';
import { Book } from '../store';

const CBook = ({ item }: { item: Book }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
      }}
    >
      <Image
        source={{ uri: item.image_url }}
        style={{
          height: 90,
          marginRight: 10,
          borderRadius: 5,
          width: 60,
        }}
      />
      <View
        style={{
          flexGrow: 1,
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#999',
          }}
        >
          {item.author}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#888',
          }}
        >
          {item.published_year}
        </Text>
      </View>
    </View>
  );
};

export default CBook;
