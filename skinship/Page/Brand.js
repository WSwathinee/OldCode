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
        expanded: false, category_Name: "์Nami", sub_Category: [{ id: 1, name: 'Aloe Lemon Brightening Gel' }, { id: 2, name: 'Jeju Vitamiv C Brightening Gel' }, { id: 3, name: 'Tamarind Whitening Scrub mask' },
        { id: 4, name: 'Mangosteen Ance Gel' }, { id: 5, name: 'Lemon Heoney Gel' }, { id: 6, name: 'Centella Smooth Serum' }]
      },

      {
        expanded: false, category_Name: "Smooto", sub_Category: [{ id: 7, name: 'Aloe_E Acne White Serum Soap' }, { id: 8, name: 'Peachy Ice White Collagen Gel' }, { id: 9, name: 'Tomato Bulgaria Yogurt Whitening Sooting' },
        { id: 10, name: 'Egg Collagen White Serum' },{ id: 11, name: 'Valcanic Egg Clay Mask' },{ id: 12, name: 'Vita Berry Bright Eye Serum' },{ id: 13, name: 'Power C Whitening & Melasma Serum' }]
      },

      {
        expanded: false, category_Name: "Skinsista", sub_Category: [{ id: 13, name: 'V Acne Clear Booter & Cream' }, { id: 14, name: 'Vit C Extra Bright Booter & Cream' }]
      },

      {
        expanded: false, category_Name: "Rojukiss", sub_Category: [{ id: 15, name: 'Perfect Poreless Serum' },
        { id: 16, name: 'White Poreless Serum' }, { id: 17, name: 'White Poreless Day Cream SPF35 PA+++' }, { id: 18, name: 'White Poreless UV Matt SPF + PA+++' },
        { id: 19, name: 'Perfect Poreless Eye for Face Cream' },{ id: 20, name: 'Acne Spotless Serum' },{ id: 21, name: 'Hya Poreless Serum' }]
      },

      {
        expanded: false, category_Name: "Clearnose", sub_Category: [{ id: 22, name: 'Acne care Solution Serum' }]
      },

      {
        expanded: false, category_Name: "BK", sub_Category: [{ id: 23, name: 'Acne Expert Bright' },{ id: 14, name: 'Acne Serum Anti Pollution' },
        { id: 25, name: 'Acne Balancing Mask' }]
      },
      {
        expanded: false, category_Name: "Mizumi", sub_Category: [{ id: 26, name: 'B3 Acne Concentrate Serum ' },
        { id: 27, name: 'Peptide Acne Gel' }]
      },
      {
        expanded: false, category_Name: "Olay", sub_Category: [{ id: 28, name: 'Natural White Ageless Aura' },
        { id: 29, name: 'Regenerist Micro-Sculping Cream' }, { id: 30, name: 'Total White' }, { id: 31, name: 'Natural White Light Night' }]
      },
      {
        expanded: false, category_Name: "Baby Bright", sub_Category: [{ id: 32, name: 'Duo Booter Dark Spot Serum & Aura Bright Gel Cream' },
        { id: 33, name: 'Ice Lemon Sherbet' }, { id: 34, name: 'Lime Sakura & Berries Bright Serum' }, { id: 35, name: 'Carrot Collagen Snail Firming Serum' }]
      },
      {
        expanded: false, category_Name: "Pond's", sub_Category: [{ id: 36, name: 'White Beauty Serum Cream Auraboot & Block' },
        { id: 37, name: 'White Beauty Serum Cream Auraboot & Clear' }, { id: 38, name: 'Whiteplus Serum Cream' }, { id: 39, name: 'Age Miracle' }]
      },
      {
        expanded: false, category_Name: "Garnier", sub_Category: [{ id: 40, name: 'Light Complete White Speed' },
        { id: 41, name: 'Sakura White' }, { id: 42, name: 'Sakura White Sleeping Mask' }, { id: 43, name: 'Light Complete White Speed Night' },
        { id: 44, name: 'Vitamin C Super Essence White Complete' },{ id: 45, name: 'Ageless White' }]
      },
      {
        expanded: false, category_Name: "ST.Ives", sub_Category: [{ id: 46, name: 'Bright & Radiabt Hydrating Gel' },
        { id: 47, name: 'Smooth & Glowing Pudding Cream' }, { id: 48, name: 'Renewing Soft Cream' }]
      },
      {
        expanded: false, category_Name: "Snail White", sub_Category: [{ id: 49, name: 'Snail White Serum' },
        { id: 50, name: 'Snail White Icy Mask' }, { id: 51, name: 'Snail White Gold Serum' }, { id: 52, name: 'Namu Life Day Cream ' }]
      },
      {
        expanded: false, category_Name: "Nivea", sub_Category: [{ id: 53, name: 'Nivea Sun Portect & White' },
        { id: 54, name: 'Nivea Men Extra White' }, { id: 55, name: 'Nivea Mrn Anti Oil + White' }]
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