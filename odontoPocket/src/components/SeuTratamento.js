import React, { Component } from "react";
import { View, Text, WebView } from "react-native";

export default class HomeActivity extends Component {

  render() {
    return (

        <View style={{ flex: 1 }}>

              <View>
                
              </View>
       <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsInlineMediaPlayback={true}
          source={{ uri: "https://www.youtube.com/watch?v=p0hCPHHlxjk&list=PLhPm0UV2CvUCWSgd_obkFjTA036JGEK_h"  }}
        />     

    </View>

    );
  }
}