import { Text , View , Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
 
export default function BranchGraph(props) {
    
    const dataGraf2= [
        {
          name: "SP",
          population:Math.round(Math.random() * 10000,0),
          color: "red",
          legendFontColor: "#7f7f7f",
          legendFontSize: 15
        },
        {
          name: "RJ",
          population:Math.round(Math.random() * 10000,0),
          color: "blue",
          legendFontColor: "#7f7f7f",
          legendFontSize: 15
        },
        {
          name: "MG",
          population: Math.round(Math.random() * 10000,0),
          color: "yellow",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
      ];
    return (
        <View style={{ marginTop: 20 }}>
            <Text> SLA Filiais </Text>
            <PieChart
                data={dataGraf2}
                width={Dimensions.get("window").width-20}
                height={220}
                chartConfig={props.chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                absolute
            />
        </View>


    )
}