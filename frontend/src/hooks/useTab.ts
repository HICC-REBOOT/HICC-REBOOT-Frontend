import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface UseTabProps {
  initKey: string;
}

function useTab({ initKey }: UseTabProps) {
  const [activeKey, setActiveKey] = useState<string>(initKey);
  const location = useLocation();
  const navigate = useNavigate();

  const subDomainPath = location.pathname.split('/')[2] || initKey;

  useEffect(() => {
    navigate(subDomainPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initKey]);

  useEffect(() => {
    setActiveKey(subDomainPath);
  }, [location.pathname, subDomainPath]);

  const onChange = (key: string) => {
    navigate(key);
  };

  return {
    onChange,
    activeKey,
  };
}

export default useTab;
