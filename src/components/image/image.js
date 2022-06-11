import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ className, fallback: customFallback = images.noImage, src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback)
    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alr={alt} {...props}
        onError={handleError} />
})

Image.propTypes = {
    className: PropTypes.string,
    fallback: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,

}
export default Image;  