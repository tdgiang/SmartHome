import React, { Component } from 'react';
import { 
    View,StyleSheet,ScrollView,Image,TouchableOpacity
 } from 'react-native';
 
import {Block,Button,Text} from '../component/index';
import data from '../constants/data';
import { Path } from 'react-native-svg'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

 export default class index extends Component {

    renderItem(item){
         
        return(
            <TouchableOpacity 
                key={item.id} 
                style={styles.containerItem} 
                onPress={()=> this.props.navigation.push("setting")}
            > 
                <Image
                    source={item.img}
                    style={styles.imgIcon}
                    />  
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
      
     render() {
        const dataChart = [15,28,25,40,45]
        const Line = ({ line }) => (
                <Path
                    key={'line'}
                    d={line}
                    stroke={'#ff6600'}
                    strokeWidth={3}
                    fill={'none'}
                />
        )
        return (
             <ScrollView style={{paddingHorizontal:20,marginTop:20}} >
                 <Text gray >Hello</Text>
                 <Text h2 bold>John Doe</Text>
                 <Block   >
                    <Block  flex={0.2} row center    >
                        <Block  flex={1}  row   style={{alignItems:'flex-end'}} >
                            <Text style={styles.txtBig} >34</Text>
                            <Text style={styles.txtDeg} bold >°C </Text>
                        </Block>
                        <Block flex={1}  middle  >
                            <Text  gray>Humidity</Text>
                            <View  style={styles.containerChart} >
                                <AreaChart
                                    style={{ height: 100,width:100}}
                                    data={dataChart}
                                    contentInset={{ top: 10,bottom:20 }}
                                    curve={shape.curveNatural}
                                
                                >
                                    <Line/>
                                </AreaChart>     
                            </View>    
                        </Block>
                               
                    </Block>
                     <Block row flex={0.8}   wrap space={'around'}   >
                        {data.map(e=>this.renderItem(e))}
                        
                          
                     </Block>
                 </Block>
             </ScrollView>
  
 
         );
     }
 }

const styles=StyleSheet.create({
    txtBig:{
        fontSize:100
    },  
    txtDeg:{
        fontSize:50,
        height:80
        
    },
    containerItem:{
        width:150,
        height:150,
        backgroundColor:'rgb(230,230,230)',
        borderRadius:75,
        marginBottom:15,
        justifyContent:'center',
        alignItems:'center'
    },
    imgIcon:{
        width:50,
        height:50
    },
    containerChart:{
      
        alignItems:'center'
    }
   
})

