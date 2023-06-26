import DeliveriedGraph from './src/components/DeliveriedGraph';
import BranchGraph from './src/components/BranchGraph';
import { View } from 'react-native'

export default function App() {

   const chartConfig= {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    backgroundGradientToOpacity: 0.5,
    color: (opacity= 1) => `rgba(5, 5, 5, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  }
    return (
      <View>
        <DeliveriedGraph chartConfig={chartConfig}/>
        <BranchGraph chartConfig={chartConfig}/> 
      </View>

    );
}

