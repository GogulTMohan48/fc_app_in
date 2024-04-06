import { View, Text, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Productshow from './Productshow';







const data = [
    {key:'1', value:'Kochi',},
    {key:'2', value:'Thrissur'},
    
]


const Landing = () => {
// @
const [searchQuery, setSearchQuery] = useState('');

    // @
// } Landing =() => {

// /


  return (
  <>
     
         
            <View style={[{flexDirection:'row', backgroundColor:'#282828', marginTop:40}]} >
                <Text style={styles.first}>Location</Text>
                <View style={[{justifyContent:'space-evenly', marginVertical:10,marginLeft:260}]}>
                    
                <Image
            style={styles.image}
            source={{ uri:'https://www.pngall.com/wp-content/uploads/8/Woman-PNG.png' }}
          />                  
                    </View>
               
          
           
         
              
          
             </View>
      
           <View style={styles.select}>
           <SelectList
                // setSelected={(val) => setSelected(val)} 
                 data={data} 
                save="value"
                dropdownItemStyles={{marginHorizontal:10 ,}}
                 dropdownTextStyles={{color:'white'}}
                placeholder='Bilzen,Tanjungbalai'
                boxStyles={{backgroundColor:'#383838', marginHorizontal:150,marginLeft:10,marginTop:4}}
                inputStyles={{fontSize:15, color:'white'}}
                
            />

<View style={styles.search}>
      <View style={styles.searchContainer}>
<Ionicons style={styles.magnify} name='search-outline' size={30}/>
        <TextInput 
      
          style={styles.input}
          placeholder="Search coffee"
          placeholderTextColor="gray"
        // /
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        // /
          
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
<FontAwesome6 style={styles.fill} name='sliders'size={40} />
      </TouchableOpacity>
    </View>



           </View>


{/* image separating */}
<View style={styles.imageContainer}>
        <Image style={styles.imageof}
          source={require('./assets/Frame.png')}
        />
         </View>


        
                                        

<View  style={{height:460}} ><Productshow searchQuery={searchQuery}/></View>
                                        

          <View style={styles.footer}>
          
          <Entypo style={styles.btn}  name='home' size={30} />
          <TouchableOpacity style={styles.button}>
 </TouchableOpacity>
<Ionicons style={styles.btn} name='heart-half-sharp' size={30} />
      <TouchableOpacity style={styles.button}>

      </TouchableOpacity>
<FontAwesome6 style={styles.btn}  name='bag-shopping' size={30} />
      <TouchableOpacity style={styles.button}>
        {/* Add your button content here */}
      </TouchableOpacity>

{/* <TouchableOpacity style={styles.filterButton}> */}
<FontAwesome style={styles.btn}  name='bell' size={30} />
{/* </TouchableOpacity> */}

<TouchableOpacity style={styles.button}>
        {/* Add your button content here */}
      </TouchableOpacity>
     
          </View>
           
 
 
 </>
  

 

);
};

const styles = StyleSheet.create({
first: {
    fontSize: 13,
    marginLeft:20,
    marginTop:10,
    color:'white'
},
image:{
    width:40,
    height:30,
    marginTop:3,
    
},
select:{
    backgroundColor:'#282828',
    height:220,
    
    
},
footer:{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        bottom: 0,
        left: 0,
        right: 0,
        height:70,
        
        
        
    
        
},
btn:{
alignItems:'center',
marginLeft:30,
marginTop:15,
color:'gray',


},
magnify:{
  marginLeft:10,
  color:'white'
},
button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     paddingVertical: 15,
    backgroundColor: '#ffffff',
  

  },
  
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight:50
    
   

  },imageof:{
    
    position: 'absolute',
     alignItems:'center',
     justifyContent:'center',
     left: 10, // Adjust the position of the image horizontally
     width:370,
     height:170,
    // right:-50,
    // height: 120,
    //  width:950,
    // resizeMode: 'contain',
    zIndex: 2, // Ensure the image is above view1
    resizeMode: 'contain',
  
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:30,
    marginRight:12,
    marginLeft:11,
    backgroundColor:'#383838',
    height:50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft:10,
  },
  filterButton: {
    padding: 10,
    
    
  },
  fill: {
     color: 'white', // Customize the color of the filter icon
  backgroundColor:'#CC7722',
  borderRadius: 10,
    height:50,
   width:40,
  
  
   
  
    
  },
 

 

});
export default Landing;