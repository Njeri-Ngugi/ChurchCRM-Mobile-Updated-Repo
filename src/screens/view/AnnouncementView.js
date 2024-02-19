import React, { useState } from 'react';
import { Text, Image, ScrollView, RefreshControl, TouchableOpacity, View } from 'react-native';
import { styles as Global } from '../../assets/css/Global';
import Announcements from '../ListView/Announcements';
import { styles } from '../../assets/css/HomeScreen';
import { useEffect } from 'react';
import { fetchDataByEndpoint } from '../../hooks/HandleApis';
import { BASE_URL } from '../../hooks/HandleApis';
import { useNavigation } from '@react-navigation/native';
export const fetchAnnouncements = async () => {
  return fetchDataByEndpoint('fetchAnnouncements');
};

const AnnouncementView = ({ route }) => {
  const { announcement, imageUri } = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const [announcementsData, setAnnouncementsData] = useState([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(true);
  const navigation = useNavigation()

  // const [data, setData] = useState({
  //   announcements: [],
  // });

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setData({
        announcementsData: [],
      });

      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const announcements = await fetchAnnouncements();
        setAnnouncementsData(announcements);
        setAnnouncementsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [announcementsData]);

  return (
    <ScrollView
      style={Global.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Image style={Global.image} source={{ uri: imageUri }} />

      <Text style={Global.dataDate}>
        {new Date(announcement.created_at).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
      <Text style={Global.dataTopic}>{announcement.Topic}</Text>
      <Text style={Global.text}>{announcement.Message}</Text>

      {/* View announcement recommendations */}
      <ScrollView horizontal={true} >
        {announcementsLoading ? (
          <Text style={styles.loadingText}>Loading Announcements...</Text>
        ) : announcementsData && announcementsData.length > 0 ? (
          announcementsData.map(announcementsRec => (
            announcementsRec.id !== announcement.id ? (
              <TouchableOpacity
                styles={{ marginTop: 20 }}
                key={announcementsRec.id}
                onPress={() =>
                  navigation.navigate('AnnouncementView', {
                    announcement: announcementsRec,
                    imageUri: `${BASE_URL}/Announcements/${announcementsRec.poster}`,
                  })
                }>
                <View>
                  <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                    <View style={{ marginRight: 10 }}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${BASE_URL}/Announcements/${announcementsRec.poster}`,
                        }}
                      />
                      <Text style={styles.dataDate}>
                        {new Date(announcementsRec.created_at).toLocaleDateString(
                          undefined,
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                        )}
                      </Text>
                      <View style={styles.dataText}>
                        <Text style={styles.text}>
                          {announcementsRec.Topic.slice(0, 25)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
                <Text style={styles.loadingText}></Text>
            )
          ))
        ) : (
          <Text style={styles.loadingText}>Announcements Not available!</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default AnnouncementView;
