import { motion } from 'framer-motion';

import { Container, Title } from './styles';

function About() {
  return (
    <Container id="about">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '18rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Sobre Mim</Title>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          Sou um desenvolvedor e eterno estudante apaixonado por aprender e por
          ajudar os outros que estão ao meu redor. Sou estudante de Ciência da
          Computação na universidade UNIP. Atualmente sou desenvolvedor
          Front-End em uma grande empresa e faço alguns freelances fullstack com
          a stack Javascript. Apesar de utilizar essas ferramentas, sou aberto a
          aprender outras tecnologias e linguagens de programação.
        </motion.p>
      </motion.div>
    </Container>
  );
}

export default About;
