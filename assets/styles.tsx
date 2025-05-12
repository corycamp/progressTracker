import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  //Containers
  mainViewContainer: {
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
  },
  mainViewHeaderContainer: {
    width: "100%",
    marginTop: 20,
  },
  mainViewPopUpModal: {
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  headerContainer: {
    margin: 20,
  },
  calendarContainer: {
    height: 350,
  },
  recentContainer: {
    height: "auto",
    marginLeft: 10,
  },
  recentItemContainer: {
    width: "90%",
    height: 70,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: "#A0C1F3",
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  recentItemColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: 140,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  popUpModalTopSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  popUpModalDateContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  activityItemContainer: {
    width: "95%",
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: "#A0C1F3",
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  activityItemColumn: {
    flexDirection: "column",
    width: "90%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    flexWrap: "wrap",
  },
  //Text
  headerText: {
    fontSize: 35,
    textAlign: "center",
  },
  mainViewHeaderText: {
    fontSize: 30,
    textAlign: "center",
  },
  recentHeader: {
    fontSize: 30,
  },
  recentItemHeader: {
    fontSize: 20,
    color: "white",
  },
  recentItemValue: {
    fontSize: 25,
    color: "black",
  },
  popUpModalHeader: {
    fontSize: 25,
  },
  popUpModalDate: {
    fontSize: 20,
  },
  activityItemHeader: {
    marginTop: 15,
    fontSize: 25,
    width: "100%",
    color: "white",
    fontWeight: "500",
  },
  activityItems: {
    marginTop: 15,
    fontSize: 20,
    width: "100%",
    color: "black",
  },
});
