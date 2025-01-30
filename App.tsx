import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const profileData = {
  username: "kingjames",
  profilePicture:
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254", // Mock profile image
  bio: "followed by safewaytaco, mare_yer",
  postsCount: 2687,
  followersCount: 15.3,
  followingCount: 250,
  posts: Array.from({ length: 24 }).map((_, index) => ({
    id: index.toString(),
    imageUrl:
      "https://cdn.nba.com/manage/2020/10/lebron-iso-akron-school-2-784x523.jpg", // Mock post images
  })),
};

export default function App() {
  const showAlert = () => {
    Alert.alert("This is an alert", "This is an alert message.");
  };

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

      {/* Username and Bio */}
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{profileData.username}</Text>
        <Text style={styles.bio}>{profileData.bio}</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Post Grid */}
      <FlatList
        data={profileData.posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.postGrid}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="black" />
        <Ionicons name="search-outline" size={28} color="black" />
        <Ionicons name="add-circle-outline" size={28} color="black" />
        <Ionicons name="heart-outline" size={28} color="black" />
        <Ionicons name="person-outline" size={28} color="black" />
        <TouchableOpacity onPress={showAlert}>
          <Text style={styles.navItem}>Alert</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  statsContainer: {
    alignItems: "center",
    flex: 1,
  },
  stats: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profileInfo: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bio: {
    color: "gray",
  },
  followButton: {
    marginTop: 10,
    backgroundColor: "#0095f6",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  postGrid: {
    alignItems: "center",
  },
  postImage: {
    width: "32%",
    height: 100,
    margin: 2,
    resizeMode: "cover",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
