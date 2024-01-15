import { View, ScrollView,Text, StyleSheet, Image,Pressable,Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
    const handlePressProject1 = () => {
      Linking.openURL('https://www.instagram.com/febinugas/');
    };
    
  return(
  <ScrollView style={styles.container}>
    <Image
    source={require('./assets/febi.jpg')} 
    style={styles.profile} />

    <Text style={styles.title}>Mentari Febian Azizah </Text>
    <Text style={styles.paragraph}>
    Saya adalah siswi SMK Telkom Purwokerto yang tertarik di bidang IT terutama pada bagian UI/UX Designer .
    </Text>

    <Pressable style={({pressed}) => [styles.btnLogin, {backgroundColor: pressed ? '#113946' : '#BCA37F'}]} >
        <Text style={styles.btntext}>Contact Me</Text>
    </Pressable>
    <View style={{maxWidth:'100%'}}>
      <Text style={styles.title}>My Project</Text>

      <Image
      source={require('./assets/Instagram.png')}
      style={styles.project2}
      />
       <Text style={[styles.projectTitle,{marginTop: 20}]}></Text>
      <Image
      source={require('./assets/cloth1.png')}
      style={styles.project2}
      />
      
      <Text style={styles.projectTitle}>Landing Page</Text>
      <Text style={styles.projectCat}>UI/UX Design</Text>
      <Text style={[styles.projectCat,{marginTop: 10}]}> More:</Text>
      <Pressable
      style={({pressed}) => [styles.btnProject, {backgroundColor: pressed ? '#113946' : '#BCA37F'}]}
      onPress={handlePressProject1}> 

        
      <Text style={{color: '#ffffff'}}>Portofolio</Text>
      </Pressable>

      <Text style={{borderColor: 'black'}}></Text>
      
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF2D8',
    
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 156,
    height: 156,
    marginTop: 50,
    borderRadius: 100,
    marginLeft: '28%'
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#2F3540',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
    project2: {
    maxWidth: '100%',
    maxHeight: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
  projectCat: {

  },
  btnProject: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
});