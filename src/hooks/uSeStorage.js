import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = ()=>{
    //buscar os items salvos
    const getItem = async (key)=>{
      try {
        const passwords= await AsyncStorage.getItem(key);
        return JSON.parse(passwords) || [];
        
      } catch (error) {
        console.log("Erro ao buscar item", error);
        return [];
      }
    }

    //Guardar um item no storage
    const saveItem = async(key, value)=>{
        try {
            let passwords = await getItem(key)
            
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch (error) {
            console.log("Erro ao Guardar");
        }
    }

    //


}

export default useStorage;