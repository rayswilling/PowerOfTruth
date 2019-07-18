import { StyleSheet } from 'react-native';
import { theme } from "../../index"
export const {padding, color, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20
    },

    wrapper:{
        padding: padding,
        flexDirection: "row",
        backgroundColor:"white"
    },

    img:{
        height: 75,
        width: 75,
        backgroundColor: color.light_grey,
        marginRight: padding * 1.5
    },

    BiasBarimg:{
        height: 30,
        width: 230,
        backgroundColor: color.light_grey,
        marginRight: 'auto'
    },

    info:{
        flex:1
    },

    title:{
        fontSize: fontSize.regular,
        fontFamily: fontFamily.bold,
        color: color.black,
    },

    bottom:{
        flexDirection: "row",
        flex:1,
        marginTop:padding * 2,
        lineHeight: 20,
    },
    
    politicalBiasStyle:{
        flexDirection: "row",
        flex:1,
        marginTop:padding * 4,
        lineHeight: 10,
        marginRight: 60,
    },

    source:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.main
    },

    date:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.grey,
        marginLeft: 'auto'
    },
});


export default styles;