import { useNavigate } from 'react-router-dom';

export const useCustomNavigation = () => {
  const navigate = useNavigate();

  return {
    goBack: () => navigate(-1),
    goToPath: (path: string) => navigate(path),
    goToPathWithState: (path: string, state: unknown) => navigate(path, { state }),
    refresh: () => navigate(0),
  };
};
