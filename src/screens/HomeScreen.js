import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {Card} from 'native-base';

import likeListIcon from '../global/likeListIcon';
import userHomeIcon from '../global/userHomeListIcon';
import moment from 'moment';

const HomeScreen = ({navigation}) => {
  // navigation.setOptions({
  //   headerLeft: () => likeListIcon(navigation),
  //   headerRight: () => userHomeIcon(navigation),
  // });

  // const API_KEY = '7dd89414727643baaa66b6369bddf598';

  const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7dd89414727643baaa66b6369bddf598`;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  useEffect(() => getData(), []);
  const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) {
      
      setLoading(true);
      fetch(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=7dd89414727643baaa66b6369bddf598&offset=' +
          offset,
      )
        .then((response) => response.json())
        .then((responseJson) => {
          
          if (responseJson.articles.length > 0) {
            setOffset(offset + 1);
            setArticles([...articles, ...responseJson.articles]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.articles;
  //     })
  //     .then((articles) => {
  //       setArticles(articles);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="red" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  const ArticleItem = ({article}) => {
    const {title, description, url, urlToImage, publishedAt} = article;
    const time = moment(publishedAt || moment.now()).fromNow();

    return (
      <View style={styles.articleContainer}>
        <Card
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            backgroundColor: 'silver',
          }}>
          <TouchableOpacity>
            <Image
              style={styles.articleImage}
              source={{
                uri:
                  urlToImage != null
                    ? urlToImage
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
              }}
            />
          </TouchableOpacity>
          <Card
            style={{
              alignSelf: 'center',
              padding: 5,
              marginTop: -30,
              borderRadius: 10,
              width: '95%',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('News', {
                  newsData: url,
                })
              }>
              <Text style={styles.articleTitle}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.articleDescription}>{description}</Text>
            <View style={styles.articleReadmore}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('News', {
                    newsData: url,
                  })
                }
                style={{width: '50%', marginLeft: '3%', color: 'red'}}>
                <Text style={{color: 'red', fontSize: 17, marginLeft: 5}}>
                  Read More...
                </Text>
              </TouchableOpacity>

              <Image
                style={{marginLeft: '5%'}}
                source={require('../assets/image/ic_calendar.png')}
              />
              <Text
                style={{
                  width: '40%',
                  fontSize: 17,
                  marginLeft: 10,
                  color: 'green',
                }}>
                {time}
              </Text>
            </View>
          </Card>
        </Card>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        numColumns={1}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        data={articles}
        renderItem={({item}) => <ArticleItem article={item} />}
        ListFooterComponent={renderFooter}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleContainer: {
    borderWidth: 0,
    width: '100%',
    padding: 5,
  },
  articleImage: {
    height: 200,
  },
  articleTitle: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    color: '#581845',
    fontWeight: 'bold',
  },

  articleReadmore: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  articleDescription: {
    fontSize: 17,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'justify',
  },
  articleBtns: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
