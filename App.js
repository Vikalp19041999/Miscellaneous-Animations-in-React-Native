import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, Image, Dimensions, } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

console.disableYellowBox = true

export default class extends Component {

  defaultHeader = () => {
    return (
      <View style={{ flexDirection: 'row', marginLeft: '6%', marginTop: '3%' }}>
        <Text style={styles.defaultHeaderText}>Lo</Text>
        <Image source={require('./assets/heart.png')} style={styles.defaultHeaderHeartImage}></Image>
        <Text style={styles.defaultHeaderText2}>ed</Text>
        <View style={styles.defaultHeaderIconContainer}>
          <Image style={styles.owl} source={require('./assets/owl.png')}></Image>
          <Text style={styles.share}>  Share</Text>
        </View>
      </View>
    )
  }

  header = (name, data) => {
    return (
      <View style={{ flexDirection: 'row', marginLeft: '6%', marginTop: '3%' }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.dollarData}>${data}</Text>
      </View>
    )
  }

  constructor() {
    super();
    this.state =
    {
      headerName: this.defaultHeader(),
      Event: ""
    }
  }
  set = (event) => {
    var x = parseInt(event.nativeEvent.contentOffset.y)
    if (x < 46) {
      this.setState(
        {
          headerName: this.defaultHeader()
        }
      )
    }
    else if (x > 46 && x < 805) {
      this.setState(
        {
          headerName: this.header('Meghna', 30.2)
        }
      )
    }
    else if (x > 805) {
      this.setState(
        {
          headerName: this.header('Vicky', 50.1)
        }
      )
    }
  }
  send = (item) => {
    window.x = item.name;
    return (
      <View style={styles.listItem}>
        <View style={styles.introduction}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{(item.name).charAt(0)}</Text>
          </View>
          <Text style={styles.UserName}>{item.name}</Text>
          <View style={styles.plus}>
            <Text style={styles.plusData}>+</Text>
          </View>
        </View>
        <Text style={styles.dataList}>$ {item.Data[0]}</Text>
        <View style={[styles.introduction, { alignSelf: 'flex-start' }]}>
          <View style={styles.onebutton}>
            <Text style={styles.upSize}>UP</Text>
          </View>
          <Text style={styles.increaseDollar}>+${item.Data[1]}  (+{item.Data[2]}%)</Text>
        </View>
        <LineChart
          style={styles.lineChart}
          data={{
            labels: ["-1W", "-1M", "-3M", "-1Y",],
            datasets: [
              {
                data: [10, 10, 12.5, 15.625, 19.5312]
              }
            ]
          }}
          width={Dimensions.get("window").width / 0.75}
          height={200}
          chartConfig={{
            backgroundColor: "#48dbfb",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 175, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 20
            },
            propsForDots: {
              strokeWidth: "2",
              stroke: "#48dbfb"
            }
          }}
          style={{
            marginLeft: '-12.8%',
            marginVertical: '5%',
            borderRadius: 16
          }}
        />
        <Text style={styles.invest}>Investing</Text>
        <View style={styles.list}>
          <Image style={styles.logo}
            source={{ uri: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
          />
          <Text style={styles.text1}>Accumulating Cash</Text>
          <View style={styles.data}>
            <Text style={[styles.data1]}>$5.03</Text>
            <Text style={styles.data2}>+$0.03 (+0.06%)</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Image style={styles.logo}
            source={{ uri: 'https://images.pexels.com/photos/349732/pexels-photo-349732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
          />
          <Text style={styles.text1}>Banker Bosses</Text>
          <View style={styles.data}>
            <Text style={[styles.data1]}>$24.99</Text>
            <Text style={styles.data2}>+$0.001 (+0.0%)</Text>
          </View>
        </View>
        <Text style={styles.achieve}>Achieving</Text>
        <Text style={styles.NormalText}>Set Investment Goal</Text>
      </View>
    )
  }
  render() {
    const datas = [{ name: "Meghna", Data: [30.02, 0.02, 0.07] },
    { name: 'Vicky', Data: [12.01, 20.01, 3.035] }]
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.state.headerName}
        </View>
        <ScrollView style={styles.scrollView}
          onScroll={(event) => this.set(event)}
        >
          <FlatList
            data={datas}
            renderItem={({ item }) => this.send(item)}

          />
        </ScrollView>
        <View style={styles.tabBar}>
          <Image source={require('./assets/thunder.png')} style={styles.tabIcons} />
          <Image source={require('./assets/search.png')} style={styles.tabIcons} />
          <Image source={require('./assets/menu.png')} style={[styles.tabIcons]} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  header:
  {
    height: '10%',
    justifyContent: 'flex-start',
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 3
  },
  headerText:
  {
    marginLeft: '8%',
    marginTop: '3.5%',
    fontSize: 40,
    color: 'black',
    fontWeight: '600'
  },
  introduction:
  {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
    width: '90%',
    alignSelf: 'center'
  },
  circle:
  {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#48dbfb',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  circleText:
  {
    fontSize: 20,
    fontWeight: '600'
  },
  UserName:
  {
    marginStart: 9,
    fontSize: 30,
    fontWeight: '600'
  },
  plus:
  {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: '#48dbfb',
    right: 1,
    position: 'absolute',
    bottom: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusData:
  {
    fontSize: 30
  },
  dataList:
  {
    marginLeft: '5%',
    marginTop: '2%',
    fontSize: 33,
    fontWeight: '700'
  },
  onebutton:
  {
    marginLeft: '5%',
    marginTop: '2%',
    backgroundColor: '#48dbfb',
    height: 25,
    width: 35,
    borderRadius: 5,
    marginStart: 2,
    alignItems: 'center',
    marginStart: 5
  },
  increaseDollar: {
    marginLeft: '2%',
    marginTop: '1.5%',
    fontSize: 22,
  },
  upSize: {
    fontWeight: '700',
    fontSize: 17
  },
  invest:
  {
    fontSize: 30,
    marginTop: '2%',
    marginLeft: '5%',
    fontWeight: 'bold'
  },
  list:
  {
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%'
  },
  logo:
  {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginRight: '2%',
  },
  text1:
  {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '2%',
  },
  data:
  {
    position: 'absolute',
    right: '1%',
    marginTop: '2%'
  },
  data1:
  {
    position: 'absolute',
    right: '1%',
    fontWeight: '700',
    fontSize: 18
  },
  data2:
  {
    position: 'absolute',
    right: '1%',
    top: 26,
    fontSize: 19
  },
  NormalText:
  {
    marginTop: '6.5%',
    marginLeft: '5%',
    fontSize: 22
  },
  achieve:
  {
    fontSize: 25,
    marginTop: '4%',
    marginLeft: '5%',
    fontWeight: 'bold'
  },
  scrollView: {
    height: '81%'
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    height: '9%',
  },
  tabIcons: {
    height: 35,
    width: 35,
    margin: 45,
    borderRadius: 17.5,
  },
  defaultHeaderText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  defaultHeaderHeartImage: {
    marginTop: '4.8%',
    marginLeft: '-3.4%',
    height: 20,
    width: 42,
  },
  defaultHeaderText2: {
    marginLeft: '-3%',
    fontSize: 35,
    fontWeight: 'bold'
  },
  defaultHeaderIconContainer: {
    height: 35,
    width: 100,
    borderRadius: 20,
    backgroundColor: '#48dbfb',
    marginLeft: '43%',
    marginTop: 5,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  owl: {
    alignSelf: 'center',
    height: 30,
    width: 35
  },
  share: {
    fontSize: 15,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  name: {
    fontSize: 35,
    fontWeight: '700'
  },
  dollarData: {
    fontSize: 23,
    marginLeft: '40%',
    marginTop: '3%',
    fontWeight: '700'

  }
})