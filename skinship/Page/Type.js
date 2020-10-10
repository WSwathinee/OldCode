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
        expanded: false, category_Name: "Cleansers", sub_Category: [{ id: 1, name: 'Ganier Micellar Cleansing Water For Oily Acne-prone' }, { id: 2, name: 'Clean & Clear Essentials Foaming Facial Wash' }, { id: 3, name: 'DR.Montri Facial Foam Acne&Oil Control' },
        { id: 4, name: 'Nivea Pearl White Caring Whip' }, { id: 5, name: 'Acne Aid ' }, { id: 6, name: 'Ponds White Besuty Daily' }, { id: 7, name: 'Smoot E Baby Face Foam' }]
      },

      {
        expanded: false, category_Name: "Toners", sub_Category: [{ id: 8, name: 'Smooth E ance Clear Whitening Toner' }, { id: 9, name: 'Provamed Acniclear' }, { id: 10, name: 'Nivea Refreshing' },
        { id: 11, name: 'Clean & Clear Essential Control Toner' }]
      },

      {
        expanded: false, category_Name: "Acne & Blemish Treatments", sub_Category: [{ id: 12, name: 'Moringa Repair Gel' }, { id: 13, name: 'Skinsista Vit C Extra Bright Booster' },
        { id: 14, name: 'Clear Nose Acne Care Solution Serum' }, { id: 15, name: 'Rojukiss Perfect Poreless' }]
      },

      {
        expanded: false, category_Name: "Eye Cream & Treatments", sub_Category: [{ id: 16, name: 'Eye for Face Rojukiss' },
        { id: 17, name: 'Smooto Vita Beery Bright' }, { id: 18, name: 'Ganier Light Brightening Eye Roll-On' }, { id: 19, name: 'Snowgirl Peptide Eye Cream' }]
      },

      {
        expanded: false, category_Name: "Serum, Essence & Ampoules", sub_Category: [{ id: 20, name: 'Collagen Serum + Vitamin C' },
        { id: 21, name: 'MoonA House Hyaluron Vit C Essence Serum' }, { id: 22, name: 'Fuji Honey Aloe Soothing Serum' }, { id: 23, name: 'Paktr Oli Control Serum' }]
      },
      {
        expanded: false, category_Name: "Moisturizers", sub_Category: [{ id: 24, name: 'Snowgirl Squalane & Plankton Booster' },
        { id: 25, name: 'Plankton Babyface Gel' }, { id: 26, name: 'Nami Im Fresh Jeju Vitamin C Brightening Gel' }, { id: 27, name: 'Hya Poreless Rojukiss' }]
      },
      {
        expanded: false, category_Name: "Sheet Masks", sub_Category: [{ id: 28, name: 'Ganier Serum Mask Hydra Bomb Purifying' },
        { id: 29, name: 'Hada Labo Super Hyaluronic Acid Hydrating Mask' }, { id: 30, name: 'Smooto Lemon-C Snail Ance' }, { id: 31, name: 'Serum Sheet Mask BabyBright' }]
      },
      {
        expanded: false, category_Name: "Wash-Off Masks", sub_Category: [{ id: 362, name: 'BK Acne Mask' },
        { id: 33, name: 'Smooto Tomato Alo Snail Jelly Scrub' }, { id: 34, name: 'Tony moly Tomatox Magic White' }, { id: 35, name: 'Srichand Original Powder Mask' }]
      },
      {
        expanded: false, category_Name: "Leave-On & Sleeping Masks", sub_Category: [{ id: 36, name: 'Namu Life Snail White Icy Mask' },
        { id: 37, name: 'Ganier Ageless White Night Concentrated' }, { id: 38, name: 'Smooto Tomato Collagen White & Smooth Mask' }, { id: 39, name: 'Smooto Powwe C Whitening Sleeping Mask' }]
      },
      {
        expanded: false, category_Name: "Facial SunScreen", sub_Category: [{ id: 40, name: 'Namu Life Snail White Day Cream SPF20 PA+++' },
        { id: 41, name: 'Jula Harb DD cream water melon' }, { id: 42, name: 'KA UV Whitening Soft Cream' }, { id: 43, name: 'Olay Natural White' }]
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