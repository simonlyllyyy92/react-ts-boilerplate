import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('clicked')}>
      asdfasdf
    </ChildAsFC>
  );
};

export default Parent;
