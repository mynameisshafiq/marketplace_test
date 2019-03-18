import React from "react";
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react';
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return <div>App</div>;
  }
}

const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "var(--lightAmazonOrange)"
  }
};

export default withAuthenticator(App, true, [], null, theme);
