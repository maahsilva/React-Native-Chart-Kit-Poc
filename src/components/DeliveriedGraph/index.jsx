import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function DeliveriedGraph(props) {
    const dataGraf1={
        labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
        datasets: [
            {
                data: [
                    Math.round(Math.random() * 100,2),
                    Math.round(Math.random() * 100,2),
                    Math.round(Math.random() * 100,2),
                    Math.round(Math.random() * 100,2),
                    Math.round(Math.random() * 100,2),
                    Math.round(Math.random() * 100,2),
                ]
            }
        ]
    };

    return (
        <View style={{ marginTop: 40, }}>
            <Text>SLA ENTREGAS</Text>
            <LineChart
            data={dataGraf1}
            width={Dimensions.get("window").width-20} // fromreact-native
            height={220}
            yAxisLabel="%"
            yAxisInterval={1} // opcional, padrão 1
            chartConfig={props.chartConfig}
            bezier//CURVA ENTRE OS PONTOS
            style={{
            marginVertical: 5,
            padding:10,
            borderRadius: 5
            }}
            />
      </View>
    )
}