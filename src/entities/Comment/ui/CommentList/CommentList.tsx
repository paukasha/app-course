import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentICard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[],
    isLoading?: boolean
}

export const CommentList = ({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard

                            key={comment.id}
                            className={cls.comment}
                            comment={comment}
                        />
                    ))
                    : <Text title={t('Комментарии отсутствуют')} />

            }
        </div>
    );
};
