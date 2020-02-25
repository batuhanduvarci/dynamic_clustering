import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

export default function App() {
  const locationData = [
    {
      id: 1,
      lat: 38.42,
      long: 27.14,
      photoUrl: "https://www.bigstockphoto.com/images/homepage/module-6.jpg"
    },
    {
      id: 2,
      lat: 38.43,
      long: 27.15,
      photoUrl:
        "https://media.gettyimages.com/photos/colorful-powder-explosion-in-all-directions-in-a-nice-composition-picture-id890147976?s=612x612"
    },
    {
      id: 3,
      lat: 38.44,
      long: 27.16,
      photoUrl:
        "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
    },
    {
      id: 4,
      lat: 38.46,
      long: 27.2,
      photoUrl:
        "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
    },
    {
      id: 5,
      lat: 38.46,
      long: 27.21,
      photoUrl:
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      id: 6,
      lat: 38.46,
      long: 27.22,
      photoUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
    }
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        animationEnabled={true}
        clusterColor={"#6200ea"}
        style={styles.map}
        initialRegion={{
          latitude: 38.42,
          longitude: 27.14,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3
        }}
      >
        {locationData.map((m, index) => (
          <Marker
            key={m.id}
            pinColor={"#6200ea"}
            //title={m.post?.baslik}
            coordinate={{
              latitude: m.lat,
              longitude: m.long
            }}
            onPress={() => {}}
            data={m}
          >
            <Text>{m.id}</Text>
            <Image
              source={{
                uri: m.photoUrl
              }}
              style={{ height: 50, width: 50 }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    ...StyleSheet.absoluteFill
  }
});
