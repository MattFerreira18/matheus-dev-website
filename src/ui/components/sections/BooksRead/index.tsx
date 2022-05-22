import { motion } from 'framer-motion';

import booksRead from '../../../../app/data/booksRead';
import BookRead from './BookRead';
import { Container, Title, Wrapper } from './styles';

function BooksRead() {
  return (
    <Container id="books">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '10rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Livros que recomendo</Title>
        </motion.div>
        <Wrapper>
          {booksRead.map((bookRead) => (
            <BookRead key={bookRead.name} {...bookRead} />
          ))}
        </Wrapper>
      </motion.div>
    </Container>
  );
}

export default BooksRead;
