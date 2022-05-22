import useMouse from '../../app/hooks/useMouse';

type SocialNetworkLinkProps = {
  link: string;
  icon: React.ReactElement;
};

function SocialNetworkLink({ icon, link }: SocialNetworkLinkProps) {
  const { changeCursorModel } = useMouse();

  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      onMouseEnter={() => changeCursorModel('hovered')}
      onMouseLeave={() => changeCursorModel()}
    >
      {icon}
    </a>
  );
}

export default SocialNetworkLink;
