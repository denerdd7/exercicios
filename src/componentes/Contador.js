import React, {useState} from 'react'
import{Text, Button} from 'react-native'
import Padrao from '../estilo/Padrao';

const Contador = () =>{
    const [numero, setNumero] = useState(0)
    const incremento = () => setNumero(numero +1)
    const decremento = () => setNumero(numero -1)
    return(
        <>
            <Text style={Padrao.txtG}>{numero}</Text>
            <Button title="+" onPress={incremento}/>
            <Button title="-" onPress={decremento}/>
        </>
    )
}

export default Contador;