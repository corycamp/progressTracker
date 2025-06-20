import { styles } from "@/assets/styles";
import { View, Text, Pressable, TextInput } from "react-native";
import { Activity } from "./ActivityAdderContainer";
import { useState } from "react";

interface ActivityItemProps {
  activities: Activity[];
}

export default function ActivityItemInput(props: ActivityItemProps) {
  const { activities } = props;
  const [name, setName] = useState("");

  return (
    <View style={styles.activityItemContainer}>
      <View style={styles.activityItemColumn}>
        <View style={styles.activityInputText}>
          <Text>Excercise Name:</Text>
          <TextInput
            style={{
              height: 40,
              padding: 5,
              backgroundColor: "white",
              borderRadius: 20,
            }}
            placeholder="Type here to translate!"
            onChangeText={(newText) => setName(newText)}
            defaultValue={name}
          />
        </View>
      </View>
    </View>
  );
}
