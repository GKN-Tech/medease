import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../Configs/FirebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'

export default function Slider() {

    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
      GetSliderList();
    }, [])
    

    const GetSliderList=async()=>{
        setSliderList([]);
        const q = query(collection(db, 'medication'))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setSliderList(prev=>[...prev, doc.data()]);
        });
    }

  return (
    <View>
      <Text style={{
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        padding: 20,
        paddingLeft: 20, 
        marginRight: 20
      }}>Your Medications</Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        style={{
            paddingLeft: 20
        }}
        renderItem={({item, index})=>
            <Image source={{uri:item.image}}
            style={{
                width: 300,
                height: 190,
                borderRadius:15,
                marginBottom: 15
            }}
            />        
        }
      />
      <View style={{
        height: 100
      }}>
        <Text style={{
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        padding: 20,
        paddingLeft: 20, 
        marginRight: 20
      }}>Add Medications</Text>
      </View>
    </View>
  )
}