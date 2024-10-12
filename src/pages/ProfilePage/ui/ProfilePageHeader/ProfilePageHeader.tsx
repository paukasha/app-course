import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDiaptch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.editBtn}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            )
                : (
                    <div className={cls.btns}>
                        <Button
                            theme={ThemeButton.OUTLINE_RED}
                            className={cls.editBtn}
                            onClick={onCancelEdit}
                        >
                            {t('Отмена')}
                        </Button>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            className={cls.editBtn}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </div>
                )}
        </div>
    );
};
