import React, { Component } from 'react';

import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);

  }

  render() {
    return (
      <View style={styles.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>

         

        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.name)}>

                <Text> {item.name} </Text>

                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}

export default class App extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      {
        expanded: false, category_Name: "BHA (Solicylic Acid)", sub_Category: [{ id: 1, name: 'Mi' }, { id: 2, name: 'RealMe' }, { id: 3, name: 'Samsung' },
        { id: 4, name: 'Infinix' }, { id: 5, name: 'Oppo' }, { id: 6, name: 'Apple' }, { id: 7, name: 'Honor' }]
      },

      {
        expanded: false, category_Name: "AHA", sub_Category: [{ id: 8, name: 'Dell' }, { id: 9, name: 'MAC' }, { id: 10, name: 'HP' },
        { id: 11, name: 'ASUS' }]
      },

      {
        expanded: false, category_Name: "PHA", sub_Category: [{ id: 12, name: 'Pendrive' }, { id: 13, name: 'Bag' },
        { id: 14, name: 'Mouse' }, { id: 15, name: 'Keyboard' }]
      },

      {
        expanded: false, category_Name: "Niacinamide", sub_Category: [{ id: 16, name: 'Home Audio Speakers' },
        { id: 17, name: 'Home Theatres' }, { id: 18, name: 'Bluetooth Speakers' }, { id: 19, name: 'DTH Set Top Box' }]
      },
      {
        expanded: false, category_Name: "Vitamin A", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
        { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
      },
      {
        expanded: false, category_Name: "Vitamin B", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
        { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
      },
      {
        expanded: false, category_Name: "Vitamin C", sub_Category: [{ id: 20, name: 'Mi' },
        { id: 21, name: 'Thomson' }, { id: 22, name: 'LG' }, { id: 23, name: 'SONY' }]
      },
      {
        expanded: false, category_Name: "Hyaluronic Acid", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
        { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
      },
      {
        expanded: false, category_Name: "Ceramides", sub_Category: [{ id: 27, name: 'Microwave Ovens' },
        { id: 28, name: 'Oven Toaster Grills (OTG)' }, { id: 29, name: 'Juicer/Mixer/Grinder' }, { id: 30, name: 'Electric Kettle' }]
      }, {
        expanded: false, category_Name: "Azelaic", sub_Category: [{ id: 31, name: 'Microwave Ovens' },
        { id: 32, name: 'Oven Toaster Grills (OTG)' }, { id: 33, name: 'Juicer/Mixer/Grinder' }, { id: 34, name: 'Electric Kettle' }]
      },
      {
        expanded: false, category_Name: "Abutin", sub_Category: [{ id: 35, name: 'Microwave Ovens' },
        { id: 36, name: 'Oven Toaster Grills (OTG)' }, { id: 37, name: 'Juicer/Mixer/Grinder' }, { id: 38, name: 'Electric Kettle' }]
      },
    
      {
        expanded: false, category_Name: "Glycerin", sub_Category: [{ id: 39, name: 'Microwave Ovens' },
        { id: 40, name: 'Oven Toaster Grills (OTG)' }, { id: 41, name: 'Juicer/Mixer/Grinder' }, { id: 42, name: 'Electric Kettle' }]
      }
    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },

  iconStyle: {

    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    textAlign: 'left',
    color: '#000',
    fontSize: 21,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffdbe9'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }

});