import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../assets/css/HomeScreen";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function HomeScreen({ FILE_BASE }) {
  const [sermonsData, setSermonsData] = useState([]);
  const [sermonNotesData, setSermonNotesData] = useState([]);

  const [AnnouncementsData, setAnnouncementsData] = useState([]);

  const [sermonsLoading, setSermonsLoading] = useState(true);
  const [sermonNotesLoading, setsermonNotesLoading] = useState(true);

  const [AnnouncementsLoading, setAnnouncementsLoading] = useState(true);
  const navigation = useNavigation();

  const generateUrl = (endpoint) => {
    return `${FILE_BASE}/api/${endpoint}`;
  };

  const sermonsUrl = generateUrl("fetchSermons");
  const sermonNotesUrl = generateUrl("fetchSermonnotes");
  const announcementsUrl = generateUrl("fetchAnnouncements");

  const fetchData = (url, setData, setLoading) => {
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
  };

  useEffect(() => {
    fetchData(sermonsUrl, setSermonsData, setSermonsLoading);
  }, []);

  useEffect(() => {
    fetchData(sermonNotesUrl, setSermonNotesData, setsermonNotesLoading);
  }, []);

  useEffect(() => {
    fetchData(announcementsUrl, setAnnouncementsData, setAnnouncementsLoading);
  }, []);



  return (
    <ScrollView>


      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.view}>
          <Text style={styles.TextStyle}>
            For I Know the plans I have {"\n"}
            for you, declares the{"\n"}
            Lord, plans for welfare and{"\n"}
            not for evil, to give you a{"\n"}
            future and hope.
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginTop: 30,
            }}
          >
            Jeremiah 29:11
          </Text>
        </View>
      </ImageBackground>

      <View style={{ padding: 10 }}>
        <Text style={styles.headingText}>Announcements</Text>

        <ScrollView horizontal={true}>
          {AnnouncementsLoading ? (
            <Text style={styles.loadingText}>Loading Announcements...</Text>
          ) : (
            AnnouncementsData.map((announcements) => (
              <TouchableOpacity
                key={announcements.id}
                onPress={() =>
                  navigation.navigate("AnnouncementView", {
                    announcement: announcements,
                    imageUri: `${FILE_BASE}/Announcements/${announcements.poster}`,
                  })
                }
              >
                <View style={{ marginRight: 10 }}>
                  <View>
                    <Image
                      style={styles.sermonImage}
                      source={{
                        uri: `${FILE_BASE}/Announcements/${announcements.poster}`,
                      }}
                    />
                    <View style={styles.overlay}></View>
                  </View>
                  <Text style={styles.sermonDateText}>
                    {new Date(announcements.created_at).toDateString()
                    }
                  </Text>
                  <Text style={styles.sermonTopic}>{announcements.Topic}</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
        <Text style={styles.headingText}>Sermons</Text>
        <ScrollView horizontal={true}>
          {sermonsLoading ? (
            <Text style={styles.loadingText}>Loading sermons...</Text>
          ) : (
            sermonsData.map((sermon) => (
              <TouchableOpacity
                key={sermon.id}
                onPress={() =>
                  navigation.navigate("VideoPlayer", { sermon: sermon, })
                }
              >
                <View style={{ marginRight: 10 }}>
                  <View>
                    <Image
                      style={styles.sermonImage}
                      source={{
                        uri: `${FILE_BASE}/SermonThumbnails/${sermon.Thumbnail}`,
                      }}
                    />
                    <View style={styles.overlay}></View>
                  </View>
                  <Text style={styles.sermonDateText}>{new Date(sermon.created_at).toDateString()}</Text>
                  <Text style={styles.sermonTopic}>{sermon.Title}</Text>
                </View>


              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#48A6F9",
        }}
      >
        <Text style={styles.headingText}>Sermon Notes</Text>
        <ScrollView horizontal={true}>
          {sermonNotesLoading ? (
            <Text>Loading sermon Notes...</Text>
          ) : (
            sermonNotesData.map((sermonnotes) => (
              <View key={sermonnotes.id}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <View style={{ marginRight: 10 }}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/one.jpg")}
                    />
                    <Text>
                      {new Date(sermonnotes.created_at).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </Text>
                    <Text>{sermonnotes.Topic}</Text>
                    <Text>{sermonnotes.notesupload}</Text>
                  </View>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}


