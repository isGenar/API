import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '耿鬼出品';
  const currentYear = new Date().getFullYear();
  const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={
        <>
          {currentYear} {defaultMessage} | {' '}
          <a href={beianUrl} target="_blank" rel="noreferrer">
          </a>
        </>
      }
      links={[
        {
          key: 'Easy API',
          title: 'Easy API',
          href: 'https://github.com/isGenar/esayAPI',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/isGenar/esayAPI',
          blankTarget: true,
        },
        {
          key: '简单 API ',
          title: '简单 API',
          href: 'https://github.com/isGenar/esayAPI',
          blankTarget: true,
        },
      ]}
    >
      <span>
        <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
        </a>
      </span>
    </DefaultFooter>
  );
};
export default Footer;
