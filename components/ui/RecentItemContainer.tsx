import {View, Text, FlatList } from 'react-native';
import RecentItem from './RecetItem';
import { styles } from '@/assets/styles';

interface RecentItemContainerProps{
    data: {
        date:string;
        activities:number
    }[],
    onItemClicked: ()=> void
}

export default function RecentItemContainer(props:RecentItemContainerProps){
    const {data, onItemClicked} = props;
    return(
        <View style={styles.recentContainer}> 
            <Text style={styles.recentHeader}>Recent Workouts:</Text>
            <FlatList
            data={data}
            renderItem={({item}) => <RecentItem key={item.date} date={item.date} activities={item.activities} onItemClicked={onItemClicked}/>}
            keyExtractor={item => item.date}
            />
        </View>
    )
}