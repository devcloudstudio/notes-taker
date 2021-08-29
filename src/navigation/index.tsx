import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddNotes from "../../screens/AddNotes";
import ViewNotes from "../../screens/ViewNotes";

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes,
    },
    AddNotes: {
      screen: AddNotes,
    },
  },
  {
    initialRouteName: "ViewNotes",
    headerMode: "none",
    mode: "modal",
  }
);

export default createAppContainer(StackNavigator);
