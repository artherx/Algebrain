import {useFonts} from 'expo-font'
const Arimo = ()=>{
    let [tipografia]=useFonts({
        'Arimo-Bold':require('@fonts/Arimo/static/Arimo-Bold.ttf'),
        'Arimo-BoldItalic':require('@fonts/Arimo/static/Arimo-BoldItalic.ttf'),
        'Arimo-Italic':require('@fonts/Arimo/static/Arimo-Italic.ttf'),
        'Arimo-Medium':require('@fonts/Arimo/static/Arimo-Medium.ttf'),
        'Arimo-MediumItalic':require('@fonts/Arimo/static/Arimo-MediumItalic.ttf'),
        'Arimo-Regular':require('@fonts/Arimo/static/Arimo-Regular.ttf'),
        'Arimo-SemiBold':require('@fonts/Arimo/static/Arimo-SemiBold.ttf'),
        'Arimo-SemiBoldItalic':require('@fonts/Arimo/static/Arimo-SemiBoldItalic.ttf'),
    })
}
export default Arimo