import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, FlatList, ActivityIndicator } from 'react-native';
import { AsyncStorage } from 'react-native';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

import api from '../../services/api';

export default function Main({ navigation }) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const usersStorage = await AsyncStorage.getItem('users');

      if (usersStorage) {
        setUsers(JSON.parse(usersStorage));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    })();
  }, [users]);

  async function handleAddUser() {
    try {
      setLoading(true);

      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      setUsers([...users, data]);
      setNewUser('');
      setLoading(false);

      Keyboard.dismiss();
    } catch (error) {
      alert('O usuário não existe!');
    }
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Adicionar usuário'
          onChangeText={(text) => setNewUser(text)}
          value={newUser}
          returnKeyType='send'
          onSubmitEditing={handleAddUser}
        />
        <SubmitButton loading={loading} onPress={handleAddUser}>
          {loading ? (
            <ActivityIndicator color='#fff' />
          ) : (
            <MaterialIcons name='add' size={24} color='#fff' />
          )}
        </SubmitButton>
      </Form>

      <FlatList
        data={users}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.login}
        renderItem={({ item: user }) => (
          <>
            <User>
              <Avatar source={{ uri: user.avatar }} />
              <Name>{user.name}</Name>
              <Bio> {user.bio} </Bio>
              <ProfileButton
                onPress={() => navigation.navigate('User', { user })}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          </>
        )}
      />
    </Container>
  );
}
