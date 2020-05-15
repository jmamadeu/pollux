import styled from 'styled-components/native';

import {} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 15px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  /* background: rgb(204, 204, 204); */
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  color: #333;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.5 : 1)};
`;

export const User = styled.View`
  align-items: center;
  /* margin: 0 20px 30px; */

  /* border-bottom-width: 1px;
  border-color: #eee; */
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  margin-top: 5px;
  color: #999;
`;

export const ProfileButton = styled(RectButton)`
  margin: 10px;
  align-self: stretch;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 36px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
