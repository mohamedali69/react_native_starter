import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const jobTypes = ["Full Time", "Part Time", "Internship", "Freelance"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View>
      <View style={styles.container}>
        <Text styles={styles.useName}>Hello Adrian</Text>
        <Text styles={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={(e) => {
              console.log(e.target.value);
            }}
            placeholder="Search job title or keyword"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
      />
    </View>
  );
};

export default Welcome;
