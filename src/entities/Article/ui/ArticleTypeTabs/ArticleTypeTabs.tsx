import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useCallback, useMemo} from 'react';
import {TabItem, Tabs} from 'shared/ui/Tabs/Tabs';
import {ArticleType} from '../../model/consts/articleConsts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType,
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typetabs = useMemo<TabItem[]>(() => [
        { value: ArticleType.ALL, content: t('Все') },
        { value: ArticleType.IT, content: t('Айти') },
        { value: ArticleType.SCIENCE, content: t('Наука') },
        { value: ArticleType.ECONOMICS, content: t('Экономика') },
    ], [t]);

    const onChangeClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typetabs}
            value={value}
            onTabClick={onChangeClick}
            className={classNames('', {}, [className])}
        />
    );
};
