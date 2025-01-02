import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line max-len
import { HTMLAttributeAnchorTarget } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from 'entities/Article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListitemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            className={cls.card}
            view={view}
            key={index}
        />
    ));

export const ArticleList = (props: ArticleListProps) => {
    const {
        virtualized = true,
        className, articles, view = ArticleView.SMALL, isLoading, target,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemPerRow = isBig ? 1 : 3;

    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemPerRow);

    const rowRenderer = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemPerRow;
        const toIndex = Math.min(fromIndex + itemPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(<ArticleListItem
                className={cls.card}
                article={articles[index]}
                view={view}
                target={target}
                key={`str-${i}`}
            />);
        }
        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {t('Ничего не найдено')}
            </div>
        );
    }

    return (
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {
                ({
                    height,
                    width,
                    registerChild,
                    onChildScroll, isScrolling, scrollTop,
                }) => (
                    <div
                        ref={registerChild}
                        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    >
                        {virtualized ? (
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                scrollTop={scrollTop}
                            />
                        ) : (
                            articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    target={target}
                                    key={item.id}
                                    className={cls.card}
                                />
                            ))
                        )}

                        {isLoading && getSkeletons(view)}
                    </div>

                )
            }

        </WindowScroller>
    );
};
