import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default function User({ route, navigation }) {
  const [user, _] = useState(route.params.user);
  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      navigation.setOptions({ title: user.name });

      const response = await api.get(`/users/${user.login}/starred`);

      setStars(response.data);

      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio> {user.bio} </Bio>
      </Header>

      {loading ? (
        <Container>
          <ActivityIndicator color='#999' size='large' />
        </Container>
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
          data={stars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: star }) => (
            <Starred>
              <OwnerAvatar source={{ uri: star.owner.avatar_url }} />
              <Info>
                <Title>{star.name}</Title>
                <Author> {star.owner.login} </Author>
              </Info>
            </Starred>
          )}
        />
      )}
    </Container>
  );
}
