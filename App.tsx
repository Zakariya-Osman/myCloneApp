import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const profileData = {
  username: "kingjames",
  profilePicture:
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
  bio: "followed by safewaytaco, mare_yer",
  postsCount: 2687,
  followersCount: 15.3,
  followingCount: 250,
  posts: Array.from({ length: 9 }).map((_, index) => ({
    id: index.toString(),
    imageUrl:
      "https://cdn.nba.com/manage/2020/10/lebron-iso-akron-school-2-784x523.jpg",
  })),
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: profileData.profilePicture }}
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>{profileData.postsCount}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>{profileData.followersCount}M</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>{profileData.followingCount}</Text>
          <Text>Following</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Search</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: { fontSize: 16, fontWeight: "bold" },
});
