import { StyleSheet, StatusBar } from 'react-native';

export const basicStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop: StatusBar.currentHeight || 0,
      paddingLeft: 10,
      paddingRight: 10,
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        margin: 10
    },
    textInput: {
        backgroundColor: '#d9d9d7',
        borderWidth: 1,
        paddingLeft: 5
    },
    labels: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 8
    },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 4,
    backgroundColor: '#00e6e6',
    },
    calcText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    result: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        fontSize: 35,
        fontWeight: 'bold'
    },
    buttonTexts: {
        labelColor: 'white'
    },
    switch: {
        alignSelf: 'flex-start'
    },
    author: {
        alignSelf:'flex-start',
        marginTop: 10
    },
  });

  export const fancyStyle = StyleSheet.create({
    container: {...basicStyle.container,
                backgroundColor: '#262626'},
    title: {...basicStyle.title,
                color: '#defff0'},
    textInput: {...basicStyle.textInput,
                borderBottomColor: 'white'},
    labels: {...basicStyle.labels,
                color: '#defff0'},
    button: {...basicStyle.button},
    calcText: {...basicStyle.calcText},
    result: {...basicStyle.result,
                color: 'white'},
    switch: {...basicStyle.switch},
    author: {...basicStyle.author,
                color: 'white'}
  })