import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    //Containers
    mainViewContainer:{
      height: "100%",
      backgroundColor:"white",
      flexDirection:'column',
    },
    headerContainer:{
      margin:20,
    },
    calendarContainer:{
      height:350
    },
    recentContainer:{
      height:"auto",
      marginLeft: 10
    },
    recentItemContainer:{
        width:'95%',
        height: 70,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:"#A0C1F3",
        borderRadius: 10,
        padding: 5,
        flexDirection: "row",
        justifyContent:'space-around'
      },
      recentItemColumn:{
        flexDirection:'column',
        justifyContent: "space-around",
        width:140,
        overflow: "hidden",
        textOverflow:"ellipsis",
      },
      recentItemPopUpModal:{
        // position:"absolute",
        // alignItems:"center",
        // alignSelf:"center",
      },
      popUpModalTopSection:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:10
    },
    //Text
    headerText:{
      fontSize: 35,
      textAlign:"center"
    },
    recentHeader:{
      fontSize: 30,
    },
    recentItemHeader:{
        fontSize: 20,
        color:"white"
    },
    recentItemValue:{
        fontSize: 25,
        color:"black"
    },
    popUpModalHeader:{
        fontSize: 25
    }
  });