/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View

} from 'react-native';
import {observer} from 'mobx-react/native';
import FlipCard from 'react-native-flip-card'
import Back from "../../assets/imgs/card.png"
import pattern1 from "../../assets/imgs/pattern1.png"
import pattern2 from "../../assets/imgs/pattern2.png"
import pattern3 from "../../assets/imgs/pattern3.png"
import pattern4 from "../../assets/imgs/pattern4.png"
import pattern5 from "../../assets/imgs/pattern5.png"

var patterns = [pattern1, pattern2, pattern3, pattern4, pattern5]
class Card extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.face} onPress={(isFlipped) => {
        if (!this.props.gameManager.matches.includes(this.props.cardData.id)) {
          this.props.gameManager.flipCard({ isFlipped, ...this.props.cardData })
        }
      }}>
        <FlipCard
          flipHorizontal={true}
          flipVertical={false}
          flip={this.props.cardData.flipped }
          clickable={false}
          style={styles.face}>
          {/* Face Side */}
          <Image style={styles.face} resizeMod="contain" source={Back} />
          {/* Back Side */}
          <Image style={styles.face} resizeMod="contain" source={patterns[this.props.cardData.id - 1]} />
        </FlipCard>
      </TouchableOpacity>
    );
  }
}

export default observer(['gameManager'])(Card)

const styles = StyleSheet.create({
  face:{
    width:100,
    height:150,
    margin:5,
    borderWidth:0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

