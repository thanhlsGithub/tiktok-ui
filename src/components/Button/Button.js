import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    medium = false,
    large = false,
    text = false,
    children,
    disabled = false,
    rounded = false,
    className,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps
}) {

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // remove event listeners when button disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        medium,
        text,
        disabled,
        rounded,

    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}> {children} </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp >
    );
}
Button.propTypes = {

    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.string,
    rounded: PropTypes.string,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}
export default Button;