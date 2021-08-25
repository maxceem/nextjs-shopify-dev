import NextLink, { LinkProps } from 'next/link';
import { FC, useCallback } from 'react';

/**
 * NextLink component which supports smooth scrolling
 */
const Link: FC<LinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  ...anchorProps
}) => {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination && typeof destination.scrollIntoView === 'function') {
          destination.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    },
    [href]
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        tabIndex={0}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
