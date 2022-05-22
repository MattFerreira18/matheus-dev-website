
import useMouse from '../../../../app/hooks/useMouse';

type SocialButtonProps = {
  link: string;
  icon: React.ReactElement;
};

function SocialButton({ icon, link }: SocialButtonProps) {
  const { changeCursorModel } = useMouse();

  return (
    <a target="_blank" href={link} rel="noreferrer">
      <div
        onMouseEnter={() => changeCursorModel('hovered')}
        onMouseLeave={() => changeCursorModel()}
      >
        {icon}
      </div>
    </a>
  );
}

export default SocialButton;
