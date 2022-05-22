import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import myPresentation from '../../../app/data/myPresentation';
import useMouse from '../../../app/hooks/useMouse';
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
  aboutMe: {
    EN: [
      "Working in the computers area to more than of 3 years, I'm a Software Developer and a eternal student passionate about learning new concepts and to help others people around me.",
      "I'm a student of Computer Science at UNIP university and currently I'm a Front-End Developer at Promobit and Fullstack Developer Freelancer",
    ],
    PTBR: [
      'Trabalhando na área da computação a mais de 3 anos, sou um Desenvolvedor de Software e eterno estudante apaixonado por aprender conceitos novos e de poder ajudar os outros que estão ao meu redor.',
      'Sou estudante de Ciência da Computação na universidade UNIP e atualmente sou Desenvoldedor Front-End na Promobit e Desenvolvedor Fullstack Freelancer.',
    ],
  },
};
const CURR_LANG = 'EN';

function HomePage() {
  const { changeCursorModel } = useMouse();
  const [canShowAboutMe, setCanShowAboutMe] = useState(false);

  function onNameClick() {
    setCanShowAboutMe((prevState) => !prevState);
  }

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
          onClick={onNameClick}
          onMouseEnter={() => changeCursorModel('hovered')}
          onMouseLeave={() => changeCursorModel()}
        >
          Matheus Ferreira
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          {PRESENTATION.job[CURR_LANG]}
        </motion.span>
      </TextWrapper>
      <Profile>
        {canShowAboutMe ? (
          <>
            {PRESENTATION.aboutMe[CURR_LANG].map((paragraph, index) => (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: index + 1.5 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </>
        ) : (
          <div>
            <motion.img
              src={PRESENTATION.profileImg}
              alt="Matheus Ferreira"
              animate={{ scale: 0.92 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </Profile>
    </Container>
  );
}

export default HomePage;
