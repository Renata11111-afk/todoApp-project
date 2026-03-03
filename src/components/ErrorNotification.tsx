import cn from 'classnames';
import React, { useEffect } from 'react';
import { ErrorMessage } from '../types/ErrorMessage';

type Props = {
  error: ErrorMessage | null;
  onClick: () => void;
};

export const ErrorNotification: React.FC<Props> = ({ error, onClick }) => {
  useEffect(() => {
    if (error === ErrorMessage.Default) {
      return;
    }

    const timerId = setTimeout(() => onClick(), 3000);

    return () => clearTimeout(timerId);
  }, [error]);

  return (
    <>
      <div
        data-cy="ErrorNotification"
        className={cn(
          'notification',
          'is-danger',
          'is-light',
          'has-text-weight-normal',
          {
            hidden: !error,
          },
        )}
      >
        <button
          data-cy="HideErrorButton"
          type="button"
          className="delete"
          onClick={onClick}
        />
        {error}
      </div>
    </>
  );
};
