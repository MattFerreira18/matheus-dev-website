import useCursor from '../../app/hooks/useCursor';

type SocialNetworkLinkProps = {
  link: string;
  icon: React.ReactElement;
};

function SocialNetworkLink({ icon, link }: SocialNetworkLinkProps) {
  const { onChangeCursorModel } = useCursor();

  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      onMouseEnter={() => onChangeCursorModel('hovered')}
      onMouseLeave={() => onChangeCursorModel()}
    >
      {icon}
    </a>
  );
}

export default SocialNetworkLink;
