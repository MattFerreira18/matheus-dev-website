import { motion } from 'framer-motion';
import Image from 'next/image';

import myPresentation from '../../../../app/data/myPresentation';
import { Container, Profile, TextWrapper } from './styles';

const PRESENTATION = {
  profileImg: myPresentation.profile,
  greetings: {
    EN: "Hi, I'm",
    PTBR: 'Olá, me chamo',
  },
  job: {
    EN: 'Fullstack Developer',
    PTBR: 'Desenvolvedor Fullstack',
  },
};
const CURR_LANG = 'PTBR';

function Presentation() {
  return (
    <Container>
      <TextWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Image
            src="/hello_emoji.gif"
            alt="Olá"
            width={25}
            height={25}
            className="hand-image"
          />
          <span>{PRESENTATION.greetings[CURR_LANG]}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Matheus Ferreira
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <span>{PRESENTATION.job[CURR_LANG]}</span>
        </motion.div>
      </TextWrapper>
      <Profile>
        <motion.img
          src={PRESENTATION.profileImg}
          alt="Matheus Ferreira"
          animate={{ scale: 0.92 }}
          transition={{ duration: 0.5 }}
        />
      </Profile>
    </Container>
  );
}

export default Presentation;
