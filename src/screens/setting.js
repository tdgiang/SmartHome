import React, { Component } from 'react';
import { 
    View,Image,StyleSheet,
   Dimensions,
   PanResponder
 } from 'react-native';
 import Slider from '@react-native-community/slider';
import {Block,Button,Text} from '../component/index';
 
const {width}=Dimensions.get('window');
const maxDeg=40;
 export default class setting extends Component {

    constructor(props){
        super(props);
        this.state={
            yStart:0,
            dy:0,
            deg:27,
            degPre:27
        }
    }


    UNSAFE_componentWillMount(){
        _panResponder=PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant:this._panResponderGrant.bind(this),
            onPanResponderMove: this._panResponderMove.bind(this),
             
        })
    }
    
    _panResponderMove(evt, gestureState){
     let {degPre}=this.state;
     
        this.setState({
            deg:degPre-parseInt( (evt.nativeEvent.pageY-this.state.yStart)*40/200)
        })
     
     
       
        
    }
    _panResponderGrant(evt, gestureState){
        this.setState({
            yStart:evt.nativeEvent.pageY,
            degPre:this.state.deg
        })
        


    }


      
     render() {
        const {txtBig,txtDeg,containerDeg,container,zoneDeg}=styles
        const {deg}=this.state
        const heightDeg=(deg/maxDeg)*150
         return (
             <Block  margin={[0,20,0,20]} >
                 <Block  flex={0.5}  row  center style={{alignItems:'flex-end'}}>
                     <Block   flex={1}  >
                         <Image

                            source={require('../img/icon/conditioner.png')}

                         />
                         <View   style={containerDeg} >
                            <Text style={txtBig} >{deg}</Text>
                            <Text style={txtDeg}   >°C</Text>
                         </View>
                         <Text gray  >Temperature</Text>
                     </Block>

                     <Block    center    >
                        <View  {..._panResponder.panHandlers} style={container} >
                        <View  style={[zoneDeg,{height:heightDeg}]}  >

                        </View>
                        </View>
                       
                     </Block>

                 </Block>
                 <Block flex={0.6}  padding={[30,0]}      > 
                 <Block  flex={0.2} row space={'between'} >
                        <Text h2>Direction</Text>
                        <Text h2>45°C</Text>
                    </Block>
                     <Slider
                        style={{width:width-40, height: 40}}
                        minimumValue={0}
                        maximumValue={100}
                        value={45}
                        minimumTrackTintColor="#E67E22"
                        maximumTrackTintColor="#000000"
                        thumbTintColor={'#E67E22'}
                    />
                    <Block flex={0.2} row space={'between'}   >
                        <Text  h2 >Speed</Text>
                        <Text h2 >12</Text>
                    </Block>
                     <Slider
                        style={{width:width-40, height: 40}}
                        minimumValue={0}
                        maximumValue={50}
                        value={12}
                        minimumTrackTintColor="#E67E22"
                        maximumTrackTintColor="#000000"
                        thumbTintColor={'#E67E22'}
                    />
                    
                    

                 </Block>
             </Block>
             
         );
     }
 }
 const styles=StyleSheet.create({
     txtBig:{
         fontSize:100,
         fontWeight:'bold'
     },
     txtDeg:{
         fontSize:50,
         height:80,
         fontWeight:'bold'
        
     },
     containerDeg:{
          flexDirection:'row',
         alignItems:'flex-end',
          
     },
     container:{
         width:60,
         height:150,
         backgroundColor:'#e6e6e6',
         borderRadius:3
     },
     zoneDeg:{
        width:60,
        backgroundColor:'#ff6600',
        borderRadius:3,
        position:'absolute',
        bottom:0,
        maxHeight:150,
        minHeight:10
     }

     
 })