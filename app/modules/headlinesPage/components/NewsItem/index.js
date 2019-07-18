import React from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import moment from "moment";

import {Actions} from 'react-native-router-flux'

import styles from "./styles"


const NewsItem = ({article}) => {
    const {title, url, source, publishedAt} = article;
    
    return (
        <TouchableHighlight
            style={styles.container}
            underlayColor={"transparent"}
            onPress={() => Actions.Article({article, title})}>
            <View style={[styles.wrapper]}>

                {
                    article.urlToImage && <Image source={{uri: article.urlToImage}} style={styles.img}/>
                }

                <View style={[styles.info]}>
                    <Text style={[styles.title]}>
                        {title}
                    </Text>

                    <View style={[styles.bottom]}>
                        <Text style={[styles.source]} onPress={() => Actions.Source({source, title: source.name})}>
                            {source.name}{"\n"}
                            {"\n"}
                            <Text style={[styles.politicalBias]} onPress={() => Actions.Bias({article, title: article.politicalBias})}> 
                            Political Bias: {article.politicalBias}  
                            {"\n"}
                            {"\n"}
                            {source.name == "Daily Mail"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/DailyMail.png')} /> :null}
                            {source.name == "BBC News"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/BBC.png')} /> :null}
                            {source.name == "CNN"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/CNN.png')} /> :null}
                            {source.name == "The Huffington Post"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/HuffingtonPost.png')} /> :null}
                            {source.name == "Independent"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/TheIndependent.png')} /> :null}
                            {source.name == "The Economist"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/TheEconomist.png')} /> :null}
                            {source.name == "Al Jazeera English"? <Image style={[styles.BiasBarimg]} source={require('/Users/student/Projects/week11/ThePowerofTruth2/PowerOfTruth/assets/images/spectrums/AlJazeera.png')} /> :null}
                            </Text>
                        </Text>
                        <Text style={[styles.date]}>
                            {moment(publishedAt).fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}
export default NewsItem;
