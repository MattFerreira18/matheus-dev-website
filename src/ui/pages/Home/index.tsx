import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { CURR_LANG } from '../../../app/constants/language';
import PRESENTATION from '../../../app/constants/presentation';
import useCursor from '../../../app/hooks/useCursor';
import Seo from '../../components/Seo';
import { Container, Profile, TextWrapper } from './styles';

function HomePage() {
  const { onChangeCursorModel } = useCursor();
  const [canShowAboutMe, setCanShowAboutMe] = useState(false);

  function onNameClick() {
    setCanShowAboutMe((prevState) => !prevState);
  }

  return (
    <>
      <Seo
        titleSuffix="Home"
        description={PRESENTATION.aboutMe[CURR_LANG][0]}
      />
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
            onMouseEnter={() => onChangeCursorModel('hovered')}
            onMouseLeave={() => onChangeCursorModel()}
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
    </>
  );
}

export default HomePage;
