 import {View, Text, FlatList, StyleSheet,ScrollView,TouchableOpacity,ActivityIndicator,Image } from 'react-native'
 import axios from 'axios';
 import React, {  useState,useEffect } from 'react';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Entypo from 'react-native-vector-icons/Entypo';
 import AntDesign from 'react-native-vector-icons/AntDesign'
//  import Landing from './Landing';






 const Productshow =({ searchQuery }) => {
   const [data, setData] = useState([]);
  // /
  const [filteredData, setFilteredData] = useState([]);
  // /


   useEffect(() => {
    getAPI();
   }, []);

  

   const baseURL = 'https://api.sampleapis.com'

  const getAPI = () =>{
         axios({
      method:"GET",
      url:`${baseURL}/coffee/hot`
     
     }).then(res =>{
      const responseData = res.data;
      setData(responseData);
      setFilteredData(responseData);
     } )
     .catch(err =>{
      console.log(err)
      })

   } 
// /
   useEffect(() => {
    // Filter data based on search query whenever searchQuery changes
    if (searchQuery.trim() === '') {
      // If search query is empty, show all data
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

// /
// const handleSearch = (searchQuery) => {
//     // Filter products based on search query
//     const filtered = data.filter(item=>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilter(filtered);
//   };

 
    
  return (
      <>
         <ScrollView horizontal style={styles.scroll}>
  
  
  
            { <FlatList
              data={data}
             renderItem={({ item }) => (
              <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText}>{item.title}</Text>
               </TouchableOpacity>
  
              )}
               keyExtractor={item => item.id.toString()}
               numColumns={30} // Number of columns in the grid
            columnWrapperStyle={styles.columnWrapper}
  
            /> }
  
          </ScrollView>

    <ScrollView contentContainerStyle={styles.cont} horizontal={false}>
     { 
   <FlatList
     data={filteredData}
    renderItem={({ item }) => (
       <TouchableOpacity style={styles.imgbut}>


       <View style={styles.rating}><Image source={{ uri: item.image }} style={styles.image} />
        
        <View style={styles.ratingContainer}>
         <Text style={styles.ratingText}><AntDesign style={styles.ratingone} name='star'/>4.5</Text>
       </View>
         </View>



        <Text style={styles.buttonimgtext}>{item.title}</Text>
         <Text style={styles.text}>With Sugar/Without Sugar</Text>
        <View style={styles.flex}>
         <Text style={styles.textone}><FontAwesome name='dollar' size={20}/>3.75
         </Text>
 <Entypo style={styles.plus} name='squared-plus' size={30}/>
 </View>
       </TouchableOpacity>
     )}
     keyExtractor={item => item.id.toString()}
     numColumns={2} // Number of columns in the grid
     columnWrapperStyle={styles.columnWrapper}
   />
 }


    </ScrollView>
      </>
    )


    

 };

    


 const styles = StyleSheet.create({
   

  
  
  
  
  
    button: {
          backgroundColor: 'white',
          paddingVertical: 1,
          paddingHorizontal: 40,
          margin: 10,
          borderRadius: 10,
          marginTop:85,
          height:39,
          alignContent:'center',
          justifyContent:'center'
        
        
        
        
        },
        buttonText: {
          color: 'black',
          fontSize: 13,
         fontWeight: '900',
        },
        columnWrapper: {
          justifyContent: 'space-between',
        },
        scroll:{
           height:180,
           marginTop:8
          
       
       },
        container: {
         flexGrow: 1,
         flexDirection: 'column',
         backgroundColor: '#f0f0f0',
         paddingVertical: 20,
        
      
       },
        image: {
          aspectRatio: 1, // Maintain aspect ratio
          marginVertical: 5,
         resizeMode:'cover', // Adjust image size to cover the container
         alignItems: 'center',
         justifyContent: 'center',
         marginLeft:10,
        marginRight:-10,
         marginTop:10,
         marginBottom:10,
         borderRadius: 15,
      
        
        },
       imgbut:{
        marginLeft:10,
         width:'45%',
         height:'auto',
         justifyContent: 'space-between',
         backgroundColor:'white',
         marginBottom:15,
         marginEnd:10,
         borderRadius: 25,
       },
       buttonimgtext:{
         color:'black',
         fontSize:20,
         marginLeft:15,
         fontWeight:'bold'
       },
       text:{
         fontSize:10,
         marginLeft:15,
         marginBottom:8
       },
       textone:{
         marginLeft:15,
         color:"green",
         marginBottom:8,
         fontSize:20
        
        
       },
       flex:{
         flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     // paddingHorizontal: 20,
     // paddingVertical: 10,
       },
       plus:{
         backgroundColor:'white',
         color:'#CC7722',
         marginRight:15,
         marginBottom:8
        
       },
       cont:{
         marginTop:10
       },
       rating:{
         position: 'relative',
       },
       ratingContainer: {
         position: 'absolute',
         top: 10, // Adjust the top position of the rating
         left: 10, // Adjust the right position of the rating
         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity of the background
         paddingHorizontal: 5,
         paddingVertical: 2,
         borderRadius: 5,
         borderRadius:15,
       },
       ratingText: {
         color: 'white',
         fontSize: 14,
         fontWeight: 'bold',
       
        
       },
       ratingone:{
         color:'#FFA500',
         justifyContent:'center',
         alignItems:'center'
       }

 });
 export default Productshow;