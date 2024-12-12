import { ArrowLeft } from 'lucide-react';
import { useCustomNavigation } from '../../utils/navigation';

const BackButton = () => {
  const { goBack } = useCustomNavigation();

  return (
    <button onClick={goBack}>
      <ArrowLeft size="32" />
    </button>
  );
};

export default BackButton;
