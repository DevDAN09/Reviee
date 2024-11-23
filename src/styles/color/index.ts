export type ColorKeys =
  | 'white'
  | 'text'
  | 'secondary_text'
  | 'line'
  | 'background'
  | 'box_border'
  | 'primary'
  | 'sub_1'
  | 'sub_2'
  | 'profile_background'
  | 'profile_text_background'
  | 'profile_text'
  | 'button_background';

export type Colors = Record<ColorKeys, string>;

const colors: Colors = {
  white: '#FFFFFF',
  text: '#1F1F1F',
  secondary_text: '#767676',
  line: '#EFF2F5',
  background: '#F3F3F3',
  box_border: '#CFD6E4',
  sub_1: '#FF6868',
  sub_2: '#688BFF',
  profile_background: '#FCF3CC',
  profile_text_background: '#F7CC65',
  profile_text: '#877C5C',
  primary: '#12B886',
  button_background: '#000000',
};

export default colors;
