/**
 * Created by bogdanbegovic on 8/26/16.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: "hidden",
    height: 180,
  },
  datesStrip: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  calendarDates: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  calendarHeader: {
    fontWeight: "bold",
    alignSelf: "center",
    width:250
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  icon: {
    resizeMode: "contain"
  },

  //CALENDAR DAY
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop:16
  },
  dateName: {
    textAlign: "center"
  },
  weekendDateName: {
    color: "#A7A7A7",
    textAlign: "center"
  },
  dateNumber: {
    fontWeight: "bold",
    textAlign: "center"
  },
  weekendDateNumber: {
    color: "#A7A7A7",
    fontWeight: "bold",
    textAlign: "center"
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: 1,
    borderRadius: 5,
    opacity: 0
  },

  // CALENDAR DOTS
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  visibleDot: {
    opacity: 1,
    backgroundColor: 'blue'
  },
  selectedDot: {
    backgroundColor: 'blue'
  },
});