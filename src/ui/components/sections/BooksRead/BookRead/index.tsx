import { motion } from 'framer-motion';

import { Container, Title } from './styles';

type BookReadProps = {
  name: string;
  author: string;
  launchDate: string;
};

function BookRead({ name, author, launchDate }: BookReadProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
        <Container>
          <Title>{name}</Title>
          <div>
            <span>{author}</span>
            <time dateTime={launchDate}>
              {new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }).format(new Date(launchDate))}
            </time>
          </div>
        </Container>
      </motion.div>
    </motion.div>
  );
}

export default BookRead;
