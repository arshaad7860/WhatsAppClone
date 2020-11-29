import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { withAuthenticator } from "aws-amplify-react-native";

import Amplify, { Auth,API,graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

import {getUser} from "./graphql/queries"
import {createUser} from "./graphql/mutations"

const randomImages=[

  "https://i.pinimg.com/736x/8e/ac/0c/8eac0c1978889d236d3a2107fca9bc9b.jpg",
  "data:image/jpeg;base64,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",
  "https://1.bp.blogspot.com/-NiNaLUVIuaE/XdP7uYpCD_I/AAAAAAAAbu8/j1n9UFpof_QqchUqFqJO2ZNcu6wRToLpwCLcBGAsYHQ/s1600/24%2BHearts%2BDP%2BProfile%2BPictures%2Bcollection%2B2019%2B-facebookdp%2B%252817%2529.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnm7qaETgFaoTabNbopUVHpsBcqASi5M1IQ&usqp=CAU",
"https://www.unigreet.com/wp-content/uploads/2020/04/Sweet-girl-dp.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnub98gyoXNvkPnyOWxTE1zzAQiP1aeYceGA&usqp=CAU"
,"https://cdn.cp.adobe.io/content/2/rendition/03c33e07-3723-4789-847a-b3e0d6b05187/artwork/70a1734f-40dc-40c9-b693-5a3b6df7a9c7/version/0/format/jpg/dimension/width/size/300",
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage =()=>{
    return randomImages[Math.floor(Math.random()*randomImages.length)]
  }

  //run snippet only when app 1st mounted
  useEffect(() => {
    const fetchUser = async () => {
      //get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      if (userInfo) {
        
        //get user from backend with usersub from the auth we received above
        const userData= await API.graphql(
          graphqlOperation(
            getUser,
            {id:userInfo.attributes.sub}
            )
          )

          if(userData.data.getUser){
            console.log("user already registered in database");
            return;
          }

          const newUser = {
            id:userInfo.attributes.sub,
            name:userInfo.username,
            imageUri:getRandomImage(),
            status: 'hey im using whatsapp clone',
          }

          //send new user to api
          await API.graphql(graphqlOperation(
            createUser,
            {
              input:newUser
            }
          ))

      }
      //if no userid create one
    };
    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
