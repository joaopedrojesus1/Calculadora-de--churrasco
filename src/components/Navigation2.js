import { createStackNavigator } from "@react-navigation/stack"
import PedidosScreen from "../pages/pedidos";
import ExtratoScreen from "./extrato";
import Header from "./header/header";

const Stack = createStackNavigator();

export default function Navigation2() {
  return (
    <Stack.Navigator screenOptions={({route, navigation})=> {
        return{
            header: () => <Header navigation={navigation} route={route} />
            }
        }}>
      <Stack.Screen name="Pedido" component={PedidosScreen} />
      <Stack.Screen name="Extrato" component={ExtratoScreen} options={({route, navigation})=> {
        return{
            header: () => <Header navigation={navigation} route={route} BackButton />
            }
        }} />
    </Stack.Navigator>
  );
}