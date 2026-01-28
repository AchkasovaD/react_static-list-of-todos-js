/* eslint-disable prettier/prettier */
// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo key={todo.user.id} user={todo.user} />
  </article>
);
