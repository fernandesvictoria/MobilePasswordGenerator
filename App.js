import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Clipboard,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [password, setPassword] = useState("");

  const gerarSenha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(result);
  };

  const copiarSenha = async () => {
    if (password) {
      try {
        Clipboard.setString(password);
        Alert.alert("Sucesso!", "Senha copiada para a área de transferência");
      } catch (error) {
        Alert.alert("Erro", "Não foi possível copiar a senha");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GERADOR DE SENHAS</Text>
      <Image source={require("./assets/imagem.jpg")} style={styles.logo} />
      <Text style={styles.passwordText}>
        {password || "Sua senha aparecerá aqui"}
      </Text>
      <View style={styles.buttonsColumn}>
        <TouchableOpacity
          style={[styles.button, styles.generateButton]}
          onPress={gerarSenha}
        >
          <Text style={styles.buttonText}>Gerar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.copyButton,
            !password && { opacity: 0.5 },
          ]}
          onPress={copiarSenha}
          disabled={!password}
        >
          <Text style={styles.buttonText}>Copiar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#4F366F",
  },
  passwordText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#F2EBFF",
    backgroundColor: "#B9A4DE",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    textAlign: "center",
  },
  buttonsColumn: {
    width: "80%",
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  generateButton: {
    backgroundColor: "#62449A",
  },

  copyButton: {
    backgroundColor: "#62449A",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
