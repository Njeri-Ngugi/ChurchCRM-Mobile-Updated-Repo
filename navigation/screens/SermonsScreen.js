import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { styles } from "../../assets/css/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Sermons({ FILE_BASE, setThisSermon }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation()

  const url = `${FILE_BASE}/api/fetchSermons`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching data from ${url}:`, error);
        setLoading(false);
      });
  }, []);

  // Function to redirect to sermon notes
  const handlePress = (sermonId) => {
    setThisSermon(sermonId)
    navigation.navigate("SermonNotes");
  }

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <ScrollView horizontal={false}>
          <View style={styles.rowContainer}>
            {loading ? (
              <Text style={styles.loadingText}>Loading Sermons...</Text>
            ) : (
              data.map((sermon) => (
                <View style={styles.notesContainer} key={sermon.id}>
                  <TouchableOpacity onPress={() => handlePress(sermon.id)} >
                    <Image
                      source={{
                        uri: `${FILE_BASE}/SermonThumbnails/${sermon.Thumbnail}`,
                      }}
                      style={styles.notesImage}
                    />
                    <Text style={styles.notesTopic}>{sermon.Title}</Text>
                  </TouchableOpacity>

                </View>

              ))
            )}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
