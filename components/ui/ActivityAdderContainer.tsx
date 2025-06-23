import { View, Text, FlatList, Button } from "react-native";
import { styles } from "@/assets/styles";
import ActivityItemInput from "./ActivityItemInput";
import { useEffect, useState } from "react";
import ActivityLogItem, { ActivityLogItemProps } from "./ActivityLogItem";

export interface Activity {
  name: string;
  reps?: number;
  sets?: number;
  duration?: {
    hours: number;
    minutes: number;
  };
}

export default function ActivityAdderContainer() {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [activities, setActivities] = useState<ActivityLogItemProps[]>([])
  const [showButton, setShowButton] = useState<boolean>(false)

  useEffect(()=>{
    if(!!name && ((!!Number(sets) || !!Number(reps)) || (!!!!Number(minutes) || !!Number(hours)))){
      setShowButton(true)
    }else{
      setShowButton(false)
    }
  },[name, sets, reps, minutes, hours])

  const initializeForm = ()=>{
    setName("")
    setReps("")
    setSets("")
    setMinutes("")
    setHours("")
  }

  const onSubmit = ()=>{
    const newActivity  = {
      Exercise:name,
      sets: Number(sets),
      reps: Number(reps),
      ...((!!minutes || !!hours) && {duration:{
        minutes:Number(minutes),
        hours: Number(hours)
      }}),
    }
    setActivities((prev)=> {return [...prev, newActivity]})
    initializeForm()
  }

  const clear = ()=>{
    setActivities([])
    initializeForm()
  }

  return (
    <View style={styles.addActivityContainer}>
      <Text style={styles.addActivityHeader}>Enter Workout:</Text>
      <ActivityItemInput 
      setName={setName} 
      setSets={setSets}
      setHours={setHours}
      setMinutes={setMinutes}
      setReps={setReps}
      reps={reps}
      sets={sets}
      name={name}
      minutes={minutes}
      hours={hours}
      />
      <View style={styles.activitySubmitButton}>
        <Button title={"Clear all entries"} onPress={clear} disabled={false}/>
        <Button title={"Add workout"} onPress={onSubmit} disabled={!showButton}/>
      </View>
      {activities.length > 0 && (<View>
        <Text style={styles.addActivityHeader}>Workouts Entered:</Text>
        <FlatList
          data={activities}
          renderItem={({ item, index }) => 
          <ActivityLogItem
            key={index}
            Exercise={item.Exercise}
            reps={item.reps}
            sets={item.sets}
            duration={item.duration}
          />
        }
        />
      </View>)}
    </View>
  );
}
