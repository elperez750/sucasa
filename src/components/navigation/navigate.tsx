import { useNavigate } from 'react-router-dom';



type NavigationProps = {
    className: string;
    text: string;
    link?: string;
  };
  
export function Navigation({ className, text, link= "Contact"} : NavigationProps) {
    const navigate = useNavigate();
  
    const navigateContact = () => {
      navigate(`/${link}`);
    }

    return (
        <button type="button" className={className} onClick={navigateContact}>{text}</button>
      );
    }
    