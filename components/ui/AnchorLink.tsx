
import { useCallback } from 'react';
import { Themed } from '@theme-ui/mdx'

/**
 * Anchor link with smooth scrolling
 */
const AnchorLink: React.FC<any> = ({ href, children, ...props }) => {
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
    <Themed.a {...props} onClick={handleClick}>{children}</Themed.a>
  )
}

export default AnchorLink
