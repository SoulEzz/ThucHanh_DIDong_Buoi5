import * as React from 'react';
import { Text, View,Image,Button,TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Phone1({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.img1} >
            <Image  source={require('../assets/mobi_1.png')}/>
        </View>
        
        <View style={{marginLeft:'20px'}}>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>

        <View style={[styles.star,{flexDirection:'row'}]} >
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/star_1.png')}/>
                <Image source={require('../assets/star_1.png')}/>
                <Image source={require('../assets/star_1.png')}/>
                <Image source={require('../assets/star_1.png')}/>
                <Image source={require('../assets/star_1.png')}/>
            </View>
            <View style={{marginLeft:'20px'}}>
                <Text>(Xem 828 đánh giá)</Text>
            </View>
        </View>

        <View style={{flexDirection:'row', marginLeft:'20px',marginTop:'10px'}} >
              <Text style={{fontWeight:'bold', fontSize:'15px'}}>1.790.000 đ</Text>
              <Text style={{textDecorationLine:'line-through', marginLeft:'50px'}}> 1.790.000 đ </Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:'20px',marginTop:'10px'}}>
          <Text style={{color:'red',fontWeight:'bold',fontSize:'10px',marginTop:'3px'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image style={{marginLeft:'10px'}} source={require('../assets/mark.png')}/>
        </View>

        
            <TouchableOpacity style={[styles.btn1,{flexDirection:'row'}]}>
              <Text style={{marginLeft:'70px'}}> 4 MÀU-CHỌN MÀU </Text>
              <Image style={{marginLeft:'50px'}} source={require('../assets/Vector.png')} />
            </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} >
            <Text style={{color:'white', fontWeight:'bold',fontSize:'20px'}}>CHỌN MUA</Text>

        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'500px',

  },
  img1:{
    marginLeft:'30px',
    padding:'10px',
    
  },
  star:{
    marginLeft:'20px',
    marginTop:'10px'
  },
  btn1:{
    backgroundColor:'#E5E5E5',
    margin:'10px',
    alignItems:'center',
    padding:'10px',
    borderRadius:'20px',
    border:'1px solid grey',
    
  },
  btn2:{
    backgroundColor:'red',
    alignItems:'center',
    padding:'15px',
    marginTop:'40px',
    marginLeft:'20px',
    marginRight:'20px',
    marginBottom:'20px',
    borderRadius:'10px'
  }
});
