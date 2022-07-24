import { styled } from "../../styles";

export const Container = styled('header', {
  marginBottom: '$12',
  borderBottomStyle: 'solid',
  borderBottomColor: '$gray300',
  borderBottomWidth: '1px',
});

export const Wrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: '$8',
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: 'calc(1400px - $4)',
  padding: '$4',
});

