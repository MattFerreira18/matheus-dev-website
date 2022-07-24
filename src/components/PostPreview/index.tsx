import { styled } from "../../ui/styles";

const Container = styled('a', {
  width: '100%'
})

const Article = styled('article', {
  borderRadius: '$4',
  padding: '$4',
  color: '$gray200',
  position: 'relative',

  '&:last-of-type': {
    '&:after': {
      height: 0,
      width: '98%',
      margin: '0 auto',
      borderColor: '$gray400',
      borderStyle: 'solid',
      borderWidth: '1px',
      position: 'absolute',
      bottom: -1,
      left: 0,
      right: 0,
      content: ''
    },
  },
  '&:hover': {
    color: '$gray100',
    background: '$gray400',
  },
  '& h2': {
    marginBottom: '$4'
  },
  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  '& p': {
    maxWidth: 1200,
  }
})

function PostPreview() {
  return (
    <Container href="/blog/post/hello-word">
      <Article>
        <h2>Rust is the future of Javascript infrastructure</h2>
        <div>
          <p>
            Why is Rust being used to replace parts of the JavaScript web
            ecosystem like minification (Terser), transpilation (Babel),
            formatting (Prettier), bundling (webpack), linting (ESLint),
            and more?
          </p>
          <time dateTime="2022-07-24">July 24</time>
        </div>
      </Article>
    </Container>
  )
}

export default PostPreview;
