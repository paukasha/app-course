import { useTranslation } from 'react-i18next';
import {
    ImgHTMLAttributes, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement,
    errorFallback?: ReactElement
}

export const AppImage = (props: AppImageProps) => {
    const { t } = useTranslation();
    const {
        className, src, alt = 'image', fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(true);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img className={className} src={src} alt={alt} {...otherProps} />

    );
};
