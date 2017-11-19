import React from 'react';
import Helmet from 'react-helmet';
import ActualResultSection from 'components/ActualResultSection';

export default class ActualResultPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Product Introduction"
          meta={[
            { name: 'description', content: 'Product Introduction' },
          ]}
        />
        <ActualResultSection />
      </div>
    );
  }
}
