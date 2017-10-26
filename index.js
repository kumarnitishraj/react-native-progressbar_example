import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
}from 'react-native'

const LodingProgressbar = ({status}) =>{

  const flexCompleted = status * 100;
  const flexRemaining = (1 - status) * 100;

    return(
    <View style={styles.topcontrols}>

        <View style={styles.progress}>
          <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
          <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
        </View>
    </View>
  )
}

export default LodingProgressbar;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  innerProgressCompleted: {
    height: 10,
    backgroundColor: 'rgba(238,0,72,0.5)',
  },
  innerProgressRemaining: {
    height: 10,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 0,
    overflow: 'hidden',
  },
  topcontrols: {
    backgroundColor: "transparent",
    borderRadius: 1,
    position: 'absolute',
    top: 4,
    left: 0,
    right: 0,
  },
})
