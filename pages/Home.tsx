import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import pageStyle from './style'
import axios from 'axios'
import EachCard from './EachCard'

const Home = () => {
  const [dogData, setDogData] = useState()
  // let data;

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setDogData(response.data)
      })
  }, [])



  const cards: object[] = [
    {
      name: "soumya"
    },
    {
      name: "ranjan"
    },
    {
      name: "parhi"
    },
    {
      name: "lipu"
    },
    {
      name: "swati"
    },
    {
      name: "swati"
    },
    {
      name: "swati"
    },
    // {
    //   name: "swati"
    // },
  ]
  // console.log(cards)
  const eachCard: any = (value: any) => {
    // console.log("value ", value.item.name)
    return (
      <EachCard value={value} />
      // <View style={[pageStyle.eachCard, pageStyle.shadowPro]} >
      //   <Text style={{ fontSize: 25, color: "black" }} >value</Text>
      // </View>
    )
  }

  return (
    <View style={{ marginHorizontal: 10, height: "97%" }} >
      <Text style={pageStyle.text} >Scrollable cards</Text>

      {/* using scrollView create a hotizontal scroll */}

      {/* <ScrollView horizontal={true} style={pageStyle.scrollView}>
        {cards.map((value, index) => {
          return (
            <View style={[pageStyle.eachCard, pageStyle.shadowPro]} key={index} >
              <Text style={{ fontSize: 25, color: "black" }} >{value}</Text>
            </View>
          )
        })}
      </ScrollView> */}

      {/* using flat list more efficent in performance  */}
      <View style={{ height: "100%" }} >

        {dogData && <FlatList
          data={dogData}
          renderItem={eachCard}
        // style={{ height: "100%", backgroundColor: "black", margin: 4 }}
        // horizontal={true}
        />
        }
      </View>
    </View>
  )
}

export default Home