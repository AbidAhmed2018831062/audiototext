import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Popularjobs, ScreenHeaderBtn, Welcome } from "../components/";
import { icons, images } from "../constants";
const Home=()=>{
    const router=useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen
            options={{
              headerLeft:()=>{
               return <ScreenHeaderBtn icon={icons.menu} dimension="60%"/>
              } ,
              headerRight:()=>{
                return <ScreenHeaderBtn icon={images.profile} dimension="100%"/>
              } 
            }}
            />
            <TouchableOpacity style={
                {
                   
                    border:2,
                    borderRadius:10,
                    borderColor:"red",
                    marginTop:20,
                    marginBottom:20,
                    backgroundColor: '#DDDDDD',
                    paddingTop:10,
                    paddingBottom:10,
                    alignItems:"center"
                }
            }>
                <Text style={{fontSize:18,fontWeight:"bold"}}>+Start Recording a new audio</Text>
            </TouchableOpacity>
            <Welcome/>
            <Popularjobs/>
        </SafeAreaView>
    )
}
export default Home;