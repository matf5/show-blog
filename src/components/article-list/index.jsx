import { Divider } from 'antd';

const ArticleList = props => {
  const { list } = props;
  return (
    <ul className="article-list">
      {
        list.map(item => (
          <li key={item.id} className='article-list-item'>
            <Divider>
              <span>{item.title}</span>
              <span>{item.createdAt.slice(0, 10)}</span>
              <div
                className="article-detail"
                dangerouslySetInnerHTML={{ __html: item.content }}>
              </div>
            </Divider>
          </li>
        ))
      }
    </ul>
  )
}