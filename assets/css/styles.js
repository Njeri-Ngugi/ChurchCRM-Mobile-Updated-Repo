import {
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  // Landing Page
  img_view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginTop: 60,
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  verse_view: {
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: "center",
  },
  verse_text: {
    fontSize: 18,
    fontFamily: "sans-serif",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  verse: {
    fontFamily: "sans-serif",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "900",
    alignSelf: "flex-start",
    marginHorizontal: 30,
  },
  auth_btn: {
    alignItems: "center",
  },
  authentication_buttons: {
    paddingVertical: 10,
    backgroundColor: "#0A7E8B",
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  auth_btn_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  forgot_password: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "800",
  },

  inputContainer: {
    flexDirection: "col",
    alignItems: "start",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    height: 50,
  },
  textarea: {
    flex: 1,
    marginLeft: 10,
    height: 100,

  },

  // Notes Page Styling
  notesTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 25,
    paddingStart: 20,
    textAlign: "right",
    color: "#087E8B",
  },
  rowContainer: {
    flexDirection: "col",
    padding: 10,
    resizeMode: "cover",
  },
  notesContainer: {
    marginBottom: 20,
  },
  notesImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  notesDateText: {
    position: 'absolute',
    bottom: 35,
    left: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#087E8B"
  },

  // Styling NewNotes Page
  newNotesContainer: {
    flexDirection: "col",
    alignItems: "start",
    padding: 10,
  },
  notesTopic: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notesInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
  },
  notesLabel: {
    fontSize: 16,
    fontWeight: "700",
    paddingTop: 15,
    paddingBottom: 5,
    color: "#414141"
  },
  notesTextArea: {
    height: 200,
    flex: 1,
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white"
  },
  submitNotes: {
    color: "white",
    fontSize: 14,
    fontWeight: "700"
  },
  submitNotesButton: {
    marginTop: 20,
    backgroundColor: "#087E8B",
    width: 100,
    alignItems: "center",
    alignSelf: "flex-end",
    paddingVertical: 10,
    borderRadius: 8,

  },

  // SermonNotes Page
  takeNotesLabel: {
    display: "flex",
  },

  takeNotes: {
    alignSelf: "flex-start",
    color: "#087E8B",
    fontSize: 14,
    fontWeight: "900",
    paddingBottom: 10,
  },
  sermonNotes: {
    alignSelf: "flex-end",
    color: "#087E8B",
    fontSize: 14,
    fontWeight: "900",
    paddingBottom: 10,
  },

  sermonTextArea: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
    textAlign: "left",
    width: "100%",
  }

});
export { styles };
